import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/mainLayout/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Donation from "./pages/donation/Donation.jsx";
import FundRaising from "./pages/fundRaising/FundRaising.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { Toaster } from "react-hot-toast";
import SingleDonation from "./pages/singleDonation/SingleDonation.jsx";
import SingleFundraising from "./pages/singleFundraising/singleFundraising.jsx";
import AdminLayout from "./layout/adminLayout/AdminLayout.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import CreateDonation from "./pages/admin/CreateDonation.jsx";
import AllDonations from "./pages/admin/AllDonations.jsx";
import CreateFundraising from "./pages/admin/CreateFundraising.jsx";
import AllFundraising from "./pages/admin/AllFundraising.jsx";
import AllUser from "./pages/admin/AllUser.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <Toaster></Toaster>
      </div>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/donation" element={<Donation></Donation>} />
          <Route path="/fundraising" element={<FundRaising></FundRaising>} />
          <Route path="/aboutus" element={<AboutUs></AboutUs>} />
          <Route path="/contactus" element={<ContactUs></ContactUs>} />
          <Route
            path="/donations/:id"
            element={<SingleDonation></SingleDonation>}
          />
          <Route
            path="/fundraisers/:id"
            element={<SingleFundraising></SingleFundraising>}
          />
        </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/admin" element={<AdminLayout></AdminLayout>}>
          <Route path="/admin/home" element={<AdminHome></AdminHome>} />
          <Route path="/admin/create-donation" element={<CreateDonation></CreateDonation>} />
          <Route path="/admin/all-donation" element={<AllDonations></AllDonations>} />
          <Route path="/admin/create-fundraising" element={<CreateFundraising></CreateFundraising>} />
          <Route path="/admin/all-fundraising" element={<AllFundraising></AllFundraising>} />
          <Route path="/admin/all-user" element={<AllUser></AllUser>} />


        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
