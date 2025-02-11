import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="p-7">
        <img className="w-20 " src="logo.png" alt="" />
        <form>
          <h3 className="text-2xl mb-2">What is Your email</h3>
          <input
            required
            type="email"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="email@gmail.com"
          />
          <h3 className="text-2xl mb-2">Enter Password</h3>

          <div className="flex items-center">
            <input
              type="password"
              className="bg-[#eeeeee]  rounded px-4 py-2 w-full text-lg placeholder:text-base"
              placeholder="password"
            />
            <button className="bg-black  text-xl text-white px-4 py-2 rounded ml-2">
              Login
            </button>
          </div>
          <Link to={'/signup'} className="text-lg mt-0 text-blue-600">Create new  Account</Link>
        </form>
      </div>
      <div className=" flex justify-center item-center"><Link to={'/captain-login'} className="bg-[#10b464]  text-xl text-white px-4 py-2 rounded inline-block text-center w-[80%]">
        Sign in as a Captain
      </Link></div>
    </div>
  );
};

export default UserLogin;
