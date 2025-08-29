import React, { useState } from "react";
import { NavLink } from "react-router-dom";

/******************* IMAGE PLACEHOLDERS ************************/
const IMAGES = {
  heroVideo: "/hero.mp4", // hero background video
  beliefLeft: "/assets/top1.jpeg",
  beliefRight: "/assets/top2.jpg",
  extra: "/assets/top3.jpg",
  about: "/assets/about-shells.jpg",
  feature: "/assets/services.jpg"
};

/******************* UTILS ************************/
const Section = ({ children, className = "" }) => (
  <section className={`w-full ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>
);

const TitleSerif = ({ children, className = "" }) => (
  <h2 className={`font-serif italic tracking-tight ${className}`}>{children}</h2>
);

/******************* COMPONENT ************************/
export default function CoastalHome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-full font-sans text-slate-800 selection:bg-sky-100">
      {/* ================= HERO (video background) ================= */}
      <Section className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <video
          src={IMAGES.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Side Nav (desktop only) */}
        <nav className="absolute left-4 bottom-4 hidden md:flex flex-col gap-4 z-50 text-white/90">
          {[
            ["About", "/about"],
            ["Custom Order", "/pricing"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) =>
                `group relative text-lg tracking-widest ${
                  isActive ? "text-white" : "text-white/90 hover:text-white"
                }`
              }
            >
              {label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[6px] w-0 overflow-hidden transition-all duration-300 group-hover:w-full">
                <svg viewBox="0 0 120 6" preserveAspectRatio="none" className="h-full w-full">
                  <path
                    d="M0 3 C 10 0, 20 6, 30 3 S 50 0, 60 3 90 6, 120 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </NavLink>
          ))}
        </nav>

{/* Mobile Navbar Background (white bar at top, only on mobile) */}
<div className="fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow-md md:hidden z-50 flex justify-end p-4">
  <button
    onClick={() => setIsOpen(true)}
    aria-label="Open menu"
    className="hover:scale-110 hover:rotate-12 transition-transform"
  >
    <img src="/assets/2.svg" alt="Menu" className="h-16 w-16" />
  </button>
</div>


{/* Mobile Drawer */}
<div
  className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Close button */}
  <div className="flex justify-end p-4">
    <button
      onClick={() => setIsOpen(false)}
      aria-label="Close menu"
      className="text-gray-600 hover:text-[#1957b8] text-2xl"
    >
      ✕
    </button>
  </div>

  {/* Nav links */}
  <ul className="flex flex-col items-center space-y-6 mt-10 py-8 text-gray-800 font-medium text-lg">
    {[
      ["Home", "/"],
      ["About", "/about"],
      ["Custom Order", "/pricing"],
      ["Contact", "/contact"],
    ].map(([label, href]) => (
      <li key={label} className="group relative">
        <NavLink
          to={href}
          onClick={() => setIsOpen(false)}
          className="hover:text-[#1957b8]"
        >
          {label}
        </NavLink>
        {/* wave underline */}
        <span className="pointer-events-none absolute -bottom-1 left-0 h-[6px] w-0 overflow-hidden transition-all duration-300 group-hover:w-full">
          <svg
            viewBox="0 0 120 6"
            preserveAspectRatio="none"
            className="h-full w-full text-[#1957b8]"
          >
            <path
              d="M0 3 C 10 0, 20 6, 30 3 S 50 0, 60 3 90 6, 120 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </span>
      </li>
    ))}
  </ul>
</div>


        {/* Headline */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            <h1 className="font-serif italic text-6xl md:text-7xl text-white">
              Tait-Lauren Inc.
            </h1>
            <p className="font-sans text-xl mt-4">
              Coastal embroidery & oyster shell art
            </p>
          </div>
        </div>
      </Section>

      {/* ================= BELIEF / TYPO COLLAGE ================= */}
      <Section className="bg-white py-20" id="home">
        <Container>
          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
            {/* Left Image */}
            <img
              src={IMAGES.beliefLeft}
              alt="Top pick 1"
              className="order-1 mx-auto aspect-[4/5] w-64 rounded-md object-cover shadow-md md:order-none"
            />

            {/* Text Block */}
            <div className="order-3 md:order-none text-center md:text-left">
              <TitleSerif className="mt-4 text-5xl md:text-6xl text-slate-900">
                Our Top Picks
              </TitleSerif>
              <p
                className="mt-2 text-4xl font-serif font-semibold"
                style={{ color: "#124077" }}
              >
                Handmade
              </p>
              <p className="mt-2 text-4xl font-serif italic text-slate-700">
                Ornaments &
              </p>
              <p className="mt-2 text-4xl font-serif font-semibold text-slate-900">
                Embroidery
              </p>
            </div>

            {/* Right Image Group */}
            <div className="order-2 relative flex flex-col items-center gap-6 md:order-none">
              <img
                src={IMAGES.beliefRight}
                alt="Top pick 2"
                className="mx-auto aspect-[4/3] w-72 rounded-md object-cover shadow-md"
              />
              <img
                src={IMAGES.extra}
                alt="Top pick 3"
                className="mx-auto aspect-[4/3] w-60 rounded-md object-cover shadow-md md:-ml-10"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ================= OUR SERVICES (split layout) ================= */}
      <Section id="services" className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT SIDE (blue background) */}
          <div
            className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 text-white"
            style={{ backgroundColor: "#124077" }}
          >
            <p className="text-xl font-serif italic">Our Services</p>

            <h3 className="mt-4 text-3xl md:text-4xl font-serif font-semibold">
              Embroidery
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-lg font-semibold">Corporate Orders:</p>
                <p>
                  Polos, hats, workwear, and more — customized with your logo or
                  employee names.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">Personal Orders:</p>
                <p>
                  Towels, baby gifts, robes, totes, or one-off custom pieces —
                  personalized to your style.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">Patches:</p>
                <p>
                  Velcro or iron-on embroidered patches for small businesses,
                  clubs, and creatives.
                </p>
              </div>
            </div>

            <div className="my-8 h-px w-full bg-white/30" />

            <h3 className="text-3xl md:text-4xl font-serif font-semibold">
              Oyster Shell
            </h3>
            <p className="mt-5">
              <span className="font-semibold">
                Handcrafted Shells for Any Occasion:
              </span>{" "}
              Each oyster shell is sustainably sourced and uniquely decorated.
            </p>
            <ul className="mt-4 space-y-2">
              <li>• Ring dishes</li>
              <li>• Wedding or event favors</li>
              <li>• Ornaments</li>
              <li>• Monogrammed gifts</li>
              <li>• Coastal home decor</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.etsy.com/shop/taitlaurens/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white text-[#1957b8] px-5 py-2 text-sm font-semibold hover:bg-white/90"
              >
                Shop on Etsy
              </a>
              <a
                href="/pricing"
                className="rounded-full border border-white/60 px-5 py-2 text-sm text-white hover:bg-white/10"
              >
                Custom Order Form
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (image full height) */}
          <div className="relative overflow-hidden">
            <img
              src={IMAGES.feature}
              alt="Service showcase"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
