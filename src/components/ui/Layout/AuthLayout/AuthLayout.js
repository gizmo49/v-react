import React, { useState } from 'react';
import { ReactComponent as BrandLogo } from "assets/logo.svg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { AnimatePresence, motion } from 'framer-motion';
import CustomerQoute from 'components/ui/CustomerQoute/CustomerQoute';
import { useLazyEffect } from 'utils/hooks';
import { Link } from 'react-router-dom';

const images = [
    "https://res.cloudinary.com/metacare/image/upload/v1705559953/velio/Rectangle_2078_1_ep6koc.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559965/velio/Rectangle_2081_1_l4oebf.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559988/velio/Rectangle_2112_1_ol0gsj.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705561882/velio/Rectangle_2082_1_immhgp.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705560015/velio/Rectangle_2113_zjcqi6.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559949/velio/Rectangle_2084_1_x6luyl.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559953/velio/Rectangle_2078_1_ep6koc.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559965/velio/Rectangle_2081_1_l4oebf.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559988/velio/Rectangle_2112_1_ol0gsj.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705560015/velio/Rectangle_2113_zjcqi6.png",
    "https://res.cloudinary.com/metacare/image/upload/v1705559949/velio/Rectangle_2084_1_x6luyl.png",
    "https://res.cloudinary.com/metacare/image/upload/v1706657103/Rectangle_2113_1_o4y6dl.png", "https://res.cloudinary.com/metacare/image/upload/v1706657102/Rectangle_3060_euf11u.png", "https://res.cloudinary.com/metacare/image/upload/v1706657102/Rectangle_3060_4_bicxyh.png", "https://res.cloudinary.com/metacare/image/upload/v1706657094/Rectangle_2078_2_ew7za7.png", "https://res.cloudinary.com/metacare/image/upload/v1706657098/Rectangle_3060_3_pzrfai.png", "https://res.cloudinary.com/metacare/image/upload/v1706657100/Rectangle_3060_2_aawozn.png", "https://res.cloudinary.com/metacare/image/upload/v1706657100/Rectangle_3060_2_aawozn.png", "https://res.cloudinary.com/metacare/image/upload/v1706657093/Rectangle_2112_2_bogzwo.png", "https://res.cloudinary.com/metacare/image/upload/v1706657093/Rectangle_2078_3_jxr01p.png"
]


const AuthLayout = ({ children }) => {
    const [locationPlace, setLocationPlaces] = useState(images)

    useLazyEffect(() => {
        const i = setInterval(() => {
            setLocationPlaces(([first, second, ...rest]) => [...rest, first, second]);
        }, 10000);

        return () => clearInterval(i);
        //eslint-disable-next-line
    }, []);
    return (
        <div className='auth__layout'>
            <div className="row">
                <div className="col-lg-5 auth__left">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <Link to="/">
                                <BrandLogo />
                            </Link>
                            <div className="pt-5">
                                <h1>Join to unlock the<br /> best of Velio</h1>
                            </div>
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-7 position-relative pe-5">
                    <ResponsiveMasonry
                        className='masonary__cover'
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                        <Masonry columnsCount={3} gutter="10px">
                            {locationPlace.map((image, i) => (

                                <AnimatePresence>
                                    <motion.div
                                        key={image}
                                        style={{ width: "100%", display: "block" }}
                                        initial={{ y: `30%`, opacity: 0 }}
                                        animate={{ y: 10, opacity: 1 }}
                                        exit={{ y: `-30%`, opacity: 0, zIndex: -1 }}
                                        transition={{ duration: 2, delay: 1 * i }}

                                    >
                                        <img

                                            src={image}
                                            alt="rec"
                                            className='mason__img'
                                        />

                                    </motion.div>
                                </AnimatePresence>

                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                    <CustomerQoute statement={`Seeing the world, is the best part of living. experiencing the world is my reason to live.`} />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;