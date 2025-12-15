import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Favorites from './pages/Favorites';

function App() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage on initial render
  useEffect(() => {
    const savedFavorites = localStorage.getItem('bookshelf_favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('bookshelf_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (book) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === book.id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== book.id);
      } else {
        return [...prevFavorites, book];
      }
    });
  };

  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: '2rem 1rem' }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/book/:id"
            element={
              <BookDetails
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
