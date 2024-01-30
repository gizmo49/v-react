import React from 'react';


const GoBackButton = ({ onClick }) => {
    return (
        <div className='back--btn' onClick={onClick}>
            <span className="custom--icon go-back"></span>
            <span>Go back</span>
        </div>
    );
};

export default GoBackButton;