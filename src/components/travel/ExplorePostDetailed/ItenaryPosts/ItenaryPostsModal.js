import GoBackButton from 'components/ui/Button/GoBackButton/GoBackButton';
import ShareButton from 'components/ui/Button/ShareButton/ShareButton';
import GridGallery from 'components/ui/GridGallery/GridGallery';
import { SideModal } from 'components/ui/Modal/SideModal/SideModal';
import React from 'react';

const splashImages1 = [
    {
        src: "https://source.unsplash.com/random/900×701/?beach+vacation",
        wrapperAttr: "tall"
    },
    {
        src: "https://source.unsplash.com/random/700×701/?beach+vacation",
        wrapperAttr: ""
    },
    {
        src: "https://source.unsplash.com/random/800×701/?beach+vacation",
        wrapperAttr: "tall"
    },
    {
        src: "https://source.unsplash.com/random/500×501/?beach+vacation",
        wrapperAttr: ""
    },
    {
        src: "https://source.unsplash.com/random/300×301/?beach+vacation",
        wrapperAttr: "wide"
    },
    {
        src: "https://source.unsplash.com/random/900×701/?beach+vacation",
        wrapperAttr: "blurred"
    },
    {
        src: "https://source.unsplash.com/random/700×701/?beach+vacation",
        wrapperAttr: "blurred"
    },
    {
        src: "https://source.unsplash.com/random/800×701/?beach+vacation",
        wrapperAttr: "blurred"
    },
    {
        src: "https://source.unsplash.com/random/500×501/?beach+vacation",
        wrapperAttr: "blurred"
    },
    {
        src: "https://source.unsplash.com/random/300×301/?beach+vacation",
        wrapperAttr: "blurred"
    }
]

const ItenaryPostsModal = ({ closeModal }) => {
    return (
        <SideModal show={true} close={closeModal} showCloseIcon={false}>
            <div className="itineray__main--top no--bg sticky-top">
                <GoBackButton onClick={() => closeModal()} type={"simple"} />
                <ShareButton />
            </div>
            <GridGallery clsName="neg--top" data={splashImages1} />
        </SideModal>
    );
};

export default ItenaryPostsModal;