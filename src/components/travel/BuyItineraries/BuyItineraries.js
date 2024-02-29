import { Button } from 'components/ui';
import React, { useState } from 'react';
import ItinerariesOverviewModal from './modals/ItinerariesOverviewModal/ItinerariesOverviewModal';

const BuyItineraries = ({ onSuccess }) => {
    const [isOpen, toggleModal] = useState(false);
    const handleItinerariesSuccess = () => {
        onSuccess()
        toggleModal(false)
    }
    return (
        <>
            <div className='buy__container'>
                <div className="mint-container buy__card">
                    <div className="flex__between w-100">
                        <p>
                            Unlock full experience
                        </p>
                        <Button
                            text='Unlock $5'
                            classType='primary'
                            // loading={loading}
                            onClick={() => toggleModal(true)}
                            otherClass='my-3 fit-content' 
                        />
                    </div>
                </div>
            </div>
            {isOpen && <ItinerariesOverviewModal handleSuccess={handleItinerariesSuccess} closeModal={(() => toggleModal(false))} />}
        </>
    );
};

export default BuyItineraries;