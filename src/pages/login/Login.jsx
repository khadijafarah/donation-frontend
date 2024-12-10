import axios from "axios";
import Lottie from "lottie-react";
import React from "react";
import signinanime from "../../../public/signinanime.json";
import { Link, useNavigate } from "react-router";

const Login = () => {
const navigate = useNavigate();
const handleSubmit = async (e)=> {
  e.preventDefault();
  const form = e.target;
  // console.log(form);
  const email = form.email.value;
  const password = form.password.value;
  const user={
    email,
    password
  };
  await axios.post(" http://localhost:5000/api/signin",user, {withCredentials:true})
  .then((res)=>{
   console.log(res);
   navigate("/");
  })
  .catch((error)=>{
   console.log(error)
  })
}
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-40">
        <div className="text-center lg:text-left w-[50%]">
          
        <Lottie animationData={signinanime} loop={true} style={{width:600}} />;
        </div>
        <div className="card bg-base-100 shrink-0 shadow-2xl w-[50%]">
        <h1 className="text-5xl font-bold text-center my-3">Login now!</h1>
          <form className="card-body" onSubmit={handleSubmit}>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white text-2xl" style={{backgroundColor:"rgb(225, 139, 0)",border:"none"}} type="submit">Login</button>
              <p className="text-center">Dont have an account ? <Link to={"/register"}> <span className="font-bold">Register</span></Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
