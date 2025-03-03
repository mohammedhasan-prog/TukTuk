import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import CaptianDetail from "../components/CaptianDetail";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  // Control whether the RidePopUp panel is shown
  const [ridePopUpPanel, setRidePopUpPanel] = useState(false);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);


  // Refs for animations
  const logoRef = useRef(null);
  const topImageRef = useRef(null);
  const detailRef = useRef(null);
  const ridePopUpRef = useRef(null);

  useEffect(() => {
   setTimeout(() => {
    setRidePopUpPanel(true);
   }, 5000);
  })

  useEffect(() => {
    // Animate top image (ride animation)
    
    
    // Animate ride details (CaptainDetail section)
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );
    }
    // Animate RidePopUp panel (if visible)
    if (ridePopUpPanel && ridePopUpRef.current) {
      gsap.fromTo(
        ridePopUpRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.6 }
      );
    }
  }, [ridePopUpPanel]);

  return (
    <div className="h-screen flex flex-col relative">
      <div>
        <img  className="w-20 absolute" src="logo.png" alt="logo" />
        <Link
          to="/home"
          className="fixed right-4 bg-white h-10 w-10 flex items-center justify-center rounded-full m-3"
        >
          <i className="ri-logout-box-line text-xl"></i>
        </Link>
      </div>

      {/* Top half: Ride animation/image */}
      <div  className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Ride Animation"
        />
      </div>

      {/* Lower half: Ride information */}
      <div ref={detailRef} className="h-2/5 bg-white p-4 flex flex-col justify-between">
        <CaptianDetail />
      </div>

      {/* Bottom fixed RidePopUp panel */}
      {ridePopUpPanel && (
        <div ref={ridePopUpRef} className="w-full fixed bottom-0 z-10 bg-white px-3 py-10">
          <RidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} onClose={() => setRidePopUpPanel(false)} />
        </div>
      )}

{confirmRidePopUpPanel && (
        <div ref={ridePopUpRef} className="w-full fixed bottom-0 z-10 bg-white px-3 py-10">
          <ConfirmRidePopUp onClose={() => {setConfirmRidePopUpPanel(false)
            setRidePopUpPanel(false)}
          } />
        </div>
      )}
    </div>
  );
};

export default CaptainHome;
