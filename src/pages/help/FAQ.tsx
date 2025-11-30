import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

import HeroWrapper from "../../components/HeroWrapper";

const faqs = [
  {
    question: "How do I file a claim?",
    answer:
      "To file a claim, contact our claims department directly by phone at +211(0)925955000 or email us at nesi@nesico.com. You can also visit our head office in Juba. Our team will guide you through the documentation required and process your claim promptly.",
  },
  {
    question: "What documents do I need to purchase insurance?",
    answer:
      "Required documents vary by insurance type. Generally, you'll need a valid ID, proof of address, and specific documents related to the asset being insured (e.g., vehicle registration for motor insurance, property documents for property insurance). Contact us for specific requirements.",
  },
  {
    question: "How long does claims processing take?",
    answer:
      "We pride ourselves on swift claims processing. Most straightforward claims are processed within 5-7 business days after receiving all required documentation. Complex claims may take longer, but our team keeps you informed throughout the process.",
  },
  {
    question: "Can I customize my insurance policy?",
    answer:
      "Yes! NESICO specializes in tailor-made risk management solutions. Our team works with you to understand your specific needs and customize coverage accordingly. Contact us for a personalized consultation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including cash, bank transfers, and mobile money. Premium payments can be made at our head office or through our authorized channels. We also offer flexible payment plans for eligible policies.",
  },
  {
    question: "How do I renew my policy?",
    answer:
      "Policy renewals can be done at our office or by contacting our customer service team before your policy expires. We'll send renewal reminders to ensure continuous coverage. Keep your contact information updated to receive timely notifications.",
  },
  {
    question: "Are international medical treatments covered?",
    answer:
      "Yes, depending on your policy type. Our health insurance plans, especially the Elite and Premium tiers, include coverage for international medical treatments and emergency evacuations. Check your specific policy details or contact us for clarification.",
  },
  {
    question:
      "What is the difference between comprehensive and third-party motor insurance?",
    answer:
      "Third-party motor insurance covers damages you cause to other people, vehicles, and property. Comprehensive insurance includes third-party coverage PLUS protection for your own vehicle against theft, fire, accidents, and other risks.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroWrapper
        children={
          <section className="pb-16 ">
            <div className="container-width px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg opacity-90">
                  Find answers to common questions about our insurance services
                </p>
              </div>
            </div>
          </section>
        }
      />

      <section className="section-padding">
        <div className="container-width max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-muted rounded-lg">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our team is here to help you with any inquiries.
            </p>
            <Button asChild>
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
