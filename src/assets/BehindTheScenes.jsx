import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BehindTheScenes() {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(videoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: -30,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white p-6 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Title Section */}
      <h2
        ref={textRef}
        className="text-5xl font-bold text-center z-10 mb-6 tracking-wider"
      >
        Behind the Scenes 🎬
      </h2>

      {/* Video Section with Glassmorphism */}
      <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 z-10">
        <video
          ref={videoRef}
          className="w-full rounded-3xl"
          controls
          autoPlay
          muted
        >
          <source src="/logistics.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Description */}
      <p className="text-lg text-center max-w-2xl mt-6 z-10 text-gray-300 tracking-wide">
        Step into the world of Nexara Logistics. 🚛✨ Watch how we turn challenges into 
        seamless solutions with cutting-edge technology and a dedicated team.
      </p>
    </div>
  );
}
