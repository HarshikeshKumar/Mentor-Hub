import React, { useState } from "react";
import heroVideo from "../assets/hero.mp4";
import star from "../assets/star.png";
import trophy from "../assets/trophy.png";
import diamond from "../assets/diamond.png";
import computerchip from "../assets/computer-chip.png";
import graduated from "../assets/graduated.png";
import coding from "../assets/coding.png";
import TopMentors from "../components/TopMentors";
import { Nav } from "../components/Nav";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleFAQ = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <Nav />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative text-center bg-black">
          <img
            className="w-14 hidden md:block absolute top-10 left-[15%]"
            src={star}
            alt=""
          />
          <img
            className="w-14 absolute md:block hidden top-[20%] left-48"
            src={graduated}
            alt=""
          />
          <img
            className="w-20 absolute md:block hidden top-16 right-[15%]"
            src={diamond}
            alt=""
          />

          <div className="relative py-10 md:py-20 ">
            <h1 className="mb-4 text-2xl font-bold text-white md:text-6xl">
              Welcome to{" "}
              <span className="text-3xl border-b-8 md:text-7xl">MentorHub</span>
            </h1>
            <p className="my-10 text-base text-gray-200 md:my-16 md:text-2xl">
              Unlock your potential with the guidance of expert mentors.
            </p>
            <NavLink to="/mentors">
              <button className="px-8 py-3 text-white transition bg-purple-600 rounded-lg hover:bg-purple-800">
                Find Your Mentor
              </button>
            </NavLink>
            <img
              className="absolute hidden md:block w-14 left-1/3"
              src={computerchip}
              alt=""
            />
          </div>
          <div className="relative">
            <img
              className="absolute hidden md:block w-14 top-56 left-28"
              src={coding}
              alt=""
            />
            <img
              className="absolute hidden md:block w-14 top-3 right-28"
              src={trophy}
              alt=""
            />
            <video
              autoPlay
              loop
              muted
              className="inset-0 object-cover w-full p-2 mx-auto rounded md:p-0 md:w-2/3 h-2/3"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            <img
              className="absolute hidden md:block w-14 bottom-96 right-28 "
              src={star}
              alt=""
            />
          </div>
        </section>

        {/* About Section */}
        <section className="bg-[#F5EEE9]">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col max-w-screen-xl overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                  className="object-cover w-full lg:absolute h-80 lg:h-full"
                />
                <svg
                  className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                  viewBox="0 0 20 104"
                  fill="currentColor"
                >
                  <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                </svg>
              </div>
              <div className="p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                  What is MentorHub?
                </h5>
                <p className="mb-5 text-gray-800">
                  <span className="font-bold">MentorHub</span> is a platform
                  designed to connect students and professionals with mentors
                  who can guide them through their personal and professional
                  development. Whether you're looking to master a new skill or
                  get career advice, we have the right mentor for you.
                </p>
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-purple-600 rounded shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Get started
                  </button>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold text-purple-600 transition-colors duration-200 hover:text-deep-purple-800"
                  >
                    Learn More
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-8 py-20 bg-white">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{" "}
                "Empowering You with Tailored Mentorship"
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                At MentorHub, we connect you with expert mentors who understand
                your unique needs and learning goals. Whether you're looking to
                advance in your career, gain a new skill, or find direction, our
                platform provides personalized guidance to help you succeed.
                Explore our features designed to make mentorship accessible,
                flexible, and impactful.
              </p>
            </div>
            <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
              <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-purple-600 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Expert Mentorship
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Get one-on-one guidance from professionals who have years of
                  experience in their fields. They are here to help you navigate
                  your career with personalized advice.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-purple-600 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Tailored Learning Paths
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Choose from a variety of mentors that specialize in what you
                  need. Your learning goals and challenges will be the priority
                  in a mentorship plan designed just for you.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-purple-600 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Flexible Scheduling
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Set your sessions based on your availability. Our mentors
                  offer flexible timings so you can fit learning into your
                  schedule without hassle.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-purple-600 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Goal-Oriented Sessions
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Our mentors are dedicated to helping you achieve tangible
                  results. Whether you're aiming to learn a new skill, get
                  career advice, or grow professionally, your success is our
                  goal.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-purple-600 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Mentor Reviews & Ratings
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Browse verified reviews and ratings from other students to
                  find the mentor that matches your learning style and
                  expectations.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-purple-600 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Seamless Onboarding
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Easily create an account, browse mentors, and schedule your
                  first session in just a few clicks. Start your learning
                  journey in no time.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-8 py-20 text-center bg-gray-50">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{" "}
                "Your Path to Success, Step by Step"
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                MentorHub makes finding and connecting with the right mentor
                simple and effective. Follow these easy steps to start your
                personalized mentorship journey today, and unlock the guidance
                and expertise you need to achieve your goals.
              </p>
            </div>
            <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
              <div className="lg:py-6 lg:pr-16">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8 text-start">
                    <p className="mb-2 text-lg font-bold">Sign Up</p>
                    <p className="text-gray-700">
                      Start the journey by creating a profile.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8 text-start">
                    <p className="mb-2 text-lg font-bold">Browse Mentors</p>
                    <p className="text-gray-700">
                      Search and explore mentors based on your specific needs.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8 text-start">
                    <p className="mb-2 text-lg font-bold">Select Your Mentor</p>
                    <p className="text-gray-700">
                      Check mentor profiles and reviews to find the perfect fit.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8 text-start">
                    <p className="mb-2 text-lg font-bold">Book a Session</p>
                    <p className="text-gray-700">
                      Schedule sessions at a time that works for you.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8 text-start">
                    <p className="mb-2 text-lg font-bold">Start Learning</p>
                    <p className="text-gray-700">
                      Begin your customized mentorship journey and achieve your
                      goals.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-6 text-gray-600"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <polyline
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="6,12 10,16 18,8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="mb-2 text-lg font-bold">Success</p>
                    <p className="text-gray-700" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mentor Categories Section */}
        <section className="px-8 py-20 bg-white">
          <div>
            <div className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row">
              <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
                <h2 className="relative mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                        width="52"
                        height="24"
                      />
                    </svg>
                  </span>{" "}
                  Find the Perfect Mentor for Your Journey
                </h2>
                <p className="mb-4 text-gray-900 lg:mb-6">
                  Explore a wide range of mentor categories to find the perfect
                  match for your personal or professional growth. Our mentors
                  are ready to guide you in mastering new skills, overcoming
                  challenges, and achieving your goals.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-purple-800"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="flex-grow pt-1">
                <div className="flex items-center mb-3">
                  <span className="font-bold tracking-wide text-gray-900">
                    Categories
                  </span>
                  <span className="ml-1">
                    <svg
                      className="w-5 h-5 mt-px text-purple-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-40 sm:grid-cols-3">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Career Growth Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Skill Development Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Entrepreneurship Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Freelancing & Gig Economy Mentors
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Tech & Engineering Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Creative Arts Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Marketing & Sales Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Finance & Investment Mentors
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Health & Wellness Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Education & Teaching Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Personal Development Mentors
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Social Impact Mentors
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="object-cover w-full h-56 sm:h-96"
                src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            </div>
          </div>
        </section>

        <section>
          <div className="">
            <TopMentors />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-8 py-20 text-center bg-white">
          <h2 className="mb-12 text-4xl font-bold">Affordable Pricing</h2>
          <p className="max-w-4xl mx-auto mb-6 text-xl text-gray-700">
            We offer affordable plans for both students and mentors. Get started
            with a free account and explore paid mentorship options that fit
            your needs.
          </p>
          <button className="px-6 py-3 text-white transition bg-purple-600 rounded-lg hover:bg-purple-800">
            Learn More About Pricing
          </button>
        </section>

        {/* FAQs Section */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-screen-lg mx-auto">
            <h2 className="mb-10 text-4xl font-bold text-center text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 transition-colors hover:text-purple-600"
                  onClick={() => toggleFAQ(1)}
                >
                  What is MentorHub?
                  <span className="ml-4 transition-transform transform rotate-0 group-hover:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`mt-2 text-gray-700 transition-height duration-300 ease-in-out ${
                    isOpen[1] ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p>
                    MentorHub is an online platform connecting mentees with
                    experienced mentors across various fields like technology,
                    business, health, and more, to help them grow and achieve
                    their goals.
                  </p>
                </div>
              </div>

              <div className="pb-4 border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 transition-colors hover:text-purple-600"
                  onClick={() => toggleFAQ(2)}
                >
                  How do I sign up as a mentor?
                  <span className="ml-4 transition-transform transform rotate-0 group-hover:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`mt-2 text-gray-700 transition-height duration-300 ease-in-out ${
                    isOpen[2] ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p>
                    Signing up as a mentor is simple! Just click on the "Become
                    a Mentor" button, fill in your details, and select your
                    areas of expertise. Once approved, you'll be able to start
                    mentoring students.
                  </p>
                </div>
              </div>

              <div className="pb-4 border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 transition-colors hover:text-purple-600"
                  onClick={() => toggleFAQ(3)}
                >
                  Can I choose my mentor?
                  <span className="ml-4 transition-transform transform rotate-0 group-hover:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`mt-2 text-gray-700 transition-height duration-300 ease-in-out ${
                    isOpen[3] ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p>
                    Yes! You can browse through available mentors, check their
                    expertise, and select the one that fits your goals and
                    preferences.
                  </p>
                </div>
              </div>

              <div className="pb-4 border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 transition-colors hover:text-purple-600"
                  onClick={() => toggleFAQ(4)}
                >
                  What are the costs involved?
                  <span className="ml-4 transition-transform transform rotate-0 group-hover:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`mt-2 text-gray-700 transition-height duration-300 ease-in-out ${
                    isOpen[4] ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p>
                    MentorHub offers both free and paid mentorship options. The
                    pricing varies depending on the mentor's experience and
                    session length, which will be displayed upfront.
                  </p>
                </div>
              </div>

              <div className="pb-4 border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 transition-colors hover:text-purple-600"
                  onClick={() => toggleFAQ(5)}
                >
                  How does the mentoring process work?
                  <span className="ml-4 transition-transform transform rotate-0 group-hover:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`mt-2 text-gray-700 transition-height duration-300 ease-in-out ${
                    isOpen[5] ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p>
                    Once you select a mentor, you can schedule sessions directly
                    through the platform. Mentoring can be conducted via video
                    calls, messages, or email, based on your mutual preferences.
                  </p>
                </div>
              </div>

              <div className="pb-4 border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 transition-colors hover:text-purple-600"
                  onClick={() => toggleFAQ(6)}
                >
                  Is there a support system if I face issues?
                  <span className="ml-4 transition-transform transform rotate-0 group-hover:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`mt-2 text-gray-700 transition-height duration-300 ease-in-out ${
                    isOpen[6] ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p>
                    Yes! MentorHub has a dedicated support team to help you with
                    any issues you may face, whether it's regarding finding a
                    mentor, payment issues, or platform queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-8 py-20 text-center text-white bg-purple-600">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Find Your Mentor?
          </h2>
          <p className="mb-8 text-xl">
            Join MentorHub today and connect with experienced professionals who
            can guide you through your journey!
          </p>
          <button className="px-8 py-3 font-semibold text-purple-600 transition bg-white rounded-lg hover:bg-gray-200">
            Get Started Now
          </button>
        </section>

        {/* Footer */}
        <footer className="px-8 py-10 text-white bg-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <p>Follow us on social media for updates and mentorship tips!</p>
            <p className="mt-4">
              <a href="#" className="hover:text-[#00DFBD]">
                Facebook
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-[#00DFBD]">
                Twitter
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-[#00DFBD]">
                LinkedIn
              </a>
            </p>
            <p className="mt-4">© 2024 MentorHub. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
