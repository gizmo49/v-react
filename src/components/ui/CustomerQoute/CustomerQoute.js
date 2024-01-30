import React from 'react';
import { ReactComponent as QouteIcon } from "assets/images/icons/qoute.svg";
import "./CustomerQoute.scss";

const CustomerQoute = ({statement}) => {
    return (
        <div className='customer__qoute'>
            <div className="content">
                <QouteIcon />
                <p>{statement}</p>
            </div>
        </div>
    );
};

export default CustomerQoute;