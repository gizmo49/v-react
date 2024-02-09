import TabbedWrapperHeader from 'components/ui/TabbedWrapperHeader/TabbedWrapperHeader';
import React, { useState } from 'react';
import BucketList from './BucketList/BucketList';
import { ReactSVG } from 'react-svg';
import { imageLinks } from 'assets/images';
import Empty from 'components/ui/Empty/Empty';
import EditProfileModal from './modals/EditProfileModal/EditProfileModal';

const ProfileHeader = ({ user }) => {
    const [showProfileModal, toggleProfileModal] = useState(false)
    return (
        <>
        <div>
            <div className="row" id="profileHeader">
                <div className="col-lg-10 col-8">
                    <div className="row lite__h3p">
                        <div className="col-lg-3">
                            <h3>@{user?.username}</h3>
                            <p>{user?.userRank}</p>
                        </div>
                        <div className="col-lg-2 col-6">
                            <h3>{user.followers}</h3>
                            <p>Followers</p>
                        </div>
                        <div className="col-lg-2 col-6">
                            <h3>{user.following}</h3>
                            <p>Experiences</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-4 pe-0">
                    <div className="profile--picture">
                        <img src={user?.userImage} alt={user.username} />
                        <ReactSVG src={imageLinks?.icons?.userBadge} className='user__badge' onClick={() => toggleProfileModal(true)}/>
                    </div>
                </div>
            </div>
        </div>
        {
            showProfileModal && <EditProfileModal closeModal={() => toggleProfileModal(false)} />
        }
        </>
    )
}

const routeTabs = [
    {
        id: "bucket-list",
        title: "Bucket List"
    },
    {
        id: "likes",
        title: "Likes"
    },
]

const Profile = () => {

    const [currentTab, setCurrentTab] = useState(routeTabs[0].id)
    const user = {
        username: "lewatravel",
        userRank: "super traveler",
        followers: 40,
        following: 5,
        userImage: "https://source.unsplash.com/random/200x200/?vacation+girl"
    }

    const renderBasedOnTab = () => {
        switch (currentTab) {
            case "bucket-list":
                return <BucketList />
            case "likes":
                return <Empty mssgHeadline={`You’ve not saved any trips yet`} mssgContent={`Add flights, hotels and more so you can easily jump back in to Trips.`} />
            default:
                return ""
        }
    }
    console.log(currentTab, "currentTab")

    return (
        <div className=''>
            <ProfileHeader {...{ user }} />
            <TabbedWrapperHeader
                tabbedRoutes={routeTabs}
                handleClick={(val) => {
                    // console.log("val", val);
                    setCurrentTab(val)
                }}
                activeElement={currentTab}
            />
            <div className='render__wrapper'>
                {renderBasedOnTab()}
            </div>
        </div>
    );
};

export default Profile;