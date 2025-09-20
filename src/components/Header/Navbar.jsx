import { useState, useRef, useEffect } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsExploreOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsExploreOpen(false);
        setIsShopMenuOpen(false);
        setIsCartOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const openShopMenu = () => {
    setIsShopMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeShopMenu = () => {
    setIsShopMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openCart = () => {
    setIsCartOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCart = () => {
    setIsCartOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleUserClick = () => {
    window.location.href = '/login'; // Adjust path as needed
  };

  return (
    <>
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
              <button 
                onClick={openShopMenu}
                className="no-underline text-[#333] font-bold transition-colors duration-300 ease-in-out flex items-center gap-[5px] hover:text-[#007bff] bg-transparent border-none cursor-pointer"
              >
                Shop
              </button>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="no-underline text-[#333] font-bold transition-colors duration-300 ease-in-out flex items-center gap-[5px] hover:text-[#007bff] bg-transparent border-none cursor-pointer"
              >
                Explore 
                <span className={`text-xs text-black transition-transform duration-300 ease-in-out ${isExploreOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-[200%] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-[0_8px_25px_rgba(0,0,0,0.15)] py-[15px] min-w-[170px] border border-black/8 mt-[5px] z-[1001] transition-all duration-300 cubic-bezier(0.4,0,0.2,1) ${
                isExploreOpen 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2.5'
              }`}>
                <a 
                  href="#" 
                  className="block text-[#555] text-[0.95rem] py-3 px-5 transition-all duration-200 ease-in-out border-l-[3px] border-transparent font-semibold hover:bg-blue-500/5 hover:text-[#007bff] hover:border-l-[#007bff] hover:pl-[25px]"
                >
                  Mobile App
                </a>
                <a 
                  href="#" 
                  className="block text-[#555] text-[0.95rem] py-3 px-5 transition-all duration-200 ease-in-out border-l-[3px] border-transparent font-semibold hover:bg-blue-500/5 hover:text-[#007bff] hover:border-l-[#007bff] hover:pl-[25px]"
                >
                  How it works
                </a>
                <a 
                  href="#" 
                  className="block text-[#555] text-[0.95rem] py-3 px-5 transition-all duration-200 ease-in-out border-l-[3px] border-transparent font-semibold hover:bg-blue-500/5 hover:text-[#007bff] hover:border-l-[#007bff] hover:pl-[25px]"
                >
                  Sustainability
                </a>
                <a 
                  href="#" 
                  className="block text-[#555] text-[0.95rem] py-3 px-5 transition-all duration-200 ease-in-out border-l-[3px] border-transparent font-semibold hover:bg-blue-500/5 hover:text-[#007bff] hover:border-l-[#007bff] hover:pl-[25px]"
                >
                  Blog
                </a>
              </div>
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
              <FaUser 
                onClick={handleUserClick}
                className="text-xl text-[#1a1a1a] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:text-[#00C2FF]" 
              />
              <div className="relative -mr-[90px]">
                <FaShoppingCart 
                  onClick={openCart}
                  className="text-xl text-[#1a1a1a] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:text-[#00C2FF]" 
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Shop Slide Menu Overlay */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black/50 z-[2000] transition-all duration-300 ease-in-out ${
        isShopMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={closeShopMenu}>
        <div 
          className={`fixed top-0 left-0 w-[450px] h-full bg-white shadow-[2px_0_20px_rgba(0,0,0,0.1)] rounded-r-[15px] z-[2001] transition-transform duration-300 cubic-bezier(0.4,0,0.2,1) ${
            isShopMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Shop Menu Content */}
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#333]">Shop</h2>
              <button 
                onClick={closeShopMenu}
                className="text-2xl text-[#666] hover:text-[#333] transition-colors"
              >
                ×
              </button>
            </div>
            <div className="space-y-6">
              <a href="#" className="block text-lg text-[#555] hover:text-[#007bff] transition-colors font-semibold">
                Smart Bottles
              </a>
              <a href="#" className="block text-lg text-[#555] hover:text-[#007bff] transition-colors font-semibold">
                Accessories
              </a>
              <a href="#" className="block text-lg text-[#555] hover:text-[#007bff] transition-colors font-semibold">
                Bundles
              </a>
              <a href="#" className="block text-lg text-[#555] hover:text-[#007bff] transition-colors font-semibold">
                Gift Cards
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Overlay */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black/50 z-[2000] transition-all duration-300 ease-in-out ${
        isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={closeCart}>
        <div 
          className={`fixed top-0 right-0 w-[450px] h-full bg-white shadow-[-2px_0_20px_rgba(0,0,0,0.1)] rounded-l-[15px] z-[2001] transition-transform duration-300 cubic-bezier(0.4,0,0.2,1) ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cart Content */}
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#333]">Shopping Cart</h2>
              <button 
                onClick={closeCart}
                className="text-2xl text-[#666] hover:text-[#333] transition-colors"
              >
                ×
              </button>
            </div>
            <div className="text-center text-[#666]">
              <p>Your cart is empty</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
