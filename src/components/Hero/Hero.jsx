import { useState } from "react";
import { SparklesCore } from "../../ui/sparkles";
import ButtonCreativeRight from "../ButtonCreativeRight";
import HydraXPricing from "../HydraXPricing";

export default function Hero() {
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  return (
    <>
      <section className="h-[40rem] w-full bg-black flex items-center justify-center overflow-hidden pt-53">
        {/* Centered content */}
        <div className="flex flex-col items-center justify-center relative">
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-white relative z-20  text-center">
            HydraX
          </h1>
          
          {/* Sparkles positioned under the HydraX text */}
          <div className="w-[40rem] h-40 relative">
            {/* Gradient lines */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Sparkles */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Mask to fade edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
          
          <div className="mt-9">
            <ButtonCreativeRight />
          </div>
        </div>
      </section>

      {/* HydraX Pricing Modal */}
      <HydraXPricing 
        isOpen={isPricingOpen} 
        onClose={() => setIsPricingOpen(false)} 
      />
    </>
  );
}
