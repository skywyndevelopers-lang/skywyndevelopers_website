import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group overflow-hidden rounded-2xl shadow-medium">
            <img
              src={aboutImage}
              alt="Skywyn luxury villa in natural setting"
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-accent font-semibold text-lg">About Skywyn</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
                Building Trust, Creating Legacies
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Skywyn, we specialize in <strong className="text-foreground">real estate, land development, and construction</strong> — creating spaces that blend nature, design, and trust. Based in the serene landscapes of Wayanad, we turn land into lasting legacies through responsible development and modern craftsmanship.
              </p>
              
              <p>
                From identifying the right property to delivering beautifully built homes and projects, Skywyn stands for quality, transparency, and customer satisfaction.
              </p>
              
              <p className="text-foreground font-medium text-lg pt-4">
                At Skywyn, we don't just build structures — we build trust, value, and a better way of living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
