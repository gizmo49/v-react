import React, { useState } from "react";
import { SEO } from "common/SeoWrapper/SeoWrapper";
import AuthLayout from "components/ui/Layout/AuthLayout/AuthLayout";
import { SignInForm } from "components/auth/SignInForm/SignInForm";
import SocialConnect from "components/auth/SocialConnect/SocialConnect";
import { Link } from "react-router-dom";

import "./SignIn.scss";
import UpdateUserProfileModal from "components/auth/SignInForm/UpdateUserProfileModal/UpdateUserProfileModal";


const SignIn = () => {
    const [showModal, setModalVisibility] = useState(false);
    const showProfileUpdateModal = () => {
        setModalVisibility(true)
    }
    
    return (
        <>
            <SEO title={"sign In"} />
            <AuthLayout>
                <SocialConnect />
                <div className="py-3">
                <h6><span>Or use email</span></h6>
                </div>
                <SignInForm {...{showProfileUpdateModal}}/>
                <div className='auth__footnote'>
                    Already have an account?
                    <Link
                        to={{
                            pathname: "/sign-in",
                        }}
                        className='signin--link'>
                        Log in
                    </Link>
                </div>
            </AuthLayout>
            { showModal && <UpdateUserProfileModal closeModal={() => setModalVisibility(false)}/>}
        </>
    );
};

export default SignIn;
