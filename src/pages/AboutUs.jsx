import { Shield, Target, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary from-primary to-accent text-primary-foreground section-padding rounded-b-3xl pb-12">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center animate-fade-in text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About NESICO
            </h1>
            <p className="text-xl sm:text-2xl opacity-95">
              Protecting families and businesses for over 10 years with
              comprehensive insurance solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="border-2 border-gray-300 hover:border-primary hover:shadow-lg transition-shadow p-4">
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

            <Card className="border-2 border-gray-300 hover:border-primary hover:shadow-lg transition-shadow p-4">
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

      {/* Our Story */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded over a decade ago, NESICO began with a simple mission:
                to make quality insurance accessible and understandable for
                everyone. What started as a small team of dedicated insurance
                professionals has grown into a trusted partner for thousands of
                families and businesses.
              </p>
              <p>
                Throughout our 10-year journey, we've remained committed to our
                core values of integrity, transparency, and customer-first
                service. We've weathered economic changes, natural disasters,
                and global challenges alongside our clients, proving time and
                again that we're here when you need us most.
              </p>
              <p>
                Today, NESICO offers comprehensive coverage across life, health,
                auto, and property insurance, backed by strong partnerships with
                leading insurance carriers and a team of experienced advisors
                who genuinely care about protecting what matters most to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Trust & Integrity</h3>
              <p className="text-muted-foreground">
                We build lasting relationships through honest communication and
                ethical practices
              </p>
            </div>

            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Client-Focused</h3>
              <p className="text-muted-foreground">
                Your needs come first. We tailor solutions that fit your unique
                situation
              </p>
            </div>

            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in service, knowledge, and
                support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Protected?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Join thousands of satisfied clients who trust NESICO for their
            insurance needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-block px-8 py-4 bg-background text-primary rounded-lg font-semibold hover:bg-background/90 transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="/"
              className="inline-block px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
