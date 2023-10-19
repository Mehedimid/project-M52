import React from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./useAuth./useAuth";

function Login({location}) {
    const {login,user} = useAuth()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        // const email = e.target.email.value
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
 
        // console.log(email, password)
        login(email, password) 
        .then(res => {
            console.log('successfully login to ', res.user.email)
            if(location) {
              navigate(`${location.pathname}` || '/')
            }
            // else{navigate('/')}
        })
        .catch(err => console.log(err.message))

    }
  return (
    <>
      <Navbar></Navbar>


    <div className="flex justify-center items-center min-h-screen bg-stone-100 max-w-3xl mx-auto">
    <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
    <form className="card-body" onSubmit={handleLogin}>
                  <h1 className="text-2xl font-bold text-center">Login Your Account</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name='email'
                    className="input input-bordered"
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
                    name='password'
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-neutral">Login</button>
                </div>
              </form>
            <p className="text-sm flex justify-evenly items-center mb-5">Don't have an accoutn? <Link to='/register' className="text-base text-red-700 underline">Register</Link></p>
          </div>
    </div>

    </>
  );
}

export default Login;
