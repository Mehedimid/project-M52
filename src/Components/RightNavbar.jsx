import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import qzone1 from '../assets/qZone1.png'
import qzone2 from '../assets/qZone2.png'
import qzone3 from '../assets/qZone3.png'

function RightNavbar(props) {
  return (
    <div className="space-y-7">
      <div className="px-2 space-y-2 mb-5">
        <h1 className="text-xl font-semibold mb-3"> Login With</h1>
        <div>
          <button className="btn btn-outline btn-primary w-full">
            <FaGoogle></FaGoogle>{" "}
            <span className="text-black">Login with Google</span>
          </button>
        </div>
        <div>
          <button className="btn btn-outline btn-accent w-full">
            <FaGithub></FaGithub>{" "}
            <span className="text-black">Login with Github</span>
          </button>
        </div>
      </div>
      {/* ====================================== */}
      <div className="p-2  mb-5">
        <h1 className="text-xl font-semibold mb-3">Find Us On</h1>

        <a className="gap-3 justify-center items-center flex border text-lg p-3 text-center border-slate-600 rounded-t-lg">
          <FaFacebook></FaFacebook> <span>Facebook</span>
        </a>
        <a className="gap-3 justify-center items-center flex border-x    text-lg p-3 text-center border-slate-600">
          <FaTwitter></FaTwitter> <span>Twitter</span>
        </a>
        <a className="gap-3 justify-center items-center flex border text-lg p-3 text-center border-slate-600 rounded-b-lg">
          <FaInstagram></FaInstagram> <span>Instagram</span>
        </a>
      </div>
      {/* ====================================== */}
      <div className="p-2 space-y-2 mb-5 bg-pink-50">
        <h1 className="text-xl font-semibold mb-3"> Q Zone</h1>
        <div>
         <img src={qzone1} alt="" /><img src={qzone2} alt="" /><img src={qzone3} alt="" />
        </div>

      </div>
    </div>
  );
}

export default RightNavbar;
