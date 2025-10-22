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
    name: "Arjun R",
    location: "Bengaluru, Karnataka",
    rating: 5,
    review: "Skywyn made my first property purchase completely stress-free. Their team is professional, friendly, and highly knowledgeable about local areas.",
    image: "AR",
    bgColor: "bg-[#0a1d37]" // Navy blue tone
  },
  {
    name: "Nisha Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review: "Excellent service! The Skywyn team guided us with honesty and patience. They helped us find a plot that matched exactly what we wanted.",
    image: "NP",
    bgColor: "bg-[#142c54]"
  },
  {
    name: "Rahul Verma",
    location: "Delhi NCR",
    rating: 4,
    review: "Smooth process from start to finish. The only delay was in document verification, but everything else was handled very professionally.",
    image: "RV",
    bgColor: "bg-[#1d3b73]"
  },
  {
    name: "Sneha S",
    location: "Kochi, Kerala",
    rating: 5,
    review: "Skywyn helped us purchase a property in Wayanad. The team’s communication and attention to detail were excellent throughout the process.",
    image: "SS",
    bgColor: "bg-[#0f274a]"
  },
  {
    name: "Harish Kumar",
    location: "Hyderabad, Telangana",
    rating: 5,
    review: "The Skywyn staff are very polite and professional. They understood our requirements perfectly and found the right property within budget.",
    image: "HK",
    bgColor: "bg-[#102a4d]"
  },
  {
    name: "Pooja Sharma",
    location: "Chandigarh",
    rating: 5,
    review: "Superb experience! Transparent pricing, quick response, and genuine guidance. Definitely one of the best real estate teams we’ve worked with.",
    image: "PS",
    bgColor: "bg-[#132f57]"
  },
  {
    name: "Vivek Menon",
    location: "Kozhikode, Kerala",
    rating: 5,
    review: "Highly trustworthy and efficient team. Skywyn handled everything — from land verification to registration — perfectly.",
    image: "VM",
    bgColor: "bg-[#0c2241]"
  },
  {
    name: "Ritika Das",
    location: "Kolkata, West Bengal",
    rating: 4,
    review: "Very cooperative and professional staff. There was a small delay in communication, but they delivered exactly what they promised.",
    image: "RD",
    bgColor: "bg-[#1c386c]"
  },
  {
    name: "Mohammed Irfan",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    review: "I was impressed by their knowledge and clear guidance. Skywyn helped us make the right decision with full transparency.",
    image: "MI",
    bgColor: "bg-[#102a4d]"
  },
  {
    name: "Rohit Sharma",
    location: "Pune, Maharashtra",
    rating: 5,
    review: "Skywyn’s professionalism really stands out. They made sure everything was perfect before finalizing the deal. Truly satisfied!",
    image: "RS",
    bgColor: "bg-[#0a1f3e]"
  },
  {
    name: "Divya Krishnan",
    location: "Thiruvananthapuram, Kerala",
    rating: 5,
    review: "Their team guided us like family. Every step was explained clearly, and we felt confident throughout the entire process.",
    image: "DK",
    bgColor: "bg-[#122b51]"
  },
  {
    name: "Karan Mehta",
    location: "Mumbai, Maharashtra",
    rating: 5,
    review: "Skywyn gave us a great experience. They were transparent, responsive, and completely reliable from start to finish.",
    image: "KM",
    bgColor: "bg-[#1a3667]"
  },
  {
    name: "Anand Raj",
    location: "Mysuru, Karnataka",
    rating: 5,
    review: "Their professionalism and quality of service are top-notch. Skywyn truly values its customers and delivers what they promise.",
    image: "ARJ",
    bgColor: "bg-[#132f57]"
  },
  {
    name: "Neha Gupta",
    location: "Lucknow, Uttar Pradesh",
    rating: 4,
    review: "Good experience overall. The process took some time, but the end result and support from Skywyn made it worth it.",
    image: "NG",
    bgColor: "bg-[#0e2545]"
  },
  {
    name: "Joseph Mathew",
    location: "Ernakulam, Kerala",
    rating: 5,
    review: "I’m fully satisfied with their work. The Skywyn team is friendly, helpful, and delivers on time. Highly recommended!",
    image: "JM",
    bgColor: "bg-[#0b2040]"
  }
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