import React from 'react';
import LazyLoadedImage from 'components/ui/LazyLoadedImage/LazyLoadedImage';
import "./GridGallery.scss";

const GridGallery = ({ data, clsName}) => {
    return (
        <div className={`custom-grid-wrapper ${clsName ? clsName : ''}`}>
            {
                (data).map((dt, index) => (
                    <LazyLoadedImage
                        key={index}
                        wrapperClassName={`grid--item ${dt.wrapperAttr}`}
                        className='grid--img'
                        src={dt.src}
                        alt=""
                    />
                ))
            }
        </div>
    )
}


export default GridGallery;