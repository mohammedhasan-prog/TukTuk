import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className=' bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1682834983265-27a10ba5232c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen  w-full bg-red-400 flex justify-between  flex-col'>
        <img className='w-30'  src="logo.png" alt="" />
    <div className='bg-white py-4 px-4 pb-7'>
        <h2 className='text-3xl font-bold'>Get started With Uber</h2>
        <Link to={'/login'} className=' inline-block bg-black text-xl text-white py-3  px-4 w-full rounded mt-5 text-center'>Continue</Link>
    </div>
    </div>
  )
}

export default Start
