import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Check, Building, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

import HeroWrapper from "../../components/HeroWrapper";

const BusinessMedical = () => {
  const benefits = [
    "Comprehensive group health coverage",
    "Flexible plan options for different employee levels",
    "Outpatient and inpatient benefits",
    "Maternity and family coverage options",
    "Dental, optical, and wellness programs",
    "Dedicated account management",
    "Streamlined claims processing",
    "Employee health reports and analytics",
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroWrapper
        children={
          <section className="pb-16 ">
            <div className="container-width px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <Building className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Corporate Medical Insurance
                </h1>
                <p className="text-lg opacity-90">
                  Comprehensive health benefits for your workforce
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
              <h2 className="text-3xl font-bold mb-6">
                Invest in Your Team's Health
              </h2>
              <p className="text-muted-foreground mb-6">
                Provide valuable health benefits to your employees with our
                competitive corporate medical insurance packages. A healthy
                workforce is a productive workforce, and our comprehensive plans
                ensure your team has access to quality healthcare when they need
                it.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link to="/contact">Request Corporate Quote</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all hover:scale-105 hover:border-primary border-primary/20 pt-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">
                      Small Business (5-50 employees)
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Affordable group plans designed for growing companies with
                      essential coverage options.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all hover:scale-105 hover:border-primary border-primary/20 pt-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">
                      Medium Enterprise (50-200 employees)
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive packages with tiered benefits and dedicated
                      support.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all hover:scale-105 hover:border-primary border-primary/20 pt-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <HeartPulse className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">
                      Large Corporation (200+ employees)
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Customized enterprise solutions with full flexibility and
                      premium services.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessMedical;
