import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import './Favorites.css';

const Favorites = ({ favorites, onToggleFavorite }) => {
    return (
        <div className="favorites-page">
            <div className="favorites-header">
                <h1>My Favorites</h1>
                <p>{favorites.length} {favorites.length === 1 ? 'book' : 'books'} saved</p>
            </div>

            {favorites.length === 0 ? (
                <div className="favorites-empty">
                    <div className="empty-icon">📚</div>
                    <h2>No favorites yet</h2>
                    <p>Start exploring and add books to your collection!</p>
                    <Link to="/" className="go-home-btn">
                        Browse Books
                    </Link>
                </div>
            ) : (
                <div className="books-grid">
                    {favorites.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            isFavorite={true}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
