import React, { useState } from "react";
import contactusImage from "../assets/contactus.jpeg";

import { FaInstagram} from "react-icons/fa"; // optional icons

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks for reaching out! We’ll get back to you soon.");
  };
  // utils inside Contact.js
const Section = ({ children, className = "" }) => (
  <section className={`w-full ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>
);

const TitleSerif = ({ children, className = "" }) => (
  <h2 className={`font-serif italic tracking-tight ${className}`}>{children}</h2>
);


  return (
    <main className="font-sans text-slate-800 selection:bg-sky-100">
      {/* ===== HERO ===== */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${contactusImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
          <TitleSerif className="text-5xl md:text-6xl">Contact Us</TitleSerif>
          <p className="mt-3 text-sm md:text-base tracking-widest uppercase opacity-95">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO + FORM ===== */}
      <Section
        className="py-20"
        style={{ backgroundColor: "#124077" }}
      >
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <div className="text- space-y-6">
            <h2 className="text-4xl font-serif italic">Get in Touch</h2>
            <p className="text-slate-900">
              Have a question about embroidery, oyster shell art, or custom orders?
              Reach out and we’ll be happy to help.
            </p>

            <ul className="space-y-3 text-slate-9000">
              <li> Florida, USA</li>
              <li> <a href="mailto:taitlaureninc@outlook.com" className="hover:underline">taitlaureninc@outlook.com</a></li>
              <li> 123-456-7890</li>
            </ul>

            {/* Social Media */}
            <div className="pt-6">
              <p className="uppercase text-sm tracking-widest text-slate-900 mb-3">Follow Us</p>
              <div className="flex space-x-5 text-2xl">
                <a href="https://www.instagram.com/taitlauren.inc?igsh=MWcybGNwd2NmOWxvaQ==" target="_blank" rel="noreferrer" className="hover:text-pink-400">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          
          <div className="bg-[#124077] rounded-lg flex flex-col justify-center p-10 ">
            <h3 className="text-2xl font-serif text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white mb-2">Name</label>
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
                <label className="block text-white mb-2">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124077]/60"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124077]/60"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#124077] py-3 rounded-lg font-semibold hover:bg-grey transition"
              >
                Send
              </button>
            </form>

            {status && (
              <p className="mt-4 text-center text-black font-medium">{status}</p>
            )}
          </div>
        </Container>
      </Section>
    </main>
  );
}
