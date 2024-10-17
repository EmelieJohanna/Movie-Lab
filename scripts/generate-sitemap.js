import axios from "axios";
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import dotenv from "dotenv";

dotenv.config();

const generateSitemap = async () => {
  try {
    const API_KEY = process.env.VITE_TMDB_API_KEY;
    const BASE_URL = "https://movie-lab-ruddy.vercel.app";

    // Fetch popular movies
    const movieIds = [];
    const totalPages = 5; // Number of pages to fetch

    for (let page = 1; page <= totalPages; page++) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      const movies = response.data.results;
      movies.forEach((movie) => {
        movieIds.push(movie.id);
      });
    }

    // Create a sitemap stream
    const sitemap = new SitemapStream({ hostname: BASE_URL });
    const writeStream = createWriteStream("./public/sitemap.xml");
    sitemap.pipe(writeStream);

    // Add static pages
    const staticLinks = [
      { url: "/", changefreq: "daily", priority: 1.0 },
      { url: "/favorites", changefreq: "daily", priority: 0.8 },
      { url: "/search", changefreq: "daily", priority: 0.8 },
    ];

    staticLinks.forEach((link) => sitemap.write(link));

    // Add dynamic movie detail pages
    movieIds.forEach((id) => {
      sitemap.write({
        url: `/movie/${id}`,
        changefreq: "weekly",
        priority: 0.7,
      });
    });

    // End the sitemap stream
    sitemap.end();

    // Wait until the sitemap is fully written
    await streamToPromise(sitemap);

    writeStream.on("finish", () => {
      console.log("Sitemap generated successfully");
    });

    writeStream.on("error", (err) => {
      console.error("Error writing sitemap:", err);
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateSitemap();
