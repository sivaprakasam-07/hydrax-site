import React from "react";

const models = [
  {
    name: "Base Model",
    features: [
      { name: "Manual Control", available: true },
      { name: "Bluetooth Connection Control", available: false },
      { name: "App Integration", available: false },
      { name: "Environmental Adaptation(AI)", available: false },
      { name: "User Adaptation(AI)", available: false },
    ],
    featured: false,
  },
  {
    name: "Standard Model",
    features: [
      { name: "Manual Control", available: true },
      { name: "Bluetooth Connection Control", available: true },
      { name: "App Integration", available: true },
      { name: "Environmental Adaptation(AI)", available: true },
      { name: "User Adaptation(AI)", available: false },
    ],
    featured: true,
  },
  {
    name: "Top-End Model",
    features: [
      { name: "Manual Control", available: true },
      { name: "Bluetooth Connection Control", available: true },
      { name: "App Integration", available: true },
      { name: "Environmental Adaptation(AI)", available: true },
      { name: "User Adaptation(AI)", available: true },
    ],
    featured: false,
  },
];


const ProductLineupOverlay = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl mx-auto rounded-2xl p-10" style={{background: 'rgba(255,255,255,0.15)', boxShadow: '0 8px 40px 0 rgba(0,0,0,0.25)', backdropFilter: 'blur(16px)'}}>
        <button onClick={onClose} className="absolute top-6 right-6 text-3xl text-gray-700 hover:text-gray-900 bg-white bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center shadow-md">✕</button>
        <h2 className="text-4xl font-extrabold text-white text-center mb-2 drop-shadow">Choose Your HydraX</h2>
        <p className="text-lg text-white/80 text-center mb-10">Select the perfect model that matches your hydration needs</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <div key={model.name} className={`rounded-2xl bg-white bg-opacity-90 shadow-xl p-8 flex flex-col items-center border-2 ${model.featured ? 'border-cyan-400' : 'border-transparent'} relative`}>
              {model.featured && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-1 bg-cyan-400 text-white text-xs font-bold rounded-full shadow">MOST POPULAR</span>
              )}
              <h3 className="font-extrabold text-2xl text-gray-900 mb-6 text-center">{model.name}</h3>
              <ul className="mb-8 w-full space-y-2">
                {model.features.map((f) => (
                  <li key={f.name} className="flex items-center gap-3 text-lg">
                    <span className={`text-2xl ${f.available ? 'text-green-500' : 'text-red-400'}`}>{f.available ? '✓' : '✗'}</span>
                    <span className={f.available ? 'text-gray-900' : 'line-through text-gray-400'}>{f.name}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-cyan-400 text-white font-bold py-3 rounded-lg mb-3 shadow hover:bg-cyan-500 transition">Buy Now</button>
              <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg border border-gray-300 shadow hover:bg-gray-100 transition">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLineupOverlay;
