import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-input"
                placeholder="Search for books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
