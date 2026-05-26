import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [stickyMenu, setStickyMenu] = useState(false);
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setStickyMenu(window.scrollY > 0);

        };

        window.addEventListener(
            "scroll",
            handleScroll
        );

        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    }, []);

  return (

    <header
        className={`
            fixed left-0 top-0
            w-full z-[9999]
            py-7 lg:py-0
            transition-all
            ${
            stickyMenu
            ? `
            bg-black/70
            backdrop-blur-lg
            shadow-lg
            py-4
            `
            : ""
            }
            `}
    >

        <div
            className="
            max-w-[1170px]
            mx-auto
            px-4
            lg:flex
            items-center
            justify-between
            relative
            "
            >

            {/* Logo */}

            <div
                className="
                flex
                justify-between
                items-center
                lg:w-1/4
                "
                >

                <a href="/">
                    <img src="/images/logo.svg" alt="logo" />
                </a>

                

                <button
                    className="lg:hidden"
                    onClick={()=>
                    setNavigationOpen(
                    !navigationOpen
                    )}
                >

                    <div
                        className="
                        relative
                        w-6
                        h-6
                        "
                    >
                        <span
                            className={`
                            absolute
                            top-0
                            w-full
                            h-0.5
                            bg-white
                            duration-300

                            ${
                            navigationOpen
                            ? "rotate-45 top-2.5"
                            : ""
                            }

                            `}
                        />

                        <span
                            className={`
                            absolute
                            top-2.5
                            w-full
                            h-0.5
                            bg-white
                            duration-300
                            ${
                                navigationOpen
                                    ? "opacity-0"
                                    : ""
                                    }
                                `}
                        />

                        <span
                            className={`
                                absolute
                                bottom-0
                                w-full
                                h-0.5
                                bg-white
                                duration-300
                                ${
                                navigationOpen
                                ? "-rotate-45 bottom-3"
                                : ""
                                }
                            `}
                        />

                    </div>

                </button>
            </div>

               
            <div
                className={`
                    ${
                    navigationOpen
                    ? `
                    block
                    bg-black
                    rounded-xl
                    p-5
                    mt-4
                    `
                    : `
                    hidden
                    `
                    }
                    lg:flex
                    lg:items-center
                    lg:justify-between
                    lg:w-3/4
                    `}
                >
            <nav>

                <ul
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        gap-6
                        "
                    >

                    <li>
                      <Link to="/" className="block py-2 px-3  bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" >Home</Link>
                    </li>
                 <li>
                     <Link to="/about" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</Link>
                 </li>
            
                 <li>
                     <Link to="/contact" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</Link>
                 </li>
                 <li>
                     <Link to="/product" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Product</Link>
                 </li>
                 <li>
                     <Link to="/course" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Course</Link>
                 </li>                
                </ul>

            </nav>

            {/* Buttons */}

            <div
                className="
                flex
                gap-5
                mt-5
                lg:mt-0
                "
                >

                <button
                className="
                text-white
                "
                >
                Sign In
                </button>

                <button
                className="
                bg-blue-600
                px-5
                py-2
                rounded-lg
                text-white
                "
                >
                Sign Up
                </button>

            </div>

            </div>

        </div>

    </header>

  );

};

export default Navbar
