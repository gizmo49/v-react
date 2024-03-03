import React, { useContext, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { isMobile } from 'react-device-detect';
import { ReactComponent as X } from "assets/images/icons/x.svg";
import { ReactComponent as SmallPlus } from "assets/images/icons/small-plus.svg";
import { ReactComponent as BigPlus } from "assets/images/icons/big-plus.svg";
import { ToastContext } from 'common/Toast/context/ToastContextProvider';
import SaveButton from 'components/ui/Button/SaveButton/SaveButton';
import { Modal } from 'components/ui/Modal/Modal';


const SavedCollectionHeading = () => {

    return (
        <div className="saved__collection">
            <div className="row bucket__list">
                <div className="col-1 p-0">
                    <img className="bucket__list--img" src={"https://source.unsplash.com/random/400×400/?maldives+vacation"} alt="vacay" />
                </div>
                <div className="col-10">
                    <div className="named__collection">
                        <h6>Personal vacation</h6>
                        <p>
                            <span>Public</span>
                        </p>
                    </div>
                </div>
                <div className="col-1">
                    <SaveButton active />
                </div>
            </div>
        </div>
    )
}

const BucketListItem = ({ handleAddToCollection }) => {

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
                <BigPlus onClick={handleAddToCollection} />
            </div>
        </div>
    )
}

const SaveToBucketListCenterModal = ({ children, toggle }) => {
    return (
        <Modal show={true} size={'md'} toggle={toggle} centered>
            {React.cloneElement(children, { toggle })}
        </Modal>
    )
}

const SaveToBucketListBottomModal = ({ children, toggle }) => {
    return (
        <div className='row justify-content-center'>
            <BottomSheet open={true} onDismiss={toggle} className='bottom__overlay'>
                {React.cloneElement(children, { toggle })}
            </BottomSheet>
        </div>
    )
}

const SaveToBucketListModal = ({ toggle }) => {
    const [savedCollection, setSavedCollection] = useState();
    const toastMessage = useContext(ToastContext);

    const handleAddToCollection = () => {
        const mssg = <p>This Trip has been saved to your <b>Personal Vacation</b> Collection in your bucket list</p>
        toastMessage(mssg);
        setSavedCollection({ collectionName: "Public" });
    }

    return (
        <>
            {/* <BottomSheet open={show} onDismiss={toggle} className='bottom__overlay'> */}
            {savedCollection && <SavedCollectionHeading />}
            <div className='smart--container'>
                {
                    savedCollection ?
                        <div className='mt-6x save__heading' >
                            <h6>Bucket List</h6>
                        </div>
                        :
                        <>
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
                        </>
                }

                <BucketListItem {...{ handleAddToCollection }} />
                <BucketListItem {...{ handleAddToCollection }} />
                <BucketListItem {...{ handleAddToCollection }} />
                <BucketListItem {...{ handleAddToCollection }} />

            </div>
            {/* </BottomSheet> */}
        </>
    );
};

const SaveToBucketList = ({ show, toggle }) => {
    return (
        <>
            {
                isMobile ?
                    <SaveToBucketListBottomModal {...{ show, toggle }}>
                        <SaveToBucketListModal />
                    </SaveToBucketListBottomModal>
                    : <SaveToBucketListCenterModal {...{ show, toggle }}>
                        <SaveToBucketListModal />
                    </SaveToBucketListCenterModal>

            }
        </>
    )
}

export default SaveToBucketList;