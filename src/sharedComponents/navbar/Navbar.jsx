import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import authProvider from "../../utils/authProvider/authProvider";
import givelogo from "../../assets/BannerImages/givelogo.png";
import Cookies from 'js-cookie'; // Import for cookie manipulation
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, setUser } = authProvider();
  console.log("this is user", user);

  const handleLogout = () => {
    // Clear the token from cookies
    Cookies.remove('accessToken');
    setUser(null);

  toast.success('You have been logged out successfully!');
  const navigate = useNavigate();
  navigate('/login'); 
  };
  return (
    <div className="navbar bg-[#606c38]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img
          src={givelogo}
          style={{ width: "80px", borderRadius: "50px" }}
          alt=""
        />
        <a
          className="btn btn-ghost text-3xl font-bold"
          style={{ color: "rgb(223, 159, 45)" }}
        >
          GiveHub
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 flex justify-center items-center space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white"
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fundraising"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white"
              }
            >
              Fund Raising
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                  <img src={user.userPhoto} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[2] w-52 p-2 shadow"
            >
              <li>
                <a className="text-amber-700 font-bold">{user.userName}</a>
              </li>
              <li>
                <Link to="/admin"><p className="font-bold">Admin Panel</p></Link>
              </li>
              <li>
              <button onClick={handleLogout} className=" btn font-bold text-lg">Log Out</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button
              className="btn text-black font-bold text-lg"
              style={{ backgroundColor: "white", width: "130px" }}
            >
              Join Us
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
