import React, { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-gray-100 py-16 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-3">🚛 See It In Action</h2>
      <p className="text-gray-600 mb-8 text-lg">Watch how our logistics solutions work efficiently</p>

      {/* Video Container */}
      <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
        {/* Video Element */}
        <video ref={videoRef} className="w-full rounded-lg" loop muted playsInline>
          <source src="/logistics.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button */}
        <button
          onClick={handleTogglePlay}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-md font-medium shadow-md hover:bg-blue-700 transition"
        >
          {isPlaying ? "Pause ⏸" : "Play ▶"}
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
