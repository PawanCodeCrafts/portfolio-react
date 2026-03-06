import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import Button from "../Button/Button";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("#home");

    const navItems = [
        { id: "#home", label: "Home" },
        { id: "#about", label: "About Me" },
        // { id: "#experience", label: "Experience" },
        { id: "#services", label: "Services" },
        { id: "#projects", label: "Portfolio" },
        { id: "#contact", label: "Contact" },
    ];


    useEffect(() => {
        const handleScroll = () => {
            s
            setScrolled(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <>
            <nav className={`mynav navbar navbar-expand-lg navbar-dark ${scrolled ? "scrolled" : ""}`}>

                <div className="container">

                    {/* Logo */}
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <span>&lt;</span>
                        <span className="mx-1">Pawanpreet</span>
                        <span className="mx-1">/</span>
                        <span>&gt;</span>
                    </a>

                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>


                        {/* Nav links */}
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                {navItems.map((item) => (
                                    <li key={item.id} className="nav-item">
                                        <a className={`nav-link ${active === item.id ? "active" : ""}`} href={item.id}
                                            onClick={() => setActive(item.id)
                                            }>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}

                            </ul>
                            <div className="d-flex align-items-center gap-3">
                                <a className="social-icons" href="https://github.com/PawanCodeCrafts" target="_blank" rel="noreferrer">
                                    <FaGithub />
                                </a>
                                <a className="social-icons" href="https://www.linkedin.com/in/pawan-preet/" target="_blank" rel="noreferrer">
                                    <FaLinkedin />
                                </a>
                                {/* <a className="btn-color-outline" href="#" target="_blank">
                                Resume
                            </a> */}
                                <Button text="Resume"
                                    link="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav >



        </>

    );
};

export default Navbar;

