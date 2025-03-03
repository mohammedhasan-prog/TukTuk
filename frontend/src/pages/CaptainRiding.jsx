import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
  return (
    <div className='h-screen'>
   <div className=''>

        <img  className="w-20 absolute" src="logo.png" alt="logo" />
        <Link
          to="/home"
          className="fixed right-4 bg-white h-10 w-10 flex items-center justify-center rounded-full m-3"
        >
          <i className="ri-logout-box-line text-xl"></i>
        </Link>
      </div>

      {/* Top half: Ride animation/image */}
      <div  className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Ride Animation"
        />
      </div>

     <div className='h-1/5 p-4 bg-amber-400  rounded-t-2xl'>
     <i className="ri-arrow-up-s-line"    ></i>
     <div  className="  flex  items-center justify-between  ">
  

        <h4 className='font-semibold text-2xl'>4 KM away</h4>
        <button className='bg-black text-xl text-white p-2 rounded'>Complete Ride</button>
      </div>
     </div>
    </div>
  )
}

export default CaptainRiding
