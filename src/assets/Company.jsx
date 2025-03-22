import React from "react";

const logisticsCompanies = [
  { name: "DHL Express", logo: "/logos/dhl.png" },
  { name: "FedEx", logo: "/logos/fedex.png" },
  { name: "UPS", logo: "/logos/ups.png" },
  { name: "TNT", logo: "/logos/tnt.png" },
  { name: "KPMG", logo: "/logos/kpmg.png" },
];

const Company = () => {
  return (
    <section
      className="relative py-10 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1682320426424-42e9417438c2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Dark Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative text-center">
        <h2 className="text-white text-3xl font-bold mb-8">
          Our Trusted Logistics Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {logisticsCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-20 bg-gray-100 rounded-lg shadow-lg p-2 relative z-10"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-14 md:h-16 object-contain opacity-90 hover:opacity-100 transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
