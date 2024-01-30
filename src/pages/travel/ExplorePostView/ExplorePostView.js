import { SEO } from 'common/SeoWrapper/SeoWrapper';
import ExplorePostDetailed from 'components/travel/ExplorePostDetailed/ExplorePostDetailed';
import DashboardLayout from 'components/ui/Layout/DashboardLayout/DashboardLayout';
import React from 'react';

const ExplorePostView = () => {
    return (
        <>
            <SEO title={"Explore Experiences on Velio"} />
            <DashboardLayout>
                <div className="mint-container">
                <ExplorePostDetailed />
                </div>
            </DashboardLayout>
        </>
    );
};

export default ExplorePostView;