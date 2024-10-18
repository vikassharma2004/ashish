import React, { useState, useEffect } from 'react';
import video4 from "../assets/video4.mp4";
import { Link } from 'react-router-dom';

const Fourth = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Function to generate random positions
  const getRandomPosition = () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Subtract 100 to keep button within view
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50)); // Subtract 50 for the height
    return { top: randomY, left: randomX };
  };

  // Function to handle hover over the "No" button
  const handleNoHover = () => {
    if (!isHovering) {
      setIsHovering(true);
      const interval = setInterval(() => {
        const newPosition = getRandomPosition();
        setNoButtonPosition(newPosition); // Update the position state
      }, 100); // Change position every 200ms

      // Stop moving after 2 seconds (you can adjust this duration)
      setTimeout(() => {
        clearInterval(interval);
        setIsHovering(false);
      }, 1000000); // Move for 2 seconds
    }
  };

  return (
    <div className="h-screen w-screen bg-pink-400 flex justify-center items-center flex-col relative">
      {/* Center video div */}
      <div className="w-[300px]">
        <video src={video4} autoPlay muted></video>
      </div>
      <h1 className="text-6xl capitalize mt-4">Maan jao na kitna bhavv khogi 😭</h1>
      <p className="font-semibold text-xl mt-3 capitalize">Bhout galat baat haii 😭</p>

      <div className="flex gap-32 m-9">
        <Link to="/yes" className="bg-white text-black p-3 rounded-xl font-bold">Yes</Link>

        {/* No button with dynamic positioning */}
        <button
          onMouseEnter={handleNoHover}
          style={{ position: 'absolute', top: noButtonPosition.top, left: noButtonPosition.left }}
          className="bg-white text-black p-3 rounded-xl font-bold transition-all duration-200" // Adjusted duration
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Fourth;
