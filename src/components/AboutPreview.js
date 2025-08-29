import React from "react";
import aboutImage from "../assets/about.jpg"; 

const AboutPreview = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img src={aboutImage} alt="About Us" className="rounded-lg shadow-lg w-full md:w-1/2" />
        <div>
          <h2 className="text-4xl font-serif text-aquamarine mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            Tait-Lauren Inc. is a Virginia Beach-based artisan business specializing in embroidery on oyster shells and custom designs inspired by the beach. Each piece is handcrafted with love and care.
          </p>
          <a href="#pricing" className="text-coral font-semibold hover:underline">Request a Custom Order</a>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
