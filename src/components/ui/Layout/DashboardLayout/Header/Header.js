import { Link } from "react-router-dom";
import { ReactComponent as BrandLogo } from "assets/logo.svg";
import { ReactComponent as VelioLogo } from "assets/velio-logo.svg";
import HeaderNavs from "./HeaderNavs/HeaderNavs";
import "./Header.scss";

const Header = () => {

    return (
        <header className="fixed-top" id="topHeader">
            <div className="mint-container">
                <nav className="navbar">
                    <Link
                        className='navbar-brand'
                        to='/'>
                        <BrandLogo />
                    </Link>

                    <HeaderNavs showByDefault />

                    <ul className="end__nav">
                        <li>
                            <Link
                                className='cta__link inverse'
                                to={{
                                    pathname: "/sign-in",
                                }}
                            >Log in</Link>
                        </li>
                        <li>
                            <Link
                                className='cta__link'
                                to={{
                                    pathname: "/sign-up",
                                }}
                            >Sign Up</Link>
                        </li>
                        <li>
                            <VelioLogo />
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <HomeBanner /> */}
        </header>
    );
};

export default Header;
