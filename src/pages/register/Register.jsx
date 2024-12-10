import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import {Link, useNavigate } from "react-router";
import Lottie from "lottie-react";
import registeranime from "../../../public/registeranime.json";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target
    console.log(form)
    const userName = form.name.value;
    const userPhoto = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = {
      userName,
      userPhoto,
      email,
      password,
      role:"user"
    };
    console.log(newUser);
    await axios.post(" http://localhost:5000/api/signup",newUser)
    .then((res)=>{
     console.log(res);
     toast.success("Registered Successfully");
     navigate("/login");
    })
    .catch((error)=>{
     console.log(error)
    })

  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-40">
        <div className="text-center lg:text-left w-[50%]">
        <Lottie animationData={registeranime} loop={true} style={{width:600}} />;
        </div>
        <div className="card bg-base-100 shrink-0 shadow-1xl w-[50%]">
        <h1 className="text-5xl font-bold text-center my-3">Register now!</h1>
          <form className="card-body " onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                name="image"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#93a47e] border-none text-black font-bold text-lg" type="submit">Register</button>
              <p className="text-center">Already have an account ? <Link to={"/login"}> <span className="font-bold">Log In</span></Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
