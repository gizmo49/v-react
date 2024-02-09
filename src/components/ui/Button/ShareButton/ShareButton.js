import React from 'react';

const ShareButton = ({ onClick }) => {
    return (
        <div className='icon--btn' onClick={onClick}>
            <span className="custom--icon share"></span>
        </div>
    );
};
export default ShareButton;
