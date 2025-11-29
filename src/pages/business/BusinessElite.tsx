import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Check, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessElite = () => {
  const features = [
    "Executive-level health coverage",
    "International treatment options",
    "Private hospital rooms worldwide",
    "Comprehensive wellness programs",
    "Family coverage for executives",
    "24/7 global assistance",
    "Priority claims processing",
    "Dedicated relationship manager",
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Crown className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Business Elite Plan
            </h1>
            <p className="text-lg opacity-90">
              Premium coverage for your executive team
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">
                  Executive Tier
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Attract & Retain Top Talent
              </h2>
              <p className="text-muted-foreground mb-6">
                Your key executives deserve the best protection. Our Business
                Elite Plan provides comprehensive coverage that matches the
                value these individuals bring to your organization. From
                unlimited global coverage to personalized concierge services, we
                ensure your leadership team is fully protected.
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
                <Link to="/contact">Schedule Executive Consultation</Link>
              </Button>
            </div>
            <Card className="border-2 border-primary shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    Elite Business Benefits
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">C-Suite Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      Tailored plans for CEO, CFO, and senior leadership
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">
                      Key Person Protection
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive coverage for critical team members
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">
                      Board Member Benefits
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Specialized coverage for board of directors
                    </p>
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

export default BusinessElite;
