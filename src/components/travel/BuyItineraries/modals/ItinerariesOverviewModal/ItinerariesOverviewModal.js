import React, { useState } from 'react';
import { SideModal } from 'components/ui/Modal/SideModal/SideModal';
import { Button, Checkbox } from 'components/ui';
import AddButton from 'components/ui/Button/AddButton/AddButton';
import { ReactSVG } from 'react-svg';
import { imageLinks } from 'assets/images';

const CardsListing = ({ cardsData }) => {

    return (
        <div className="cards__listing">
            {
                (cardsData).map((card, index) => {
                    const cardTypeSrc = card.type === "MASTER" ? imageLinks.icons.masterCard  : imageLinks.icons.visaCard;
                   return (
                    <Checkbox
                        key={index}
                        label={card.digits}
                        checked={card.default}
                        onChange={(value) => console.log(value)}
                        grpClass={'card-radio'}
                     >
                        <>
                            <ReactSVG src={cardTypeSrc} />
                            <p>**** {card.digits}</p>
                        </>
                     </Checkbox>
                )})
            }
        </div>
    )
}

const ItinerariesOverviewModal = ({ closeModal, handleSuccess }) => {
    const [availableCards, setAvailableCards] = useState([])
    const itinerary = {
        cover: "https://res.cloudinary.com/metacare/image/upload/v1706616861/image_6_jzqipj.png",
        title: "Girls Trip to Portugal"
    }

    const addPaymentMethods = () => {
        setAvailableCards([
            {
                type: "MASTER",
                digits: "7879",
                default: true
            },
            {
                type: "VISA",
                digits: "6563",
                default: false
            }
        ])
    }


    return (
        <SideModal show={true} close={closeModal}>
            <div className='itinerary__overview'>
                <h6 className='heading6'>Review the trip you want to unlock</h6>
                <img src={itinerary?.cover} alt={itinerary.title} className='itinerary__cover' />

                <div>
                    <h6 className="heading2 mb-3">{itinerary?.title}</h6>

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
                <hr />
                <div >
                    <h6 className='heading7'>Order details</h6>
                    <p className="hp__pair">15 itineraries <b>$5</b></p>
                </div>
                <hr />
                <div>
                    <h6 className='heading7'>Payment method</h6>
                    {
                        (availableCards).length > 0 ? <CardsListing cardsData={availableCards} /> :
                            <p className="hp__pair">No payment method added </p>
                    }
                    <AddButton btnText="Add new" onClick={() => addPaymentMethods()} />
                </div>
                <hr />
                <Button
                    type='submit'
                    text='Unlock now'
                    classType='primary'
                    // loading={loading}
                    onClick={handleSuccess}
                    disabled={availableCards.length < 1}
                    otherClass='my-3 w-100'
                />

            </div>
        </SideModal>
    );
};

export default ItinerariesOverviewModal;