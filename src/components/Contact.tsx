import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone & WhatsApp",
    value: "9539 40 9539",
    href: "tel:9539409539",
  },
  {
    icon: Mail,
    label: "Email",
    value: "skywyndevelopers@gmail.com",
    href: "mailto:skywyndevelopers@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Wayanad, Kerala",
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919539409539?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
            
    // Show success toast
    toast.success("Opening WhatsApp...");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-lg">Get in Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to start your journey? Let's discuss your dream project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-soft p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full gradient-gold text-foreground font-semibold shadow-gold hover:scale-105 transition-smooth"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-medium transition-smooth">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/skywyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center hover:scale-110 transition-smooth shadow-gold"
                >
                  <Instagram className="text-foreground" size={24} />
                </a>
                <a
                  href="https://facebook.com/skywyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center hover:scale-110 transition-smooth shadow-gold"
                >
                  <Facebook className="text-foreground" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
