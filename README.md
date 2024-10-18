# Movie Lab

![Logo](https://movie-lab-ruddy.vercel.app/preview.webp)

**Movie Lab** is a feature-rich web application that allows users to search for movies, view detailed information, and manage their favorite selections. Built with modern technologies, it emphasizes SEO optimization, user tracking, and seamless user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Advanced Techniques](#advanced-techniques)
  - [SEO Enhancements](#seo-enhancements)
  - [State Management with Redux Toolkit](#state-management-with-redux-toolkit)
  - [Google Analytics & Tag Manager Integration](#google-analytics--tag-manager-integration)
- [Environment Variables](#environment-variables)


## Features

- **Search Movies:** Real-time search with dropdown suggestions.
- **Movie Details:** Detailed view with information like actors, release year, and ratings.
- **Favorites Management:** Add or remove movies from your favorites list.
- **SEO Optimization:** Dynamic meta tags, sitemap generation, and robots.txt management.
- **Analytics Tracking:** Google Analytics and Tag Manager integration for user interaction tracking.
- **Responsive Design:** Optimized for various devices and screen sizes.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [React Router](https://reactrouter.com/)
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - [React Helmet Async](https://github.com/staylor/react-helmet-async)
  - [React GA4](https://github.com/react-ga/react-ga4)
  - [React GTM Module](https://github.com/alinemorelli/react-gtm-module)
  
- **Backend:**
  - [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)
  
- **Build Tools:**
  - [Node.js](https://nodejs.org/)
  - [npm](https://www.npmjs.com/)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/movie-lab.git
   cd movie-lab
2. **Install Dependencies:**
   ```bash 
   npm install
3. **Configure Environment Variables:**

Create a .env file in the root directory.
Add the following variables:
    
   - VITE_TMDB_API_KEY=your_tmdb_api_key

## Usage
1. **Run the Development Server:**

   ```bash
   npm run dev
- Open http://localhost:5173 in your browser.
2. **Build for Production:**

   ```bash
   npm run build
3. **Preview Production Build:**

   ```bash
   npm run preview

## Advanced Techniques
**SEO Enhancements** 
- Dynamic Meta Tags:

  - Implemented using react-helmet-async to manage meta tags for each page dynamically.
  - Ensures better SEO and rich link previews on social media.
- Sitemap Generation:

  - A build-time script (generate-sitemap.js) fetches movie data from TMDb API and generates a sitemap.xml.
  - Helps search engines to crawl and index all important pages.
- Robots.txt Management:

  - Environment-based robots.txt generation via generate-robots.js.
  - Prevents indexing of development environments while allowing production sites to be crawled.

**State Management with Redux Toolkit**
- Redux Toolkit:
  - Utilized for efficient and scalable state management.
  - Slices include:
    - fetchMovies: Handles fetching popular movies.
    - favoritesSlice: Manages favorite movies list with CRUD operations.
    - searchSlice: Manages search queries and suggestions.
    - movieDetailsSlice: Handles fetching and storing detailed movie information.

**Google Analytics & Tag Manager Integration**
- Google Analytics 4 (GA4):

  - Integrated using react-ga4.
  - Tracks page views and user interactions.
- Google Tag Manager (GTM):

  - Integrated using react-gtm-module.
  - Manages event tracking and dataLayer for enhanced analytics.
- Event Tracking:

  - User interactions like adding/removing favorites are tracked and sent to GA4 via GTM.
  - DataLayer events are configured in GTM to capture specific actions.
## Environment Variables

GA=G-XXXXXXX

GTM=GTM-XXXXXX

Create a .env file in the root directory with the following:

  ```env
  VITE_TMDB_API_KEY=your_tmdb_api_key


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
