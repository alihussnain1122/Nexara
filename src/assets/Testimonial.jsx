import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    name: "Jane Smith",
    role: "Freelance Consultant",
    text: "I was very impressed with Nexara Logistics handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
  },
  {
    name: "John Doe",
    role: "Business Owner",
    text: "Their service is exceptional! Timely delivery and professional staff. Highly recommended for logistics solutions.",
  },
  {
    name: "Alice Johnson",
    role: "E-commerce Seller",
    text: "They handle my shipments flawlessly every time. Their efficiency and transparency make them my go-to logistics partner.",
  },
  {
    name: "Hiroshi Tanaka",
    role: "Import Export Manager",
    text: "Nexara Logistics provided an efficient and seamless experience. I highly appreciate their punctual deliveries and great customer support.",
  },
  {
    name: "Fatima Al-Sheikh",
    role: "Retail Store Owner",
    text: "Excellent logistics service! My goods arrived on time and in perfect condition. I will be working with them for all my future shipments.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Operations Manager",
    text: "I was amazed by their commitment to customer satisfaction. They exceeded my expectations in terms of speed and efficiency.",
  },
  {
    name: "Sophie Dubois",
    role: "Fashion Designer",
    text: "Nexara Logistics handled my fragile cargo with care. Their service is outstanding, and I recommend them to anyone looking for a reliable logistics company.",
  },
  {
    name: "Muhammad Ali",
    role: "Industrial Supplier",
    text: "They have the best logistics solutions in the market. Always on time, with excellent tracking and updates.",
  },
  {
    name: "Vladimir Petrov",
    role: "Tech Startup CEO",
    text: "Reliable, affordable, and professional. Nexara Logistics is our preferred shipping partner for international deliveries.",
  },
  {
    name: "Chen Wei",
    role: "Electronics Distributor",
    text: "The smoothest logistics experience I've had in years. Their team is professional and ensures top-quality service.",
  },
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    text: "Their logistics support helped my business grow. They provide great tracking and updates, making it stress-free for us.",
  },
  {
    name: "Liam O'Connor",
    role: "Wholesaler",
    text: "Fantastic customer service! They make the whole shipping process simple and hassle-free.",
  },
];


const Testimonials = () => {
  const sliderRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".testimonial-card");

    // Duplicating items for seamless scrolling
    const totalWidth = items.length * 350; // Approximate width of all items
    const duration = 60; // Adjust for smoothness

    // Infinite Scrolling Animation
    tweenRef.current = gsap.to(sliderRef.current, {
      x: `-${totalWidth}px`,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onRepeat: () => {
        gsap.set(sliderRef.current, { x: 0 });
      },
    });

    // Pause animation on hover
    items.forEach((item) => {
      item.addEventListener("mouseenter", () => tweenRef.current.pause());
      item.addEventListener("mouseleave", () => tweenRef.current.resume());
    });

    return () => {
      tweenRef.current.kill();
    };
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1598193957011-39b9f2916992')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <section className="relative text-white py-16 px-6 md:px-12">
        <div className="text-center mb-10">
          <h4 className="text-blue-300 text-sm font-bold tracking-widest uppercase">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-2">
            Our Clients Speak for Us
          </h2>
        </div>

        {/* Infinite Scrolling Section */}
        <div className="relative w-full overflow-hidden">
          <div ref={sliderRef} className="flex space-x-6">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="testimonial-card w-1/4 min-w-[350px] p-6 rounded-lg text-white transition-all duration-300 hover:bg-white hover:text-blue-900 shadow-lg transform hover:scale-105"
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
    </section>
  );
};

export default Testimonials;
