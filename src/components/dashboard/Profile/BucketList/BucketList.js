import React from 'react';
import LazyLoadedImage from 'components/ui/LazyLoadedImage/LazyLoadedImage';

const BucketList = () => {
    return (
        <div className='lite__h3p'>
            <div className="lite__h3p--headline">
                <h3>Bucket List</h3>
                <p>Only you can see what you’ve saved in your bucket list. </p>
            </div>

            <div className="row">
                <div className="col-lg-3 col-6">
                    <div className="bucket__item">
                        <div className="bucket__group">
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/900×701/?vacation`} alt="" />
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/400×400/?vacation`} alt="" />
                        </div>
                        <div className="txt__layer">
                            <h3>Personal vacation</h3>
                            <p>11 experiences</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="bucket__item">
                        <div className="bucket__group">
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/500×300/?vacation`} alt="" />
                        </div>
                        <div className="txt__layer">
                            <h3>Personal vacation</h3>
                            <p>11 experiences</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="bucket__item">
                        <div className="bucket__group">
                        <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/702×730/?vacation`} alt="" />
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/810×700/?vacation`} alt="" />
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/560×700/?vacation`} alt="" />
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/700×700/?vacation`} alt="" />
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/750×700/?vacation`} alt="" />
                        </div>
                        <div className="txt__layer">
                            <h3> Family holiday</h3>
                            <p>10 experiences</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="bucket__item">
                        <div className="bucket__group">
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/450×300/?vacation`} alt="" />
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/600×450/?vacation`} alt="" />
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/600×600/?vacation`} alt="" />
                        </div>
                        <div className="txt__layer">
                            <h3> Family holiday</h3>
                            <p>10 experiences</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="bucket__item">
                        <div className="bucket__group">
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/810×700/?vacation`} alt="" />
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/560×700/?vacation`} alt="" />
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/700×700/?vacation`} alt="" />
                            <LazyLoadedImage loading="lazy" src={`https://source.unsplash.com/random/750×700/?vacation`} alt="" />
                        </div>
                        <div className="txt__layer">
                            <h3> Family holiday</h3>
                            <p>10 experiences</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default BucketList;