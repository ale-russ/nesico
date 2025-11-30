import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, Check } from "lucide-react";
import { Link } from "react-router-dom";

const MedicalInsurance = () => {
  const benefits = [
    "Outpatient and inpatient coverage",
    "Maternity benefits",
    "Dental and optical care",
    "Emergency medical evacuation",
    "Access to local and international hospitals",
    "Prompt claims processing",
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <HeartPulse className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Personal Medical Insurance
            </h1>
            <p className="text-lg opacity-90">
              Comprehensive health coverage for you and your family
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Protect Your Health</h2>
              <p className="text-muted-foreground mb-6">
                Unexpected medical expenses can have severe social and financial
                consequences. Our personal medical insurance gives you access to
                affordable quality healthcare locally and internationally, so
                you can focus on recovery while we handle the costs.
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
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <Card className="hover:shadow-lg transition-all duration-300 border border-primary/20 hover:border-primary hover:scale-105 animate-fade-in p-1">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Coverage Options</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Basic Plan</h4>
                    <p className="text-sm text-muted-foreground">
                      Essential coverage for individuals with basic healthcare
                      needs.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Standard Plan</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive coverage including dental and optical
                      benefits.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Premium Plan</h4>
                    <p className="text-sm text-muted-foreground">
                      Full coverage with international treatment options and
                      evacuation.
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

export default MedicalInsurance;
