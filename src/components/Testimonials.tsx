import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Correct import for Swiper modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Wayanad",
    rating: 5,
    review: "Skywyn helped us find the perfect plot in Wayanad. Their expertise in land development and transparent approach made the entire process smooth. Highly recommended!",
    image: "RK"
  },
  {
    name: "Priya Menon",
    location: "Kalpetta",
    rating: 5,
    review: "We built our dream home with Skywyn. From design to construction, every detail was handled with care and professionalism. The quality of work exceeded our expectations.",
    image: "PM"
  },
  {
    name: "Arun Thomas",
    location: "Sulthan Bathery",
    rating: 5,
    review: "Best real estate consultants in Wayanad! They understood our requirements perfectly and delivered beyond what we imagined. True professionals who build trust.",
    image: "AT"
  },
  {
    name: "Sangeetha R",
    location: "Vythiri",
    rating: 5,
    review: "Skywyn made our home buying experience effortless. Their team guided us at every step. Amazing service!",
    image: "SR"
  },
  {
    name: "Manoj Kumar",
    location: "Meppadi",
    rating: 4,
    review: "Great experience overall. Very professional and responsive. Would recommend for land deals in Wayanad.",
    image: "MK"
  },
  {
    name: "Anjali Nair",
    location: "Kalpetta",
    rating: 5,
    review: "From consultation to completion, everything was smooth. Skywyn is trustworthy and highly professional.",
    image: "AN"
  },
  {
    name: "Ramesh P",
    location: "Sulthan Bathery",
    rating: 5,
    review: "Excellent guidance on land investment. Transparent and reliable. Couldn't ask for better service.",
    image: "RP"
  },
  {
    name: "Leena Jose",
    location: "Wayanad",
    rating: 5,
    review: "The team at Skywyn is extremely knowledgeable. They helped us pick the perfect plot. Highly recommended!",
    image: "LJ"
  },
  {
    name: "Vishnu S",
    location: "Kalpetta",
    rating: 4,
    review: "Good service, friendly team. Slight delay in documentation but overall very satisfied.",
    image: "VS"
  },
  {
    name: "Deepa M",
    location: "Meppadi",
    rating: 5,
    review: "They made buying land a pleasant experience. Professional, reliable, and trustworthy.",
    image: "DM"
  },
  {
    name: "Arjun K",
    location: "Vythiri",
    rating: 5,
    review: "Best real estate consultants ever. They explained everything clearly and guided us perfectly.",
    image: "AK"
  },
  {
    name: "Shalini R",
    location: "Kalpetta",
    rating: 5,
    review: "I am extremely happy with their services. Highly recommended for anyone looking to invest in Wayanad.",
    image: "SR"
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-lg">What Our Clients Say</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from satisfied clients who trusted us with their dreams
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="group hover:shadow-medium transition-smooth border-border/50 bg-card">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-foreground font-bold text-lg">
                          {testimonial.image}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-accent fill-accent" size={20} />
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.review}"
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}

            {/* Custom navigation buttons */}
         <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-[#d4af37] bg-transparent w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:text-[#ffd700]">
  &#8249;
</div>
<div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-[#d4af37] bg-transparent w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:text-[#ffd700]">
  &#8250;
</div>

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;