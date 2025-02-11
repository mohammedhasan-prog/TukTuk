import React from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignUp = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userData, setUserData] = React.useState({});
  // const [backendData, setBackendData] = React.useState({});

  const {  setUser } = React.useContext(UserDataContext);

  const navigate = useNavigate();
  return (
    <div className="flex-col justify-center ">
      <div className="p-7 ">
        <img className="w-20 " src="logo.png" alt="" />
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            setUserData({
              fullname: {
                firstname: firstName,
                lastname: lastName,
              },
              email: email,
              password: password,
            });

            console.log(userData);

            try {
              const response = await axios.post(
              `${import.meta.env.VITE_BASE_URL}/users/register`,
              userData
              );

              if (response.status === 201) {
              const data = response.data;
              // setUser(data.user); 
              localStorage.setItem("token", JSON.stringify(data.token));
              console.log(data);

              navigate("/home");
              }
            } catch (error) {
              console.error("Error during registration:", error);
            }

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
            <button className="bg-black mt-5   text-xl text-white px-2 py-2 rounded ">
              Create account
            </button>

            <div className=" flex gap-1 mt-1 justify-center ">
              <p className="text-lg mt-0"> Already have an account ?</p>
              <Link to={"/login"} className="text-lg mt-0 text-blue-600">
                Login here
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
