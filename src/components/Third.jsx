import React from 'react'
import video3 from "../assets/video3.mp4"
import { Link } from 'react-router-dom'
const Third = () => {
  return (
    <div className="h-screen w-screen bg-pink-400 flex justify-center items-center flex-col">
    {/* center video div */}
    <div className="w-[300px]">
      <video src={video3} autoPlay loop muted></video>
    </div>
    <h1 className="text-6xl capitalize mt-4">ek baar aur soch lo 😣 </h1>
    <p className=" font-semibold text-xl mt-3 capitalize " >kyu aisa kr rahi ho 😖 </p>

    <div className="flex gap-32 m-9">
    <Link to="/yes" className="bg-white text-black p-3 rounded-xl font-bold">Yes</Link>
    <Link to="/f" className="bg-white text-black p-3 rounded-xl font-bold">No</Link>
    </div>
  </div>
  )
}

export default Third