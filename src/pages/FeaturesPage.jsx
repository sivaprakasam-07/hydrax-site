// src/pages/FeaturesPage.jsx
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import AnimatedShopButton from "../components/AnimatedShopButton";
import bottleImg from "../assets/bottle-main.png"; // replace with your image path

export default function FeaturesPage() {
  const [rotate, setRotate] = useState({ x: 0, y: 15, z: 35 }); // Start with slight right turn and diagonal tilt
  const [isHovering, setIsHovering] = useState(false);
  const bottleRef = useRef(null);

  const handleMouseMove = (e) => {
    if (bottleRef.current) {
      const rect = bottleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate relative position from bottle center but keep the diagonal tilt
      const x = ((e.clientY - centerY) / rect.height) * -10; // Subtle up/down movement
      const y = ((e.clientX - centerX) / rect.width) * 10 + 15; // Maintain right turn base
      const z = 35; // Keep constant diagonal tilt - no variation
      
      setRotate({ 
        x: Math.max(-15, Math.min(15, x)), 
        y: Math.max(5, Math.min(25, y)), // Always maintain right turn
        z: 35 // Fixed diagonal position
      });
    }
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 15, z: 35 }); // Always return to diagonal position
    setIsHovering(false);
  };

  const features = [
    {
      icon: "💧",
      title: "Smart Temperature Control",
      description: "Maintains perfect temperature for up to 12 hours"
    },
    {
      icon: "📱",
      title: "App Connected",
      description: "Track hydration goals and customize settings"
    },
    {
      icon: "⚡",
      title: "Fast Charging",
      description: "USB-C charging with 30-day battery life"
    },
    {
      icon: "🎨",
      title: "Premium Design",
      description: "Sleek, modern design with multiple color options"
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-black text-white overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-20 pt-20">
        {/* Left Content */}
        <motion.div 
          className="text-center lg:text-left max-w-2xl space-y-8 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Drink <span className="text-[#00c2ff]">Different</span>.
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience the future of hydration with our smart bottle technology. 
            Perfectly engineered for the modern lifestyle.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Animated Shop Button Component */}
            <AnimatedShopButton />
            
            <Link to="/" className="group px-6 py-2.5 border-2 border-white/20 rounded-full text-sm font-medium transition-all duration-300 hover:border-[#00c2ff] hover:text-[#00c2ff] hover:shadow-lg hover:scale-105">
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Bottle with 3D Effect */}
        <motion.div 
          className="relative mt-12 lg:mt-0 perspective-1000"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c2ff]/20 to-purple-500/20 blur-3xl scale-150 animate-pulse"></div>
          
          {/* Bottle */}
          <motion.img
            ref={bottleRef}
            src={bottleImg}
            alt="HydraX Bottle"
            className="relative w-64 sm:w-80 md:w-96 lg:w-[28rem] drop-shadow-2xl cursor-pointer"
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotateZ(${rotate.z}deg) translateZ(20px)`,
              transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transformStyle: "preserve-3d"
            }}
            onMouseEnter={() => setIsHovering(true)}
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00c2ff] rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div 
        className="px-6 md:px-12 lg:px-20 py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-[#00c2ff]">HydraX</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-[#00c2ff]/50 transition-all duration-300 hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#00c2ff]">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
