import React from "react";
import { Link } from "react-router-dom"; 
const About = () => {
  return (
    <div className="w-full bg-white">
      <section className="w-full max-w-[1400px] mx-auto py-12 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-[#111c4f] text-sm font-semibold uppercase">About Us</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111c4f] mt-2">
              Empowering Your Business with Tailored Logistics Solutions
            </h2>
            <p className="text-gray-600 mt-4">
              At Nexara Logistics, we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs. With years of
              experience and a team of experts, we are dedicated to empowering your
              business with seamless shipping experiences.
            </p>
            <Link to="/more-details">
  <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 cursor-pointer">
    Learn More
  </button>
</Link>

          </div>

          {/* Right Image & Stats */}
          <div className="flex justify-center">
  <div className="group bg-[#111c4f] p-6 rounded-lg relative w-[250px] h-[250px] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-blue-900">
    <div className="bg-white p-4 rounded-lg shadow-md text-center transition-all duration-300 group-hover:bg-gray-200">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 p-2 rounded-full transition-all duration-300 group-hover:bg-white">
        <span className="text-white text-lg transition-all duration-300 group-hover:text-red-600">⚓</span>
      </div>
      <p className="text-3xl font-bold text-gray-900 mt-4 transition-all duration-300 group-hover:text-red-600">
        647 +
      </p>
      <p className="text-[#111c4f] font-medium transition-all duration-300 group-hover:text-gray-800">
        Awards Winning
      </p>
    </div>
  </div>
</div>

        </div>

        {/* Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-[#111c4f]">
          <FeatureCard number="01" title="Expertise and Experience" />
          <FeatureCard number="02" title="Committed to Quality" />
          <FeatureCard number="03" title="Comprehensive Services" />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ number, title }) => {
  return (
    <div className="bg-[#111c4f] text-white p-6 rounded-lg flex items-center">
      <span className="text-2xl font-bold mr-4">{number}</span>
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default About;
