"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useAuth } from "../contexts/AuthContext";
import authService from "../services/authService";

export function LoginForm({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const { clearError } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isLogin) {
        const result = await authService.signIn(formData.email, formData.password);
        const firstName = result.user.displayName?.split(' ')[0] || 'there';
        toast.success(`🎉 Welcome back, ${firstName}!`, {
          duration: 5000,
        });
      } else {
        const displayName = `${formData.firstName} ${formData.lastName}`.trim();
        const result = await authService.signUp(formData.email, formData.password, displayName);
        const firstName = formData.firstName || 'there';
        toast.success(`🚀 Welcome to HydraX, ${firstName}!`, {
          duration: 5000,
        });
      }
      
      onClose(); // Close modal on success
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await authService.signInWithGoogle();
      const firstName = result.user.displayName?.split(' ')[0] || 'there';
      toast.success(`🎉 Welcome back, ${firstName}!`, {
        duration: 5000,
      });
      onClose(); // Close modal on success
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[3000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white dark:bg-black rounded-2xl shadow-2xl max-w-md w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Close login form"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>

        <div className="shadow-input">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            {isLogin ? "Welcome back to HydraX" : "Welcome to HydraX"}
          </h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            {isLogin 
              ? "Sign in to access your personalized hydration experience" 
              : "Sign up to get started with your personalized hydration experience"
            }
          </p>
          
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
            >
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </motion.div>
          )}
          
          <form className="my-8" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="firstName">First name</Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    placeholder="John" 
                    type="text" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required={!isLogin}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    placeholder="Doe" 
                    type="text" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required={!isLogin}
                  />
                </LabelInputContainer>
              </div>
            )}
            
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                name="email"
                placeholder="john@hydrax.com" 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </LabelInputContainer>
            
            <LabelInputContainer className="mb-8">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  name="password"
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-[#00C2FF] to-[#0099CC] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{isLogin ? "Signing in..." : "Creating account..."}</span>
                </div>
              ) : (
                <>
                  {isLogin ? "Sign in to HydraX" : "Sign up for HydraX"} &rarr;
                </>
              )}
              <BottomGradient />
            </button>

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

            <div className="flex flex-col space-y-4">
              <button
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-neutral-800 dark:text-neutral-300" />
                ) : (
                  <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                )}
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  Continue with Google
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>

          {/* Toggle between login and signup */}
          <div className="text-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={toggleMode}
                className="text-[#00C2FF] hover:text-[#0099CC] font-medium transition-colors"
                disabled={loading}
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#00C2FF] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#0099CC] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default LoginForm;