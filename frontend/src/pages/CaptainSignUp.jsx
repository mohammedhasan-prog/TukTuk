import React,{useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignUp = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userData, setUserData] = React.useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const {captain,setCaptain}=useContext(CaptainDataContext)

  const navigate = useNavigate();
  return (
    <div className="flex-col justify-center ">
    <div className="p-7 ">
      <img className="w-20 " src="logo.png" alt="" />
      <form
        onSubmit={async (e) => {
          e.preventDefault();

       const newCaptain=   {
            fullname: {
              firstname:firstName,
              lastname:lastName,
            },
            email: email,
            password: password,

            vehicle:{
              color:vehicleColor,
              plate:vehiclePlate,
              capacity:vehicleCapacity,
              vehicleType:vehicleType
            }

          };



          const res= await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,newCaptain);

          if(res.status===201){
            setCaptain(res.data.captain);
           localStorage.setItem('token',res.data.token);

            navigate('/captain-home');
          }

          console.log(userData);

          setEmail("");
          setPassword("");
          setFirstName("");
          setLastName("");
          setVehicleCapacity("");
          setVehicleColor("");
          setVehiclePlate("");
          setVehicleType("");   
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
          <h3 className="text-xl font-medium mb-2">Vehicle Information</h3>

          <input
            className="bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="Vehicle Color"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
          />

          <input
            className="bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="Vehicle Plate"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
          />

          <input
            className="bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="Vehicle Capacity"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
          />

          <select
            className="bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="motor">Motor</option>
          </select>
          <button className="bg-black mt-5  text-xl text-white px-2 py-2 rounded ">
            Create captain account
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
