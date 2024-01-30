import { ReactComponent as ReviewStar } from "assets/images/icons/star.svg";

const IternaryAccordCardItemDetail = ({ duration, activityType, rating, link, summary }) => {
    return (
        <>
            <div className="custom__card">
                <div className="custom__card--heading">

                    <div className="">
                        <span>Duration</span>
                        <p>{duration}</p>
                    </div>
                    <div className="">
                        <span>Activity Type</span>
                        <p>{activityType}</p>
                    </div>
                    <div className="">
                        <span>Rating</span>
                        <p><ReviewStar /> <span>{rating}</span></p>
                    </div>
                    <div className="">
                        <span>Link</span>
                        <p><span>{link}</span></p>
                    </div>
                </div>
                <div className="mt-1">
                    <p className="h3-text">{summary}</p>
                </div>
            </div>

        </>
    );
};

export default IternaryAccordCardItemDetail;
