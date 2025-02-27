import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ConfirmRidePopUp = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );


    }
  }, []);

  

  return (
    <div ref={containerRef} className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Confirm Ride</h3>
      {/* Passenger Information */}
      <div className="flex items-center gap-3 p-2 bg-amber-300 rounded-lg">
        <img
          className="h-12 w-12 object-cover rounded-full"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Passenger"
        />
        <div>
          <h2 className="text-xl font-semibold">Jane Doe</h2>
          <p className="text-gray-500 text-sm">Passenger</p>
        </div>
      </div>

      {/* Amount Summary */}
      <div className="bg-gray-100 p-3 rounded-lg mt-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Base Fare</span>
          <span className="font-semibold">$2.50</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600">Taxes</span>
          <span className="font-semibold">$0.50</span>
        </div>
        <div className="flex justify-between items-center mt-2 border-t border-gray-300 pt-2">
          <span className="text-gray-600">Total</span>
          <span className="font-bold">$3.00</span>
        </div>
      </div>

      {/* Pickup Button */}
      <button className="w-full bg-green-500 text-xl text-white py-2 px-3 rounded mt-4">
        Pickup
      </button>
    </div>
  );
};

export default ConfirmRidePopUp;
