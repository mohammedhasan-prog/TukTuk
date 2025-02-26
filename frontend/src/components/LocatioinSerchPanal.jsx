import React from 'react';

const locations = [
  "24, Near Kapoor's cafe, Coding School, Pali",
  "15, Near John's Bakery, Tech Park, Mumbai",
  "78, Near Central Library, University Road, Delhi",
  "45, Near Green Park, Sector 21, Bangalore",
  "32, Near Blue Mall, Shopping Street, Chennai"
];

const LocatioinSerchPanal = ({ onSelectLocation }) => {
  return (
    <div className="bg-white p-2 flex flex-col gap-3">
      {locations.map((location, index) => (
        <div
          key={index}
          className="flex border p-3 rounded-xl items-center justify-between gap-3 cursor-pointer hover:border-black"
          onClick={() => onSelectLocation && onSelectLocation(location)}
        >
          <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4>{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocatioinSerchPanal;
