import { Building2, Shield, Globe } from "lucide-react";

const reinsurers = [
  { name: "Africa Re", type: "Reinsurer" },
  { name: "Cica Re", type: "Reinsurer" },
  { name: "Kenya Re", type: "Reinsurer" },
  { name: "ZEP Re", type: "Reinsurer" },
  { name: "Trust Re", type: "Reinsurer" },
  { name: "Scor", type: "Reinsurer" },
];

const Partners = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Reinsurance Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Backed by leading global and regional reinsurers for maximum
            security
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {reinsurers.map((partner, index) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                {index % 3 === 0 ? (
                  <Building2 className="w-6 h-6 text-primary" />
                ) : index % 3 === 1 ? (
                  <Shield className="w-6 h-6 text-primary" />
                ) : (
                  <Globe className="w-6 h-6 text-primary" />
                )}
              </div>
              <p className="font-semibold text-center text-sm">
                {partner.name}
              </p>
              <p className="text-xs text-muted-foreground">{partner.type}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Our strong reinsurance arrangements ensure that we can meet all our
            obligations to policyholders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
