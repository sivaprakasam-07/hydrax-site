import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturesPage from "./pages/FeaturesPage";
import Dashboard from "./pages/Dashboard";
import ScrollProgress from "./components/ScrollProgress";
import { HydraXPointer } from "./components/HydraXPointer";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute requireAuth={true}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-black">
          <Header />
          <ScrollProgress className="top-[61px]" />
          <AnimatedRoutes />
          <HydraXPointer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
