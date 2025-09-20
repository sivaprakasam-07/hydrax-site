import React from "react";
import { motion } from "framer-motion";
import { X, Check, Minus } from "lucide-react";

const PricingCard = ({ title, desc, features, isPopular, onBuyNow, onLearnMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative bg-white rounded-2xl shadow-xl border ${
        isPopular ? 'border-[#00C2FF] ring-2 ring-[#00C2FF]/20' : 'border-gray-200'
      } p-6 h-full flex flex-col`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#00C2FF] to-[#0099CC] text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 capitalize mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>

      <div className="flex-1 mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Features Included:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.available ? (
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              ) : (
                <Minus className="w-4 h-4 text-gray-400 flex-shrink-0" />
              )}
              <span className={`text-xs ${feature.available ? 'text-gray-700' : 'text-gray-400'}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <button
          onClick={onBuyNow}
          className={`w-full py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
            isPopular
              ? 'bg-gradient-to-r from-[#00C2FF] to-[#0099CC] text-white hover:shadow-lg hover:scale-105'
              : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105'
          }`}
        >
          Buy Now
        </button>
        <button
          onClick={onLearnMore}
          className="w-full py-2 px-4 rounded-xl border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export function HydraXPricing({ isOpen, onClose }) {
  if (!isOpen) return null;

  const pricingData = [
    {
      title: "Base Model",
      desc: "Entry-level with manual control only",
      features: [
        { name: "Manual Control", available: true },
        { name: "Bluetooth Connection Control", available: false },
        { name: "App Integration", available: false },
        { name: "Environmental Adaptation (AI)", available: false },
        { name: "User Adaptation (AI)", available: false },
      ],
      isPopular: false,
    },
    {
      title: "Standard Model",
      desc: "Most popular with smart features",
      features: [
        { name: "Manual Control", available: true },
        { name: "Bluetooth Connection Control", available: true },
        { name: "App Integration", available: true },
        { name: "Environmental Adaptation (AI)", available: true },
        { name: "User Adaptation (AI)", available: false },
      ],
      isPopular: true,
    },
    {
      title: "Top-End Model",
      desc: "Premium with all features including full AI capabilities",
      features: [
        { name: "Manual Control", available: true },
        { name: "Bluetooth Connection Control", available: true },
        { name: "App Integration", available: true },
        { name: "Environmental Adaptation (AI)", available: true },
        { name: "User Adaptation (AI)", available: true },
      ],
      isPopular: false,
    },
  ];

  const handleBuyNow = (model) => {
    console.log(`Buy Now clicked for: ${model}`);
    // Add your buy now logic here
  };

  const handleLearnMore = (model) => {
    console.log(`Learn More clicked for: ${model}`);
    // Add your learn more logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[3000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your HydraX</h1>
            <p className="text-lg text-gray-600">Select the perfect model that matches your hydration needs</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {pricingData.map((item, index) => (
              <PricingCard
                key={index}
                title={item.title}
                desc={item.desc}
                features={item.features}
                isPopular={item.isPopular}
                onBuyNow={() => handleBuyNow(item.title)}
                onLearnMore={() => handleLearnMore(item.title)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 text-center border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Free shipping on all orders • 30-day money-back guarantee • 2-year warranty included
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HydraXPricing;