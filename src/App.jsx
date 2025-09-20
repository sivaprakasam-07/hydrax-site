import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturesPage from "./pages/FeaturesPage";
import ScrollProgress from "./components/ScrollProgress";
import { HydraXPointer } from "./components/HydraXPointer";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        <ScrollProgress className="top-[61px]" />
        <AnimatedRoutes />
        <HydraXPointer />
      </div>
    </Router>
  );
}

export default App;
