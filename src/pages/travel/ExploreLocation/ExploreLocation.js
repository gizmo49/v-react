import { SEO } from 'common/SeoWrapper/SeoWrapper';
import ExploreFeed from 'components/travel/ExploreFeed/ExploreFeed';
import DashboardLayout from 'components/ui/Layout/DashboardLayout/DashboardLayout';
import React from 'react';

const ExploreLocation = () => {
    return (
        <>
            <SEO title={"Explore Experiences on Velio"} />
            <DashboardLayout>
                <div className="mint-container">
                <h1 className='heading1 grey mb-4'>Explore Experiences on Velio</h1>
                <ExploreFeed />
                </div>
            </DashboardLayout>
        </>
    );
};

export default ExploreLocation;