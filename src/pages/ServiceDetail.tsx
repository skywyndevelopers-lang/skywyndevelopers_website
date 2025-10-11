import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceDetails = {
  "real-estate": {
    title: "Real Estate & Property Sales",
    description: "Expert guidance in finding and acquiring premium properties in Wayanad. From residential plots to commercial spaces, we help you make the right investment.",
    features: [
      "Premium residential plots in prime locations",
      "Commercial property consultation",
      "Legal documentation support",
      "Property valuation and market analysis",
      "Investment opportunity identification",
      "End-to-end transaction support"
    ],
    process: [
      "Initial consultation to understand your requirements",
      "Property shortlisting based on budget and preferences",
      "Site visits and detailed property inspection",
      "Legal verification and documentation",
      "Negotiation and deal closure",
      "Post-sale support and assistance"
    ]
  },
  "land-development": {
    title: "Land Development & Planning",
    description: "Transforming raw land into valuable assets through responsible planning, sustainable development, and compliance with environmental standards.",
    features: [
      "Comprehensive land surveying and analysis",
      "Sustainable development planning",
      "Environmental impact assessment",
      "Infrastructure development coordination",
      "Regulatory compliance and approvals",
      "Project timeline and budget management"
    ],
    process: [
      "Land assessment and feasibility study",
      "Master planning and design",
      "Regulatory approvals and permits",
      "Infrastructure development",
      "Quality monitoring and compliance",
      "Project handover and documentation"
    ]
  },
  "construction": {
    title: "Construction & Design Solutions",
    description: "Complete construction services with modern design sensibilities. We build homes and structures that blend aesthetics with functionality.",
    features: [
      "Custom home design and architecture",
      "Modern construction techniques",
      "Quality material sourcing",
      "Project management and supervision",
      "Interior design consultation",
      "Warranty and maintenance support"
    ],
    process: [
      "Design consultation and concept development",
      "Detailed architectural planning",
      "Material selection and procurement",
      "Construction execution and monitoring",
      "Quality checks and inspections",
      "Final handover with documentation"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 text-primary-foreground hover:text-accent"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            What We Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-card border border-border/50 hover:shadow-soft transition-smooth"
              >
                <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            Our Process
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg bg-card border border-border/50 hover:shadow-soft transition-smooth"
              >
                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <p className="text-lg pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and turn your vision into reality
          </p>
          <Button
            onClick={scrollToContact}
            className="gradient-gold text-foreground font-semibold shadow-gold hover:scale-105 transition-smooth px-8 py-6 text-lg"
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
