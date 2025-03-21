import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2016", title: "Founded Nexara Logistics", description: "Started with a vision to revolutionize logistics." },
  { year: "2019", title: "Expanded Operations", description: "Opened offices in multiple cities, improving efficiency." },
  { year: "2021", title: "Tech Integration", description: "Implemented AI-powered tracking for real-time shipment monitoring." },
  { year: "2023", title: "Global Expansion", description: "Started international shipping, reaching new markets." },
  { year: "2024", title: "Sustainability Initiative", description: "Introduced eco-friendly logistics solutions." },
];

export default function CompanyTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const items = Array.from(timelineRef.current.children); 
    items.forEach((item) => {
      const circle = item.querySelector(".timeline-marker");

      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        circle,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-[#111c4f] mb-8">
        Our Journey
      </h2>
      <div ref={timelineRef} className="relative border-l-4 border-red-500 ml-6">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative mb-10 ml-6 opacity-0">
            <div className="timeline-marker absolute w-6 h-6 bg-red-500 rounded-full -left-[15px] top-2"></div>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
              <p className="text-sm font-semibold text-gray-500">{milestone.year}</p>
              <h3 className="text-lg font-bold text-[#111c4f]">{milestone.title}</h3>
              <p className="text-gray-600 mt-2">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
