import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

import HeroWrapper from "../../components/HeroWrapper";

const Claims = () => {
  const steps = [
    {
      step: 1,
      title: "Report the Incident",
      desc: "Contact us immediately after an incident occurs",
    },
    {
      step: 2,
      title: "Submit Documentation",
      desc: "Provide all required documents and evidence",
    },
    {
      step: 3,
      title: "Claim Assessment",
      desc: "Our team reviews and processes your claim",
    },
    {
      step: 4,
      title: "Settlement",
      desc: "Receive your claim payment promptly",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroWrapper
        children={
          <section className="pb-16 ">
            <div className="container-width px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <FileText className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Claims Process
                </h1>
                <p className="text-lg opacity-90">
                  We're committed to swift and transparent claims processing
                </p>
              </div>
            </div>
          </section>
        }
      />

      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How to File a Claim
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {steps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="pt-2 border-primary/20 transition-all hover:border-primary hover:scale-105 duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Required Documents
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Completed claim form</li>
                    <li>• Copy of insurance policy</li>
                    <li>• Proof of loss/damage (photos, reports)</li>
                    <li>• Police report (if applicable)</li>
                    <li>• Medical reports (for health claims)</li>
                    <li>• Original receipts and invoices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="pt-2 border-primary/20 transition-all hover:border-primary hover:scale-105 duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Important Notes
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Report claims within 48 hours of incident</li>
                    <li>• Keep all original documents safe</li>
                    <li>• Do not admit liability without consulting us</li>
                    <li>• Provide accurate and complete information</li>
                    <li>• Follow up if you don't hear back in 7 days</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted pt-2 border-primary/20 transition-all hover:border-primary hover:scale-105 duration-300 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Contact Claims Department
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +211(0)925955000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">
                        nesi@nesico.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri: 8am-5pm
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Claims;
