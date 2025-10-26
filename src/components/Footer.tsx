import { useNavigate } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import skywynLogo from "@/assets/skywyn-logo.png";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#0D1B2A] text-[#EAEAEA]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand Info */}
          <div>
            <img
              src={skywynLogo}
              alt="Skywyn Logo"
              className="h-14 w-auto mb-4"
            />
            <p className="text-[#EAEAEA]/80 leading-relaxed mb-3">
              From Land to Legacy — blending nature, design, and trust in every
              project.
            </p>
            <p className="text-sm text-[#C9A227]">Based in Wayanad, Kerala</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#C9A227] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#EAEAEA]/80 hover:text-[#FFD700] transition-smooth relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#C9A227] mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:9539409539"
                className="flex items-center text-[#EAEAEA]/80 hover:text-[#FFD700] transition-smooth group"
              >
                <Phone
                  size={18}
                  className="mr-3 group-hover:scale-110 transition-transform"
                />
                <span>9539 40 9539</span>
              </a>
              <a
                href="mailto:skywyndevelopers@gmail.com"
                className="flex items-center text-[#EAEAEA]/80 hover:text-[#FFD700] transition-smooth group"
              >
                <Mail
                  size={18}
                  className="mr-3 group-hover:scale-110 transition-transform"
                />
                <span>skywyndevelopers@gmail.com</span>
              </a>

              {/* Social Links */}
              <div className="pt-2">
                <p className="text-sm text-[#EAEAEA]/60 mb-3">Follow us:</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/skywyn_developers?igsh=MXVqdXQ3ZWRkMHpvZQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A227] hover:text-[#FFD700] transition-smooth hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/19eSDgBNiV/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A227] hover:text-[#FFD700] transition-smooth hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - Legal / License */}
          <div>
            <h3 className="text-lg font-semibold text-[#C9A227] mb-4">
              Legal & Licensing
            </h3>
            <div className="space-y-2 text-sm text-[#EAEAEA]/70">
              <p>© 2025 Skywyn Developers</p>
              <p>All Rights Reserved</p>
              <p className="pt-2">
                Licensed & Registered Real Estate Developers – Wayanad
              </p>
              <p className="text-[#C9A227]/80">Reg. No: WYD/REAL/2025/079</p>
            </div>
          </div>
        </div>

        {/* Gold Divider */}
        <Separator className="bg-gradient-to-r from-transparent via-[#C9A227] to-transparent h-[2px] mb-6" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-lg font-serif text-[#C9A227] tracking-wider">
            FROM LAND TO LEGACY 🌿
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
