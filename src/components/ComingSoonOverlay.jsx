import React from "react";

const ComingSoonOverlay = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center relative w-full max-w-md">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500">✕</button>
        <div className="mb-6 flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <div className="flex gap-1 mb-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">Coming Soon</h2>
        <p className="text-gray-500 mb-4 text-center">We're working hard to bring you the best shopping experience!</p>
      </div>
    </div>
  );
};

export default ComingSoonOverlay;
