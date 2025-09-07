import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with both. Our strategies are designed based on your stage of growth — whether you need quick leads as a startup or long-term brand building as a scaling business."
    },
    {
      question: "How soon can I expect results?",
      answer: "It depends on the service. For ads, results can come in weeks. For SEO and brand growth, results build steadily over months. Either way, we're transparent about timelines."
    },
    {
      question: "What makes Namish Marketing different from other agencies?",
      answer: "We don't \"sell\" services. We act as your partner — bringing the right specialists, tailoring strategies, and focusing only on results that matter to your business."
    },
    {
      question: "How do I get started?",
      answer: "Simple — book a free consultation with us. We'll understand your needs, suggest the best plan, and start working as your extended marketing team."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Here's what businesses typically ask us.
            </p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-2xl px-8 mb-4 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;