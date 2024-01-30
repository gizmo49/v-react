import React from 'react';
import { ReactComponent as ReviewStar } from "assets/images/icons/star.svg";
// import { AnimatePresence, motion } from 'framer-motion';
import { randomInteger } from 'utils/helper';
import { sampleFeed } from './data';
import { Link } from 'react-router-dom';

const ExplorePost = ({ post }) => {
    const randindex = randomInteger(0, post.iternaries?.length - 1)
    const coverImage = post.iternaries[randindex];
    return (
        <Link to={`/explore/${post?.slug}`} className="post--minimal">
            <div className="img-hover-zoom img-hover-zoom--slowmo">
                <img src={coverImage} alt={post?.tripName} />
            </div>
            <h6>{post?.tripName}</h6>
            <div className="review__summary">
                <ReviewStar />
                <div className="total__rating">
                    <span>{post?.avgRating}  <div className="circle"></div> {post?.totalRating} Reviews</span>
                </div>
            </div>
        </Link>
    )
}

const ExploreFeed = () => {
    return (
        <div className="row">
            {/* <AnimatePresence> */}
            {
                sampleFeed.map((post, index) => (
                    <div
                        key={index}
                        className='col-lg-2 pe-0'
                    // initial={{ y: `30%`, opacity: 0 }}
                    // animate={{ y: 10, opacity: 1 }}
                    // exit={{ y: `-30%`, opacity: 0, zIndex: -1 }}
                    // transition={{ duration: 2, delay: 0.2 * index }}
                    >
                        <ExplorePost post={post} />
                    </div>
                ))
            }
            {/* </AnimatePresence> */}

        </div>
    );
};

export default ExploreFeed;