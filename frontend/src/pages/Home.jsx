import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css';
import LocatioinSerchPanal from "../components/LocatioinSerchPanal";
import SelectVehiclePanel from "../components/SelectVehiclePanel";
import ConfermedRide from "../components/ConfermedRide";
import LokingforDriver from "../components/LokingforDriver";
import WaitForDriver from "../components/WaitForDriver";


const Home = () => {
  const [picUpLocation, setPicUpLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [show, setShow] = useState(false);
  const [showVehicles, setShowVehicles] = useState(false);
  const [vehiclePanal, setVehiclesPanel] = useState(false);

  const [conferRidePanel, setConferRidePanel] = useState(false);
  const [looking, setLooking] = useState(false);
  const [driverResponse, setDriverResponse] = useState(false);



  // Refs for GSAP animations
  const locationPanelRef = useRef(null);
  const bottomPanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Animate the location search panel when it appears
  useEffect(() => {
    if (show && locationPanelRef.current) {
      gsap.fromTo(
        locationPanelRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [show]);   

  // Animate the vehicle selection panel when a location is selected
  useEffect(() => {
    if (showVehicles && bottomPanelRef.current) {
      gsap.fromTo(
        bottomPanelRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power3.out" }
      );  
    }
  }, [showVehicles]);

  // Callback function passed to LocatioinSerchPanal
  const handleLocationSelect = (selectedLocation) => {
    setPicUpLocation(selectedLocation);
    // Optionally hide the search panel once a location is chosen
    setShow(false);
    // Show the vehicle selection panel
    setShowVehicles(true);
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
          <h5 className="absolute top-0">
            <i className="ri-arrow-down-wide-line" onClick={() => setShow(false)}></i>
          </h5>
          <h4 className="text-3xl font-semibold mt-3">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="h-16 w-1 bg-gray-500 rounded-2xl absolute top-[45%] left-9"></div>
            
            <input
              type="text"
              onFocus={() => setShow(true)}
              onChange={(e) => setPicUpLocation(e.target.value)}
              className="w-full mt-3 bg-[#eee] px-12 py-2 placeholder:text-xl rounded-xl text-2xl"
              placeholder="Add a pick-up location"
            />
            
            <input
              type="text"
              onFocus={() => setShow(true)}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full mt-3 bg-[#eee] px-12 py-2 placeholder:text-xl text-2xl rounded-2xl"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* Animated Location Search Panel */}
        {show && (
          <div
            ref={locationPanelRef}
            className="h-[70%] p-3 text-xl font-semibold bg-white"
          >
            <LocatioinSerchPanal onSelectLocation={handleLocationSelect} vehiclePanal={vehiclePanal} setVehiclesPanel={setVehiclesPanel} />
          </div>
        )}
      </div>

      {/* Animated Vehicle Selection Panel */}
      {showVehicles && (
        <div
          ref={bottomPanelRef}
          className="fixed bottom-0 z-10 w-full bg-white p-3 shadow-md"
        >
          <i className="ri-arrow-down-s-line" onClick={() => setShowVehicles(false)}></i>
          {/* Example vehicle option */}
          <SelectVehiclePanel  setConferRidePanel={setConferRidePanel} />
        </div>
      )}

{conferRidePanel && (
        <div
          ref={bottomPanelRef}
          className="fixed bottom-0 z-10 w-full bg-white p-3 shadow-md"
        >
          <i className="ri-arrow-down-s-line" onClick={() => setConferRidePanel(false)}   ></i>
          {/* Example vehicle option */}
        <ConfermedRide setConferRidePanel={setConferRidePanel} setLooking={setLooking} setDriverResponse={setDriverResponse} />
        </div>
      )}


{looking && (
        <div
             
          ref={bottomPanelRef}
          className="fixed bottom-0 z-10 w-full bg-white p-3 shadow-md"
        >
          <i className="ri-arrow-down-s-line" onClick={() => {setLooking(false)

           

          }}   ></i>
          {/* Example vehicle option */}
          <LokingforDriver />
       
        </div>
      )}

{driverResponse && (
        <div
          
          className="fixed bottom-0 z-10 w-full bg-white p-3 shadow-md"
        >
          <i className="ri-arrow-down-s-line" onClick={() => setDriverResponse(false)}   ></i>
          {/* Example vehicle option */}
          <WaitForDriver  />
       
        </div>
      )}
    </div>
  );
};

export default Home;
