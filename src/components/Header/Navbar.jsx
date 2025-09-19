import { FaUser, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-[10px] z-[1000] border-b border-black/10 px-2.5">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-[15px]">
        {/* Logo */}
        <div className="flex items-center justify-center h-[30px]">
          <a href="#" className="flex items-center justify-center h-[30px] no-underline">
            <img
              src="src/assets/hydrax.png"
              alt="HydraX Logo"
              className="h-[180px] w-auto object-contain transition-transform duration-300 ease-in-out align-middle absolute mt-[15px] ml-0 mr-[130px] hover:scale-105"
            />
          </a>
        </div>

        {/* Nav links */}
        <ul className="flex list-none gap-[30px]">
          <li>
            <a href="#" className="no-underline text-[#333] font-bold transition-colors duration-300 ease-in-out flex items-center gap-[5px] hover:text-[#007bff]">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="no-underline text-[#333] font-bold transition-colors duration-300 ease-in-out flex items-center gap-[5px] hover:text-[#007bff]">
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="no-underline text-[#333] font-bold transition-colors duration-300 ease-in-out flex items-center gap-[5px] hover:text-[#007bff]">
              Custom
            </a>
          </li>
          <li>
            <a href="#" className="no-underline text-[#333] font-bold transition-colors duration-300 ease-in-out flex items-center gap-[5px] hover:text-[#007bff]">
              Sale
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <div className="flex gap-10 items-center">
            <FaUser className="text-xl text-[#1a1a1a] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:text-[#00C2FF]" />
            <FaShoppingCart className="text-xl text-[#1a1a1a] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:text-[#00C2FF]" />
          </div>
        </div>
      </div>
    </nav>
  );
}
