import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import SkeletonCard from '../components/SkeletonCard';
import { searchBooks } from '../services/booksApi';
import './Home.css';

const Home = ({ favorites, onToggleFavorite }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [initialSearchDone, setInitialSearchDone] = useState(false);

    // Optional: Load some initial books
    useEffect(() => {
        handleSearch('programming'); // Default search
    }, []);

    const handleSearch = async (query) => {
        setLoading(true);
        setError(null);
        setInitialSearchDone(true);
        try {
            const results = await searchBooks(query);
            setBooks(results);
        } catch (err) {
            setError('Failed to fetch books. Please try again.');
            setBooks([]);
        } finally {
            setLoading(false);
        }
    };

    const isFavorite = (bookId) => {
        return favorites.some(fav => fav.id === bookId);
    };

    return (
        <div className="home-page">
            <div className="hero-section">
                <div className="hero-container">
                    <h1>Discover Your Next Favorite Book</h1>
                    <p>Search for books, authors, and more.</p>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>

            <div className="content-section">
                {(books.length > 0 || loading) && (
                    <div className="section-header">
                        <h2>{loading ? 'Searching...' : 'Search Results'}</h2>
                    </div>
                )}
                {error && <div className="error-message">{error}</div>}

                {!loading && !error && books.length === 0 && initialSearchDone && (
                    <div className="no-results">
                        <div className="no-results-icon">🔍</div>
                        <h2>No books found</h2>
                        <p>Try searching for a different title or author.</p>
                    </div>
                )}

                <div className="books-grid">
                    {loading ? (
                        // Show 8 skeletons while loading
                        Array.from({ length: 8 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                    ) : (
                        books.map((book) => (
                            <BookCard
                                key={book.id}
                                book={book}
                                isFavorite={isFavorite(book.id)}
                                onToggleFavorite={onToggleFavorite}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
