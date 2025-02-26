import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const WaitForDriver = (props) => {
  const driverRef = useRef(null);

  useEffect(() => {
    if (driverRef.current) {
      gsap.fromTo(
        driverRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    }
  }, []);

  


  return (
    <div ref={driverRef} className="p-4 space-y-4">
      <h3 className="text-2xl font-semibold mb-4">Waiting for Driver</h3>

      {/* Driver Info Card */}
      <div className="bg-white rounded-xl ">
        <div className="flex items-center gap-4">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Driver"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h4 className=" font-semibold text-2xl">John Doe</h4>
            <p className=" text-sm text-gray-500">Car Number: XYZ 1234</p>
          </div>
        </div>
      </div>

      {/* Ride Details Card */}
      <div className="bg-white rounded-xl ">
        <div className="flex items-center gap-3 p-3">
          <i className="ri-map-pin-2-fill text-2xl"></i>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">562/11-A</h3>
            <p className="text-gray-500 text-sm">Kankariya Talab, Ahmedabad</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 border-t border-gray-200">
          <i className="ri-map-pin-2-fill text-2xl"></i>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">24, Near Kapoor's cafe</h3>
            <p className="text-gray-500 text-sm">Coding School, Pali</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 border-t border-b border-gray-200">
          <i className="ri-currency-fill text-2xl"></i>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">$1.5</h3>
          </div>
        </div>
      </div>

      {/* Messaging Area */}
      <div className="bg-white rounded-xl  flex items-center">
        <input 
          type="text" 
          placeholder="Send a message" 
          className=" bg-[#eee] text-xl flex-1 w-full placeholder:text-xl p-2 border border-gray-300 rounded-l-xl focus:outline-none"
        />
        <button className="bg-black text-xl text-white px-4 py-2 rounded-r-xl">
          Send
        </button>
      </div>
    </div>
  );
};

export default WaitForDriver;
