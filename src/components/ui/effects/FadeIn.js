/* eslint-disable */
import React from "react";
import { CSSTransitionGroup } from 'react-transition-group';

const FadeIn = ({ children, cls, pKey }) => {
    const nodeRef = React.useRef(null);
    return (
        <CSSTransitionGroup
            // nodeRef={nodeRef}
            component={React.Fragment}
            transitionName="home-views"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={5000}
            >
            <div className={`${cls}`} ref={nodeRef} key={pKey}>
                {children}
            </div>
        </CSSTransitionGroup>
    );
};

export default FadeIn