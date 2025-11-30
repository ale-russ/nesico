import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Business Owner",
    company: "Hassan Enterprises",
    content:
      "NESICO has been our trusted insurance partner for over 5 years. Their comprehensive coverage and exceptional customer service have given us peace of mind.",
    rating: 5,
  },
  {
    name: "Fatima Ali",
    role: "Family Customer",
    company: "",
    content:
      "The health insurance plan from NESICO saved my family during a medical emergency. The claims process was smooth and the support team was incredibly helpful.",
    rating: 5,
  },
  {
    name: "Mohamed Ibrahim",
    role: "Fleet Manager",
    company: "Sudan Transport Co.",
    content:
      "Managing our fleet insurance with NESICO has been seamless. Their motor insurance coverage is comprehensive and competitively priced.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of individuals and businesses across South
            Sudan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="relative pt-2 overflow-hidden border border-primary/20 hover:border-primary hover:shadow-lg transition-all hover:scale-105 duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
