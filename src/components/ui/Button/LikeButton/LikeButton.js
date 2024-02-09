import React from 'react';
import { ReactComponent as Heart } from "assets/images/icons/heart.svg";
import { ReactComponent as Splash } from "assets/images/icons/splash.svg";

const LikeButton = ({ onClick, active }) => {
    return (
        <div className='icon--btn' onClick={onClick}>
            {/* // <span className="custom--icon heart"></span> */}
            <div className={`heart ${active ? 'active' : ''}`}>
                <Heart />
                <div className="heart-center animation-container">
                    <Splash />
                </div>
            </div>
        </div>
    );
};
export default LikeButton;