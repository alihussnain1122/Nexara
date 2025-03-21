import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0E1A] text-white py-12 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">Nexara Logistics</h2>
          <p className="text-sm text-gray-400 mt-2">
            At FastGo, we believe in providing our clients with personalized and
            efficient logistics solutions that meet their unique needs.
          </p>
        </div>

        {/* Recent Project */}
        <div>
          <h3 className="text-lg font-semibold">RECENT PROJECT</h3>
          <div className="w-[180px] h-[120px] bg-[#121735] rounded-lg mt-3 relative overflow-hidden group">
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
          <h3 className="text-lg font-semibold">SUBSCRIBE US</h3>
          <div className="mt-3 flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 text-white rounded-lg border-white-4"
            />
            <button className="w-full bg-[#FF4C1E] hover:bg-[#d63e18] text-white py-3 rounded-lg transition">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Centered Copyright */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>COPYRIGHT © 2025 Nexara Logistics</p>
        <p className="mt-1">DESIGNED with ❤️ by Ali Hussnain</p>
      </div>
    </footer>
  );
};

export default Footer;
