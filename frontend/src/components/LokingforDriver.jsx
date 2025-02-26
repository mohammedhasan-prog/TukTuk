import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const LokingforDriver = () => {
  const rideRef = useRef(null);

  useEffect(() => {
    if (rideRef.current) {
      gsap.fromTo(
        rideRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div ref={rideRef} className="p-4">
      <h3 className="text-2xl font-semibold mb-4">Loking for a Driver</h3>
      <div className="flex flex-col justify-between items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1s-SvltrJEPVGbwfBX4P5uoZ7csk0qg8ig&s"
          alt="Ride"
          className="mb-4 w-full object-cover rounded"
        />
        <div className="w-full mb-4">
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
          {/* Loading animation with 3 blinking dots */}
          <div className="flex justify-center mt-4">
            <span
              className="text-2xl font-bold"
              style={{
                animation: "dotBlink 1.4s infinite",
                animationDelay: "0s",
              }}
            >
              .
            </span>
            <span
              className="text-2xl font-bold"
              style={{
                animation: "dotBlink 1.4s infinite",
                animationDelay: "0.2s",
              }}
            >
              .
            </span>
            <span
              className="text-2xl font-bold"
              style={{
                animation: "dotBlink 1.4s infinite",
                animationDelay: "0.4s",
              }}
            >
              .
            </span>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes dotBlink {
          0%, 20%, 50%, 80%, 100% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LokingforDriver;
