import React from "react";
import { Helmet } from "react-helmet";
import FadeIn from "components/ui/effects/FadeIn";
import { capitalizeFirstLetter } from "utils/helper";

export const SEO = ({ title }) => (
    <Helmet>
        <title>
            {`${process.env.REACT_APP_NAME} - ${capitalizeFirstLetter(title)}`}
        </title>
    </Helmet>
);

const SeoWrapper = ({ title, children }) => (
    <>
        <SEO title={title} />
        <FadeIn>{children}</FadeIn>
    </>
);

export default SeoWrapper;
