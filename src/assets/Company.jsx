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
    <section className="bg-blue-600 py-10 px-4">
      <h2 className="text-white text-3xl font-bold text-center mb-8">
        Our Trusted Logistics Partners
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {logisticsCompanies.map((company, index) => (
          <div key={index} className="flex items-center justify-center w-32 h-20 bg-white rounded-lg shadow-lg p-2">
            <img
              src={company.logo}
              alt={company.name}
              className="h-14 md:h-16 object-contain opacity-90 hover:opacity-100 transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Company;
