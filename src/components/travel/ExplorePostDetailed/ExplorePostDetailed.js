
import GoBackButton from 'components/ui/Button/GoBackButton/GoBackButton';
import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useHistory } from "react-router-dom";
import IternaryAccordionCardItem from '../common/IternaryAccordionCardItem/IternaryAccordionCardItem';
import IternaryAccordCardItemDetail from '../common/IternaryAccordionCardItem/IternaryAccordCardItemDetail/IternaryAccordCardItemDetail';
import BuyItineraries from '../BuyItineraries/BuyItineraries';

const images = [
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

const ExplorePostDetailed = () => {
    let history = useHistory();
    const [usePreview, setUsingPreview] = useState(true)
    return (
        <div className=''>

            <div className="row">

                <div className="col-lg-7 mt-2">
                    <div className="col-2">
                        <GoBackButton onClick={() => history.goBack()} />

                    </div>
                    <ResponsiveMasonry
                        className='masonary__cover'
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
                        <div className="col-lg-10 offset-1">
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
                                { usePreview ? <BuyItineraries onSuccess={() => setUsingPreview(false)} /> :<div className="itinerary__group">
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
            </div>
        </div>
    );
};

export default ExplorePostDetailed;
