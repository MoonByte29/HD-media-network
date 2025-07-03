import React from "react";
import { clients } from "../../data/Clientdata.ts";

const Client: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Our Clients</h2>
          <p className="text-violet-500">
            Trusted by over 120+ clients worldwide
          </p>
          <p className="section-subtitle">
            Our clients are our top priority, and we are committed to providing
            them with the highest level of service.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-50 hover:opacity-100"
            >
              <div className="group relative">
                <div className="w-26 h-26 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="text-gray-400 font-bold text-lg group-hover:text-purple-600 transition-colors duration-300"
                  />
                </div>

                <p className="absolute left-1/2 top-full mt-1 text-xs text-gray-400 group-hover:text-purple-600 hidden group-hover:block transition-all duration-300 -translate-x-1/2 whitespace-nowrap">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-violet-50 rounded-full px-6 py-3 border border-violet-200">
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
            <span className="text-violet-700 font-medium">
              Satisfied Clients worldwide
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;