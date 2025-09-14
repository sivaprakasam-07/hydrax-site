


const Navbar = ({ onProductLineup, onMobileApp, onComingSoon }) => {
  return (
    <nav className="navbar bg-gradient-to-r from-[#0f172a] to-[#1e293b] shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        <a href="#" className="flex items-center gap-2">
          <img src="/assets/hydrax.png" alt="HydraX" className="h-12 w-auto drop-shadow-lg" />
        </a>
        <ul className="flex gap-8 items-center">
          <li>
            <button onClick={onProductLineup} className="text-white font-semibold hover:text-orange-400 transition">Shop</button>
          </li>
          <li className="relative group">
            <button className="text-white font-semibold flex items-center hover:text-orange-400 transition">
              Explore <span className="ml-1 text-xs">▼</span>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50">
              <button onClick={onMobileApp} className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-800">Mobile App</button>
              <button onClick={onComingSoon} className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-800">How it works</button>
              <button onClick={onComingSoon} className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-800">Sustainability</button>
              <button onClick={onComingSoon} className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-800">Blog</button>
            </div>
          </li>
          <li>
            <button onClick={onComingSoon} className="text-white font-semibold hover:text-orange-400 transition">Custom</button>
          </li>
          <li>
            <button onClick={onComingSoon} className="text-white font-semibold hover:text-orange-400 transition">Sale</button>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <i className="fas fa-user text-2xl text-white/80 hover:text-orange-400 cursor-pointer"></i>
          <button onClick={onComingSoon} className="relative">
            <i className="fas fa-shopping-cart text-2xl text-white/80 hover:text-orange-400"></i>
            {/* Cart count badge can be added here */}
          </button>
        </div>
      </div>
    </nav>
  );

const Navbar = ({ onProductLineup, onMobileApp, onComingSoon }) => {
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target)) {
        setExploreOpen(false);
      }
    };
    if (exploreOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [exploreOpen]);

  return (
    <nav className="navbar bg-gradient-to-r from-[#0f172a] to-[#1e293b] shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        <a href="#" className="flex items-center gap-2">
          <img src="/assets/hydrax.png" alt="HydraX" className="h-12 w-auto drop-shadow-lg" />
        </a>
        <ul className="flex gap-8 items-center">
          <li>
            <button onClick={onProductLineup} className="text-white font-semibold hover:text-orange-400 transition">Shop</button>
          </li>
          <li className="relative" ref={exploreRef}>
            <button
              className="text-white font-semibold flex items-center hover:text-orange-400 transition focus:outline-none"
              onClick={() => setExploreOpen((v) => !v)}
            >
              Explore <span className="ml-1 text-xs">▼</span>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 transition-all duration-300 origin-top scale-95 opacity-0 pointer-events-none
                ${exploreOpen ? 'scale-100 opacity-100 pointer-events-auto' : ''}`}
            >
              <button onClick={onMobileApp} className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-800">Mobile App</button>
              <button onClick={onComingSoon} className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-800">How it works</button>
              <button onClick={onComingSoon} className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-800">Sustainability</button>
              <button onClick={onComingSoon} className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-800">Blog</button>
            </div>
          </li>
          <li>
            <button onClick={onComingSoon} className="text-white font-semibold hover:text-orange-400 transition">Custom</button>
          </li>
          <li>
            <button onClick={onComingSoon} className="text-white font-semibold hover:text-orange-400 transition">Sale</button>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <i className="fas fa-user text-2xl text-white/80 hover:text-orange-400 cursor-pointer"></i>
          <button onClick={onComingSoon} className="relative">
            <i className="fas fa-shopping-cart text-2xl text-white/80 hover:text-orange-400"></i>
            {/* Cart count badge can be added here */}
          </button>
        </div>
      </div>
    </nav>
  );
};
};

export default Navbar;
