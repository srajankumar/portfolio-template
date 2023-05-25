import React from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-scroll";

const Body = () => {
  return (
    <div className="bg-black w-auto h-screen">
      {/* Home Section */}
      <section
        className="px-20 w-auto bg-gradient-to-t from-black via-gray-900 to-fuchsia-900 h-screen"
        id="home"
      >
        <div className="flex justify-center items-center h-full">
          <div class={styles.text1}>
            <h1 className="flex justify-center font-extrabold text-7xl md:text-8xl lg:text-9xl">
              SRAJAN
            </h1>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="w-auto bg-black h-screen" id="about">
        <div className="flex items-center py-36 lg:px-36 md:px-20 px-10 h-full">
          <div class={styles.text2}>
            <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl">
              About
            </h1>
            <h2 className="py-5 text-justify md:pr-0 pr-5 text-lg font-bold">
              I am Srajan Kumar, a second-year Computer Science Engineering
              student at Sahyadri College of Engineering and Management. Aiming
              to be a cool full-stack React and MERN developer and also explore
              other tech stacks. I also love to do drawings, listen to music,
              read manga, manhwa and ocassionally watch anime in my free time.
            </h2>

            <div className="flex flex-wrap">
              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <path
                    fill="#E44D26"
                    d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"
                  ></path>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <path
                    fill="#1572B6"
                    d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"
                  ></path>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <path
                    fill="#F0DB4F"
                    d="M1.408 1.408h125.184v125.185H1.408z"
                  ></path>
                  <path
                    fill="#323330"
                    d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                  ></path>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <path
                    fill="#03599C"
                    d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"
                  ></path>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <path
                    fill="#9C033A"
                    d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM82 66v-4h5v-5h5v5h5v4h-5v5h-5v-5h-5zm3.3-14C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5zM115 66h-5v5h-4v-5h-6v-4h6v-5h4v5h5v4z"
                  ></path>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <path
                    fill="#0074BD"
                    d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
                  ></path>
                  <path
                    fill="#EA2D2E"
                    d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
                  ></path>
                  <path
                    fill="#0074BD"
                    d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
                  ></path>
                  <path
                    fill="#EA2D2E"
                    d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
                  ></path>
                  <path
                    fill="#0074BD"
                    d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
                  ></path>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg
                  className="md:w-[2.5rem] w-[2rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <defs>
                    <linearGradient
                      id="logosNextjsIcon0"
                      x1="55.633%"
                      x2="83.228%"
                      y1="56.385%"
                      y2="96.08%"
                    >
                      <stop offset="0%" stop-color="#FFF" />
                      <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="logosNextjsIcon1"
                      x1="50%"
                      x2="49.953%"
                      y1="0%"
                      y2="73.438%"
                    >
                      <stop offset="0%" stop-color="#FFF" />
                      <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
                    </linearGradient>
                    <circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
                  </defs>
                  <mask id="logosNextjsIcon3" fill="#fff">
                    <use href="#logosNextjsIcon2" />
                  </mask>
                  <g mask="url(#logosNextjsIcon3)">
                    <circle cx="128" cy="128" r="128" />
                    <path
                      fill="url(#logosNextjsIcon0)"
                      d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
                    />
                    <path
                      fill="url(#logosNextjsIcon1)"
                      d="M163.556 76.8h17.067v102.4h-17.067z"
                    />
                  </g>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <path
                    d="M27.235 13.885c-7.177 0-12.486 6.284-12.249 13.099.228 6.546-.068 15.026-2.203 21.94-2.14 6.936-5.76 11.319-11.673 11.883v6.387c5.913.563 9.533 4.947 11.673 11.883 2.135 6.914 2.43 15.394 2.203 21.94-.238 6.815 5.072 13.098 12.249 13.098h73.54c7.177 0 12.486-6.284 12.249-13.098-.228-6.546.068-15.026 2.202-21.94 2.14-6.935 5.751-11.319 11.664-11.883v-6.387c-5.913-.563-9.523-4.947-11.664-11.883-2.134-6.914-2.43-15.394-2.202-21.94.237-6.815-5.072-13.099-12.25-13.099zm58.114 61.686c0 9.384-7.002 15.073-18.621 15.073H45.306a.491.491 0 01-.491-.491V37.827a.491.491 0 01.491-.492h21.309c9.689 0 16.047 5.246 16.047 13.3 0 5.653-4.277 10.713-9.727 11.6v.296c7.418.813 12.414 5.948 12.414 13.04zM64.571 44.096H53.293v15.922h9.5c7.342 0 11.391-2.955 11.391-8.238 0-4.95-3.481-7.684-9.613-7.684zm-11.278 22.24v17.548h11.695c7.645 0 11.695-3.066 11.695-8.83 0-5.763-4.163-8.718-12.187-8.718z"
                    fill="#7952b3"
                  ></path>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem] pt-6">
                <svg
                  className="md:w-[2.5rem] w-[2rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 154"
                >
                  <defs>
                    <linearGradient
                      id="logosTailwindcssIcon0"
                      x1="-2.778%"
                      x2="100%"
                      y1="32%"
                      y2="67.556%"
                    >
                      <stop offset="0%" stop-color="#2298BD" />
                      <stop offset="100%" stop-color="#0ED7B5" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#logosTailwindcssIcon0)"
                    d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
                  />
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 128 128"
                >
                  <g transform="matrix(.994 0 0 .994 .389 -1.445)">
                    <g opacity=".783">
                      <path d="m53.3 10.088l-44.8 45.8c-16.9 16.9 11 15.5 21.1 21.9c4.7 3-15 6.9-11 11c3.9 4 23.6 7.7 27.5 11.6c3.9 4-7.9 8.2-4 12.3c3.8 4 12.9.2 14.5 9.3c1.2 6.7 16.7 3.4 23.7-2.4c4.3-3.7-7.5-3.7-3.6-7.7c9.8-9.9 18.5-4.5 22-13.6c2-4.9-14.8-8.4-10.3-11.5c10.7-7.5 49.7-11.3 31.7-29.3l-46.3-47.4c-5.8-5.4-15.2-5.4-20.5 0zm51.3 88.2c0 2.3 17.7 3.6 16.7-.5c-1.4-7-14.8-6.4-16.7.5zm-75.4 12.1c4 3.5 10.1-.8 12-5.6c-3.9-5.2-18.3.2-12 5.6zm73.2-7.3c-5 4.6.9 9.3 5.8 6.2c1.3-.9-.1-5.1-5.8-6.2z" />
                      <path
                        d="m53.3 11.088l-44.8 45.8c-16.9 17 11 15.6 21.1 22c4.7 3-15 6.9-11 11c3.9 4 23.6 7.7 27.5 11.6c3.9 4-7.9 8.2-4 12.3c3.8 4 12.9.2 14.5 9.3c1.2 6.7 16.7 3.4 23.7-2.4c4.3-3.7-7.5-3.7-3.6-7.7c9.8-9.9 18.5-4.5 22-13.6c2-4.9-14.8-8.4-10.3-11.5c10.6-7.5 49.7-11.3 31.7-29.3l-46.3-47.5c-5.8-5.4-15.2-5.4-20.5 0zm51.3 88.3c0 2.3 17.7 3.6 16.7-.5c-1.4-7-14.8-6.5-16.7.5zm-75.4 12c4 3.5 10.1-.8 12-5.6c-3.9-5.1-18.3.3-12 5.6zm73.2-7.2c-5 4.6.9 9.3 5.8 6.2c1.3-.9-.1-5.2-5.8-6.2z"
                        opacity=".576"
                      />
                    </g>
                    <path d="M53.3 9L8.5 54.8c-16.9 16.9 11 15.5 21.1 21.9c4.7 3-15 6.9-11 11c3.9 4 23.6 7.7 27.5 11.6c3.9 4-7.9 8.2-4 12.3c3.8 4 12.9.2 14.5 9.3c1.2 6.7 16.7 3.4 23.7-2.4c4.3-3.7-7.5-3.7-3.6-7.7c9.8-9.9 18.5-4.5 22-13.6c2-4.9-14.8-8.4-10.3-11.5c10.6-7.5 49.7-11.3 31.7-29.3L73.8 9C68 3.6 58.6 3.6 53.3 9zm51.3 88.2c0 2.3 17.7 3.6 16.7-.5c-1.4-6.9-14.8-6.4-16.7.5zm-75.4 12.1c4 3.5 10.1-.8 12-5.6c-3.9-5.2-18.3.3-12 5.6zm73.2-7.3c-5 4.6.9 9.3 5.8 6.2c1.3-.9-.1-5.1-5.8-6.2z" />
                    <path
                      fill="none"
                      d="M53.3 9L8.5 54.8c-16.9 16.9 11 15.5 21.1 21.9c4.7 3-15 6.9-11 11c3.9 4 23.6 7.7 27.5 11.6c3.9 4-7.9 8.2-4 12.3c3.8 4 12.9.2 14.5 9.3c1.2 6.7 16.7 3.4 23.7-2.4c4.3-3.7-7.5-3.7-3.6-7.7c9.8-9.9 18.5-4.5 22-13.6c2-4.9-14.8-8.4-10.3-11.5c10.6-7.5 49.7-11.3 31.7-29.3L73.8 9C68 3.6 58.6 3.6 53.3 9zm51.3 88.2c0 2.3 17.7 3.6 16.7-.5c-1.4-6.9-14.8-6.4-16.7.5zm-75.4 12.1c4 3.5 10.1-.8 12-5.6c-3.9-5.2-18.3.3-12 5.6zm73.2-7.3c-5 4.6.9 9.3 5.8 6.2c1.3-.9-.1-5.1-5.8-6.2z"
                    />
                    <defs>
                      <path
                        id="deviconInkscape0"
                        d="M53.4 9.5L9.1 54.9C-7.7 71.7 19.9 70.3 29.9 76.6c4.6 3-14.8 6.9-10.9 10.9c3.9 4 23.3 7.6 27.2 11.5c3.9 4-7.8 8.2-4 12.1c3.8 4 12.8.2 14.4 9.2c1.2 6.7 16.6 3.3 23.4-2.4l-3.5-7.6c9.7-9.8 18.3-4.4 21.8-13.4c1.9-4.8-14.6-8.3-10.2-11.4c10.5-7.4 49.2-11.2 31.4-29l-45.9-47c-5.6-5.3-15-5.3-20.2 0zM42.7 79.1c1 0 33.1 4.3 20.7 7.6c-4.7 1.3-26.4-7.6-20.7-7.6zm61.5 17.8c0 2.3 17.5 3.5 16.6-.5c-1.4-6.9-14.7-6.3-16.6.5zm-74.7 12c4 3.4 10-.8 11.9-5.6c-3.8-5.1-18.1.3-11.9 5.6zm72.6-7.2c-4.9 4.5.9 9.2 5.7 6.1c1.2-.9-.2-5.1-5.7-6.1z"
                      />
                    </defs>
                    <clipPath id="deviconInkscape1">
                      <use href="#deviconInkscape0" />
                    </clipPath>
                    <g
                      clip-path="url(#deviconInkscape1)"
                      transform="matrix(.991 0 0 .991 .605 .604)"
                    >
                      <linearGradient
                        id="deviconInkscape2"
                        x1="98.293"
                        x2="74.286"
                        y1="237.026"
                        y2="215.319"
                        gradientTransform="matrix(.985 0 0 -.985 6.128 272.439)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#C0CDF9" />
                        <stop
                          offset="1"
                          stop-color="#07092D"
                          stop-opacity=".288"
                        />
                      </linearGradient>
                      <path
                        fill="url(#deviconInkscape2)"
                        d="M53.4 9.5L9.1 54.9C-7.7 71.7 19.9 70.3 29.9 76.6c4.6 3-14.8 6.9-10.9 10.9c3.9 4 23.3 7.6 27.2 11.5c3.9 4-7.8 8.2-4 12.1c3.8 4 12.8.2 14.4 9.2c1.2 6.7 16.6 3.3 23.4-2.4l-3.5-7.6c9.7-9.8 18.3-4.4 21.8-13.4c1.9-4.8-14.6-8.3-10.2-11.4c10.5-7.4 49.2-11.2 31.4-29l-45.9-47c-5.6-5.3-15-5.3-20.2 0zM42.7 79.1c1 0 33.1 4.3 20.7 7.6c-4.7 1.3-26.4-7.6-20.7-7.6zm61.5 17.8c0 2.3 17.5 3.5 16.6-.5c-1.4-6.9-14.7-6.3-16.6.5zm-74.7 12c4 3.4 10-.8 11.9-5.6c-3.8-5.1-18.1.3-11.9 5.6zm72.6-7.2c-4.9 4.5.9 9.2 5.7 6.1c1.2-.9-.2-5.1-5.7-6.1z"
                      />
                    </g>
                    <linearGradient
                      id="deviconInkscape3"
                      x1="33.173"
                      x2="60.308"
                      y1="245.076"
                      y2="217.941"
                      gradientTransform="matrix(1.003 0 0 -1.003 -.413 276.586)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <path
                      fill="url(#deviconInkscape3)"
                      d="M12.5 57.3C.3 69.3 21.7 66 38.1 72.4l34-59.7c-5.1-5.3-11.7-4.8-16.4 0L12.5 57.3z"
                      opacity=".505"
                    />
                    <linearGradient
                      id="deviconInkscape4"
                      x1="48.612"
                      x2="81.173"
                      y1="250.177"
                      y2="217.616"
                      gradientTransform="matrix(.994 0 0 -.994 2.709 274.439)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <path
                      fill="url(#deviconInkscape4)"
                      d="m71.1 12.3l17.7 18c1.6 1.6 1.6 5 .7 6l-8.8-7.2L79 39.6l-7.3-3.9l-11.8 7.5L56 27.5l-6.3 13.7l-15.9-.2c-3 0-2.6-3.1.5-6.3c6.2-6.8 18.2-18.5 22-22.5c4-4 10.8-3.8 14.8.1z"
                    />
                    <radialGradient
                      id="deviconInkscape5"
                      cx="51.136"
                      cy="13.518"
                      r="33.212"
                      gradientTransform="matrix(.827 0 0 -.553 1.123 126.746)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </radialGradient>
                    <path
                      fill="url(#deviconInkscape5)"
                      d="M46.8 97.4s1.9 2.9 1.7 4.3c-.4 2.7-6.2 4.1-4.9 6.5c1.3 2.4 5.9 1 9.7 3.5c3.8 2.5 2.8 7.5 5.6 8.8c5.4 2.5 19.8-4.3 19-4.1c-.7.1-14.1 2.9-17.1.5c-3.4-2.8-4.4-4.7-7-6.4c-2.4-1.5-5.7-2.2-6.5-3.4c-.8-1.3 1.6-2.9 1.7-5.3c.2-1.6-2.2-4.4-2.2-4.4z"
                      opacity=".217"
                    />
                    <g opacity=".276">
                      <radialGradient
                        id="deviconInkscape6"
                        cx="147.452"
                        cy="14.758"
                        r="33.212"
                        gradientTransform="matrix(1.055 0 0 -.706 -97.55 130.348)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </radialGradient>
                      <path
                        fill="url(#deviconInkscape6)"
                        d="M46.8 97.4s1.9 2.9 1.7 4.3c-.4 2.7-6.2 4.1-4.9 6.5c1.3 2.4 5.9 1 9.7 3.5c3.8 2.5 2.8 7.5 5.6 8.8c5.4 2.5 19.8-4.3 19-4.1c-23.8.1-19.3-6-28.5-10.1c-1.3-.6-.6-2.2-.4-4.6c.2-1.5-2.2-4.3-2.2-4.3z"
                      />
                    </g>
                    <radialGradient
                      id="deviconInkscape7"
                      cx="-53.737"
                      cy="94.673"
                      r="37.174"
                      gradientTransform="matrix(.526 0 0 -.223 130.969 98.356)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </radialGradient>
                    <path
                      fill="url(#deviconInkscape7)"
                      d="M87.2 84.9c21.3-7.8 28.2-8.9 35.2-16C114.2 75.8 97 79.5 83 85.6l4.2-.7z"
                      opacity=".453"
                    />
                    <g opacity=".512">
                      <radialGradient
                        id="deviconInkscape8"
                        cx="-45.82"
                        cy="80.197"
                        r="37.174"
                        gradientTransform="matrix(.526 0 0 -.223 130.969 97.429)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </radialGradient>
                      <path
                        fill="url(#deviconInkscape8)"
                        d="M87.2 83.9c35.1-12.4 29.2-12.4 35.2-16c-11.2 4.3-32 4.7-39.4 16.7l4.2-.7z"
                      />
                    </g>
                    <linearGradient
                      id="deviconInkscape9"
                      x1="-32.429"
                      x2="-32.293"
                      y1="73.095"
                      y2="66.244"
                      gradientTransform="matrix(.526 0 0 -.526 130.306 130.092)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <path
                      fill="url(#deviconInkscape9)"
                      d="M117.8 93.8c0 .8-2 1.4-4.6 1.4c-2.5 0-4.6-.6-4.6-1.4c0-.8 2-1.4 4.6-1.4c2.6 0 4.6.6 4.6 1.4z"
                      opacity=".286"
                    />
                    <g opacity=".621">
                      <linearGradient
                        id="deviconInkscapea"
                        x1="112.548"
                        x2="112.548"
                        y1="76.804"
                        y2="71.974"
                        gradientTransform="matrix(.709 0 0 -1.134 33.501 178.262)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                      <path
                        fill="url(#deviconInkscapea)"
                        d="M119.4 95.4c0 1.7-2.8 3-6.1 3c-3.4 0-6.1-1.4-6.1-3c0-1.7 2.8-3 6.1-3c3.4 0 6.1 1.4 6.1 3z"
                      />
                    </g>
                    <radialGradient
                      id="deviconInkscapeb"
                      cx="-34.115"
                      cy="13.297"
                      r="15.297"
                      gradientTransform="matrix(.526 0 0 -.078 130.969 98.77)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </radialGradient>
                    <path
                      fill="url(#deviconInkscapeb)"
                      d="M104.9 97.1c2.2 2 14.2 3 16.2-.6c-3.9 2.8-12.5 1.8-16.2.6z"
                    />
                    <linearGradient
                      id="deviconInkscapec"
                      x1="-643.912"
                      x2="-643.777"
                      y1="327.836"
                      y2="320.984"
                      gradientTransform="matrix(.203 -.103 -.238 -.469 311.261 190.221)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <path
                      fill="url(#deviconInkscapec)"
                      d="M104.9 103.8c.4.9.2 1.9-.6 2.3c-.8.4-1.8 0-2.2-.8c-.4-.9-.2-1.9.6-2.3c.8-.5 1.8-.1 2.2.8z"
                      opacity=".286"
                    />
                    <g opacity=".621">
                      <linearGradient
                        id="deviconInkscaped"
                        x1="-341.635"
                        x2="-341.635"
                        y1="195.138"
                        y2="190.308"
                        gradientTransform="matrix(.273 -.139 -.513 -1.011 295.216 251.45)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                      <path
                        fill="url(#deviconInkscaped)"
                        d="M105.8 104.2c.7 1.3.3 2.8-.9 3.4c-1.2.6-2.6 0-3.3-1.3c-.7-1.3-.3-2.8.9-3.4c1.2-.6 2.6 0 3.3 1.3z"
                      />
                    </g>
                    <radialGradient
                      id="deviconInkscapee"
                      cx="-645.599"
                      cy="1737.484"
                      r="15.297"
                      gradientTransform="matrix(.203 -.103 -.035 -.069 297.352 162.155)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </radialGradient>
                    <path
                      fill="url(#deviconInkscapee)"
                      d="M101.9 107.8c1.7 1.4 8.3 1.5 5.8-2.4c.7 3.1-3.8 2.8-5.8 2.4z"
                    />
                    <radialGradient
                      id="deviconInkscapef"
                      cx="-185.187"
                      cy="69.66"
                      r="24.692"
                      gradientTransform="matrix(.526 0 0 -.214 130.969 105.831)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" stop-opacity=".33" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </radialGradient>
                    <path
                      fill="url(#deviconInkscapef)"
                      d="M21 87.3c0-.3 22.4 6.8 26.2 10.7c-3.1-3.1-19.1-10.1-21.5-10.2c-2.4-.1-4.4-.3-4.7-.5z"
                    />
                    <g transform="matrix(.879 -.193 .234 .696 -20.21 36.726)">
                      <linearGradient
                        id="deviconInkscapeg"
                        x1="-136.743"
                        x2="-136.607"
                        y1="250.438"
                        y2="243.586"
                        gradientTransform="matrix(.463 .102 .123 -.366 65.856 208.72)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                      <path
                        fill="url(#deviconInkscapeg)"
                        d="M38 105.3c0 .8-2 1.4-4.6 1.4s-4.6-.6-4.6-1.4c0-.8 2-1.4 4.6-1.4s4.6.6 4.6 1.4z"
                        opacity=".286"
                      />
                      <g opacity=".621">
                        <linearGradient
                          id="deviconInkscapeh"
                          x1="60.343"
                          x2="60.343"
                          y1="183.942"
                          y2="179.112"
                          gradientTransform="matrix(.623 .219 .166 -.789 -34.636 234.581)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#fff" />
                          <stop offset="1" stop-color="#fff" stop-opacity="0" />
                        </linearGradient>
                        <path
                          fill="url(#deviconInkscapeh)"
                          d="M39.6 106.9c0 1.7-2.8 3-6.1 3s-6.1-1.4-6.1-3c0-1.7 2.8-3 6.1-3s6.1 1.3 6.1 3z"
                        />
                      </g>
                    </g>
                    <g opacity=".616">
                      <radialGradient
                        id="deviconInkscapei"
                        cx="-62.572"
                        cy="357.021"
                        r="11.363"
                        gradientTransform="matrix(.624 -.173 -.065 -.233 95.948 182.007)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </radialGradient>
                      <path
                        fill="url(#deviconInkscapei)"
                        d="M28.2 106.3s1.2 3.2 4.5 3.4c3.4.2 7.2-4 7.5-5.5c-.6 1.3-3.8 5.2-7.9 5.1c-2.4 0-4.1-3-4.1-3z"
                      />
                    </g>
                    <radialGradient
                      id="deviconInkscapej"
                      cx="193.011"
                      cy="256.754"
                      r="59.425"
                      gradientTransform="matrix(1.712 0 0 -1.685 -261.607 451.789)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </radialGradient>
                    <path
                      fill="none"
                      stroke="url(#deviconInkscapej)"
                      stroke-width=".488"
                      d="M63.4 6.5c-3.4 0-6.7 1.2-9 3.6L9.7 55.9c-4.1 4.1-5.1 6.8-4.8 8.3c.1.8.5 1.4 1.3 2.1c.8.7 2 1.4 3.4 2c2.9 1.2 6.7 2.2 10.5 3.2s7.5 2.1 10.3 3.9c.4.3.8.6 1.1 1.1c.3.5.4 1.1.3 1.7c-.2 1.1-.9 1.7-1.6 2.2c-1.4 1.1-3.3 1.9-5.2 2.8s-3.8 1.9-4.8 2.6c-.5.4-.7.7-.6.7c0 0-.1-.3.1-.1c.6.6 2.5 1.7 4.9 2.6s5.3 1.9 8.2 2.8c2.9 1 5.9 1.9 8.4 2.9s4.6 1.9 5.9 3.3c.7.7 1.2 1.6 1.3 2.4c.1.9-.1 1.7-.5 2.4c-.7 1.4-1.8 2.5-2.7 3.5c-1 1-1.9 2-2.2 2.7c-.2.3-.2.5-.2.7c0 .1 0 .3.3.6c1.3 1.4 4.1 1.6 7.3 2.3c1.6.4 3.3.9 4.7 2.2s2.5 3.1 3 5.7c.2 1.1.8 1.6 2.1 2c1.4.4 3.5.5 5.8.2c4.6-.7 10.1-2.9 13.2-5.5l.2-.2c-.2-.2-.7-.5-1.5-.9c-1-.5-2.1-.9-3-2c-.4-.6-.7-1.4-.6-2.3c.1-.9.6-1.6 1.2-2.2c5.2-5.2 10.2-6.5 14-7.5c1.9-.5 3.5-1 4.7-1.7c1.2-.8 2.2-1.8 3-3.8c.1-.2.1-.3 0-.5c-.1-.3-.4-.7-.9-1.1c-1-.9-2.7-1.8-4.4-2.8c-1.7-.9-3.3-1.8-4.5-2.9c-.6-.6-1.2-1.2-1.3-2.3c-.1-1.1.6-2 1.4-2.6c3-2.1 7.5-3.7 12.4-5.4c4.9-1.7 10.2-3.5 14.4-5.5c4.3-2 7.4-4.3 8.4-6.6c.5-1.2.6-2.3.1-3.9s-1.7-3.4-3.9-5.5L72.7 10.2c-2.6-2.5-6-3.7-9.3-3.7zm49.8 86.9c-2.9.1-5.5 1.4-6.6 3.5c.3.1.6.3 1.1.4c1.5.3 3.6.6 5.6.6s4.1-.1 5.4-.5c.5-.2.8-.3 1-.4c-.3-1.2-.9-2-2.1-2.6c-1.1-.8-2.8-1.1-4.4-1zm-76.5 9.8c-2.3-.2-5.1.7-6.5 1.9c-.7.6-1 1.1-1 1.4c0 .3.1.8 1 1.6c1.5 1.3 3.1 1.1 5 .1c1.6-.9 3-2.5 3.9-4.2c-.6-.4-1.4-.7-2.4-.8zm66.2.7c-.5.6-.7 1.2-.8 1.6c0 .6.1 1 .5 1.4c.8.8 2.5 1.1 4.3.1c0-.2-.1-.5-.4-.9c-.4-.8-1.7-1.7-3.6-2.2z"
                    />
                    <g opacity=".325">
                      <linearGradient
                        id="deviconInkscapek"
                        x1="-224.589"
                        x2="-161.637"
                        y1="68.903"
                        y2="52.258"
                        gradientTransform="matrix(.485 0 0 -.485 149.184 125.791)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                      <path
                        fill="url(#deviconInkscapek)"
                        d="M38.8 78.2c-2.7.8-11.4 4.1-10.2 6.6c1.2 2.4 21.5 3.4 24.6 10.6c1.4 3.1-3.1 5.5-2 8.7c.9 2.5 7.6 8.7 11.9 11.7c3.4 2.3 7.8-1.9 6-5.3c-2.8-5.5 9.9-12.2 15.6-15.3c3.3-1.8-6.9-10.6-6.9-10.6l-39-6.4z"
                      />
                    </g>
                    <linearGradient
                      id="deviconInkscapel"
                      x1="13.153"
                      x2="9.253"
                      y1="197.768"
                      y2="188.832"
                      gradientTransform="matrix(.88 0 0 -.88 42.035 252.063)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#EEEEEC" />
                      <stop offset="1" stop-color="#EEEEEC" stop-opacity="0" />
                    </linearGradient>
                    <path
                      fill="url(#deviconInkscapel)"
                      d="M39.8 80.7c2.4 1.8 7.2.7 10.1 2c6.9 3.1 15.4 6.6 13.8.4L62 84.6v-2.8l-4.1 1s-3.2-2.5-4.6-3.4c-.3-.2-1.9 1.4-1.9 1.4l-.3-1.7c-2-.2-4-.3-5.8-.3c-4.2.1-7 .7-5.5 1.9z"
                    />
                    <g opacity=".478">
                      <radialGradient
                        id="deviconInkscapem"
                        cx="26.356"
                        cy="55.589"
                        r="24.385"
                        gradientTransform="matrix(.656 0 0 -.834 66.991 147.128)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </radialGradient>
                      <path
                        fill="url(#deviconInkscapem)"
                        d="M85.1 86.3c-.9 3.4 11.5 8.1 10.5 10.5c-2 5.2-13.2 1.7-21.8 12.6c-1.2 1.6 1.7 7.2 1.3 6.5s-3.4-5.3-2.6-7.6c2.4-7.1 26-9.8 21.7-13.2c-2.5-1.9-11.4-7.3-9.1-8.8z"
                      />
                    </g>
                    <path
                      fill="#fff"
                      d="M113 93.4c0 .3-.6.6-1.4.6c-.8 0-1.4-.3-1.4-.6s.6-.6 1.4-.6c.8 0 1.4.3 1.4.6zm-9.1 10.4c0 .3-.4.6-.9.6s-.9-.3-.9-.6s.4-.6.9-.6s.9.3.9.6zm-68.7-.5c0 .3-.7.6-1.5.6s-1.5-.3-1.5-.6s.7-.6 1.5-.6s1.5.3 1.5.6z"
                      opacity=".586"
                    />
                    <linearGradient
                      id="deviconInkscapen"
                      x1="-245.694"
                      x2="-235.88"
                      y1="88.661"
                      y2="80.864"
                      gradientTransform="matrix(.49 0 0 -.49 147.66 125.008)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <path
                      fill="url(#deviconInkscapen)"
                      d="M34.3 78.5c-7.8 4.8-19.8 6.5-6.6 9.7c-1.6-3.5 3.4-3.1 6.6-9.7z"
                      opacity=".251"
                    />
                    <g opacity=".363">
                      <linearGradient
                        id="deviconInkscapeo"
                        x1="-115.448"
                        x2="-144.875"
                        y1="55.254"
                        y2="134.487"
                        gradientTransform="matrix(.485 0 0 -.485 149.184 125.791)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#729FCF" />
                        <stop
                          offset="1"
                          stop-color="#729FCF"
                          stop-opacity="0"
                        />
                      </linearGradient>
                      <path
                        fill="url(#deviconInkscapeo)"
                        d="M61.9 122.2s12-1.1 14.7-4.6c1.6-2-6.4-4.4-4.7-6.4c6.5-7.4 12-7.1 19.6-10.3c7.6-3.1 4.8-4.6 2.3-6c-4.2-2.3-13.6-4.8-10.5-10.4c3.1-5.6 30.4-13.4 30.4-13.4c8.3-2.8 7.2-7.9 3.2-12.2L92.6 34.8s1.2 23-3.7 32.9C82.8 79.8 50.5 93.4 64 94.9c4.8.5 7.1 2.2 9 5.8c4 7.6-11.1 21.5-11.1 21.5z"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <path
                    d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0"
                    fill="#2489ca"
                  ></path>
                  <path
                    d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0"
                    fill="#1070b3"
                  ></path>
                  <path
                    d="M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0"
                    fill="#0877b9"
                  ></path>
                  <path
                    d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0"
                    fill="#3c99d4"
                  ></path>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <path
                    fill="#F34F29"
                    d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
                  ></path>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg viewBox="0 0 128 128" className="md:w-[2.5rem] w-[2rem]">
                  <g fill="white">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>
              </div>

              <div className="py-[1rem] pr-[2rem]">
                <svg
                  className="md:w-[2.5rem] w-[2rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 222"
                >
                  <path d="m128 0l128 221.705H0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="w-auto bg-black min-h-screen" id="projects">
        <section className="flex pt-[10rem] justify-center items-center">
          <div className="card-grid">
            <a className="card" href="https://srajan.vercel.app/">
              <div
                className="card__background"
                style={{
                  backgroundImage: "url(/projects/portfolio.png)",
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">PORTFOLIO WEBSITE</p>
                <h3 className="card__heading">Personal Portfolio</h3>
              </div>
            </a>
            <a className="card" href="https://noties.vercel.app/">
              <div
                className="card__background"
                style={{
                  backgroundImage: "url(/projects/noties.png)",
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">NOTE - TAKING APP</p>
                <h3 className="card__heading">Noties</h3>
              </div>
            </a>
            <a
              className="card"
              href="https://youtube-clone-xi-weld.vercel.app/"
            >
              <div
                className="card__background"
                style={{
                  backgroundImage: "url(/projects/youtube-clone.png)",
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">WEBSITE CLONE</p>
                <h3 className="card__heading">Clone of youtube.com</h3>
              </div>
            </a>
            <a className="card" href="https://freshies-menu.vercel.app/">
              <div
                className="card__background"
                style={{
                  backgroundImage: "url(/projects/freshies.png)",
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">MENU - APP</p>
                <h3 className="card__heading">Freshies</h3>
              </div>
            </a>
          </div>
        </section>
        <div className="flex justify-center items-center w-full py-10">
          <a
            href="https://srajan.vercel.app/project"
            target="_blank"
            class=" text-black hover:text-slate-900 font-bold bg-gradient-to-r from-neutral-300 to-stone-400 border-0 py-2 px-20 hover:bg-black rounded-lg text-xl"
          >
            More
          </a>
        </div>
      </section>
      {/* Contact Section */}
      <section
        className="w-auto bg-gradient-to-b from-black via-neutral-900 to-teal-900 h-screen"
        id="contact"
      >
        <section className={styles.text3}>
          <div class="flex h-screen md:px-0 px-8 w-auto justify-center items-center ">
            <div class="md:w-1/2 rounded-lg p-8 flex flex-col">
              <h2 class="md:text-6xl text-4xl mb-1 font-extrabold title-font">
                Contact
              </h2>
              <div class="leading-relaxed font-bold md:text-xl text-sm mt-2 mb-5">
                Get in touch or shoot me an email directly on{" "}
                <a href="mailto:kumarsrajan02@gmail.com" target="_blank">
                  kumarsrajan02@gmail.com
                </a>
              </div>
              <div class="relative mb-4">
                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Name"
                  class="w-full bg-[#222222] rounded-lg focus:border-gray-500 border border-transparent text-lg outline-none text-gray-50 py-2 px-5 leading-8 duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  class="w-full bg-[#222222] rounded-lg focus:border-gray-500 border border-transparent text-lg outline-none text-gray-50 py-2 px-5 leading-8 duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <textarea
                  placeholder="Message"
                  id="message"
                  name="message"
                  class="w-full h-32 bg-[#222222] rounded-lg focus:border-gray-500 border border-transparent text-lg outline-none text-gray-50 py-2 px-5 leading-8 duration-200 ease-in-out"
                ></textarea>
              </div>
              <button class="text-black font-bold bg-gradient-to-r from-neutral-300 to-stone-400 border-0 py-2 px-6 hover:bg-black rounded-lg text-xl">
                Send
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Body;
