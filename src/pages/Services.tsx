import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import HeroWrapper from "../components/HeroWrapper";

import { services } from "../data/services";

const Services = () => {
  return (
    <div className="min-h-screen bg-background ">
      <HeroWrapper
        children={
          <section className="section-padding">
            <div className="container-width px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Our Services
                </h1>
                <p className="text-lg opacity-90">
                  Comprehensive insurance solutions tailored to protect what
                  matters most to you
                </p>
              </div>
            </div>
          </section>
        }
      />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-width">
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our services are designed to meet the diverse needs of individuals,
            families, and organizations, ensuring protection, financial
            security, and peace of mind in an unpredictable world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="border border-primary/50 hover:shadow-lg transition-all hover:scale-105 duration-300 hover:border-primary animate-fade-in pt-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                  {/* <div className="mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="section-padding">
        <div className="container-width">
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our services are designed to meet the diverse needs of individuals,
            families, and organizations, ensuring protection, financial
            security, and peace of mind in an unpredictable world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-all duration-300 border border-primary/20 hover:border-primary hover:scale-105 animate-fade-in"
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

                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Reinsurance Partners */}
      <section className="bg-muted section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Reinsurance Partners</h2>
            <p className="text-muted-foreground mb-6">
              Our reinsurance treaty is supported by leading African reinsurers
              and brokers. We have the support & technical backing of the
              international reinsurance industry as well as the local
              infrastructure to provide the best possible service to our
              customers.
            </p>
            <p className="text-muted-foreground text-sm">
              Partners include: Africa Re (A+ rating), ZEP Re, Continental Re,
              WAICA Re, SCG Re, Kenya Re, J.B. Boda (Mumbai), Afro-Asian
              Reinsurers (London), Marsh China Insurance Brokers (Shanghai),
              Jordan Global Brokers (Lagos), Sca Inter A Reinsurance Brokers
              (Kenya), and Maksure Risk Solution (South Africa).
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
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
