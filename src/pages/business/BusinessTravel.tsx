import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Check, Globe, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessTravel = () => {
  const benefits = [
    "Medical emergencies abroad",
    "Trip cancellation and interruption",
    "Lost or delayed baggage",
    "Emergency evacuation and repatriation",
    "Business equipment coverage",
    "Travel delay expenses",
    "24/7 global assistance hotline",
    "Multi-trip annual policies",
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Globe className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Corporate Travel Insurance
            </h1>
            <p className="text-lg opacity-90">
              Protect your business travelers worldwide
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Keep Your Team Protected on the Move
              </h2>
              <p className="text-muted-foreground mb-6">
                When your employees travel for business, their safety and
                security should never be a concern. Our corporate travel
                insurance provides comprehensive protection for all business
                trips, ensuring your team can focus on their work while we
                handle any travel-related emergencies.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Corporate Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Plane className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Single Trip Coverage</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Protection for individual business trips with comprehensive
                    coverage from departure to return.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Annual Multi-Trip Policy</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Year-round protection for frequent business travelers with
                    unlimited trips coverage.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Group Travel Plans</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Economical coverage for teams traveling together on business
                    assignments or conferences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessTravel;
