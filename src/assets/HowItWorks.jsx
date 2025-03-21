import React, { useEffect, useRef } from "react";
import { FaClipboardList, FaShippingFast, FaCalendarCheck } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => videoRef.current?.play(),
      onLeaveBack: () => videoRef.current?.pause(),
    });

    return () => {
      trigger.kill(); // Cleanup ScrollTrigger on unmount
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Video Section */}
        <div className="bg-blue-900 rounded-lg overflow-hidden">
          <video ref={videoRef} className="w-full h-full" loop muted playsInline>
            <source src="/logistics.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div>
          <h4 className="text-blue-600 text-sm font-bold tracking-widest uppercase">How It Works</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2">
            Simplify Your Shipping Experience <br /> With Our Easy Step Process
          </h2>
          <p className="text-gray-600 mt-4">
            At Nexara Logistics, we provide personalized and efficient logistics solutions. 
            Our expert team ensures seamless shipping experiences tailored to your needs.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="mt-12 border-t border-gray-300 pt-10 flex flex-col md:flex-row justify-between items-center">
        {[
          { step: "Step 1", title: "Request a Quote", icon: <FaClipboardList size={40} /> },
          { step: "Step 2", title: "Provide Details", icon: <FaShippingFast size={40} /> },
          { step: "Step 3", title: "Schedule Pick-Up", icon: <FaCalendarCheck size={40} /> },
        ].map((item, index) => (
          <div key={index} className="text-center max-w-xs group">
            <div className="relative">
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-1 text-xs font-semibold rounded-full shadow">
                {item.step}
              </span>
              <div className="bg-blue-600 text-white p-5 rounded-lg flex justify-center items-center transition-all duration-300 group-hover:bg-blue-900 ">
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-4 transition-opacity duration-300">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm transition-opacity duration-300 group-hover:opacity-50">
              Our logistics experts ensure smooth and hassle-free shipments from start to finish.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
