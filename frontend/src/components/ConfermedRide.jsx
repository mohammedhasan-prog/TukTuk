import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ConfermedRide = ( props) => {
  const rideRef = useRef(null);

  useEffect(() => {
    if (rideRef.current) {
      gsap.fromTo(
        rideRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div ref={rideRef} className="p-4">
      <h3 className="text-2xl font-semibold mb-4">Confirmed your Ride</h3>
      <div className="flex flex-col justify-between items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1s-SvltrJEPVGbwfBX4P5uoZ7csk0qg8ig&s"
          alt="Ride"
          className="mb-4 w-full object-cover rounded"
        />
        <div className="w-full mb-4">
          <div className="flex items-center gap-3 p-3 ">
            <i className="ri-map-pin-2-fill text-2xl"></i>
            <div className="flex flex-col">

                <h3 className="text-xl font-semibold">
                562/11-A 
                </h3>
            <p className="text-gray-500 text-sm"> Kankariya Talab,Ahemdabad</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 border-t-1">
            <i className="ri-map-pin-2-fill text-2xl"></i>
            <div className="flex flex-col">

                <h3 className="text-xl font-semibold">
                24, Near Kapoor's cafe
                </h3>
            <p className="text-gray-500 text-sm">Coding School, Pali</p>
            </div>
          </div>


          <div className="flex items-center gap-3 p-3 border-t-1 border-b-1">
          <i className="ri-currency-fill text-2xl"></i>
            <div className="flex flex-col">

                <h3 className="text-xl font-semibold">
               $1.5
                </h3>
           
            </div>
          </div>
        
        </div>
        <button onClick={()=> {props.setLooking(true)
           setTimeout(() => {
            props.setDriverResponse(true);
            props.setLooking(false);
            props.setConferRidePanel(false);
          }, 5000);
        }} className="w-full bg-green-500 text-xl text-white py-2 px-3 rounded">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfermedRide;
