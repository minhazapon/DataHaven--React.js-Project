import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode class on the body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    const NavZ = (
        <>
            <li className="text-xs font-thin">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-xs font-thin">
                <NavLink to="/add">Add Information</NavLink>
            </li>
            <li className="text-xs font-thin">
                <NavLink to="/service">Service</NavLink>
            </li>
            <li className="text-xs font-thin">
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 shadow p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            {NavZ}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2 ml-4 lg:ml-16">
                        <img
                            className="h-[40px] lg:h-[50px]"
                            src="https://cdn-icons-png.flaticon.com/128/5337/5337412.png"
                            alt="Logo"
                        />
                        <a className="text-2xl lg:text-4xl font-semibold dataText">
                            DataHaven
                        </a>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{NavZ}</ul>
                </div>

                <div className="navbar-end flex items-center gap-4 mr-4 lg:mr-16">
                    <div
                        className="relative w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        <div
                            className={`absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-0"
                                }`}
                        ></div>
                    </div>
                    <a className="btn dataText bg-cyan-600 text-white text-2xl">Sign In</a>
                </div>
            </div>
        </div>
    );
}

export default Nav;