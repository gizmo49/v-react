import React from "react";
import "./SmallLoader.css";

const SmallLoader = ({ otherClassName }) => (
    <div className={`lds-spinner-small ${otherClassName ? otherClassName : ''}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
)

export default SmallLoader;
