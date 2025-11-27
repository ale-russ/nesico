import { BrowserRouter, Route, Routes } from "react-router";
import { HeroSection } from "./components/home/HeroSection";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/home/Footer";
import { AboutUs } from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";

function App() {
  return (
    <div className="h-full w-full m-0">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
