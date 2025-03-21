import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    name: "Jane Smith",
    role: "Freelance Consultant",
    text: "I was very impressed with Nexara Logistics handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
  },
  {
    name: "Michael Johnson",
    role: "CEO",
    text: "I was very impressed with Nexara Logistics handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
  },
  {
    name: "Sarah Lee",
    role: "Online Retailer",
    text: "I was very impressed with Nexara Logistics handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
  },
  {
    name: "Robert Brown",
    role: "Business Owner",
    text: "I have been using Nexara Logistics cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time. I highly recommend them to anyone in need of logistics services.",
  },
  {
    name: "Ali Haider",
    role: "Business Owner",
    text: "I have been using Nexara Logistics cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time. I highly recommend them to anyone in need of logistics services.",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".testimonial-card");
      let totalWidth = items.length * 350; // Approx width of a single card

      // Infinite Scrolling Animation
      tweenRef.current = gsap.to(sliderRef.current, {
        x: `-${totalWidth / 2}px`,
        duration: 20,
        repeat: -1,
        ease: "linear",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });

      // Fade-in effect follows scrolling
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.5, ease: "power2.out" }
      );

      // Pause animation when hovering over any card
      items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          tweenRef.current.pause();
        });
        item.addEventListener("mouseleave", () => {
          tweenRef.current.resume();
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-blue-900 text-white py-16 px-6 md:px-12">
      <div className="text-center mb-10">
        <h4 className="text-blue-300 text-sm font-bold tracking-widest uppercase">
          Testimonials
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-2">
          Our Clients Speak for Us
        </h2>
      </div>

      {/* Infinite Scrolling Section */}
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div ref={sliderRef} className="flex space-x-6">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="testimonial-card w-1/4 min-w-[350px] p-6 rounded-lg bg-blue-800 text-white transition-all duration-300 hover:bg-white hover:text-blue-900 shadow-lg transform hover:scale-105"
            >
              <div className="flex items-center mb-2">
                <span className="text-xl font-bold text-yellow-400">★★★★★</span>
              </div>
              <p className="text-sm">{item.text}</p>
              <p className="font-bold uppercase mt-3">
                {item.name}, {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
