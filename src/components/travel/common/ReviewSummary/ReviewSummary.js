import React from 'react';
import { ReactComponent as ReviewStar } from "assets/images/icons/star.svg";


const ReviewSummary = ({ avgRating, totalRating, className }) => {
    return (
        <div className={`review__summary ${className ? className : ''}`}>
            <ReviewStar />
            <div className="total__rating">
                <span>{avgRating}  <div className="circle"></div> {totalRating} Reviews</span>
            </div>
        </div>
    );
};

export default ReviewSummary;