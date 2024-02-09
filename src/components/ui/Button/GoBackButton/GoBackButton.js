import React from 'react';


const GoBackButton = ({ onClick, type }) => {
    return (
        <div className={`${type === "simple" ? 'icon--btn' : 'back--btn'}`} onClick={onClick}>
            {
                type === "simple" ? <span className="custom--icon back-arrow"></span> :
                <>
                    <span className="custom--icon go-back"></span>
                    <span>Go back</span>
                </>
            }
        </div>
    );
};

export default GoBackButton;