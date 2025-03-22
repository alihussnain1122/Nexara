import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Ocean Shipping",
    date: "",
    phone: "",
  });

  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed: ${formData.name} has booked ${formData.service}`);
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div ref={formRef} className="bg-white p-8 shadow-xl rounded-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-black text-center">📦 Book a Service</h2>
        <p className="text-gray-600 text-center mt-2">
          Choose your shipping service and schedule your booking.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-4">
            {/* Name Field */}
            <div className="flex-1">
              <label className="block text-black font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            {/* Email Field */}
            <div className="flex-1">
              <label className="block text-black font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Service Selection */}
            <div className="flex-1">
              <label className="block text-black font-semibold">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              >
                <option value="Ocean Shipping">🚢 Ocean Shipping</option>
                <option value="Air Shipping">✈️ Air Shipping</option>
                <option value="Truck Shipping">🚛 Truck Shipping</option>
                <option value="Custom Clearance">🛃 Custom Clearance</option>
                <option value="Freight Forwarding">📦 Freight Forwarding</option>
                <option value="Insurance">🛡️ Insurance</option>
              </select>
            </div>

            {/* Date Picker */}
            <div className="flex-1">
              <label className="block text-black font-semibold">Booking Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            {/* Phone Number */}
            <div className="flex-1">
              <label className="block text-black font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-bold transition duration-300 hover:bg-blue-700 shadow-md"
            >
              ✅ Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
