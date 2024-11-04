import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import SeriesDetail from '@/pages/SeriesDetail';
import SeriesListPage from '@/pages/SeriesListPage';
import MoviesPage from '@/pages/MoviesPage';
import MovieDetail from '@/pages/MovieDetail';
import DiscoverPage from '@/pages/DiscoverPage';
import HowToDownloadPage from '@/pages/HowToDownloadPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import AdminPage from '@/pages/AdminPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/series/:id" element={<SeriesDetail />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
      <Route path="/best-series" element={<SeriesListPage />} />
      <Route path="/legendary-movies" element={<MoviesPage />} />
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/how-to-download" element={<HowToDownloadPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}