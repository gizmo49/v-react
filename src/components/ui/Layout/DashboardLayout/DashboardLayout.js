import React from 'react';
import Header from './Header/Header';

const DashboardLayout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    );
};

export default DashboardLayout;