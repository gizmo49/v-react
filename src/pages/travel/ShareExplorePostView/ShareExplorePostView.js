import { SEO } from 'common/SeoWrapper/SeoWrapper';
import DashboardLayout from 'components/ui/Layout/DashboardLayout/DashboardLayout';
import Stories from 'react-insta-stories';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'components/ui';


const ShareExplorePost = () => {
    const [currentId, setCurrentId] = useState(0);
    let history = useHistory();


    const stories = [
        {
            url: "https://source.unsplash.com/random/900×700/?portugal+vacation",
            duration: 50000,
        },
        {
            url: "https://source.unsplash.com/random/300×700/?portugal+vacation",
            duration: 50000,
        },
        {
            url: "https://source.unsplash.com/random/900×700/?sweeden+vacation",
            duration: 50000,
        },
        {
            url: "https://source.unsplash.com/random/300×700/?nairobi+vacation",
            duration: 50000,
        }
    ];

    return (
        <div className="explore__post">
            <Stories
                currentIndex={currentId}
                stories={stories.map((s, index) => ({
                    content: () => {
                        return (
                            <div className="story-container">
                                <div className='story__prev'
                                    onClick={() => setCurrentId(currentId => currentId - 1)}>
                                </div>
                                <div className="story__heading">
                                    <h2>Girls trip to portugal</h2>
                                    <p>Travel around the world with ease and enjoy amazing experience</p>
                                </div>
                                <>
                                    <div className='story-container--item'>
                                        <img
                                            src={s.url}
                                            alt={`${index}_img`}
                                        />
                                    </div>
                                </>
                                <div className='story__next'
                                    onClick={() => setCurrentId(currentId => currentId + 1)}
                                ></div>
                                <div className="story__footer">
                                    <div className="footer__wrapper">

                                        <div className="post__author columns">
                                            <div className="author__img">
                                                <img src="https://source.unsplash.com/random/200x200/?vacation+selfie" alt="author" />
                                            </div>
                                            <div className="author__txt">
                                                <h6>Delores</h6>
                                                <p>124K followers</p>
                                            </div>
                                        </div>
                                        <Button
                                            type='submit'
                                            text='Open experience'
                                            onClick={() => history.replace('/explore/girls-trips-to-portugal')}
                                            classType='primary'
                                            otherClass='my-3 w-fit-content px-5'
                                        />
                                    </div>
                                </div>

                            </div>
                        );
                    },
                }))}
                keyboardNavigation
                defaultInterval={500000}
                width={'auto'}
                height={'100%'}
                loop={true}
                progressContainerStyles={{ padding: "24px 20px" }}
                onStoryEnd={(s, st) => {
                    console.log('story ended', s, st);
                    setCurrentId(currentId => currentId + 1);
                }}
                onAllStoriesEnd={(s, st) => {
                    console.log('all stories ended', s, st);
                    setCurrentId(0);
                }}
                onStoryStart={(s, st) => {
                    console.log('story started', s, st);
                    setCurrentId(currentId => (currentId + 1) - 1);
                }}

            />
        </div>
    );
}

const ShareExplorePostView = () => {
    return (
        <>
            <SEO title={"Explore Experiences on Velio"} />
            <DashboardLayout hideNav>
                <ShareExplorePost />
            </DashboardLayout>
        </>
    );
};

export default ShareExplorePostView;