import imageLinks from '@assets/images/imageLinks/imageLinks';
import CustomImage from '@components/common/CustomImage/CustomImage';
import { oneLinkToAll } from '@components/constants';
import React, { useState } from 'react';

const AppBanner = () => {
    const [showBanner, setBannerVisibility] = useState(true);

    return (
        <div className={`mint-container downloader__banner ${showBanner ? 'show' : 'hidden'}`}>
            <div className="row align-items-center">
                <div className="col-2">
                    <CustomImage src={imageLinks?.icons?.closeIcon} onClick={() => setBannerVisibility(false)}/>
                </div>
                <div className="col-8 px-0">
                    <CustomImage src={imageLinks?.downLoadBanner} />
                </div>
                <div className="col-2 text-right">
                    <a href={oneLinkToAll}>View</a>
                </div>
            </div>
        </div>
    );
};

export default AppBanner;