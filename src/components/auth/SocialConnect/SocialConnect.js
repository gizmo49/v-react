import { Button } from 'components/ui';
import React from 'react';
import { ReactComponent as Google } from "assets/images/icons/google.svg";
import { ReactComponent as Twitter } from "assets/images/icons/twitter.svg";


const SocialConnect = () => {
    return (
        <div id="socialConnect">
            <Button
                otherClass='btn btn--connect'
            >
                <Google />
                <span>Continue with Google</span>
            </Button>
            <Button
                otherClass='btn btn--connect'
            >
                <Twitter />
            </Button>
        </div>
    );
};

export default SocialConnect;