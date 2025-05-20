Next.js Netflix Clone Documentation

Overview
This is a full-stack Netflix clone built with Next.js featuring both frontend and backend functionality.

Technologies Used
- Next.js (React framework for SSR and API routes)
- React (UI components)
- Tailwind CSS / CSS Modules (styling)
- TMDb API or custom backend for movie data
- Node.js (backend API routes inside Next.js)
- Axios or Fetch (data fetching)

Features
- Home page displaying popular movies and shows
- Movie detail pages with trailers and info
- User authentication (optional)
- Responsive design for desktop and mobile
- Server-side rendering for SEO and performance
- Backend API routes for data fetching or proxying external APIs

Project Structure

/
├── pages/
│   ├── index.js            # Home page
│   ├── movie/[id].js       # Dynamic route for movie details
│   ├── api/
│   │   └── movies.js       # Backend API route to fetch movies
├── components/
│   ├── Navbar.js
│   ├── MovieCard.js
│   └── Layout.js
├── styles/
│   └── globals.css
├── utils/
│   └── fetcher.js          # Utility for fetching data

Frontend
- Uses React components to build UI
- Uses Next.js data fetching methods like getServerSideProps or getStaticProps
- Fetches movie data from backend API or external APIs
- Handles routing with Next.js dynamic routes

Backend
- Next.js API routes act as backend endpoints
- API routes fetch data from external movie databases or handle authentication
- Provides JSON data to frontend for rendering

How to Run
1. Clone repo
2. Run `npm install` to install dependencies
3. Add environment variables (e.g., TMDb API key) in `.env.local`
4. Run `npm run dev` to start development server
5. Open `http://localhost:3000` in browser

