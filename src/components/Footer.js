

// import footerImage from "../assets/3.png";


// const Footer = () => {
//   return (
//     <footer className="border-t border-slate-200 bg-white py-12">
//       <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 gap-10 md:grid-cols-4">
//         {/* Brand */}
//         <div>
//           <img src={footerImage} alt="Brand" className="h-25 opacity-80" />
//         </div>

//         {/* Links */}
//         <div>
//           <p className="text-sm font-semibold">Links</p>
//           <ul className="mt-3 space-y-2 text-sm">
//             <li><a href="#top-picks" className="hover:underline">Shop</a></li>
//             <li><a href="#services" className="hover:underline">Services</a></li>
//             <li><a href="#contact" className="hover:underline">Contact</a></li>
//             <li><a href="#faq" className="hover:underline">FAQ</a></li>
//           </ul>
//         </div>

//         {/* Contact Us */}
//         <div>
//           <p className="text-sm font-semibold">Contact Us</p>
//           <ul className="mt-3 space-y-2 text-sm text-slate-600">
//             <li>123-456-7890</li>
//             <li>
//               <a href="mailto:taitlaureninc@outlook.com" className="hover:underline">
//                 taitlaureninc@outlook.com
//               </a>
//             </li>
//             <li>Florida, USA</li>
//           </ul>
//         </div>

//         {/* Policies */}
//         <div>
//           <p className="text-sm font-semibold">Policies</p>
//           <ul className="mt-3 space-y-2 text-sm text-slate-600">
//             <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
//             <li><a href="#accessibility" className="hover:underline">Accessibility Statement</a></li>
//             <li><a href="#terms" className="hover:underline">Terms &amp; Conditions</a></li>
//             <li><a href="#refund" className="hover:underline">Refund Policy</a></li>
//             <li><a href="#shipping" className="hover:underline">Shipping Policy</a></li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import footerImage from "../assets/3.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <img src={footerImage} alt="Brand" className="h-25 opacity-80" />
        </div>

        {/* Links */}
        <div>
          <p className="text-sm font-semibold">Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["Shop", "#top-picks"],
              ["Services", "#services"],
              ["Contact", "#contact"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <li key={label} className="group relative">
                <a href={href} className="hover:text-[#1957b8] transition-colors">
                  {label}
                </a>
                {/* Wave underline */}
                {/* <span className="pointer-events-none absolute -bottom-1 left-0 h-[6px] w-0 overflow-hidden text-[#1957b8] transition-all duration-300 group-hover:w-full">
                  <svg
                    viewBox="0 0 120 6"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                  >
                    <path
                      d="M0 3 C 10 0, 20 6, 30 3 S 50 0, 60 3 90 6, 120 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span> */}
                 <span className="pointer-events-none absolute -bottom-1 left-0 h-[3px] max-w-[60%] w-0 overflow-hidden transition-all duration-300 group-hover:w-full">
  <svg
    viewBox="0 0 40 6"   // much shorter wave
    preserveAspectRatio="none"
    className="h-full w-full text-[#1957b8]"
  >
    <path
      d="M0 3 C 3 0, 7 6, 10 3 S 15 0, 20 3 30 6, 40 3"
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

        {/* Contact Us */}
        <div>
          <p className="text-sm font-semibold">Contact Us</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>123-456-7890</li>
            <li className="group relative">
              <a href="mailto:taitlaureninc@outlook.com" className="hover:text-[#1957b8] transition-colors">
                taitlaureninc@outlook.com
              </a>
              {/* Wave underline */}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[6px] w-0 overflow-hidden text-[#1957b8] transition-all duration-300 group-hover:w-full">
                <svg viewBox="0 0 120 6" preserveAspectRatio="none" className="h-full w-full">
                  <path d="M0 3 C 10 0, 20 6, 30 3 S 50 0, 60 3 90 6, 120 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </li>
            <li>Florida, USA</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <p className="text-sm font-semibold">Policies</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {[
              ["Privacy Policy", "#privacy"],
              ["Accessibility Statement", "#accessibility"],
              ["Terms & Conditions", "#terms"],
              ["Refund Policy", "#refund"],
              ["Shipping Policy", "#shipping"],
            ].map(([label, href]) => (
              <li key={label} className="group relative">
                <a href={href} className="hover:text-[#1957b8] transition-colors">
                  {label}
                </a>
                {/* Wave underline */}
   <span className="pointer-events-none absolute -bottom-1 left-0 h-[3px] max-w-[60%] w-0 overflow-hidden transition-all duration-300 group-hover:w-full">
  <svg
    viewBox="0 0 40 6"   // much shorter wave
    preserveAspectRatio="none"
    className="h-full w-full text-[#1957b8]"
  >
    <path
      d="M0 3 C 3 0, 7 6, 10 3 S 15 0, 20 3 30 6, 40 3"
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
      </div>
    </footer>
  );
};

export default Footer;
