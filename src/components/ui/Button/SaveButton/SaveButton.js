// import SaveToBucketList from 'components/travel/SaveToBucketList/SaveToBucketList';
import SaveToBucketList from 'components/travel/SaveToBucketList/SaveToBucketList';
import React, { useState } from 'react';
// import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'

const SaveButton = ({ onClick, active }) => {
    const [showSaveModal, toggleSaveModal] = useState(false);
    const handleSaveToBucket = () => {
        onClick();
        toggleSaveModal(true)
    }
    return (
        <>
            <div className={`icon--btn ${active ? 'active' : ''}`} onClick={() => handleSaveToBucket()}>
                <span className="custom--icon save-post"></span>
            </div>


            {showSaveModal && <SaveToBucketList
                show={showSaveModal}
                toggle={() => toggleSaveModal(false)}
            />}
        </>
    );
};

export default SaveButton;