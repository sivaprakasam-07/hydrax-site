import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Thermometer, Bluetooth, Leaf, Zap } from 'lucide-react';
import AnimatedShopButton from "../components/AnimatedShopButton";
import bottleImg from "../assets/bottle-main.png"; // replace with your image path

export default function FeaturesPage() {
  const [rotate, setRotate] = useState({ x: 0, y: 15, z: 35 });
  const [isHovering, setIsHovering] = useState(false);
  const [segmentProgress, setSegmentProgress] = useState([0, 0, 0, 0]); // progress for each feature
  const bottleRef = useRef(null);
  const featuresRef = useRef(null);
  const featureRefs = useRef([]);

  // Track scroll and update segment progress individually
  useEffect(() => {
    const handleScroll = () => {
      if (!featuresRef.current) return;

      const newProgress = featuresData.map((_, index) => {
        const el = featureRefs.current[index];
        if (!el) return 0;

        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Progress: 0 when top is below viewport, 1 when bottom fully passes viewport
        const start = viewportHeight * 0.8; // start fill when element enters viewport
        const end = viewportHeight * 0.3;   // finish fill before leaving

        if (rect.top > start) return 0;
        if (rect.bottom < end) return 1;

        // Calculate partial fill
        const total = start - end;
        const current = Math.min(start, Math.max(end, rect.top)) - end;
        return 1 - current / total;
      });

      setSegmentProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (bottleRef.current) {
      const rect = bottleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = ((e.clientY - centerY) / rect.height) * -10;
      const y = ((e.clientX - centerX) / rect.width) * 10 + 15;
      const z = 35;

      setRotate({
        x: Math.max(-15, Math.min(15, x)),
        y: Math.max(5, Math.min(25, y)),
        z: 35,
      });
    }
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 15, z: 35 });
    setIsHovering(false);
  };

  const featuresData = [
    {
      id: 1,
      title: "Meet HydraX",
      content:
        "More than just a bottle — HydraX is your personal hydration assistant that transforms how you stay hydrated.",
      tagline: "Smart. Stylish. Sustainable.",
      icon: <Zap className="size-8 text-[#00c2ff]" />,
      image: bottleImg,
    },
    {
      id: 2,
      title: "Temperature Control",
      content:
        "Enjoy perfectly cooled or gently warmed water with Hydrax's intelligent temperature control. Whether it's hot outside or chilly indoors, your bottle adjusts to match your environment and preferences.",
      icon: <Thermometer className="size-8 text-[#00c2ff]" />,
      image: bottleImg,
    },
    {
      id: 3,
      title: "Real-Time Control",
      subtitle: "Bluetooth Connectivity",
      content:
        "Hydrax connects effortlessly to your smartphone via Bluetooth. Monitor hydration, set reminders, adjust temperature, and explore smart features—all through the app in real-time.",
      icon: <Bluetooth className="size-8 text-[#00c2ff]" />,
      image: bottleImg,
    },
    {
      id: 4,
      title: "Environmental Adaptation",
      content:
        "Hydrax adapts intelligently to your surroundings. Stay refreshed with perfect hydration no matter the weather.",
      icon: <Leaf className="size-8 text-[#00c2ff]" />,
      image: bottleImg,
    },
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
            Drink <span className="text-[#00c2ff]">Different</span>
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
            <AnimatedShopButton />

            <Link
              to="/"
              className="group px-6 py-2.5 border-2 border-white/20 rounded-full text-sm font-medium transition-all duration-300 hover:border-[#00c2ff] hover:text-[#00c2ff] hover:shadow-lg hover:scale-105"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Bottle */}
        <motion.div
          className="relative mt-12 lg:mt-0 perspective-1000"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c2ff]/20 to-purple-500/20 blur-3xl scale-150 animate-pulse"></div>

          <motion.img
            ref={bottleRef}
            src={bottleImg}
            alt="HydraX Bottle"
            className="relative w-64 sm:w-80 md:w-96 lg:w-[28rem] drop-shadow-2xl cursor-pointer"
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotateZ(${rotate.z}deg) translateZ(20px)`,
              transition:
                "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transformStyle: "preserve-3d",
            }}
            onMouseEnter={() => setIsHovering(true)}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>

      {/* Features Section with Segmented Progress Bar */}
      <motion.div
        ref={featuresRef}
        className="relative px-6 md:px-12 lg:px-20 py-20"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p className="text-sm md:text-base text-gray-400 uppercase tracking-wider mb-4">
            GET STARTED EFFORTLESSLY
          </motion.p>
          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Four simple steps to experience
            <br />
            <span className="text-[#00c2ff]">
              the future of hydration
            </span>
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Progress Bar */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5">
            {featuresData.map((_, i) => {
              const segmentHeight = 22; // %
              const gapHeight = 2; // %
              const top = i * (segmentHeight + gapHeight);

              return (
                <div
                  key={i}
                  className="absolute w-full"
                  style={{ top: `${top}%`, height: `${segmentHeight}%` }}
                >
                  <div className="w-full h-full bg-gray-800 rounded-sm" />
                  <div
                    className="absolute top-0 w-full bg-gradient-to-b from-[#00c2ff] to-[#0099cc] rounded-sm transition-all duration-200 ease-out"
                    style={{ height: `${segmentProgress[i] * 100}%` }}
                  />
                </div>
              );
            })}
          </div>

          {/* Features List */}
          <div className="space-y-24 md:space-y-32">
            {featuresData.map((feature, i) => (
              <motion.div
                key={feature.id}
                ref={(el) => (featureRefs.current[i] = el)}
                className="relative flex items-start gap-8 md:gap-16"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {/* Dot */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className={`w-6 h-6 md:w-8 md:h-8 border-4 rounded-full flex items-center justify-center transition-all duration-200 ${
                      segmentProgress[i] >= 1
                        ? "bg-[#00c2ff] border-[#00c2ff] shadow-lg shadow-[#00c2ff]/50"
                        : segmentProgress[i] > 0
                        ? "bg-[#00c2ff]/50 border-[#00c2ff] shadow-md shadow-[#00c2ff]/30"
                        : "bg-gray-800 border-gray-600"
                    }`}
                  >
                    <motion.div
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                        segmentProgress[i] >= 1
                          ? "bg-white"
                          : segmentProgress[i] > 0
                          ? "bg-white/70"
                          : "bg-gray-600"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-16">
                  {/* Text */}
                  <div className="flex-1 space-y-4 md:space-y-6">
                    <div className="flex items-start gap-4">
                      {feature.icon}
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                          {i + 1}. {feature.title}
                        </h3>
                        {feature.subtitle && (
                          <p className="text-base md:text-lg text-[#00c2ff] font-medium">
                            {feature.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                      {feature.content}
                    </p>
                    {feature.tagline && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00c2ff]/10 border border-[#00c2ff]/30 rounded-full">
                        <span className="text-[#00c2ff] font-semibold text-sm md:text-base">
                          {feature.tagline}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00c2ff]/20 to-purple-500/20 blur-3xl scale-150 animate-pulse"></div>
                      <motion.img
                        src={feature.image}
                        alt={feature.title}
                        className="relative w-32 md:w-48 lg:w-64 drop-shadow-2xl"
                        style={{
                          transform: `perspective(1000px) rotateY(15deg) rotateZ(35deg)`,
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
