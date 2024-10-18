import React from 'react';
import { Link } from 'react-router-dom';
import video1 from "../assets/video1.mp4"

const First = ({ handleUnmute }) => {
  return (
    <div className="h-screen w-screen bg-pink-400 flex justify-center items-center flex-col">

<div className="w-[300px]">
      <video src={video1}  autoPlay  loop  muted playsInline></video>
    
    </div>
      <h1 className="text-6xl capitalize mt-4">Do you LOVE ME? 🤗</h1>
      <p className="font-semibold text-xl mt-3 capitalize">I'm all yours 💖</p>

      <div className="flex gap-32 m-9">
        {/* Clicking these buttons will trigger unmute */}
        <Link to="/yes" className="bg-white text-black p-3 rounded-xl font-bold" onClick={handleUnmute}>Yes</Link>
        <Link to="/s" className="bg-white text-black p-3 rounded-xl font-bold" onClick={handleUnmute}>No</Link>
      </div>
    </div>
  );
};

export default First;
