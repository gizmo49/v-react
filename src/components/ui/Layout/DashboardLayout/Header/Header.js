import { Link } from "react-router-dom";
import { ReactComponent as BrandLogo } from "assets/logo.svg";
import { ReactComponent as VelioLogo } from "assets/velio-logo.svg";
import HeaderNavs from "./HeaderNavs/HeaderNavs";
import "./Header.scss";

const Header = ({hideMobileNav}) => {

    return (
        <header className={`fixed-top ${hideMobileNav ? 'd-none d-lg-block' : ''}`} id="topHeader">
            <div className="mint-container">
                <nav className="navbar">
                    <Link
                        className='navbar-brand'
                        to='/'>
                        <BrandLogo />
                    </Link>

                    <HeaderNavs showByDefault />

                    <ul className="end__nav d-none d-lg-flex ">
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

                    <Link className="nav__avatar d-md-none" to='/me'>
                        <img src="https://source.unsplash.com/random/200x200/?girl+avatar" alt="avatar"/>
                    </Link>
                </nav>
            </div>
            {/* <HomeBanner /> */}
        </header>
    );
};

export default Header;
