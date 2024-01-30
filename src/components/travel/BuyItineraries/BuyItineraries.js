import { Button } from 'components/ui';
import React, { useState } from 'react';
import ItinerariesOverviewModal from './modals/ItinerariesOverviewModal/ItinerariesOverviewModal';

const BuyItineraries = ({onSuccess}) => {
    const [isOpen, toggleModal] = useState(false);
    const handleItinerariesSuccess = () => {
        onSuccess()
        toggleModal(false)
    }
    return (
        <>
            <div className='buy__container'>
                <div className="buy__card">
                    <span className="custom--icon big-lock"></span>
                    <p>Buy this itinerary see all the activities<br /> connected to this trip</p>

                    <Button
                        text='Unlock experience for $5'
                        classType='primary'
                        // loading={loading}
                        onClick={() => toggleModal(true)}
                        otherClass='my-3 w-content'
                    />

                </div>
            </div>
            {isOpen && <ItinerariesOverviewModal handleSuccess={handleItinerariesSuccess} closeModal={(() => toggleModal(false))} />}
        </>
    );
};

export default BuyItineraries;