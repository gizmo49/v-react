import { ReactComponent as ReviewStar } from "assets/images/icons/star.svg";
import { ReactComponent as ScubaDive } from "assets/images/icons/scuba.svg";

export const ItinerayCardItem = ({ duration, activityType, rating, link, summary }) => {
    return (
        <div className="itinerary__card">
            <div className="itinerary__card--heading">
            <div className="act__symbol">
                <div className="act__symbol--cont">
                    <ScubaDive />
                </div>
                <span>{activityType}</span>
            </div>
                <div className="row">
                    <div className="col-5">
                        <div className="heading--grp">
                            <span>Duration</span>
                            <p>{duration}</p>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="heading--grp">
                            <span>Cost</span>
                            <p>{`$30/bottle`}</p>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="heading--grp">
                            <span>Rating</span>
                            <p><ReviewStar /> <span>{rating}</span></p>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="heading--grp">
                            <span>Link</span>
                            <p>{link}</p>
                        </div>
                    </div>
                </div>
                <div className="sm__txt">See more details</div>
            </div>
        </div>
    )
}
const IternaryAccordCardItemDetail = ({ duration, activityType, rating, link, summary }) => {
    return (
        <>
            <div className="custom__card">
                <div className="custom__card--heading">

                    <div className="heading--grp">
                        <span>Duration</span>
                        <p>{duration}</p>
                    </div>
                    <div className="heading--grp">
                        <span>Activity Type</span>
                        <p>{activityType}</p>
                    </div>
                    <div className="heading--grp">
                        <span>Rating</span>
                        <p><ReviewStar /> <span>{rating}</span></p>
                    </div>
                    <div className="heading--grp">
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
