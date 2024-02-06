import { imageLinks } from 'assets/images';
import React from 'react';
import { ReactSVG } from 'react-svg';

const Empty = ({mssgHeadline,mssgContent}) => {
    return (
        <div>
            <ReactSVG src={imageLinks?.images?.emptyMssg} />
            <h6>{mssgHeadline}</h6>
            <p>{mssgContent}</p>
        </div>
    );
};

export default Empty;