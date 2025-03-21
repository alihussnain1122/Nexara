import React from 'react';

export default function Front() {
  return (
    <div
      className="front text-white bg-cover bg-center h-screen flex flex-col lg:flex-row items-center px-6 lg:px-16"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598193957011-39b9f2916992?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-lg uppercase tracking-widest">WE ARE BEST LOGISTIC COMPANY</p>
        <div className="cargo font-bold text-3xl md:text-4xl space-y-2 mt-2">
          <p>STREAMLINE YOUR SHIPPING</p>
          <p>WITH OUR CARGO SERVICES</p>
        </div>
        <div className="para py-4 max-w-lg mx-auto lg:mx-0">
          <p>
            Simplify your shipping process and make it more efficient with our cargo services. 
            From start to finish, we'll handle everything to ensure your cargo arrives safely.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center lg:justify-start items-center space-x-6 mt-6">
          <img 
            src="https://randomuser.me/api/portraits/men/45.jpg" 
            alt="Client" 
            className="w-12 h-12 rounded-md object-cover"
          />
          <div>
            <p className="text-xl md:text-2xl font-bold">26K</p>
            <p className="text-sm text-gray-300">Satisfied Clients</p>
          </div>
          <span className="border-r border-gray-500 h-10 hidden md:block"></span>
          <div>
            <p className="text-xl md:text-2xl font-bold">12+</p>
            <p className="text-sm text-gray-300">Years of Experience</p>
          </div>
        </div>
      </div>

      {/* Tracking Box */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <div className="bg-gray-900 p-5 rounded-lg w-full max-w-md">
          <div className="flex justify-center gap-5 border-b border-gray-700 pb-2 mb-4 text-sm">
            <p className="text-gray-400 font-semibold cursor-pointer hover:text-orange-500">TRACKING</p>
            <p className="text-gray-400 cursor-pointer hover:text-orange-500">RATE & SHIP</p>
          </div>
          <div className="flex items-center bg-gray-800 p-3 rounded-lg">
            <input
              type="text"
              placeholder="TRACKING ID"
              className="bg-transparent flex-grow text-white outline-none px-3 text-sm"
            />
            <button className="bg-orange-500 px-5 py-2 rounded-md text-sm cursor-pointer hover:bg-orange-600">
              TRACK
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            See the tracking ID on the shipping document. 
            <span className="text-red-500 cursor-pointer"> Help</span>
          </p>
        </div>
      </div>
    </div>
  );
}
