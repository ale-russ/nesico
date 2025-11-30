import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Check, Globe, Shield, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

import HeroWrapper from "../../components/HeroWrapper";

const TravelInsurance = () => {
  const coverages = [
    {
      icon: Shield,
      title: "Medical Emergencies",
      desc: "Coverage for illness or injury abroad",
    },
    {
      icon: Briefcase,
      title: "Lost Luggage",
      desc: "Compensation for lost or delayed baggage",
    },
    {
      icon: Plane,
      title: "Trip Cancellation",
      desc: "Protection for unexpected cancellations",
    },
    {
      icon: Globe,
      title: "Emergency Evacuation",
      desc: "Medical evacuation when needed",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroWrapper
        children={
          <section className="pb-16 ">
            <div className="container-width px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <Plane className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Personal Travel Insurance
                </h1>
                <p className="text-lg opacity-90">
                  Travel with confidence, wherever your journey takes you
                </p>
              </div>
            </div>
          </section>
        }
      />

      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Travel Worry-Free</h2>
            <p className="text-muted-foreground">
              Whether for business or leisure, our travel insurance ensures you
              are fully supported throughout your journey. Protect yourself
              against medical emergencies abroad, flight cancellations, lost
              luggage, and personal accidents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {coverages.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all p-6 border border-primary/20 hover:border-primary hover:scale-105 duration-300 animate-fade-in"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="hover:shadow-lg transition-all duration-300 border border-primary/20 hover:border-primary hover:scale-105 animate-fade-in p-1">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Plan Options
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-semibold">Single Trip</h4>
                    <p className="text-sm text-muted-foreground">
                      Coverage for one journey
                    </p>
                  </div>
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-semibold">Annual Multi-Trip</h4>
                    <p className="text-sm text-muted-foreground">
                      Year-round protection for frequent travelers
                    </p>
                  </div>
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-semibold">Family Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      Protect your entire family
                    </p>
                  </div>
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Travel Quote</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TravelInsurance;
