import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = (props) => {

    const {setAnimation, ...rest} = props;

    let scrollLastPosition = 0;
    const [hamburgerDisplay, setHamburger] = useState(false);
    const [navbarDisplay, setNavbar] = useState(!setAnimation);

    const handleNavbar = () => {
        scrollLastPosition == 0 ? setNavbar(false) : setNavbar(true);
    }

    if(setAnimation){
        useEffect(() => {
            document.addEventListener("scroll", (e) => {
                scrollLastPosition = window.scrollY;
                handleNavbar();
            })
        }, [navbarDisplay])
    }

    return <>
        <nav 
            className={!navbarDisplay ? "nav" : "nav active"}
        >
            <div className='nav-container'>
                <Link to="/" className='nav-logo'>
                    <img src="/texas-logo.svg" alt="Texas Logo" />
                </Link>
                <div 
                    className={!hamburgerDisplay ? "hamburger" : "hamburger active"}
                >
                    <div 
                        className='hamburger-icon'
                        onClick={() => {
                            setHamburger(!hamburgerDisplay);
                        }}
                    >
                        {!hamburgerDisplay ? "☰" : "⌵"}
                    </div>
                    <div className='ham-list'>
                        <Link to="/" className='ham-link'>
                            Home
                        </Link>
                        <Link to="/bestof" className='ham-link'>
                            Best of
                        </Link>
                        <Link to="/gallery" className='ham-link'>
                            Gallery
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        {/* <button
            className='animation-button'
            onClick={() => {
                setNavbar(!navbarDisplay);
            }}
        >
            Activate
        </button> */}
    </>
}

export default Navbar
