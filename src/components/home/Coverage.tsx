import { Card, CardContent } from "@/components/ui/card";
import insuranceProperty from "../../assets/african_family_1.jpg";
import insuranceLife from "../../assets/life_1.jpg";
import insuranceHealth from "../../assets/health.jpg";
import insuranceCar from "../../assets/car_insurance.jpg";

const coverageTypes = [
  {
    image: insuranceLife,
    title: "Insure Your Lives Now",
  },
  {
    image: insuranceHealth,
    title: "Insure Your Health Now",
  },
  {
    image: insuranceCar,
    title: "Insure Your Car Now",
  },
  {
    image: insuranceProperty,
    title: "Insure Your Property Now",
  },
];

const Coverage = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coverageTypes.map((coverage, index) => (
            <Card
              key={coverage.title}
              className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={coverage.image}
                    alt={coverage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{coverage.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
