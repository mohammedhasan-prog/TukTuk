import React from 'react';
import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className="h-screen flex flex-col">
        <Link to='/home' className='fixed bg-white h-10 w-10 flex items-center justify-center rounded-full m-3 '><i className="ri-home-5-fill text-xl   px-2 py-2"></i></Link>
      {/* Top half: Ride animation/image */}
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Ride Animation"
        />
      </div>
      {/* Lower half: Ride information and Payment button */}
      <div className="h-1/2 bg-white p-4 flex flex-col justify-between">
        {/* Ride Information Card */}
        <div className="bg-gray-100 rounded-xl shadow p-4">
          <h3 className="text-xl font-semibold mb-2">Your Ride</h3>
          <div className="space-y-3">
            {/* Pickup Information */}
            <div className="flex items-center gap-3">
              <i className="ri-map-pin-2-fill text-2xl"></i>
              <div>
                <h4 className="text-lg font-semibold">Pickup</h4>
                <p className="text-gray-500 text-sm">
                  562/11-A, Kankariya Talab, Ahmedabad
                </p>
              </div>
            </div>
            {/* Destination Information */}
            <div className="flex items-center gap-3">
              <i className="ri-map-pin-2-fill text-2xl"></i>
              <div>
                <h4 className="text-lg font-semibold">Destination</h4>
                <p className="text-gray-500 text-sm">
                  24, Near Kapoor's cafe, Coding School, Pali
                </p>
              </div>
            </div>
            {/* Fare Information */}
            <div className="flex items-center gap-3">
              <i className="ri-currency-fill text-2xl"></i>
              <div>
                <h4 className="text-lg font-semibold">Fare</h4>
                <p className="text-gray-500 text-sm">$1.5</p>
              </div>
            </div>
            {/* Additional ride details can be added here */}
          </div>
        </div>
        {/* Payment Button */}
        <button className="bg-black text-white py-3 rounded-xl text-lg font-semibold shadow mt-4">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
