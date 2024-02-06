import React from 'react';
import { SEO } from 'common/SeoWrapper/SeoWrapper';
import DashboardLayout from 'components/ui/Layout/DashboardLayout/DashboardLayout';
import Profile from 'components/dashboard/Profile/Profile';

const ProfileView = () => {
    return (
        <>
            <SEO title={"Explore Experiences on Velio"} />
            <DashboardLayout>
                <div className="mint-container">
                  <Profile/>
                </div>
            </DashboardLayout>
        </>
    );
};

export default ProfileView;