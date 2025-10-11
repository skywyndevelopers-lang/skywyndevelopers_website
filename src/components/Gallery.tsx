import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Modern residential property with landscaped garden" },
  { src: gallery2, alt: "Beautiful land plot with mountain views in Kerala" },
  { src: gallery3, alt: "Luxury villa under construction" },
  { src: gallery4, alt: "Elegant modern home interior" },
  { src: gallery5, alt: "Landscaped property with outdoor spaces" },
  { src: gallery6, alt: "Premium residential development at twilight" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-lg">Our Work</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Portfolio Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our completed projects and ongoing developments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-smooth aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
