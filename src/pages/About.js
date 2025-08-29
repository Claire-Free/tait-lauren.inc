import React from "react";
import founderImage from "../assets/founder.jpg";
import aboutImage from "../assets/about-shells.jpeg";

/** ── Palette (tweak these 6 hexes to fine-tune) ───────────────────────────
 * sandLight  : page background / light panels
 * sand       : neutral section bg
 * skyLight   : airy blue in gradients
 * sky        : slightly deeper sky for contrast
 * seaTeal    : headings / brand teal
 * rose       : subtle accent (buttons, small tags)
 */
const PALETTE = {
  sandLight: "#f7f5f1",
  sand: "#efeae2",
  skyLight: "#e8f1f6",
  sky: "#d7e9f2",
  seaTeal: "#124077",
  rose: "#124077",
};

const Section = ({ children, className = "" }) => (
  <section className={`w-full ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>
);

const TitleSerif = ({ children, className = "" }) => (
  <h2 className={`font-serif italic tracking-tight ${className}`}>{children}</h2>
);

export default function About() {
  return (
    <main className="w-full font-sans text-slate-800 selection:bg-sky-100"
      style={{ backgroundColor: PALETTE.sandLight }}
    >

{/* ===== HERO (video background) ===== */}
<Section className="relative h-[50vh] min-h-[360px] overflow-hidden">
  {/* Background video */}
  <video
    src="/assets/aboutback.mp4"  // place your file in public/assets/aboutback.mp4
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark overlay (for text readability) */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Hero Content */}
  <div className="relative z-10 flex h-full text-center items-center">
    <Container>
      <div className="max-w-2xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
        <TitleSerif className="text-5xl md:text-6xl">
          About Us
        </TitleSerif>
        <p className="mt-3 text-sm md:text-base tracking-widest uppercase opacity-95">
          Coastal craft • Embroidery • Oyster Shell Art
        </p>
      </div>
    </Container>
  </div>
</Section>




      {/* ===== WHY CHOOSE US (sky → sand panel, white card) ===== */}
      <Section
        className="py-16"
        style={{
          background: `linear-gradient(90deg, ${PALETTE.skyLight}, ${PALETTE.sky}, ${PALETTE.sand})`,
        }}
      >
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[1.1fr_0.9fr]">
            {/* Text card */}
            <div
              className="rounded-2xl p-8 md:p-10 shadow-xl bg-white"
              style={{ border: `1px solid rgba(0,0,0,0.04)` }}
            >
              <p
                className="text-sm uppercase tracking-widest"
                style={{ color: PALETTE.seaTeal }}
              >
                Why Choose Us
              </p>
              <TitleSerif
                className="mt-2 text-4xl md:text-5xl"
                style={{ color: PALETTE.seaTeal }}
              >
                Crafted with coastal heart
              </TitleSerif>

              <div className="mt-5 space-y-4 leading-relaxed text-slate-700">
                <p>
                  <strong>Tait-Lauren Inc.</strong>, based in Florida, is an emerging embroidery business
                  focused on custom embroidery services and distinctive oyster shell art. We provide our products
                  through our Etsy shop and accept direct orders, ensuring a personal touch in every creation.
                </p>
                <p>
                  Our commitment to quality and creativity allows us to bring your ideas to life through art.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Custom Embroidery", "Oyster Shell Ornaments", "Personal & Corporate"].map((t) => (
                  <span
                    key={t}
                    className="inline-block rounded-full px-3 py-1 text-xs tracking-widest"
                    style={{
                      color: PALETTE.seaTeal,
                      border: `1px solid ${PALETTE.sky}`,
                      backgroundColor: "white",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Image block */}
            <div className="relative overflow-hidden rounded-2xl shadow-md"
                 style={{ backgroundColor: PALETTE.sand }}>
              <img
                  src={aboutImage}
                alt="Coastal shells and materials"
                className="h-full w-full object-cover mix-blend-normal"
              />
              <div
                className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs tracking-widest"
                style={{ color: "#fff", backgroundColor: `${PALETTE.rose}cc` }}
              >
                Beachcrafted • USA
              </div>
            </div>
          </div>
        </Container>
      </Section>

     {/* ===== CTA STRIP (sand band with rose button) ===== */}
      <Section className="py-10" style={{ backgroundColor: PALETTE.sand }}>
        <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-slate-700">
            Have an idea in mind? We’ll bring it to life with coastal craftsmanship.
          </p>
          <a
            href="/pricing"
            className="rounded-full px-5 py-2 text-sm text-white hover:opacity-90"
            style={{ backgroundColor: PALETTE.rose }}
          >
            Request Pricing
          </a>
        </Container>
      </Section>

      {/* ===== MEET THE MAKER (white section, teal headings) ===== */}
      <Section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* Founder photo */}
            <div className="order-2 md:order-1">
              <img
  src={founderImage}
  alt="Founder of Tait-Lauren Inc."
  className="aspect-[4/5] w-full max-w-md rounded-2xl object-cover shadow-xl mx-auto"
/>
            </div>

            {/* Copy */}
            <div className="order-1 md:order-2">
              <p
                className="text-sm uppercase tracking-widest"
                style={{ color: PALETTE.seaTeal }}
              >
                Meet the Maker
              </p>
              <TitleSerif
                className="mt-2 text-4xl md:text-5xl"
                style={{ color: PALETTE.seaTeal }}
              >
                Behind Tait-Lauren Inc.
              </TitleSerif>

              <div className="mt-5 space-y-4 leading-relaxed text-slate-700">
                <p>
                  I’m the founder of Tait-Lauren Inc., a creative business built on two passions:
                  <em> embroidery</em> and <em>oyster shell art</em>. I started this journey with a love for detail and design,
                  and it’s grown into a small business that delivers to clients across the U.S.
                </p>
                <p>
                  My embroidery work spans from corporate logo stitching to personalized gifts and custom patches.
                  My oyster shell art brings a bit of the coast into people’s homes—using gold leaf, decoupage,
                  and hand-painting to transform each shell into a unique keepsake.
                </p>
                <p>
                  If you’re looking for quality craftsmanship with a personal touch, you’re in the right place.
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="/pricing"
                  className="rounded-full px-5 py-2 text-sm text-white hover:opacity-90"
                  style={{ backgroundColor: PALETTE.rose }}
                >
                  Start a Custom Order
                </a>
                <a
                  href="https://www.etsy.com" // replace with your Etsy URL
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-5 py-2 text-sm hover:bg-white"
                  style={{ borderColor: PALETTE.sky, color: PALETTE.seaTeal }}
                >
                  Visit Etsy Shop
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== CTA STRIP (sand band with rose button) ===== */}
      {/* <Section className="py-10" style={{ backgroundColor: PALETTE.sand }}>
        <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-slate-700">
            Have an idea in mind? We’ll bring it to life with coastal craftsmanship.
          </p>
          <a
            href="/pricing"
            className="rounded-full px-5 py-2 text-sm text-white hover:opacity-90"
            style={{ backgroundColor: PALETTE.rose }}
          >
            Request Pricing
          </a>
        </Container>
      </Section> */}
    </main>
  );
}
