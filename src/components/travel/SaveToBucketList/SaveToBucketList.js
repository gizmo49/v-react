import React from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { ReactComponent as X } from "assets/images/icons/x.svg";
import { ReactComponent as SmallPlus } from "assets/images/icons/small-plus.svg";
import { ReactComponent as BigPlus } from "assets/images/icons/big-plus.svg";

const BucketListItem = () => {
    return (
        <div className="row bucket__list">
            <div className="col-1 p-0">
                <img className="bucket__list--img" src={"https://source.unsplash.com/random/900×700/?maldives+vacation"} alt="vacay" />
            </div>
            <div className="col-10">
                <div className="named__collection">
                    <h6>Personal vacation</h6>
                    <p>
                    <span className="custom--icon custom--icon--sm calender"></span>
                        <span>11 saved Experiences</span>
                    </p>
                </div>
            </div>
            <div className="col-1">
                <BigPlus />
            </div>
        </div>
    )
}

const SaveToBucketList = ({ show, toggle }) => {
    return (
        <div className='row justify-content-center'>
            <BottomSheet open={show} onDismiss={toggle} className='bottom__overlay'>
                <div className='smart--container'>
                    <div className="save__heading">
                        <h6>Add to bucket list</h6>
                        <X className="close" onClick={toggle} />
                    </div>
                    <div className="row save__heading--p">
                        <div className="col-8">
                            <p>Select a collection</p>
                        </div>
                        <div className="col-4 ps-0">
                            <div className="btn__collection">
                                <SmallPlus />
                                <span>New collection</span>
                            </div>
                        </div>
                    </div>
                    <BucketListItem />
                    <BucketListItem />
                    <BucketListItem />
                    <BucketListItem />

                </div>
            </BottomSheet>
        </div>
    );
};

export default SaveToBucketList;