import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* Left Side */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
          <p className="text-gray-600 mb-6">We’re here to answer your questions and support your journey with HydraX.</p>
          <div className="mb-4 flex items-start gap-3">
            <span className="text-2xl">📧</span>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-500">Coming soon!</p>
            </div>
          </div>
          <div className="mb-4 flex items-start gap-3">
            <span className="text-2xl">📞</span>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-500">+91 8939864625</p>
            </div>
          </div>
          <div className="mb-4 flex items-start gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <h3 className="font-semibold">Office</h3>
              <p className="text-gray-500">Coming soon!</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <span className="text-xl">🕒</span>
            <span className="text-gray-700 font-medium">24/7 Customer Support</span>
          </div>
        </div>
        {/* Right Side Form */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" name="fullName" placeholder="Full Name" required className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="email" name="email" placeholder="Email Address" required className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <input type="text" name="subject" placeholder="Subject" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea name="message" placeholder="Your Message..." rows="6" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">✈ Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
