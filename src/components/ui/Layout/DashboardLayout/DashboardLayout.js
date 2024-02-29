import React from 'react';
import Header from './Header/Header';

const DashboardLayout = ({children, hideMobileNav, hideNav}) => {
    return (
        <>
            {!hideNav && <Header {...{hideMobileNav}} />}
            <main className={`${hideNav ? "m-0" : ""}`}>
                {children}
            </main>
        </>
    );
};

export default DashboardLayout;