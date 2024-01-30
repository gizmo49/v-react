import React from "react";
import { ReactSVG } from "react-svg";
import asset from "assets/images";
import { Link } from "react-router-dom";
import "./SeeMoreButton.scss";

const SeeMoreButton = ({ url }) => {
    return (
        <Link to={url} className='link'>
            See more &nbsp;{" "}
            <ReactSVG
                src={asset?.icons?.anchorRightColored}
                className='d-inline-flex'
            />
        </Link>
    );
};

export default SeeMoreButton;
