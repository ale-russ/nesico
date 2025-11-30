import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, User } from "lucide-react";

import HeroWrapper from "../components/HeroWrapper";

const teamMembers = [
  {
    name: "Board Chairman",
    role: "Chairman of the Board",
    description: "Leading NESICO's strategic direction and governance.",
  },
  {
    name: "Managing Director",
    role: "Chief Executive Officer",
    description: "Overseeing all company operations and business development.",
  },
  {
    name: "Finance Director",
    role: "Chief Financial Officer",
    description: "Managing financial planning, reporting, and risk management.",
  },
  {
    name: "Operations Manager",
    role: "Head of Operations",
    description: "Ensuring efficient delivery of insurance services.",
  },
  {
    name: "Underwriting Manager",
    role: "Head of Underwriting",
    description: "Leading risk assessment and policy pricing strategies.",
  },
  {
    name: "Claims Manager",
    role: "Head of Claims",
    description: "Managing claims processing and customer settlements.",
  },
  {
    name: "Marketing Manager",
    role: "Head of Marketing",
    description: "Driving brand awareness and customer acquisition.",
  },
  {
    name: "IT Manager",
    role: "Head of Technology",
    description: "Leading digital transformation and IT infrastructure.",
  },
];

const Team = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroWrapper
        children={
          <section className="pb-16">
            <div className="container-width px-4 sm:px-6 lg:px-8 mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4 animate-fade-in">
                Our Leadership Team
              </h1>
              <p
                className="text-lg opacity-90 max-w-2xl animate-fade-in mx-auto"
                style={{ animationDelay: "0.1s" }}
              >
                Meet the experienced professionals driving NESICO's mission to
                provide exceptional insurance services across Sudan.
              </p>
            </div>
          </section>
        }
      />

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="border-primary/20 transition-all hover:border-primary hover:scale-105 duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="px-0 py-0">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {member.description}
                    </p>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Our Leadership Philosophy
            </h2>
            <p className="text-muted-foreground mb-8">
              Our leadership team is committed to integrity, innovation, and
              excellence. With decades of combined experience in the insurance
              industry, we guide NESICO with a vision of becoming Sudan's most
              trusted insurance provider.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Integrity</h4>
                <p className="text-sm text-muted-foreground">
                  We uphold the highest ethical standards in all our dealings.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  We embrace new ideas and technologies to better serve our
                  clients.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  We strive for excellence in every aspect of our service
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
