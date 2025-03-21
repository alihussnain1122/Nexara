import React from "react";

function Top() {
  return (
    <div className="box bg-white flex justify-between items-center w-full px-6 py-3 shadow-md fixed top-0 left-0 z-50">
      {/* Contact Info */}
      <div className="emailNum flex flex-row gap-2 text-black">
        <p>contact@Nexaralogistics.com |</p>
        <p>+1 (333) 000-0000</p>
      </div>

      {/* Get Quote Button */}
      <div className="qoute bg-orange-600 rounded-md w-40 text-white border-white border-2 px-4 py-2 text-center">
        <button className="font-semibold">GET QUOTE</button>
      </div>
    </div>
  );
}

export default Top;
