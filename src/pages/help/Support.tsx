import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Headphones,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Headphones className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Customer Support
            </h1>
            <p className="text-lg opacity-90">
              We're here to help you every step of the way
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Speak directly with our support team
                  </p>
                  <div className="space-y-1 text-sm">
                    <p>+211(0)925955000</p>
                    <p>+211(0)919123678</p>
                    <p>+211(0)925478766</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Send us your inquiries anytime
                  </p>
                  <p className="text-sm">nesi@nesico.com</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    We respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Come to our head office
                  </p>
                  <p className="text-sm">Nimira Talata, Block 1</p>
                  <p className="text-sm">Juba, South Sudan</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                  <p className="text-muted-foreground mb-4">
                    When you can reach us
                  </p>
                  <p className="text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-sm text-muted-foreground">
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  For urgent matters or to speak with a specialist about your
                  insurance needs, our dedicated support team is ready to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">Contact Form</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/help/faq">View FAQs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
