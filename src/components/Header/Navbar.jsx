// import React from "react";
// import { FaUser, FaShoppingCart } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold text-black">Hydra<span className="text-orange-500">X</span></span>
//           <span className="text-xs text-blue-500 -mt-2">Smarter, Cooler, Hotter!</span>
//         </div>

//         {/* Nav links */}
//         <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
//           <li className="hover:text-black cursor-pointer">Shop</li>
//           <li className="hover:text-black cursor-pointer">Explore</li>
//           <li className="hover:text-black cursor-pointer">Custom</li>
//           <li className="hover:text-black cursor-pointer">Sale</li>
//         </ul>

//         {/* Icons */}
//         <div className="flex items-center gap-4 text-gray-600">
//           <FaUser className="cursor-pointer hover:text-black" />
//           <FaShoppingCart className="cursor-pointer hover:text-black" />
//         </div>
//       </div>
//     </nav>
//   );
// }


import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md h-16 flex items-center">
      <div className="max-w-8xl mx-auto px-6 w-full flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center h-full relative overflow-visible" style={{ minWidth: '6rem' }}>
          <img
            src="src/assets/hydrax.png"
            alt="HydraX Logo"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-auto object-contain"
            style={{ height: '6rem', minHeight: '6rem', maxHeight: '6rem', zIndex: 1 }}
          />
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">Shop</li>
          <li className="hover:text-black cursor-pointer">Explore</li>
          <li className="hover:text-black cursor-pointer">Custom</li>
          <li className="hover:text-black cursor-pointer">Sale</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-600">
          <FaUser className="cursor-pointer hover:text-black" />
          <FaShoppingCart className="cursor-pointer hover:text-black" />
        </div>
      </div>
    </nav>
  );
}
