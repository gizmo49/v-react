import React from 'react';
import EditProfileForm from './EditProfileForm/EditProfileForm';
import { SideModal } from 'components/ui/Modal/SideModal/SideModal';

const EditProfileModal = ({closeModal, data}) => {
    return (
        <SideModal show={true} close={closeModal} closeIconType="simple">
            <EditProfileForm data={data} />
        </SideModal>
    );
};

export default EditProfileModal;