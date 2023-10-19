import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import useAuth from './useAuth./useAuth';

function Register(props) {
    const {createUser} = useAuth()
    // console.log(info)
    
    const handleRegister = e => {
        e.preventDefault()
        // const email = e.target.email.value
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')
        // console.log(email, password, name, photo)

        createUser(email, password)
        .then(res => {
            console.log(res.user)
        })
        .catch(error => console.error(error.message))
    }

    return (
        <>
        <Navbar></Navbar>
  
  
      <div className="flex justify-center items-center min-h-screen bg-stone-100 max-w-3xl mx-auto">
      <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
              <form className="card-body" onSubmit={handleRegister}>
                  <h1 className="text-2xl font-bold text-center">Register</h1>
                  <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name='name'
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo Url"
                    name='photo'
                    className="input input-bordered"
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
                  <button className="btn btn-neutral">Register</button>
                </div>
              </form>
              <p className="text-sm flex justify-evenly items-center mb-5">Already have an accoutn? <Link to='/login' className="text-base text-red-700 underline">Log in</Link></p>
            </div>
      </div>
  
      </>
    );
}

export default Register;