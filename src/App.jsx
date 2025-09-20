import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

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
          
          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                border: '1px solid rgba(0, 194, 255, 0.3)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                fontSize: '14px',
                padding: '12px 16px',
              },
              success: {
                style: {
                  background: 'rgba(0, 194, 255, 0.1)',
                  border: '1px solid rgba(0, 194, 255, 0.5)',
                  color: '#00C2FF',
                },
                iconTheme: {
                  primary: '#00C2FF',
                  secondary: '#000',
                },
              },
              error: {
                style: {
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.5)',
                  color: '#ef4444',
                },
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#000',
                },
              },
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
