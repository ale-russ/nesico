import HeroWrapper from "../components/HeroWrapper";
import { AdCards } from "../components/home/AdCards";
import { HeroSection } from "../components/home/HeroSection";
import LiveChat from "../components/home/LiveChat";
import NewsAndStories from "../components/home/NewsAndStories";
import Partners from "../components/home/Partners";
import PremiumCalculator from "../components/home/PremimumCalculator";
import QuoteForm from "../components/home/QuoteForm";
import { Searchbar } from "../components/home/Searchbar";
import Testimonials from "../components/home/Testimonials";

function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroWrapper children={<HeroSection />} />

      {/* Search + Stats */}
      <div className="mt-40">
        <Searchbar />
      </div>

      {/* Ad Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 gap-y-1 md:gap-y-0">
          <AdCards
            label="Insure Your Lives Now"
            url="https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?q=80&w=1033&auto=format&fit=crop"
          />
          <AdCards
            label="Insure Your Health Now"
            url="https://images.unsplash.com/photo-1512069511692-b82d787265cf?q=80&w=763&auto=format&fit=crop"
          />
          <AdCards
            label="Insure Your Car Now"
            url="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1325&auto=format&fit=crop"
          />
          <AdCards
            label="Insure Your Property Now"
            url="https://plus.unsplash.com/premium_photo-1723899610655-f77822fe5878?q=80&w=1170&auto=format&fit=crop"
          />
        </div>
      </div>
      <PremiumCalculator />
      <Testimonials />
      <QuoteForm />
      <Partners />
      <NewsAndStories />
      {/* <LiveChat /> */}
    </div>
  );
}

export default HomePage;
