"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onClick
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.button
        onClick={onClick}
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-[#00c2ff] font-bold transition-colors duration-300 bg-transparent border-none">
        {item}
      </motion.button>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.1] shadow-xl">
                <motion.div
                  layout
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent bg-black/70 backdrop-blur-sm shadow-lg flex justify-center space-x-8 px-6 py-2">
      {children}
    </nav>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className="text-gray-300 hover:text-[#00c2ff] transition-colors duration-200 block py-3 px-5 font-semibold border-l-[3px] border-transparent hover:border-l-[#00c2ff] hover:bg-[#00c2ff]/10 hover:pl-[25px] rounded-r-md">
      {children}
    </a>
  );
};