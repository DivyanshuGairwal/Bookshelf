import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookDetails } from '../services/booksApi';
import './BookDetails.css';

const BookDetails = ({ favorites, onToggleFavorite }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            try {
                const data = await getBookDetails(id);
                setBook(data);
            } catch (err) {
                setError('Failed to load book details.');
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id]);

    if (loading) return <div className="loading">Loading details...</div>;
    if (error) return <div className="error-message">{error}</div>;
    if (!book) return <div className="error-message">Book not found.</div>;

    const { volumeInfo } = book;
    const {
        title,
        authors,
        description,
        imageLinks,
        pageCount,
        publishedDate,
        previewLink,
        infoLink
    } = volumeInfo;

    const imageUrl = imageLinks?.large || imageLinks?.medium || imageLinks?.thumbnail;
    const isFavorite = favorites.some(fav => fav.id === book.id);

    // Remove HTML tags from description if present
    const cleanDescription = description
        ? description.replace(/<[^>]+>/g, '')
        : 'No description available.';

    return (
        <div className="book-details-container">
            <button className="back-btn" onClick={() => navigate(-1)}>
                &larr; Back
            </button>

            <div className="book-details-content">
                <div className="book-cover-section">
                    <img
                        src={imageUrl ? imageUrl.replace('http:', 'https:') : 'https://via.placeholder.com/300x450?text=No+Cover'}
                        alt={title}
                        className="book-cover-large"
                    />
                    <div className="book-actions">
                        <a
                            href={previewLink || infoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="preview-btn"
                        >
                            Preview Book
                        </a>
                        <button
                            className={`favorite-details-btn ${isFavorite ? 'active' : ''}`}
                            onClick={() => onToggleFavorite(book)}
                        >
                            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                    </div>
                </div>

                <div className="book-info-section">
                    <h1 className="details-title">{title}</h1>
                    <h3 className="details-authors">{authors ? authors.join(', ') : 'Unknown Author'}</h3>

                    <div className="details-meta">
                        {publishedDate && <span className="meta-item"><strong>Published:</strong> {publishedDate}</span>}
                        {pageCount && <span className="meta-item"><strong>Pages:</strong> {pageCount}</span>}
                    </div>

                    <div className="details-description">
                        <h3>Description</h3>
                        <p>{cleanDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
