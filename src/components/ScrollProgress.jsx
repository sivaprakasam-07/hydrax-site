import { useEffect, useState } from "react";

const ScrollProgress = ({ className = "" }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setScrollProgress((currentProgress / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initialize on mount

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className={`fixed left-0 w-full h-1.5 bg-transparent z-50 ${className}`}>
      <div
        className="h-full bg-gradient-to-r from-[#00c2ff] via-[#0099cc] to-[#00a8e6] transition-all duration-300 ease-out"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: "0 2px 8px rgba(0, 194, 255, 0.4)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;