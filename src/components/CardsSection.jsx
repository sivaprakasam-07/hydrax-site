import React from "react";

const cards = [
  {
    title: "Meet HydraX",
    backTitle: "HydraX",
    description:
      "More than just a bottle — HydraX is your personal hydration assistant that transforms how you stay hydrated.",
    tagline: "Smart. Stylish. Sustainable.",
    image: "/assets/bottle-main.png",
  },
  {
    title: "Temperature Control",
    backTitle: "Temperature Control",
    description:
      "Enjoy perfectly cooled or gently warmed water with Hydrax’s intelligent temperature control. Whether it's hot outside or chilly indoors, your bottle adjusts to match your environment and preferences.",
    image: "/assets/bottle-main.png",
  },
  {
    title: "Real-Time Control",
    backTitle: "Bluetooth Connectivity",
    description:
      "Hydrax connects effortlessly to your smartphone via Bluetooth. Monitor hydration, set reminders, adjust temperature, and explore smart features—all through the app in real-time.",
    image: "/assets/bottle-main.png",
  },
  {
    title: "Environmental Adaptation",
    backTitle: "Environmental Adaptation",
    description:
      "Hydrax connects effortlessly to your smartphone via Bluetooth. Monitor hydration, set reminders, adjust temperature, and explore smart features—all through the app in real-time.",
    image: "/assets/bottle-main.png",
  },
];

const CardsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Hydration <span className="text-orange-500">Guarantee!</span>
          </h1>
          <p className="text-gray-600">We make the reality - Here’s why we know you will.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group perspective h-96"
            >
              <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
                  <img src={card.image} alt={card.title} className="w-24 h-24 object-contain mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-blue-50 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 rotate-y-180">
                  <h3 className="font-semibold text-lg mb-2">{card.backTitle}</h3>
                  <p className="text-gray-600 mb-4 text-center">{card.description}</p>
                  {card.tagline && (
                    <div className="mt-auto">
                      <p className="text-blue-600 font-semibold">{card.tagline}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
