import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book, isFavorite, onToggleFavorite }) => {
    // Safe access to book properties
    const volumeInfo = book.volumeInfo || {};
    const { title, authors, imageLinks } = volumeInfo;

    // Use a placeholder if no image
    const thumbnail = imageLinks?.thumbnail || 'https://via.placeholder.com/128x196?text=No+Cover';
    const authorText = authors ? authors.join(', ') : 'Unknown Author';

    return (
        <div className="book-card">
            <div className="book-card-image">
                <img src={thumbnail.replace('http:', 'https:')} alt={title} />
            </div>
            <div className="book-card-content">
                <h3 className="book-title" title={title}>{title}</h3>
                <p className="book-author" title={authorText}>{authorText}</p>

                <div className="book-card-actions">
                    <Link to={`/book/${book.id}`} className="view-details-btn">
                        View Details
                    </Link>
                    <button
                        className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                        onClick={() => onToggleFavorite(book)}
                        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {isFavorite ? '♥' : '♡'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
