import React from 'react'
import video2 from "../assets/video2.mp4"
import { Link } from 'react-router-dom'

const Second = () => {
  return (
    <div className="h-screen w-screen bg-pink-400 flex justify-center items-center flex-col">
    {/* center video div */}
    <div className="w-[300px]">
      <video src={video2}  autoPlay muted></video>
    </div>
    <h1 className="text-6xl capitalize mt-4">please think again 🙄 </h1>
    <p className=" font-semibold text-xl mt-3 capitalize " >itna jaldi nhi matt bolo 😭 </p>

    <div className="flex gap-32 m-9">
    <Link to="/yes" className="bg-white text-black p-3 rounded-xl font-bold">Yes</Link>
    <Link to="/t" className="bg-white text-black p-3 rounded-xl font-bold">No</Link>
     
    </div>
  </div>
  )
}

export default Second