import React from 'react';
import { NavLink } from 'react-router-dom';
import mentor from "../assets/mentor.png";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-green-100 py-16 px-6 md:py-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 leading-tight">
                <span className="text-5xl md:text-7xl text-green-900">Elevate Hub:</span>
                <br />Your journey, our guidance
              </h1>
              <p className="mt-6 text-lg md:text-2xl text-green-700">
                Every great achiever was inspired by a great mentor. Find yours today!
              </p>
              <div className="mt-8">
                <NavLink to="/mentors">
                  <button className="px-8 py-3 text-white text-lg font-medium bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300">
                    Match with a Mentor
                  </button>
                </NavLink>
              </div>
            </div>
            {/* Image Content */}
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={mentor} alt="Mentor" className="w-full h-auto" />
            </div>
          </div>
        </section>
        {/* ABout SEction */}
        <section className="bg-[#F9F9F9]">
          <div className="px-6 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-28 lg:px-10 lg:py-24">
            <div className="flex flex-col max-w-screen-xl overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                <img
                  src={mentor}  // Update with your own image
                  alt="ElevateHub Mentoring"
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
              <div className="p-12 bg-[#F1F1F1] lg:p-16 lg:pl-14 lg:w-1/2 rounded-lg shadow-lg">
                <h5 className="mb-4 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl">
                  Elevate Your Career with ElevateHub
                </h5>
                <p className="mb-6 text-lg text-gray-600">
                  <span className="font-semibold text-gray-900">ElevateHub</span> is the ultimate platform designed to connect you with experienced mentors who can help you unlock your potential. Whether you're seeking career advice, skill development, or personal growth, ElevateHub is here to guide you every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-8 mb-4 sm:mb-0 font-medium tracking-wide text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300" disabled
                  >
                    Join ElevateHub
                  </button>
                  <a
                    href="/learn-more"
                    aria-label="Learn more about ElevateHub"
                    className="inline-flex items-center justify-center font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
                  >
                    Discover More
                    <svg
                      className="inline-block w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.742a6.5 6.5 0 1 0-1.414 1.414 8 8 0 0 1 2.448 2.447l3.181 3.181a1 1 0 1 0 1.415-1.414l-3.182-3.181a8 8 0 0 1-2.448-2.447zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* feature section */}
        <section className="bg-[#f8f9fa] px-4 py-8">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Unlock Your Growth Journey with ElevateHub
              </h2>
              <p className="text-lg text-gray-600">
                ElevateHub is designed to connect you with the right mentors, guiding you to success. Whether it's enhancing your skills or reaching career goals, we’re here to help you thrive.
              </p>
            </div>

            <div className="grid gap-8 row-gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <h6 className="text-xl font-semibold text-gray-900 mb-3">Expert Career Guidance</h6>
                <p className="text-sm text-gray-700 mb-4">
                  Gain career insights and advice from seasoned mentors. Receive support for resume building, job interviews, and navigating your professional growth.
                </p>
                <a
                  href="/"
                  className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>

              <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <h6 className="text-xl font-semibold text-gray-900 mb-3">Personalized Learning Paths</h6>
                <p className="text-sm text-gray-700 mb-4">
                  Our mentors design personalized learning plans that cater to your unique goals, helping you stay focused and motivated throughout your journey.
                </p>
                <a
                  href="/"
                  className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>

              <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <h6 className="text-xl font-semibold text-gray-900 mb-3">Affordable and Flexible</h6>
                <p className="text-sm text-gray-700 mb-4">
                  ElevateHub ensures that mentorship is accessible to all. Choose flexible and affordable mentoring sessions that fit your budget and schedule.
                </p>
                <a
                  href="/"
                  className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>

              <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <h6 className="text-xl font-semibold text-gray-900 mb-3">Build Valuable Networks</h6>
                <p className="text-sm text-gray-700 mb-4">
                  Mentorship opens doors to valuable networking opportunities. Build lasting relationships with mentors and professionals in your field.
                </p>
                <a
                  href="/"
                  className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>

              <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <h6 className="text-xl font-semibold text-gray-900 mb-3">Continuous Progress Tracking</h6>
                <p className="text-sm text-gray-700 mb-4">
                  Monitor your progress and achievements with the help of our built-in tools, which make goal-setting and tracking easy and motivating.
                </p>
                <a
                  href="/"
                  className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>

              <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <h6 className="text-xl font-semibold text-gray-900 mb-3">Global Mentorship Opportunities</h6>
                <p className="text-sm text-gray-700 mb-4">
                  With ElevateHub, you can connect with mentors from across the globe. Gain diverse perspectives and expand your horizons with international opportunities.
                </p>
                <a
                  href="/"
                  className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
};

export default Home;
