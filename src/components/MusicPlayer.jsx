import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import cover from "../assets/cover.png";
import nothing from "../assets/nothing.mp3";
import { IoMdPlay, IoMdPause } from 'react-icons/io';
import { FaSpotify } from 'react-icons/fa';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause state
  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  // Reset play state when song ends
  const handleOnEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-[#2a2a3b] p-6 rounded-lg shadow-xl">
        <div className="flex flex-col items-center">
          {/* Album Cover */}
          <img
            src={cover}
            alt="Album Cover"
            className="w-48 h-48 mb-4 rounded-lg shadow-lg"
          />

          {/* Song Details */}
          <div className="text-center mb-4">
            <p className="text-white text-lg font-semibold">Nothing</p>
            <p className="text-gray-400">Bruno Major</p>
          </div>

          {/* Spotify Link */}
          <div className="flex items-center mb-4">
            <FaSpotify size={24} color="#FF1493" className="mr-2" />
            <p className="text-pink-500 text-sm font-medium">
              Listen on Spotify
            </p>
          </div>

          {/* Music Player */}
          <ReactHowler
            src={nothing}
            playing={isPlaying}
            onEnd={handleOnEnd}
            loop={false}
          />

          {/* Play/Pause Button */}
          <button
            className="text-white hover:text-gray-300 mt-4"
            onClick={togglePlay}
          >
            {isPlaying ? <IoMdPause size={30} /> : <IoMdPlay size={30} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
