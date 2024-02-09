import React from 'react';

const FollowButton = ({ onClick }) => {
    return (
        <div className='ff--btn' onClick={onClick}>
            <span className="custom--icon ff-follow"></span>
            <span>Follow</span>
        </div>
    );
};
export default FollowButton;