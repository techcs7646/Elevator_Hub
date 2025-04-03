import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useUserStore from "../store/user";
import { Dropdown, Menu } from "antd";
import { removeToken } from "../helper";

const Nav = () => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const signUpMentorBtnClick = () => navigate("/signup/mentor");
  const signUpStudentBtnClick = () => navigate("/signup/student");
  const signInBtnClick = () => navigate("/signin");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onLogoutButtonClick = () => {
    removeToken();
    setUser(null);
    navigate("/");
  };
  const menu = (
    <Menu>
      {/* Dashboard Menu item* */}
      <Menu.Item>
        <NavLink to="/dashboard/profile">Dashboard</NavLink>
      </Menu.Item>
      {/* logout menu item* */}
      <Menu.Item>
        <button onClick={onLogoutButtonClick}>Logout</button>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="bg-white">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center">
              <NavLink to="/" className="inline-flex items-center mr-8">
                <span className="ml-2 text-2xl font-bold text-green-700">
                  Elevate Hub
                </span>
              </NavLink>
            </div>
            {/* mobile menu button */}
            {!user && (
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-600 focus:outline-none"
                >
                  <span className="text-2xl">&#9776;</span>
                </button>
              </div>
            )}

            {/* Desktop Navigation(only visible when user is not logged in) */}
            {!user ? (
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <button
                    onClick={signUpMentorBtnClick}
                    className="h-12 px-6 font-medium tracking-wide text-gray border-4 border-green-500 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white"
                  >
                    Become a Mentor with Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={signInBtnClick}
                    className="font-medium tracking-wide text-green-500 hover:text-green-700 transition-all duration-300"
                  >
                    Sign in
                  </button>
                </li>
                <li>
                  <button
                    onClick={signUpStudentBtnClick}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300"
                  >
                    Sign up
                  </button>
                </li>
              </ul>
            ) : (
              <Dropdown overlay={menu} trigger={["hover"]}>
                <button>{user.name.charAt(0).toUpperCase()}</button>
              </Dropdown>
            )}
            {/**when isMobileIsOpen */}
            {!user && isMobileMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4 lg:hidden z-10">
                <button className="block w-full text-center py-2 font-medium tracking-wide text-gray-800 border-4 border-green-500 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white">
                  Become a Mentor with Us
                </button>

                {/* signin */}
                <button className="block w-full text-center py-2 font-medium tracking-wide text-green-500 hover:text-green-700 transition-all duration-300">
                  Sign in
                </button>
                <button className="block w-full text-center py-2 font-medium tracking-wide text-white bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300">
                  Sign up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
