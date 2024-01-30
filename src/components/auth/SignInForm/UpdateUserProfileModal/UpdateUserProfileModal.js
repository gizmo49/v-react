import React from 'react';
import { Modal } from 'components/ui/Modal/Modal';
import UpdateUserProfileForm from './UpdateUserProfileForm/UpdateUserProfileForm';

const UpdateUserProfileModal = ({closeModal}) => {

    return (
        <>
            <Modal show={true} close={closeModal} contentClassName={'smaller-content'} centered>
                <UpdateUserProfileForm />
            </Modal>
        </>
    );
};

export default UpdateUserProfileModal;