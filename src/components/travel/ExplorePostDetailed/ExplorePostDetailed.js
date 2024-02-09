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

const images = [
    "https://source.unsplash.com/random/900×700/?italy+vacation",
    "https://res.cloudinary.com/metacare/image/upload/v1705559953/velio/Rectangle_2078_1_ep6koc.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559965/velio/Rectangle_2081_1_l4oebf.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559988/velio/Rectangle_2112_1_ol0gsj.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705561882/velio/Rectangle_2082_1_immhgp.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705560015/velio/Rectangle_2113_zjcqi6.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559949/velio/Rectangle_2084_1_x6luyl.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559953/velio/Rectangle_2078_1_ep6koc.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559965/velio/Rectangle_2081_1_l4oebf.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559988/velio/Rectangle_2112_1_ol0gsj.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705560015/velio/Rectangle_2113_zjcqi6.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559949/velio/Rectangle_2084_1_x6luyl.png"

]

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


const CardViewItinerary = ({ cls, usePreview, itenaries, setUsingPreview }) => {
    return (
        <div className={`itineray__card--view ${cls ? cls : ''}`}>
            <h3 className="heading3">Itineraries</h3>
            {usePreview ? <BuyItineraries onSuccess={() => setUsingPreview(false)} /> : <div className="itinerary__group--wrap">
                {
                    (itenaries).map((item, index) => (
                        <ItinerayCardItem key={index} {...item} />
                    ))
                }
            </div>
            }
        </div>
    )
}

const ExplorePostDetailed = () => {
    let history = useHistory();
    const [useListView, setViewPreference] = useState(true);
    const [usePreview, setUsingPreview] = useState(true);
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
                    <div className={`itineray__main--bottom ${!useListView ? 'card--view' : ''}`}>
                        {!useListView && <PostIntro cls="padded inverse" />}
                        <div className="itineray__main--bottom--actions">
                            <div className="sp__pill" onClick={() => setViewPreference(!useListView)}>
                                <span className="custom--icon custom--icon--sm calender"></span>
                                <span>{useListView ? 'Switch to card view' : 'Switch to List View'}</span>
                            </div>
                            <div className="sp__pill" onClick={() => toggleGalleryModal(true)}>
                                <span>32+ more images</span>
                            </div>
                        </div>
                        {!useListView && <CardViewItinerary cls="inverse--heading" {...{ itenaries, usePreview, setUsingPreview }} />}

                    </div>

                </div>
                {useListView && <div className="row">
                    <div className="col-lg-7 mt-2">
                        <div className="col-md-2 d-none d-lg-block">
                            <GoBackButton onClick={() => history.goBack()} />
                        </div>

                        <ResponsiveMasonry
                            className='d-none d-lg-block'
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        >
                            <Masonry columnsCount={3} gutter="10px">
                                {images.map((image, i) => (


                                    <div
                                        key={i}
                                    // style={{ width: "100%", display: "block" }}
                                    // initial={{ y: `30%`, opacity: 0 }}
                                    // animate={{ y: 10, opacity: 1 }}
                                    // exit={{ y: `-30%`, opacity: 0, zIndex: -1 }}
                                    // transition={{ duration: 2, delay: 1 * i }}

                                    >
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
                                {useListView && <PostIntro />}
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
                                    {usePreview ? <BuyItineraries onSuccess={() => setUsingPreview(false)} /> : <div className="itinerary__group">
                                        {
                                            (itenaries).map((item, index) => (
                                                <IternaryAccordionCardItem key={index} {...item}>
                                                    <IternaryAccordCardItemDetail {...item} />
                                                </IternaryAccordionCardItem>
                                            ))
                                        }
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
            {
                showGalleryModal && <ItenaryPostsModal closeModal={() => toggleGalleryModal(false)} />
            }
        </>
    );
};

export default ExplorePostDetailed;
