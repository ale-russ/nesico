import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/home/Footer";
import { AboutUs } from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import NewsDetails from "./pages/NewsDetails";
import MedicalInsurance from "./pages/personal/MedicalInsurance";
import ElitePlan from "./pages/personal/ElitePlan";
import TravelInsurance from "./pages/personal/TravelInsurance";
import BusinessMedical from "./pages/business/BusinessMedical";
import BusinessElite from "./pages/business/BusinessElite";
import BusinessTravel from "./pages/business/BusinessTravel";
import FAQ from "./pages/help/FAQ";
import Claims from "./pages/help/Claims";
import Support from "./pages/help/Support";
import NotFound from "./pages/NoFound";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="h-full w-full m-0">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/news/:id" element={<NewsDetails />} />
              <Route path="*" element={<NotFound />} />
              {/* Personal Insurance */}
              <Route path="/personal/medical" element={<MedicalInsurance />} />
              <Route path="/personal/elite" element={<ElitePlan />} />
              <Route path="/personal/travel" element={<TravelInsurance />} />
              {/* Business Insurance */}
              <Route path="/business/medical" element={<BusinessMedical />} />
              <Route path="/business/elite" element={<BusinessElite />} />
              <Route path="/business/travel" element={<BusinessTravel />} />
              {/* Help */}
              <Route path="/help/faq" element={<FAQ />} />
              <Route path="/help/claims" element={<Claims />} />
              <Route path="/help/support" element={<Support />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
