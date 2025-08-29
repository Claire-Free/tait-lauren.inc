// // components/HeroSection.jsx
import React from "react";
import heroImage from "../assets/hero.jpg"; // Replace with embroidery machine on beach

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-60 p-8 rounded-md shadow-lg">
        <h1 className="text-5xl font-serif text-aquamarine mb-4">Tait-Lauren Inc.</h1>
        <p className="text-lg mb-6">Handmade Embroidery & Oyster Shell Art</p>
        <a
          href="#pricing"
          className="bg-coral text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition"
        >
          Custom Order / Pricing Request
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
