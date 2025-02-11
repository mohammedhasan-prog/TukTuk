import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const CaptainSignUp = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userData, setUserData] = React.useState({});
  return (
    <div className="flex-col justify-center ">
    <div className="p-7 ">
      <img className="w-20 " src="logo.png" alt="" />
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setUserData({
            fullName: {
              firstName:firstName,
              lastName:lastName,
            },
            email: email,
            password: password,
          });

          console.log(userData);

          setEmail("");
          setPassword("");
          setFirstName("");
          setLastName("");
        }}
      >
        <h3 className="text-xl font-medium mb-2">What's is Your name</h3>
        <div className="flex  gap-3 mb-2">
          <input
            className="bg-[#eeeeee]  rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className="bg-[#eeeeee]  rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <h3 className="text-xl font-medium mb-2">What is Your email</h3>

        <input
          className="bg-[#eeeeee] mb-2  rounded px-4 py-2 w-full text-lg placeholder:text-base"
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h3 className="text-xl font-bold mb-2">Enter Password</h3>

        <div className="flex flex-col">
          <input
            type="password"
            value={password}
            className="bg-[#eeeeee]  rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-black mt-5  text-xl text-white px-2 py-2 rounded ">
            Login
          </button>

          <div className=" flex gap-1 mt-1 justify-center ">
            <p className="text-lg mt-0"> Already have an account ?</p>
            <Link to={"/captain-login"} className="text-lg mt-0 text-blue-600">
              Login here
            </Link>
          </div>
        </div>
      </form>
    </div>

   
  </div>
  )
}

export default CaptainSignUp
