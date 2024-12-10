import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import givelogo from "../../assets/BannerImages/givelogo.png";

const AdminLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
         <li>
         <Link to="/">
         <div className="flex gap-3 ">
           <img src={givelogo} alt="" className="w-[80px] rounded-full" />
           <p className="text-2xl font-bold my-4 text-[#df9f2d]">Give Hub</p>

          </div></Link>
         </li>

          <li>
            <NavLink
              to="/admin/home"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/create-donation"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              Create Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/all-donation"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              All Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/create-fundraising"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              Create Fundraising
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/all-fundraising"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              All Fundraising
            </NavLink>
            <NavLink
              to="/admin/all-user"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              All User
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
