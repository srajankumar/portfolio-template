import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed w-full backdrop-filter backdrop-blur-sm shadow-lg">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex text-xl font-medium items-center text-white px-3 mb-4 md:mb-0"
          >
            {"< / >"}
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
            <ul className="flex w-full">
              <li className="px-10 text-xl">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-white hover:text-gray-600"
                >
                  About
                </Link>
              </li>
              <li className="px-10 text-xl">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-white hover:text-gray-600"
                >
                  Projects
                </Link>
              </li>
              <li className="px-10 text-xl">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-white hover:text-gray-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="border-0 py-1 px-3 hover:text-gray-500 text-white text-base mt-4 md:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
                <g fill="#fff">
                  <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                  <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
                </g>
              </mask>
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="30"
                  stroke-dashoffset="30"
                  d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="30;0"
                  />
                </path>
                <path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.2s"
                    values="10;0"
                  />
                  <animate
                    attributeName="d"
                    dur="3s"
                    repeatCount="indefinite"
                    values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                  />
                </path>
              </g>
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
Navbar;
