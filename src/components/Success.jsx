import React from 'react'
import video5 from "../assets/video5.mp4"
const Success = () => {
  return (
    <div className="h-screen w-screen bg-pink-400 flex justify-center items-center flex-col">
    {/* center video div */}
    <div className="w-[300px]">
      <video src={video5} autoPlay loop muted></video>
    </div>
    <h1 className="text-6xl capitalize mt-4">hehehehe i knew it love you a   </h1>
    <p className='text-5xl '>

    <br/> lot 😘
    </p>
    

  
  </div>
  )
}

export default Success