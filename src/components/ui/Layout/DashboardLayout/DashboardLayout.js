import React from 'react';
import Header from './Header/Header';

const DashboardLayout = ({children, hideMobileNav}) => {
    return (
        <>
            <Header hideMobileNav={hideMobileNav} />
            <main>
                {children}
            </main>
        </>
    );
};

export default DashboardLayout;