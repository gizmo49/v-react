import React from 'react';
import Header from './Header/Header';
import ToastContextProvider from 'common/Toast/context/ToastContextProvider';

const DashboardLayout = ({ children, hideMobileNav, hideNav }) => {
    return (
        <>
            {!hideNav && <Header {...{ hideMobileNav }} />}
            <ToastContextProvider>
                <main className={`${hideNav ? "m-0" : ""}`}>
                    {children}
                </main>
            </ToastContextProvider>
        </>
    );
};

export default DashboardLayout;