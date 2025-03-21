import React from 'react';

export default function FounderMessage() {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h3 className="text-[#111c4f] text-sm font-semibold uppercase">Founder's Message</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111c4f] mt-2">
            Welcome to Nexara Logistics!
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            I'm <span className="font-semibold">Ali Hussnain</span>, and I'm thrilled to share our journey with you.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We founded <span className="font-semibold">Nexara Logistics</span> with a simple yet powerful mission: 
            to provide seamless and efficient logistics solutions tailored to your needs. 
            In today's fast-moving world, reliable logistics are crucial for businesses to thrive, 
            and we are here to make that process effortless for you.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our team is committed to ensuring that your shipments reach their destinations on time, safely, 
            and with complete transparency. With innovation, dedication, and a customer-first approach, 
            we aim to set new standards in the logistics industry.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed font-semibold">
            Thank you for trusting us. We look forward to growing together and making logistics stress-free for you!
          </p>
        </div>

        {/* Founder Image Section */}
        <div className="flex justify-center">
          <img 
            src="/images/founder.jpg" 
            alt="Ali Hussnain, Founder of Nexara Logistics" 
            className="rounded-lg shadow-lg w-[250px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
