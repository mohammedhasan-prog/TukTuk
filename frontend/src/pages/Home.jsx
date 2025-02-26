import React from "react";
import 'remixicon/fonts/remixicon.css'
import LocatioinSerchPanal from "../components/LocatioinSerchPanal";

const Home = () => {
  const [picUpLocation, setPicUpLocation] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [show, setShow] = React.useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img className="w-30 absolute left-5 top-5" src="/logo.png" alt="logo" />
      
      {/* Background image */}
      <div className="h-full w-full">
        <img
          className="h-full w-full object-cover"
          src="https://i2-prod.mylondon.news/article16106961.ece/ALTERNATES/s615/2_Uber-pink-cars.jpg"
          alt="background"
        />
      </div>

      {/* Form section */}
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white px-5 py-5 relative">
          <h5 className="absolute top-0 "><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className="text-3xl font-semibold mt-3">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="h-16 w-1 bg-gray-500 rounded-2xl absolute top-[45%] left-9"></div>
            
            <input
              type="text"
              onFocus={() => setShow(true)}
              onBlur={() => setShow(false)}
              onChange={(e) => setPicUpLocation(e.target.value)}
              className="w-full mt-3 bg-[#eee] px-12 py-2 placeholder:text-xl rounded-xl text-2xl"
              placeholder="Add a pick-up location"
            />
            
            <input
              type="text"
              onFocus={() => setShow(true)}
              onBlur={() => setShow(false)}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full mt-3 bg-[#eee] px-12 py-2 placeholder:text-xl text-2xl rounded-2xl"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* Show/hide bottom div */}
        {show && <div className="h-[70%] p-3 text-xl font-semibold bg-white">
          <LocatioinSerchPanal/>
          </div>}
      </div>

      <div className="fixed bottom-0 z-10 w-full bg-white p-3 shadow-md">
       
  <div className="flex mb-2   active:border-black  w-full items-center justify-between p-3 rounded-2xl ">
    {/* Car Image */}
    <img
      className="h-16 w-16 rounded-lg object-cover"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1s-SvltrJEPVGbwfBX4P5uoZ7csk0qg8ig&s"
      alt="Uber Car"
    />

    {/* Ride Info */}
    <div className="flex flex-col items-center w-1/2 text-center px-2">
      <h4 className="text-base font-semibold flex items-center gap-1">
        UberGo 
        <span className="text-gray-600 text-base flex items-center">
          <i className="ri-user-6-fill"></i>4
        </span>
      </h4>
      <h5 className="text-sm text-green-500 font-medium">2 min away</h5>
      <p className="text-xs text-gray-500">Affordable compact rides</p>
    </div>

    {/* Price */}
    <h2 className="text-3xl font-bold text-gray-800">$20</h2>
  </div>


  <div className="flex mb-2  border-2  active:border-black bo w-full items-center justify-between p-3 rounded-2xl bg-gray-50">
    {/* Car Image */}
    <img
      className="h-16 w-16 rounded-lg object-cover"
      src="data:image/jpeg;base64,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"
      alt="Uber Car"
    />

    {/* Ride Info */}
    <div className="flex flex-col items-center w-1/2 text-center px-2">
      <h4 className="text-base font-semibold flex items-center gap-1">
     Moto
        <span className="text-gray-600 text-base flex items-center">
          <i className="ri-user-6-fill"></i>2
        </span>
      </h4>
      <h5 className="text-sm text-green-500 font-medium">5 min away</h5>
      <p className="text-xs text-gray-500">Affordable motorcycle rides</p>
    </div>

    {/* Price */}
    <h2 className="text-3xl font-bold text-gray-800">$5</h2>
  </div>

  <div className="flex  border-2  active:border-black bo w-full items-center justify-between p-3 rounded-2xl bg-gray-50">
    {/* Car Image */}
    <img
      className="h-16 w-16 rounded-lg object-cover"
      src="data:image/jpeg;base64,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"
      alt="Uber Car"
    />

    {/* Ride Info */}
    <div className="flex flex-col items-center w-1/2 text-center px-2">
      <h4 className="text-base font-semibold flex items-center gap-1">
        Texi 
        <span className="text-gray-600 text-base flex items-center">
          <i className="ri-user-6-fill"></i>4
        </span>
      </h4>
      <h5 className="text-sm text-green-500 font-medium">2 min away</h5>
      <p className="text-xs text-gray-500">Affordable compact rides</p>
    </div>

    {/* Price */}
    <h2 className="text-3xl font-bold text-gray-800">$8.22</h2>
  </div>
</div>

      
    </div>
  );
};

export default Home;
