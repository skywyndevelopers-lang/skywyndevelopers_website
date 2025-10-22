import aboutImage from "@/assets/gallery-1.jpg";
import bgPattern from "@/assets/about-bg-two.png";
import { motion } from "framer-motion";
import { Building2, Home, HeartHandshake, Gem } from "lucide-react";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 lg:py-40 text-gray-900 font-sans"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
            className="relative group rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={aboutImage}
              alt="Luxury villa and nature view"
              className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 group-hover:opacity-10 transition duration-500"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={textVariant}>
              {/* Gold Title with Shine */}
              <motion.span
                className="relative text-[#B8860B] font-serif text-base tracking-[3px] uppercase inline-block overflow-hidden"
                initial={{ backgroundPositionX: "0%" }}
                whileInView={{
                  backgroundPositionX: "100%",
                  transition: { duration: 2, repeat: Infinity, ease: "linear" },
                }}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #B8860B 0%, #555 50%, #B8860B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200%",
                }}
              >
                About Skywyn
              </motion.span>

              <motion.h2
                className="text-4xl lg:text-5xl font-bold leading-tight mt-3 text-gray-900 font-serif"
                variants={textVariant}
                custom={0.2}
              >
                Crafting Excellence,<br /> Building with Trust
              </motion.h2>
              <motion.div
                className="w-24 h-[3px] bg-[#B8860B] mt-4 rounded-full"
                variants={textVariant}
                custom={0.4}
              ></motion.div>
            </motion.div>

            <motion.p
              className="text-gray-800 leading-relaxed text-lg"
              variants={textVariant}
              custom={0.6}
            >
              At <span className="text-[#B8860B] font-semibold">Skywyn</span>, we
              blend <strong>architecture, innovation,</strong> and
              <strong> integrity</strong> to redefine real estate and
              development. Nestled in the heart of Wayanad, we create timeless
              projects that mirror luxury, nature, and trust.
            </motion.p>

            {/* Highlight Icons */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-8"
              variants={textVariant}
              custom={0.8}
            >
              {[
                {
                  icon: <Building2 className="text-[#B8860B] w-7 h-7" />,
                  title: "Real Estate",
                  desc: "Premium property development with transparency.",
                },
                {
                  icon: <Home className="text-[#B8860B] w-7 h-7" />,
                  title: "Construction",
                  desc: "Modern craftsmanship with lasting quality.",
                },
                {
                  icon: <HeartHandshake className="text-[#B8860B] w-7 h-7" />,
                  title: "Transparency",
                  desc: "Every project built on clarity and commitment.",
                },
                {
                  icon: <Gem className="text-[#B8860B] w-7 h-7" />,
                  title: "Luxury Touch",
                  desc: "Premium design aesthetics inspired by nature.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#B8860B]/10 p-3 rounded-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-[#B8860B] font-medium text-lg pt-6 italic"
              variants={textVariant}
              custom={1}
            >
              “We don’t just build structures — we build dreams and trust.”
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
