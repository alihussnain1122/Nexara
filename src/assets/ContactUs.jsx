import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const formRef = useRef(null);

  useEffect(() => {
    const fields = Array.from(formRef.current.children);

    fields.forEach((field) => {
      gsap.fromTo(
        field,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: field,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1598193957011-39b9f2916992?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full mx-6">
        <h2 className="text-3xl font-bold text-center text-[#111c4f] mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 text-lg mb-6">
          Have a question? Feel free to reach out!
        </p>

        <form ref={formRef} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition-all"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition-all"
          ></textarea>
          <button className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
