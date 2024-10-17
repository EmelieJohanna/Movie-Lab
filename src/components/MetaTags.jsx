import { Helmet } from "react-helmet-async";

const MetaTags = ({ title, description, image, url }) => {
  const defaultTitle = "Movie Lab";
  const defaultDescription = "Discover and explore movies at Movie Lab.";
  const defaultImage = "https://movie-lab-ruddy.vercel.app/preview.webp";
  const defaultUrl = "https://movie-lab-ruddy.vercel.app";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title ? `${title} | Movie Lab` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default MetaTags;
