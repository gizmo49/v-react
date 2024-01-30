import React from "react";
import { ReactSVG } from "react-svg";
import asset from "assets/images";
import "./AddUserButton.scss";

const AddUserButton = ({ btnText, onClick }) => {
    return (
        <span className={`add__user__btn fw-bold`} onClick={onClick}>
            <ReactSVG src={asset?.icons?.addUser} />
            <span>{btnText}</span>
        </span>
    );
};

export default AddUserButton;
