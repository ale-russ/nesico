import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Heart,
  Car,
  Home,
  Briefcase,
  Plane,
  Users,
  Umbrella,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Life Insurance",
    description:
      "Protect your family's future with comprehensive life insurance coverage that provides financial security when they need it most.",
    features: ["Term Life", "Whole Life", "Universal Life", "Final Expense"],
  },
  {
    icon: Shield,
    title: "Health Insurance",
    description:
      "Access quality healthcare with our flexible health insurance plans designed to fit your needs and budget.",
    features: [
      "Individual Plans",
      "Family Coverage",
      "Dental & Vision",
      "Critical Illness",
    ],
  },
  {
    icon: Car,
    title: "Auto Insurance",
    description:
      "Drive with confidence knowing you're protected against accidents, theft, and liability with our comprehensive auto coverage.",
    features: [
      "Liability Coverage",
      "Collision",
      "Comprehensive",
      "Uninsured Motorist",
    ],
  },
  {
    icon: Home,
    title: "Property Insurance",
    description:
      "Safeguard your home and belongings with property insurance that covers damage, theft, and natural disasters.",
    features: [
      "Homeowners",
      "Renters",
      "Flood Insurance",
      "Earthquake Coverage",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description:
      "Protect your business assets, employees, and operations with tailored commercial insurance solutions.",
    features: [
      "General Liability",
      "Professional Liability",
      "Workers Comp",
      "Commercial Property",
    ],
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description:
      "Travel worry-free with coverage for trip cancellations, medical emergencies, and lost luggage.",
    features: [
      "Trip Cancellation",
      "Medical Coverage",
      "Baggage Protection",
      "Emergency Evacuation",
    ],
  },
  {
    icon: Users,
    title: "Group Insurance",
    description:
      "Provide valuable benefits to your employees with competitive group insurance packages.",
    features: ["Group Health", "Group Life", "Disability", "Retirement Plans"],
  },
  {
    icon: Umbrella,
    title: "Umbrella Insurance",
    description:
      "Extra liability protection that goes beyond your standard policies for complete peace of mind.",
    features: [
      "Extended Liability",
      "Asset Protection",
      "Legal Defense",
      "Worldwide Coverage",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background ">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 rounded-b-3xl ">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg opacity-90">
              Comprehensive insurance solutions tailored to protect what matters
              most to you
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-all duration-300 border border-gray-300 hover:border-primary animate-fade-in p-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center my-2">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted section-padding">
        <div className="container-width text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our insurance experts are here to help you find the perfect coverage
            for your unique needs.
          </p>
          <Button size="lg">Get a Free Consultation</Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
