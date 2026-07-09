import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import { useEffect } from "react";

import Stand from "./components/Stand";
import WhoAreWe from "./components/WhoAreWe";
import WhatWeDo from "./components/WhatWeDo";
import Partnership from "./components/Partnership";
import WeAreHiring from "./components/WeAreHiring";
import CallToAction from "./components/CallToAction";
import SayHello from "./components/SayHello";
import Footer from "./components/Footer";
import Work from "./components/Work";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <Stand />
      <WhoAreWe/>
      <WhatWeDo />
      <Partnership />
      <CallToAction />
      <WeAreHiring />
      <SayHello />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Work Page */}
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
