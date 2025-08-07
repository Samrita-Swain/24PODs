import React, { useState } from "react";
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header w-full flex justify-between items-center bg-white shadow-md fixed top-0 z-50 px-6 py-4">

            {/* Logo */}
            <div className="logo">
                <a href="/"><img src="/images/demo-logo.png" alt="Logo" className="logo w-12 h-auto" /></a>
            </div>

            {/* Right Section */}
            <div className="header-right-side flex items-center gap-4">
                {/* Conditionally render Join Us button only when menu is closed */}
                {!menuOpen && (
                    <button className="button">
                        <a href="/contact_us">Join Us</a>
                    </button>
                )}

                {/* Hamburger / Cross toggle */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="Hamburger text-xl">
                    {menuOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
                </button>
            </div>

            {/* Fullscreen Overlay Menu */}
            {menuOpen && (
                <div className="openmenu fixed inset-0 bg-white z-40 flex flex-col items-center justify-center p-6">

                    {/* Menu Items */}
                    <nav className="menu flex flex-col items-center gap-5 text-lg font-semibold text-black">
                        <a href="/">Home</a>
                        <a href="/aboutus">About Us</a>
                        <a href="/how_can_we_help">How can we Help?</a>
                        <a href="/be_our_guest">Be Our Guest</a>
                        <a href="/become_a_member">Become A Member</a>
                        <a href="/inspire_from_reality">Inspire From Reality</a>
                        <a href="/gallery">Gallery</a>
                        <a href="/vblogs">Vblogs</a>
                    </nav>

                    {/* Join Us Button inside the menu */}
                    <button className="button menu-button mt-6">
                       <a href="/contact_us">Join Us</a>
                    </button>

                    {/* Social Icons */}
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
