"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import React, { forwardRef, useEffect, useRef, useState } from "react";

import { cn } from "../lib/utils";

const AccordionItem = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "mt-px overflow-hidden focus-within:relative focus-within:z-10",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  ),
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex flex-1 cursor-pointer items-center justify-between px-5 text-[15px] leading-none outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down overflow-hidden text-[15px] font-medium",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-5 py-2">{children}</div>
    </Accordion.Content>
  ),
);
AccordionContent.displayName = "AccordionContent";

export function Features({
  collapseDelay = 5000,
  ltr = false,
  linePosition = "left",
  data = [],
}) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const carouselRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;

        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + offset,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % data.length : 0,
      );
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex, data.length]);

  useEffect(() => {
    const handleAutoScroll = () => {
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) % data.length;
      scrollToIndex(nextIndex);
    };

    const autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

    return () => clearInterval(autoScrollTimer);
  }, [collapseDelay, currentIndex, data.length]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector(".card")?.clientWidth || 0;
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          data.length - 1,
        );
        setCurrentIndex(newIndex);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [data.length]);

  return (
    <section ref={ref} id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p 
            className="text-sm md:text-base text-gray-400 uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            GET STARTED EFFORTLESSLY
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Four simple steps to experience<br />
            <span className="text-[#00c2ff]">the future of hydration</span>
          </motion.h2>
        </div>

        <div className="my-12 grid h-full items-center gap-10 lg:grid-cols-2">
          <div
            className={`order-1 hidden lg:order-none lg:flex ${
              ltr ? "lg:order-2 lg:justify-end" : "justify-start"
            }`}
          >
            <Accordion.Root
              className=""
              type="single"
              defaultValue={`item-${currentIndex}`}
              value={`item-${currentIndex}`}
              onValueChange={(value) =>
                setCurrentIndex(Number(value.split("-")[1]))
              }
            >
              {data.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  className="relative mb-8 last:mb-0"
                  value={`item-${index}`}
                >
                  {linePosition === "left" || linePosition === "right" ? (
                    <div
                      className={`absolute inset-y-0 h-full w-0.5 overflow-hidden rounded-lg bg-gray-800 ${
                        linePosition === "right"
                          ? "left-auto right-0"
                          : "left-0 right-auto"
                      }`}
                    >
                      <div
                        className={`absolute left-0 top-0 w-full ${
                          currentIndex === index ? "h-full" : "h-0"
                        } origin-top bg-[#00c2ff] transition-all ease-linear`}
                        style={{
                          transitionDuration:
                            currentIndex === index
                              ? `${collapseDelay}ms`
                              : "0s",
                        }}
                      ></div>
                    </div>
                  ) : null}

                  {linePosition === "top" || linePosition === "bottom" ? (
                    <div
                      className={`absolute inset-x-0 h-0.5 w-full overflow-hidden rounded-lg bg-gray-800 ${
                        linePosition === "bottom" ? "bottom-0" : "top-0"
                      }`}
                    >
                      <div
                        className={`absolute left-0 ${
                          linePosition === "bottom" ? "bottom-0" : "top-0"
                        } h-full ${
                          currentIndex === index ? "w-full" : "w-0"
                        } origin-left bg-[#00c2ff] transition-all ease-linear`}
                        style={{
                          transitionDuration:
                            currentIndex === index
                              ? `${collapseDelay}ms`
                              : "0s",
                        }}
                      ></div>
                    </div>
                  ) : null}

                  <div className="relative flex items-center">
                    <div className={`mx-2 flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-6 border-4 transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-[#00c2ff] border-[#00c2ff] shadow-lg shadow-[#00c2ff]/50' 
                        : 'bg-gray-800 border-gray-600'
                    }`}>
                      <div className={`transition-colors duration-300 ${
                        currentIndex === index 
                          ? 'text-white' 
                          : 'text-[#00c2ff]'
                      }`}>
                        {item.icon}
                      </div>
                    </div>

                    <div>
                      <AccordionTrigger className="pl-0 text-xl font-bold text-white">
                        {index + 1}. {item.title}
                      </AccordionTrigger>

                      <div className="pl-0 text-left text-[16px] leading-6 text-gray-300 max-w-xl">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion.Root>
          </div>
          
          <div
            className={`h-[400px] min-h-[300px] w-auto ${
              ltr && "lg:order-1"
            }`}
          >
            {data[currentIndex]?.image ? (
              <motion.div className="relative h-full flex items-center justify-center">
                <motion.img
                  key={currentIndex}
                  src={data[currentIndex].image}
                  alt="feature"
                  className="relative w-[300px] h-[300px] object-contain drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </motion.div>
            ) : data[currentIndex]?.video ? (
              <video
                preload="auto"
                src={data[currentIndex].video}
                className="aspect-auto size-full rounded-lg object-cover shadow-lg"
                autoPlay
                loop
                muted
              />
            ) : (
              <div className="aspect-auto size-full rounded-xl border border-neutral-300/50 bg-gray-800 p-1"></div>
            )}
          </div>

          {/* Mobile Carousel */}
          <ul
            ref={carouselRef}
            className="flex h-full snap-x snap-mandatory flex-nowrap overflow-x-auto py-10 [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
            style={{
              padding: "50px calc(50%)",
            }}
          >
            {data.map((item, index) => (
              <div
                key={item.id}
                className="card relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0"
                onClick={() => setCurrentIndex(index)}
                style={{
                  scrollSnapAlign: "center",
                }}
              >
                <div className="absolute inset-y-0 left-0 right-auto h-0.5 w-full overflow-hidden rounded-lg bg-gray-800">
                  <div
                    className={`absolute left-0 top-0 h-full ${
                      currentIndex === index ? "w-full" : "w-0"
                    } origin-top bg-[#00c2ff] transition-all ease-linear`}
                    style={{
                      transitionDuration:
                        currentIndex === index ? `${collapseDelay}ms` : "0s",
                    }}
                  ></div>
                </div>
                <h2 className="text-xl font-bold text-white">{index + 1}. {item.title}</h2>
                <p className="mx-0 max-w-sm text-balance text-sm text-gray-300">
                  {item.content}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}