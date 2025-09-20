import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function MobileAppPopup({ isOpen, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // App screenshots data
  const screenshots = [
    {
      id: 1,
      image: "/src/assets/App-1.jpg",
      alt: "HydraX App - Main Dashboard",
      title: "Main Dashboard"
    },
    {
      id: 2,
      image: "/src/assets/APP-2.jpg", 
      alt: "HydraX App - Hydration Tracking",
      title: "Hydration Tracking"
    },
    {
      id: 3,
      image: "/src/assets/APP-3.jpg",
      alt: "HydraX App - Settings",
      title: "Settings & Configuration"
    },
    {
      id: 4,
      image: "/src/assets/APP-4.jpg",
      alt: "HydraX App - Stats & Features",
      title: "Analytics & Insights"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isOpen || !isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, isAutoPlaying, isPaused, screenshots.length]);

  // Handle manual navigation
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    // Resume autoplay after 1 second
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 1000);
  }, []);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % screenshots.length;
    goToSlide(next);
  }, [currentSlide, screenshots.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = currentSlide === 0 ? screenshots.length - 1 : currentSlide - 1;
    goToSlide(prev);
  }, [currentSlide, screenshots.length, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, prevSlide, nextSlide]);

  // Pause/resume on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[3000] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 hover:bg-gray-100 rounded-full transition-colors z-10"
            aria-label="Close mobile app preview"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">HydraX Mobile App</h2>
            <p className="text-sm text-gray-600">Experience smart hydration in your pocket</p>
          </div>

          {/* Phone Mockup */}
          <div className="relative mx-auto">
            {/* Phone Frame */}
            <div className="relative mx-auto w-[200px] h-[360px] sm:w-[220px] sm:h-[400px] bg-black rounded-[2rem] p-1.5 shadow-xl">
              {/* Screen */}
              <div className="relative w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                {/* Top Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-3 sm:w-20 sm:h-4 bg-black rounded-b-xl z-10"></div>
                
                {/* Screenshots Container */}
                <div className="relative w-full h-full">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={screenshots[currentSlide].image}
                      alt={screenshots[currentSlide].alt}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 700'%3E%3Crect width='400' height='700' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='16'%3E" + screenshots[currentSlide].title + "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </AnimatePresence>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-200 hover:scale-105"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-200 hover:scale-105"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center space-x-1.5 mt-4">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-[#00C2FF] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>

          {/* Screenshot Title */}
          <div className="text-center mt-3">
            <h3 className="text-base font-semibold text-gray-800">
              {screenshots[currentSlide].title}
            </h3>
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-2">
            <p className="text-xs text-gray-500">
              {isAutoPlaying && !isPaused ? '▶ Auto-playing' : '⏸ Hover to pause'}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}