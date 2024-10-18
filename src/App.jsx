import { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import backgroundSong from './assets/onelove.mp3'; // Path to your song
import Success from './components/Success';

const App = () => {
  const [isMuted, setIsMuted] = useState(true); // Initially muted
  const audioRef = useRef(null);

   const handleUnmute = () => {
    setIsMuted(false);
    audioRef.current.muted = false;
    audioRef.current.play();
  };

  return (
    <div className="App">
      {/* Audio element for background music */}
      <audio ref={audioRef} src={backgroundSong} autoPlay loop muted={isMuted}></audio>

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<First  handleUnmute={handleUnmute} />} />
        <Route path="/s" element={<Second />} />
        <Route path="/t" element={<Third />} />
        <Route path="/f" element={<Fourth />} />
        <Route path="/yes" element={<Success />} />
      </Routes>
    </div>
  );
};

export default App;
