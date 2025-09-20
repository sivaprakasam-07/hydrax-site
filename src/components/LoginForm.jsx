"use client";
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";

export function LoginForm({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
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
            Welcome to HydraX
          </h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Sign up or login to access your personalized hydration experience
          </p>
          
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="John" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Doe" type="text" />
              </LabelInputContainer>
            </div>
            
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="john@hydrax.com" type="email" />
            </LabelInputContainer>
            
            <LabelInputContainer className="mb-8">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-[#00C2FF] to-[#0099CC] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:shadow-lg transition-all duration-200"
              type="submit"
            >
              Sign up for HydraX &rarr;
              <BottomGradient />
            </button>

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

            <div className="flex flex-col space-y-4">
              <button
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                type="button"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  Continue with Google
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>

          {/* Login link */}
          <div className="text-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Already have an account?{" "}
              <button className="text-[#00C2FF] hover:text-[#0099CC] font-medium transition-colors">
                Sign in
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