
import React, { useState } from "react";


import heroImage from "../assets/hero.jpg";    
       

const PricingRequest = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    quantity: "",
    colors: "",
    timeline: "",
    message: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleFile = (e) => setFile(e.target.files?.[0] ?? null);

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Order Type: ${formData.orderType}`,
        `Quantity: ${formData.quantity}`,
        `Colors/Design: ${formData.colors}`,
        `Timeline: ${formData.timeline}`,
        `Notes: ${formData.message}`,
      ].join("\n")
    );
    window.location.href = `mailto:hello@taitlauren.com?subject=Custom Order Request&body=${body}`;
    setStatus("Opening your email app to send the request…");

  };

  return (
    <div className="w-full ">
     
      <section
  className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  {/* Tint overlay */}
  <div className="absolute inset-0 bg-black/40" /> 

  {/* Content goes here */}
  <div className="relative z-10 text-center text-white">
    <h1 className="font-serif italic text-6xl text-white tracking-wide"> Custom Order & Pricing</h1>
    <p className="mt-2 text-lg"> Tell us about your vision! Embroidered oyster shells, ornaments, gifts, or bulk orders.</p>
  </div>


      </section>

     {/* Form Section – full width, custom background */}
<section
  className="py-16"
  style={{ backgroundColor: "#124077" }} // custom color
>
  <div className="max-w-3xl mx-auto flex justify-center">
    {/* Form Card */}
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full">
      <h2 className="text-3xl font-serif text-[#124077] mb-6 text-center">
        Request a Quote
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row: Name / Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124077]/60"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124077]/60"
            />
          </div>
        </div>

        {/* Row: Phone / Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-gray-700 mb-2">Phone (optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124077]/60"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Quantity</label>
            <input
              required
              type="number"
              min="1"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124077]/60"
            />
          </div>
        </div>

        {/* Order Type */}
        <div>
          <label className="block text-gray-700 mb-2">Order Type</label>
          <select
            required
            name="orderType"
            value={formData.orderType}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124077]/60"
          >
            <option value="">Select</option>
            <option>Embroidery on Oyster Shells</option>
            <option>Personalized Ornament</option>
            <option>Wedding / Event Favors</option>
            <option>Corporate / Bulk Order</option>
            <option>Other (describe below)</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-gray-700 mb-2">Notes / Details</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124077]/60"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-gray-700 mb-2">Reference Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="w-full p-3 border rounded-lg bg-white"
          />
          {file && (
            <p className="text-sm text-gray-600 mt-2">Selected: {file.name}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#124077] text-white py-3 rounded-lg font-semibold hover:bg-[#0f3561] transition"
        >
          Submit Request
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
      )}
    </div>
  </div>
</section>


    </div>
  );
};

export default PricingRequest;
