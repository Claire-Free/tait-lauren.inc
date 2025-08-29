





// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import PricingRequest from "./pages/PricingRequest";
// import About from "./pages/About";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar"; // ✅ import navbar

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar /> {/* ✅ Always visible */}
//         <div className="flex-grow pt-16"> {/* padding to prevent overlap with fixed navbar */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/pricing" element={<PricingRequest />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;






import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import PricingRequest from "./pages/PricingRequest";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Only render Navbar if not home */}
      {!isHome && <Navbar />}

      {/* Only add padding if navbar exists */}
      <div className={`flex-grow ${!isHome ? "pt-16" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingRequest />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* you could add /contact here too if needed */}
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}


