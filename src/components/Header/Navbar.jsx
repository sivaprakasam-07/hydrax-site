import { useState, useEffect } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { LogOut, User, Settings, Gauge } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, HoveredLink } from "../AnimatedMenu";
import MobileAppPopup from "../MobileAppPopup";
import LoginForm from "../LoginForm";
import { useAuth } from "../../contexts/AuthContext";
import authService from "../../services/authService";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileAppOpen, setIsMobileAppOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActive(null);
        setIsShopMenuOpen(false);
        setIsCartOpen(false);
        setIsMobileAppOpen(false);
        setIsLoginOpen(false);
        setIsUserMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isUserMenuOpen && !e.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isUserMenuOpen]);

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
    if (currentUser) {
      setIsUserMenuOpen(!isUserMenuOpen);
    } else {
      setIsLoginOpen(true);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setIsUserMenuOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const goToDashboard = () => {
    navigate('/dashboard');
    setIsUserMenuOpen(false);
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
            <MenuItem setActive={setActive} active={active} item="Shop">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#" onClick={openShopMenu}>Smart Bottles</HoveredLink>
                <HoveredLink href="#">Accessories</HoveredLink>
                <HoveredLink href="#">Bundles</HoveredLink>
                <HoveredLink href="#">Gift Cards</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Explore">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#" onClick={() => setIsMobileAppOpen(true)}>Mobile App</HoveredLink>
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
              {/* User Profile / Login */}
              <div className="relative user-menu-container">
                {currentUser ? (
                  <>
                    {/* Authenticated User */}
                    <div 
                      onClick={handleUserClick}
                      className="flex items-center space-x-2 cursor-pointer group"
                    >
                      {currentUser.photoURL ? (
                        <img 
                          src={currentUser.photoURL} 
                          alt="Profile" 
                          className="w-8 h-8 rounded-full object-cover border-2 border-transparent group-hover:border-[#00C2FF] transition-colors"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-br from-[#00C2FF] to-[#0099CC] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FaUser className="text-sm text-white" />
                        </div>
                      )}
                      <span className="text-white text-sm hidden md:block group-hover:text-[#00C2FF] transition-colors">
                        {currentUser.displayName?.split(' ')[0] || 'Profile'}
                      </span>
                    </div>

                    {/* User Dropdown Menu */}
                    {isUserMenuOpen && (
                      <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700 py-2 z-[3000]">
                        <div className="px-4 py-2 border-b border-gray-200 dark:border-zinc-700">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {currentUser.displayName || 'User'}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {currentUser.email}
                          </p>
                        </div>
                        
                        <button
                          onClick={goToDashboard}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 flex items-center space-x-2"
                        >
                          <Gauge className="w-4 h-4" />
                          <span>Dashboard</span>
                        </button>
                        
                        <button
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 flex items-center space-x-2"
                        >
                          <Settings className="w-4 h-4" />
                          <span>Settings</span>
                        </button>
                        
                        <div className="border-t border-gray-200 dark:border-zinc-700 mt-2 pt-2">
                          <button
                            onClick={handleLogout}
                            className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-zinc-800 flex items-center space-x-2"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Sign out</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  /* Unauthenticated User */
                  <FaUser 
                    onClick={handleUserClick}
                    className="text-xl text-[#fff4f4] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:text-[#00C2FF]" 
                  />
                )}
              </div>
              
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

      {/* Mobile App Popup */}
      <MobileAppPopup 
        isOpen={isMobileAppOpen} 
        onClose={() => setIsMobileAppOpen(false)} 
      />

      {/* Login Form */}
      <LoginForm 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </>
  );
}
