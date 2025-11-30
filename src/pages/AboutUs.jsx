import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Users,
  Award,
  Shield,
  Briefcase,
  Heart,
  Building,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroWrapper from "../components/HeroWrapper";

export const AboutUs = () => {
  return (
    <main className="min-h-screen">
      <HeroWrapper
        children={
          <section className="section-padding">
            <div className="container-width">
              <div className="max-w-3xl mx-auto text-center animate-fade-in text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About NESICO
                </h1>
                <p className="text-lg opacity-90">
                  Protecting families and businesses for over 10 years with
                  comprehensive insurance solutions
                </p>
              </div>
            </div>
          </section>
        }
      />

      {/* Background Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Background
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                New Sudan Insurance Co. Ltd was incorporated in September 2007
                at the Ministry of Legal Affairs & Constitutional Development
                and was fully licensed in February 2008 with the Bank of South
                Sudan (BOSS). The Company has been providing various insurance
                services in the Republic of South Sudan.
              </p>
              <p>
                It is one of the first companies to be registered with BOSS
                fulfilling the requisite capital requirement and business
                license to operate on a professional and trusted insurance
                undertaking. Such a license is granted after a financial and
                technical scrutiny by the BOSS (Bank of South Sudan).
              </p>
              <p>
                The Company's head office is in Juba, Nimra Talata at an
                exquisite state-of-the-art ground plus one complex commissioned
                in November 2011, making it the first company to build its own
                office premises within only 3 years of its operation. The
                Company has also completed a real estate project (NESICO PLAZA)
                along the Airport Road (about 300m) from Juba International
                Airport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="border-2 border-primary/20 hover:scale-105 hover:border-primary hover:shadow-lg transition-all duration-300 p-4">
              <CardContent>
                <Target className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide comprehensive, affordable insurance solutions that
                  give our clients peace of mind and financial security. We
                  believe everyone deserves protection for what matters most.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:scale-105 hover:border-primary hover:shadow-lg transition-all duration-300 p-4">
              <CardContent>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted insurance partner, known for
                  exceptional service, innovative solutions, and unwavering
                  commitment to our clients' well-being and prosperity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all border border-primary/20 hover:border-primary duration-300 hover:scale-105 animate-fade-in pt-2 ">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Indigenous Competence</h4>
                <p className="text-sm text-muted-foreground">
                  We strive to train competent individuals with the best risk
                  management practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-primary/20 hover:border-primary duration-300 hover:scale-105 animate-fade-in pt-2 ">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Professionalism</h4>
                <p className="text-sm text-muted-foreground">
                  Excellence delivered through expertise and competence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-primary/20 hover:border-primary duration-300 hover:scale-105 animate-fade-in pt-2 ">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Integrity</h4>
                <p className="text-sm text-muted-foreground">
                  Maintain honesty, fairness and ethical standards in all our
                  dealings.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-primary/20 hover:border-primary duration-300 hover:scale-105 animate-fade-in pt-2 ">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Social Responsibility</h4>
                <p className="text-sm text-muted-foreground">
                  Environmental concern and community support in all our
                  operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="bg-muted section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">
                  Corporate Governance & Management
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                New Sudan Insurance Company is led by a dynamic management team
                with vast experience in insurance, finance, and risk management.
                Our governance structure is guided by ethical standards,
                accountability, and compliance with regulatory frameworks.
              </p>
              <p className="text-muted-foreground">
                The Company is investing heavily in developing the indigenous
                young South Sudanese to run and manage the affairs of the
                Company. The Board remains committed to secure proficient
                insurance personnel under its policy of capacity building by
                sponsoring various training and courses with internationally
                recognized certifications.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Corporate Role</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We strive to establish a harmonized Insurance Industry in the
                Country by closely working with South Sudan Insurance Union and
                the Bank of South Sudan at an advisory role.
              </p>
              <p className="text-muted-foreground">
                The Company has spear-headed the formation of the Association of
                Southern Sudan Insurers (ASSI) in 2010 which was later renamed
                to South Sudan Insurance Union in 2016.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              At New Sudan Insurance, we are dedicated to delivering insurance
              services with precision and care. We provide tailor-made covers
              that suit individual and corporate needs, backed by trusted
              partnerships with leading local and international partners. Our
              commitment to swift and transparent claims processing ensures
              clients get timely support when it matters most.
            </p>
            <p className="text-muted-foreground mb-8">
              With expert guidance from our risk consultants, dedicated support
              team, and a client-centric approach, we go beyond insurance to
              offer assurance, reliability, and long-term peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
