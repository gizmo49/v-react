import React, { useState } from "react";
import FadeIn from "components/ui/effects/FadeIn";
import IternaryAccordCardItemHeader from "./IternaryAccordCardItemHeader/IternaryAccordCardItemHeader";
import "./IternaryAccordionCardItem.scss";


const IternaryAccordionCardItem = ({
    title, createdAt, price, children,
    ...rest
}) => {
    const [showAccordion, toggleAccordion] = useState(false);

    const handleClick = (source) => {

        toggleAccordion((prevState) => !prevState);

    };

    return (
        <div
            className={`accordion__card--item ${showAccordion ? "active" : ""
                }`}>
            <div
                className='accordion__header'
                onClick={() => handleClick()}>
                <IternaryAccordCardItemHeader
                    {...{ title, createdAt, price, isOpen: showAccordion }}
                />
            </div>
            {showAccordion && (
                <FadeIn>
                    <div className='accordion__body'>{children}</div>{" "}
                </FadeIn>
            )}
        </div>
    );

};



export default IternaryAccordionCardItem;
