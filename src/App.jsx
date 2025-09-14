
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductLineupOverlay from "./components/ProductLineupOverlay";
import MobileAppPopup from "./components/MobileAppPopup";
import CardsSection from "./components/CardsSection";
import ContactSection from "./components/ContactSection";
import ComingSoonOverlay from "./components/ComingSoonOverlay";

function App() {
  const [showProductLineup, setShowProductLineup] = useState(false);
  const [showMobileApp, setShowMobileApp] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        onProductLineup={() => setShowProductLineup(true)}
        onMobileApp={() => setShowMobileApp(true)}
        onComingSoon={() => setShowComingSoon(true)}
      />


      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-center py-2 font-bold tracking-wide shadow-md">
        Meet The NEW HydraX PRO !
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] py-24 md:py-32 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 z-10">
          <div className="flex-1 mb-12 md:mb-0 md:pr-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 drop-shadow-lg font-[Special Gothic Expanded One,Arial,sans-serif]">Drink Different.</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">Smarter Cooler Hotter Hydration, perfected—down to the last detail.</p>
            <button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">Shop Now</button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="/assets/bottle-main.png" alt="HydraX Smart Water Bottle" className="w-72 md:w-96 drop-shadow-2xl" />
          </div>
        </div>
        {/* Decorative background waves or shapes can be added here for extra polish */}
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">You Asked! We Delivered!!</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">Meet the <span className="text-blue-600 font-bold">Hydrax Smart Bottle</span> - now with intelligent temperature control, just the way you wanted.</p>
            <button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-2 rounded-full font-bold text-lg shadow hover:scale-105 transition-transform">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <CardsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Overlays/Popups */}
      <ProductLineupOverlay open={showProductLineup} onClose={() => setShowProductLineup(false)} />
      <MobileAppPopup open={showMobileApp} onClose={() => setShowMobileApp(false)} />
      <ComingSoonOverlay open={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </div>
  );
}

export default App;
