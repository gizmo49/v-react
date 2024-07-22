import GoBackButton from 'components/ui/Button/GoBackButton/GoBackButton';
import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useHistory } from "react-router-dom";
import IternaryAccordionCardItem from '../common/IternaryAccordionCardItem/IternaryAccordionCardItem';
import IternaryAccordCardItemDetail, { ItinerayCardItem } from '../common/IternaryAccordionCardItem/IternaryAccordCardItemDetail/IternaryAccordCardItemDetail';
import BuyItineraries from '../BuyItineraries/BuyItineraries';
import FollowButton from 'components/ui/Button/FollowButton/FollowButton';
import SaveButton from 'components/ui/Button/SaveButton/SaveButton';
import ReviewSummary from '../common/ReviewSummary/ReviewSummary';
import LikeButton from 'components/ui/Button/LikeButton/LikeButton';
import ShareButton from 'components/ui/Button/ShareButton/ShareButton';
import ItenaryPostsModal from './ItenaryPosts/ItenaryPostsModal';
import { uniqueIternaries } from '../ExploreFeed/data';

const images = uniqueIternaries;

const itenaries = [
    {
        title: "Lagos - Portugal",
        createdAt: "Tue, Aug 15",
        price: "$1,000",
        duration: "2hr",
        activityType: "Flight",
        rating: "4.8",
        link: "flylufthansa.com",
        summary: "Really smooth flight. The air staff were very nice and provided everyone with some water and chocolate during the flight. A little turbulence but everyone was fine."
    },
    {
        title: "Check in to NH hotel",
        createdAt: "Tue, Aug 15",
        price: "$30/night",
        duration: "2hr",
        activityType: "Flight",
        rating: "4.8",
        link: "flylufthansa.com",
        summary: "Really smooth flight. The air staff were very nice and provided everyone with some water and chocolate during the flight. A little turbulence but everyone was fine."
    },
    {
        title: "Trip to Jerónimos Monastery",
        createdAt: "Tue, Aug 15",
        price: "$30/night",
        duration: "2hr",
        activityType: "Flight",
        rating: "4.8",
        link: "flylufthansa.com",
        summary: "Really smooth flight. The air staff were very nice and provided everyone with some water and chocolate during the flight. A little turbulence but everyone was fine."

    },
    {
        title: "LA Plage",
        createdAt: "Tue, Aug 15",
        price: "$30/night",
        duration: "2hr",
        activityType: "Flight",
        rating: "4.8",
        link: "flylufthansa.com",
        summary: "Really smooth flight. The air staff were very nice and provided everyone with some water and chocolate during the flight. A little turbulence but everyone was fine."

    },


]

const PostIntro = ({ cls }) => {
    return (
        <div className={`post__intro ${cls ? cls : ''}`}>
            <h2 className="heading2 mb-3">Girls Trip to Portugal</h2>
            <div className="icon__textpair--group">
                <div className="icon__textpair">
                    <span className="custom--icon custom--icon--sm calender"></span>
                    <span>16th - 30th Oct, 2023</span>
                </div>

                <div className="icon__textpair">
                    <span className="custom--icon custom--icon--sm location"></span>
                    <span>Lisbon, Portugal</span>
                </div>

                <div className="icon__textpair">
                    <span className="custom--icon custom--icon--sm bank-note"></span>
                    <span>$567</span>
                </div>
            </div>
        </div>
    )
}


