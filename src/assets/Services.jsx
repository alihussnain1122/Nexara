import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "Ocean Shipping", description: "Reliable and cost-effective sea freight solutions...", icon: "🚢" },
  { title: "Air Shipping", description: "Fast and secure air cargo services...", icon: "✈️" },
  { title: "Truck Shipping", description: "Seamless road transportation...", icon: "🚛" },
  { title: "Custom Clearance", description: "Hassle-free customs processing...", icon: "🛃" },
  { title: "Freight Forwarding", description: "End-to-end logistics coordination...", icon: "📦" },
  { title: "Insurance", description: "Protect your valuable shipments...", icon: "🛡️" }
];

const Services = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-blue-900 font-semibold uppercase text-sm">Our Services</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#111c4f] mt-2">
          Efficient and Reliable Shipping with <span className="text-orange-500">Nexara Logistics</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg transition duration-300 bg-[#111c4f] text-white hover:bg-white hover:text-blue-900 shadow-lg cursor-pointer"
          >
            <div className="bg-blue-600 p-3 rounded-full inline-block">
              <span className="text-white text-xl">{service.icon}</span>
            </div>
            <h3 className="text-lg font-bold mt-4">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Updated Book Service Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/booking")} // Navigate to Booking Page
          className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 cursor-pointer"
        >
          Book Service
        </button>
      </div>
    </section>
  );
};

export default Services;
