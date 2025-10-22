import { Home, Trees, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// background images
import estateImg from "@/assets/realestate.jpeg";
import landImg from "@/assets/land-development.jpg";
import constructionImg from "@/assets/Construction.avif";
import bgPattern from "@/assets/about-bg-two.png"; // same as About page

const services = [
  {
    icon: Home,
    image: estateImg,
    title: "Real Estate & Property Sales",
    description:
      "Expert guidance in acquiring premium properties and investment opportunities in Wayanad — from residential plots to commercial landmarks.",
    slug: "real-estate",
  },
  {
    icon: Trees,
    image: landImg,
    title: "Land Development & Planning",
    description:
      "We transform raw land into high-value assets through sustainable design, modern infrastructure, and environmental responsibility.",
    slug: "land-development",
  },
  {
    icon: HardHat,
    image: constructionImg,
    title: "Construction & Design Solutions",
    description:
      "From architectural design to elegant execution — we craft modern homes and projects with quality, trust, and timeless appeal.",
    slug: "construction",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = (slug) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(`/service/${slug}`), 300);
  };

  return (
    <section
      id="services"
      className="relative lg:py-36 font-sans text-gray-900 overflow-hidden"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional subtle overlay to soften the image */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Header Section */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20 px-6">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#B8860B] font-semibold uppercase tracking-[3px]"
        >
          What We Offer
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-5xl font-bold mt-4 mb-6 font-serif"
        >
          Our Signature Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-700 text-lg"
        >
          Combining innovation, sustainability, and craftsmanship to shape the
          future of real estate in Wayanad.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#B8860B]/10">
                    <Icon className="text-[#B8860B] w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {service.description}
                </p>

                <button
                  onClick={() => handleNavigate(service.slug)}
                  className="inline-block mt-4 px-6 py-3 text-sm font-medium tracking-wide border border-[#B8860B] text-[#B8860B] rounded-full hover:bg-[#B8860B] hover:text-white transition-all duration-500"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
