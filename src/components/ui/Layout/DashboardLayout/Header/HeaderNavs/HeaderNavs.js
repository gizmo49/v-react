import React from "react";
import { Link } from "react-router-dom";

const headerNavigation = [
    {
        title: "Trips",
        path: "/trips"
    },
    {
        title: "Wallet",
        path: "/wallet"
    },
    {
        title: "Profile",
        path: "/me"
    }
]

const HeaderNavs = ({ showByDefault }) => {

    return (
        <div className={`mx-auto d-none d-lg-block ${showByDefault ? '' : 'collapse navbar-collapse'}`} id={showByDefault ? 'generalBar' : 'mynavbar'}>
            <ul className='navbar-nav'>
                {headerNavigation.map((item, index) => (
                    <li
                        className={`nav-item`}
                        key={index}
                    >
                        <Link className='nav-link' to={item.path} key={index}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// data-toggle="collapse" data-target=".navbar-collapse"
export default HeaderNavs;
