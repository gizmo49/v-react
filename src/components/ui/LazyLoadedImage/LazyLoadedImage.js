import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoadedImage = ({ src, alt, ...rest }) => {
    return (
        <LazyLoadImage
            alt={alt}
            effect="blur"
            src={src} 
            width="100%"
            height="auto"
            {...rest}
        />
    );
};

export default LazyLoadedImage;