const CardViewItinerary = ({ cls, itenaries }) => {
    return (
        <div className={`itineray__card--view ${cls ? cls : ''}`}>
            <div className="itinerary__group--wrap">
                {
                    (itenaries).map((item, index) => (
                        <ItinerayCardItem key={index} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

const ExplorePostDetailed = () => {
    let history = useHistory();
    const [usePreview, setUsingPreview] = useState(true);
    const [useListView, setViewPreference] = useState(true);
    const [likedPost, toggleLike] = useState(false);
    const [savedPost, toggleSave] = useState(false);
    const [showGalleryModal, toggleGalleryModal] = useState(false);

    return (
        <>
            <div className=''>
                <div className="itineray__main d-md-none" style={{ background: `url(${images[0]}) no-repeat` }}>
                    <div className="itineray__main--top">
                        <GoBackButton onClick={() => history.goBack()} type={"simple"} />
                        <ShareButton />
                    </div>
                    <div className={`itineray__main--bottom`}>
                        <div className="itineray__main--bottom--actions">
                            <div className="sp__pill" onClick={() => setViewPreference(!useListView)}>
                                <span className="custom--icon custom--icon--sm calender"></span>
                                <span>{useListView ? 'Switch to card view' : 'Switch to List View'}</span>
                            </div>
                            <div className="sp__pill" onClick={() => toggleGalleryModal(true)}>
                                <span>32+ more images</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 mt-2">
                        <div className="col-md-2 d-none d-lg-block">
                            <GoBackButton onClick={() => history.goBack()} />
                        </div>
                        <ResponsiveMasonry
                            className='d-none d-lg-block'
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                            <Masonry columnsCount={3} gutter="10px">
                                {images.map((image, i) => (
                                    <div key={i}>
                                        <img

                                            src={image}
                                            alt="rec"
                                            className='mason__img'
                                        />
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="itinenary__wrapper">
                                <div className="flex__between mb-3 pt-3">
                                    <div className="post__author">
                                        <div className="author__img">
                                            <img src="https://source.unsplash.com/random/200x200/?vacation+selfie" alt="author" />
                                        </div>
                                        <div className="author__txt">
                                            <h6>Delores</h6>
                                            <p>124K followers</p>
                                        </div>
                                    </div>
                                    <FollowButton />
                                </div>
                                <div className='flex__between mb-3'>
                                    <LikeButton onClick={() => toggleLike(!likedPost)} active={likedPost} />
                                    <SaveButton onClick={() => toggleSave(!savedPost)} active={savedPost} />
                                    <ReviewSummary className="ms-auto" avgRating={'4.8'} totalRating={16} />
                                </div>
                                <PostIntro />
                                <hr />
                                <div className='my-4 pt-2'>
                                    <h3 className="heading3 mb-3">About Experience</h3>
                                    <p className="h3-text">I and my girls went on a trip to Portugal where we explored different locations in the country. It was really a fun trip and the most interesting thing is that we spent exactly what had planned to spend, nothing more nothing less. Have fun exploring</p>
                                    <div className="info-pill--group">

                                        <div className="info-pill">
                                            <span className="custom--icon airplane"></span>
                                            <span>Sky Diving</span>
                                        </div>

                                        <div className="info-pill">
                                            <span className="custom--icon mountain"></span>
                                            <span>Hiking</span>
                                        </div>

                                        <div className="info-pill">
                                            <span className="custom--icon boat"></span>
                                            <span>Boat Cruise</span>
                                        </div>

                                        <div className="info-pill">
                                            <span className="custom--icon swimming"></span>
                                            <span>Snorkel</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h3 className="heading3">Itineraries</h3>
                                    <div className={`itinerary__group ${usePreview ? 'blurr--all' : ""}`}>
                                        {!useListView ? <CardViewItinerary {...{ itenaries, usePreview, setUsingPreview }} /> :
                                            <>
                                                {
                                                    (itenaries).map((item, index) => (
                                                        <IternaryAccordionCardItem key={index} {...item}>
                                                            <IternaryAccordCardItemDetail {...item} />
                                                        </IternaryAccordionCardItem>
                                                    ))
                                                }
                                            </>
                                        }
                                    </div>
                                    {usePreview && <BuyItineraries onSuccess={() => setUsingPreview(false)} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showGalleryModal && <ItenaryPostsModal closeModal={() => toggleGalleryModal(false)} />
            }
        </>
    );
};

export default ExplorePostDetailed;
