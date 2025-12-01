import { useState } from "react";
import { Calculator } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const PremiumCalculator = () => {
  const [insuranceType, setInsuranceType] = useState("");
  const [age, setAge] = useState("");
  const [coverage, setCoverage] = useState("");
  const [estimatedPremium, setEstimatedPremium] = useState<number | null>(null);

  const calculatePremium = () => {
    if (!insuranceType || !age || !coverage) return;

    const ageNum = parseInt(age);
    const coverageNum = parseInt(coverage);

    let baseRate = 0;

    // Simple calculation logic (for demo purposes)
    switch (insuranceType) {
      case "life":
        baseRate = 0.002;
        break;
      case "health":
        baseRate = 0.03;
        break;
      case "car":
        baseRate = 0.015;
        break;
      case "property":
        baseRate = 0.005;
        break;
    }

    // Age factor
    const ageFactor = ageNum < 30 ? 0.8 : ageNum < 50 ? 1 : 1.3;

    const premium = coverageNum * baseRate * ageFactor * 12; // Annual premium
    setEstimatedPremium(Math.round(premium));
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-3xl">Premium Calculator</CardTitle>
              <CardDescription>
                Get an instant estimate of your insurance premium
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="insurance-type">Insurance Type</Label>
                <Select value={insuranceType} onValueChange={setInsuranceType}>
                  <SelectTrigger id="insurance-type">
                    <SelectValue placeholder="Select insurance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="life">Life Insurance</SelectItem>
                    <SelectItem value="health">Health Insurance</SelectItem>
                    <SelectItem value="car">Car Insurance</SelectItem>
                    <SelectItem value="property">Property Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Your Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="18"
                  max="100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverage">Coverage Amount ($)</Label>
                <Input
                  id="coverage"
                  type="number"
                  placeholder="Enter coverage amount"
                  value={coverage}
                  onChange={(e) => setCoverage(e.target.value)}
                  min="10000"
                  step="10000"
                />
              </div>

              <Button onClick={calculatePremium} className="w-full" size="lg">
                Calculate Premium
              </Button>

              {estimatedPremium !== null && (
                <Card className="bg-primary/5 border-primary/20 animate-scale-in">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">
                        Estimated Annual Premium
                      </p>
                      <p className="text-4xl font-bold text-primary">
                        ${estimatedPremium.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground mt-4">
                        *This is an estimate. Actual premium may vary based on
                        additional factors.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PremiumCalculator;
