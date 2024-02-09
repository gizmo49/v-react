import React from 'react';
import { ReactComponent as CameraIcon } from "assets/images/icons/camera.svg";
import { ReactComponent as PencilIcon } from "assets/images/icons/pencil.svg";
import { ReactComponent as ArrowRight } from "assets/images/icons/arrow-right.svg";


const EditProfileForm = ({ user }) => {
    // const [showProfile]
    return (
        <div className='edit__profile--form'>
            <div className="edit__profile--header">
                <h6>Edit profile</h6>
                <div className="profile__pic--edit">
                    <img src={`https://source.unsplash.com/random/200x200/?vacation+girl`} alt="avatar" />
                    <div className="edit__trigger">
                        <CameraIcon />
                    </div>
                </div>
            </div>
            <p>About you</p>
            <div className="edit__profile--fields">
                <div className="edit__profile--row">
                    <h6>Name</h6>
                    <div className="field--grp">
                        <p>lewatravel</p>
                    </div>
                    <PencilIcon />
                </div>
                <div className="edit__profile--row">
                    <h6>Username</h6>
                    <div className="field--grp">
                        <p>lewatravel</p>
                    </div>
                    <PencilIcon />
                </div>
                <div className="edit__profile--row">
                    <h6>Name</h6>
                    <div className="field--grp">
                        <p>lewatravel</p>
                    </div>
                    <PencilIcon />
                </div>
                <div className="edit__profile--row">
                    <h6>Bio</h6>
                    <div className="field--grp">
                        <p>Enjoy a well-organized travel experience ........</p>
                    </div>
                    <PencilIcon />
                </div>
                <div className="edit__profile--row">
                    <h6>Gender</h6>
                    <div className="field--grp">
                        <p>Male</p>
                    </div>
                    <ArrowRight />
                </div>
            </div>
        </div>
    );
};

export default EditProfileForm;