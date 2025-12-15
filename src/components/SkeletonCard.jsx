import React from 'react';
import './SkeletonCard.css';

const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
                <div className="skeleton-text title-skeleton"></div>
                <div className="skeleton-text author-skeleton"></div>
                <div className="skeleton-actions">
                    <div className="skeleton-btn"></div>
                    <div className="skeleton-btn small"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
