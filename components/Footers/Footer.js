import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faFacebook,
  faTwitter,
  faDribbble
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <footer className="relative inset-x-0 bg-blue-100/100 pt-8 pb-6 -bottom-0 ">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-100/100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let&apos;s keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-500/70">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <button
                  className="bg-white text-cyan-400 shadow-lg flex font-normal h-10 w-10 items-center hover:bg-cyan-600 justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  {/* <FontAwesomeIcon icon="fab fa-twitter" /> */}
                  <FontAwesomeIcon icon={faTwitter} style={{
                    height: '15px', width: '15px' 
                  }}/>
                </button>
                <button
                  className="bg-white flex text-cyan-600 shadow-lg font-normal h-10 w-10 items-center hover:bg-cyan-600 justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  {/* <i className="fab fa-facebook-square"></i> */}
                  <FontAwesomeIcon icon={faFacebook} 
                   style={{
                    height: '15px', width: '15px' 
                  }}
                  />
                </button>
                <button
                  className="bg-white flex text-pink-400 shadow-lg font-normal h-10 w-10 items-center hover:bg-cyan-600 justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  {/* <i className="fab fa-dribbble"></i> */}
                  <FontAwesomeIcon icon={faDribbble} 
                   style={{
                    height: '15px', width: '15px' 
                  }}
                  />
                </button>
                <button
                  className="bg-white flex text-blue-800 shadow-lg font-normal h-10 w-10 items-center hover:bg-cyan-600 justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  {/* <i className="fab fa-github"></i> */}
                  <FontAwesomeIcon icon={faGithub} 
                   style={{
                    height: '15px', width: '15px' 
                  }}
                  />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-500/50 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-500/70 hover:text-blue-500/90 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500/70 hover:text-blue-500/90 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500/70 hover:text-blue-500/90 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500/70 hover:text-blue-500/90 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-500/50 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-500/70 hover:text-blue-500/90 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500/70 hover:text-blue-500/90 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500/70 hover:text-blue-500/90 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500/70 hover:text-blue-500/90 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blue-300/70" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-500/70 font-semibold py-1">
                Copyright ?? {new Date().getFullYear()} Blog by{" "}
                <a
                  href="#"
                  className="text-gray-500/70 hover:text-blue-500/90"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
