import React from 'react';
import { sampleFeed, uniqueIternaries } from './data';
import { Link } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import ReviewSummary from '../common/ReviewSummary/ReviewSummary';


const ExplorePost = ({ post, index }) => {
    // const randindex = post.iternaries?.length - 1
    const randomIndex = uniqueIternaries.length > 0 ? index % uniqueIternaries.length : 0;
    const coverImage = uniqueIternaries[randomIndex];

    return (
        <Link to={`/explore/${post?.slug}`} className="post--minimal">
            <div className="post__flag">
                <img src="https://plus.unsplash.com/premium_photo-1674590090906-e3ed12522550" alt="flag" />
            </div>
            <div className="img-hover-zoom img-hover-zoom--slowmo">
                <img src={coverImage} alt={post?.tripName} />
            </div>
            <h6>{post?.tripName}</h6>
            <ReviewSummary avgRating={post.avgRating} totalRating={post.totalRating} />
            
        </Link>
    )
}

const ExploreFeed = () => {
    return (
        <ResponsiveMasonry
            className='mb-10x'
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3, 1040: 6 }}
        >
            <Masonry columnsCount={6} gutter="10px">
                {
                    sampleFeed.map((post, index) => (
                        <div
                            key={index}
                            // className='col-lg-2 col-sm-6 col-6 feed--container'
                        // initial={{ y: `30%`, opacity: 0 }}
                        // animate={{ y: 10, opacity: 1 }}
                        // exit={{ y: `-30%`, opacity: 0, zIndex: -1 }}
                        // transition={{ duration: 2, delay: 0.2 * index }}
                        >
                            <ExplorePost post={post} index={index} />
                        </div>
                    ))
                }
                {/* </AnimatePresence> */}

            </Masonry>
        </ResponsiveMasonry>
    );
};

export default ExploreFeed;