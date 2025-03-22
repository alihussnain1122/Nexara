import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0E1A] text-white py-12 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section - Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Nexara Logistics</h2>
          <p className="text-sm text-gray-400 mt-2">
            At Nexara Logistics, we provide personalized and efficient logistics solutions tailored to our clients' needs.
          </p>
          <div className="mt-4 text-gray-400 text-sm space-y-2">
            <p>📍 <span className="font-medium text-white">Address:</span> Dubai, UAE</p>
            <p>📞 <span className="font-medium text-white">Phone:</span> +971 50 123 4567</p>
            <p>✉️ <span className="font-medium text-white">Email:</span> support@nexaralogistics.com</p>
          </div>
        </div>

        {/* Recent Project */}
        <div>
          <h3 className="text-lg font-semibold">Recent Project</h3>
          <div className="w-[200px] h-[130px] bg-[#121735] rounded-lg mt-3 relative overflow-hidden group">
            <img
              src="https://plus.unsplash.com/premium_photo-1681487855134-d6c0434f91f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Recent Project"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h4 className="text-white font-bold text-sm">Smart Logistics</h4>
              <p className="text-gray-300 text-xs mt-1">Efficient cargo tracking</p>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe to Us</h3>
          <p className="text-sm text-gray-400 mt-2">
            Stay updated with our latest news and offers.
          </p>
          <div className="mt-3 flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 bg-[#121735] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF4C1E]"
            />
            <button className="w-full bg-[#FF4C1E] hover:bg-[#d63e18] text-white py-3 rounded-lg transition cursor-pointer">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Centered Copyright */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>COPYRIGHT © 2025 Nexara Logistics</p>
        <p className="mt-1">Designed with ❤️ by Ali Hussnain</p>
      </div>
    </footer>
  );
};

export default Footer;
