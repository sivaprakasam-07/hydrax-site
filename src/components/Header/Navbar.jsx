import { useState, useEffect } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Menu, MenuItem, HoveredLink } from "../AnimatedMenu";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActive(null);
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
      <nav className="fixed top-0 w-full bg-black backdrop-blur-[10px] z-[1000] border-b border-white/10 px-2.5">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center py-[12px]">
          {/* Logo */}
          <div className="flex items-center justify-center h-[30px] mb-2">
            <a href="#" className="flex items-center justify-center h-[30px] no-underline">
              <img
                src="src\assets\HYDRAX-1.png"
                alt="HydraX Logo"
                className="h-[200px] w-auto object-contain transition-transform duration-300 ease-in-out align-middle absolute mt-[15px] ml-0 mr-[130px] hover:scale-105"
              />
            </a>
          </div>

          {/* Animated Nav Menu */}
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Shop" onClick={openShopMenu}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#">Smart Bottles</HoveredLink>
                <HoveredLink href="#">Accessories</HoveredLink>
                <HoveredLink href="#">Bundles</HoveredLink>
                <HoveredLink href="#">Gift Cards</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Explore">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#">Mobile App</HoveredLink>
                <HoveredLink href="#">How it works</HoveredLink>
                <HoveredLink href="#">Sustainability</HoveredLink>
                <HoveredLink href="#">Blog</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Custom">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#">Design Your Bottle</HoveredLink>
                <HoveredLink href="#">Corporate Orders</HoveredLink>
                <HoveredLink href="#">Engraving</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Sale">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#">Limited Offers</HoveredLink>
                <HoveredLink href="#">Clearance</HoveredLink>
                <HoveredLink href="#">Bundle Deals</HoveredLink>
              </div>
            </MenuItem>
          </Menu>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <div className="flex gap-10 items-center">
              <FaUser 
                onClick={handleUserClick}
                className="text-xl text-[#fff4f4] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:text-[#00C2FF]" 
              />
              <div className="relative -mr-[90px]">
                <FaShoppingCart 
                  onClick={openCart}
                  className="text-xl text-[#fffafa] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:text-[#00C2FF]" 
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
