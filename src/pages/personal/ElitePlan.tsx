import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

import HeroWrapper from "../../components/HeroWrapper";

const ElitePlan = () => {
  const features = [
    "Unlimited medical coverage worldwide",
    "Private room hospitalization",
    "Executive health checkups",
    "24/7 concierge medical service",
    "Global emergency evacuation",
    "Comprehensive dental and vision",
    "Mental health support",
    "Premium wellness programs",
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroWrapper
        children={
          <section className="pb-16 ">
            <div className="container-width px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <Crown className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Elite Plan
                </h1>
                <p className="text-lg opacity-90">
                  Premium insurance coverage for discerning individuals
                </p>
              </div>
            </div>
          </section>
        }
      />

      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Premium Tier</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                The Ultimate Protection
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Elite Plan is designed for individuals who demand the
                highest level of protection and service. Experience world-class
                healthcare with unlimited coverage, priority service, and
                exclusive benefits that ensure you and your family receive the
                best care possible.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link to="/contact">Request Elite Consultation</Link>
              </Button>
            </div>
            <Card className="hover:shadow-lg transition-all duration-300 border border-primary/20 hover:border-primary hover:scale-105 animate-fade-in p-1">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Crown className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold">Elite Membership</h3>
                  <p className="text-muted-foreground">
                    Complete peace of mind
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span>Medical Coverage</span>
                    <span className="font-semibold text-primary">
                      Unlimited
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span>Hospital Network</span>
                    <span className="font-semibold text-primary">Global</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span>Claims Processing</span>
                    <span className="font-semibold text-primary">Priority</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span>Support</span>
                    <span className="font-semibold text-primary">
                      24/7 Concierge
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElitePlan;
