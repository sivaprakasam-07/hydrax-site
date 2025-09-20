"use client";

import { cn } from "../lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * HydraX branded custom pointer component
 */
export function HydraXPointer({
  className,
  style,
  children,
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Hide default cursor globally
      document.body.style.cursor = "none";
      document.documentElement.style.cursor = "none";
      
      // Set initial active state
      setIsActive(true);
      
      if (containerRef.current) {
        const parentElement = containerRef.current.parentElement;

        if (parentElement) {
          const handleMouseMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
          };

          const handleMouseEnter = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setIsActive(true);
          };

          const handleMouseLeave = () => {
            // Keep pointer visible even when leaving
            setIsActive(true);
          };

          // Add event listeners to the entire document for global coverage
          document.addEventListener("mousemove", handleMouseMove);
          document.addEventListener("mouseenter", handleMouseEnter);
          document.addEventListener("mouseleave", handleMouseLeave);

          return () => {
            document.body.style.cursor = "";
            document.documentElement.style.cursor = "";
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
          };
        }
      }
    }
  }, [x, y]);

  return (
    <>
      <div ref={containerRef} />
      <motion.div
        className="custom-pointer pointer-events-none fixed z-[9999] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          top: y,
          left: x,
          ...style,
        }}
        animate={{
          scale: isActive ? 1.1 : 1,
          opacity: isActive ? 1 : 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        {...props}
      >
        {children || (
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 w-6 h-6 bg-[#00C2FF] rounded-full blur-sm opacity-60 animate-pulse"></div>
            
            {/* Main pointer */}
            <svg
              viewBox="0 0 16 16"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "relative z-10 rotate-[-70deg] drop-shadow-lg",
                className,
              )}
            >
              <defs>
                <linearGradient id="hydrax-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00C2FF" />
                  <stop offset="100%" stopColor="#0099CC" />
                </linearGradient>
              </defs>
              <path 
                d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" 
                fill="url(#hydrax-gradient)"
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            </svg>
            
            {/* Small trailing dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full opacity-80"></div>
          </div>
        )}
      </motion.div>
    </>
  );
}