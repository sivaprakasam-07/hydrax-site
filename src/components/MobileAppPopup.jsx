import React, { useState, useEffect, useRef } from "react";

const screenshots = [
  "/assets/App-1.jpg",
  "/assets/APP-2.jpg",
  "/assets/APP-3.jpg",
  "/assets/APP-4.jpg",
];


const MobileAppPopup = ({ open, onClose }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % screenshots.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [open, paused]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="relative w-full max-w-xl mx-auto rounded-2xl p-8 bg-white" style={{boxShadow: '0 8px 40px 0 rgba(0,0,0,0.25)'}}>
        <button onClick={onClose} className="absolute top-6 right-6 text-3xl text-gray-700 hover:text-gray-900 bg-white bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center shadow-md">✕</button>
        <h2 className="text-4xl font-extrabold text-gray-700 text-center mb-2">Hydrax Mobile App</h2>
        <p className="text-lg text-gray-500 text-center mb-8">Control, track, and personalize your hydration experience.</p>
        <div className="flex flex-col items-center">
          <div
            className="relative bg-white rounded-[2.5rem] border-4 border-black w-72 h-[500px] flex items-center justify-center mb-6 shadow-xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <img
              src={screenshots[current]}
              alt={`App Screenshot ${current + 1}`}
              className="rounded-[2rem] w-[240px] h-[440px] object-cover border-2 border-gray-200"
            />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl shadow hover:bg-blue-600 transition"
              onClick={() => setCurrent((current - 1 + screenshots.length) % screenshots.length)}
              aria-label="Previous"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="flex gap-2">
              {screenshots.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-400'} transition`}
                  onClick={() => setCurrent(idx)}
                ></span>
              ))}
            </div>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl shadow hover:bg-blue-600 transition"
              onClick={() => setCurrent((current + 1) % screenshots.length)}
              aria-label="Next"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPopup;
