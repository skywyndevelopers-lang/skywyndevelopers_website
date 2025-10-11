import { Home, Trees, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Real Estate & Property Sales",
    description: "Expert guidance in finding and acquiring premium properties in Wayanad. From residential plots to commercial spaces, we help you make the right investment.",
    slug: "real-estate"
  },
  {
    icon: Trees,
    title: "Land Development & Planning",
    description: "Transforming raw land into valuable assets through responsible planning, sustainable development, and compliance with environmental standards.",
    slug: "land-development"
  },
  {
    icon: HardHat,
    title: "Construction & Design Solutions",
    description: "Complete construction services with modern design sensibilities. We build homes and structures that blend aesthetics with functionality.",
    slug: "construction"
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = (slug) => {
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Navigate after a short delay to allow scroll effect
    setTimeout(() => {
      navigate(`/service/${slug}`);
    }, 200); // 200ms delay
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-lg">What We Offer</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-medium transition-smooth border-border/50 bg-card overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button
                    onClick={() => handleNavigate(service.slug)}
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
