import React from 'react';
import Slider from "react-slick";
import { Button } from 'components/ui';
import LazyLoadedImage from 'components/ui/LazyLoadedImage/LazyLoadedImage';
import "./PreAuthScreen.scss";

const PreAuthImgGrid = ({ data }) => {
    return (
        <div className="custom-grid-wrapper">
            {
                (data).map((dt, index) => (
                    <LazyLoadedImage
                        key={index}
                        wrapperClassName={`grid--item ${dt.wrapperAttr}`}
                        className='grid--img'
                        src={dt.src}
                        alt=""
                    />
                ))
            }
        </div>
    )
}

const splashImages1 = [
    {
        src: "https://source.unsplash.com/random/900×701/?beach+vacation",
        wrapperAttr: "tall"
    },
    {
        src: "https://source.unsplash.com/random/700×701/?beach+vacation",
        wrapperAttr: ""
    },
    {
        src: "https://source.unsplash.com/random/800×701/?beach+vacation",
        wrapperAttr: "tall"
    },
    {
        src: "https://source.unsplash.com/random/500×501/?beach+vacation",
        wrapperAttr: ""
    },
    {
        src: "https://source.unsplash.com/random/300×301/?beach+vacation",
        wrapperAttr: "wide"
    }
]

const splashImages2 = [
    {
        src: "https://source.unsplash.com/random/510×510/?friends+vacation",
        wrapperAttr: "tall"
    },
    {
        src: "https://source.unsplash.com/random/600×600/?beach+vacation",
        wrapperAttr: ""
    },
    {
        src: "https://source.unsplash.com/random/400×401/?beach+vacation",
        wrapperAttr: "tall"
    },
    {
        src: "https://source.unsplash.com/random/350×350/?beach+vacation",
        wrapperAttr: ""
    },
    {
        src: "https://source.unsplash.com/random/430×431/?beach+vacation",
        wrapperAttr: "wide"
    }
]

const splashImages3 = [
    {
        src: "https://source.unsplash.com/random/500×510/?beach+vacation",
        wrapperAttr: "tall"
    },
    {
        src: "https://source.unsplash.com/random/400×401/?beach+vacation",
        wrapperAttr: ""
    },
    {
        src: "https://source.unsplash.com/random/420×420/?beach+vacation",
        wrapperAttr: "tall"
    },
    {
        src: "https://source.unsplash.com/random/600×600/?beach+vacation",
        wrapperAttr: ""
    },
    {
        src: "https://source.unsplash.com/random/400×415/?beach+vacation",
        wrapperAttr: "wide"
    }
]
const PreAuthScreen = ({removeSplash}) => {
    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        // <div className="row justify-content-center">
        //     <div className='col-11'>
                <div>
                    <Slider {...settings}>
                        <PreAuthImgGrid data={splashImages1} />
                        <PreAuthImgGrid data={splashImages2} />
                        <PreAuthImgGrid data={splashImages3} />
                    </Slider>
                    <div className="preauth__txt wide">
                        <h5>Join to unlock the best of Velio</h5>
                        <p>Seeing the world, is the best part of living.<br /> Experiencing the world is my reason to live.</p>
                        <Button
                            type='button'
                            text='Get Started'
                            classType='primary'
                            // loading={loading}
                            otherClass='mt-2 w-100'
                            onClick={() => removeSplash()}
                        />
                    </div>
                </div>
        //     </div>
        // </div>

    );
};

export default PreAuthScreen;