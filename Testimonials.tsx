
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "South Brisbane",
      content: "The level of detail is unmatched. I've used many cleaning services in Brisbane, but Cleaners At Logan is in a league of their own. Our residence has never looked better."
    },
    {
      name: "Mark Thompson",
      location: "Logan Central",
      content: "Absolute professionalism. They manage our executive office cleaning weekly and the results are impeccable. Highly recommended for commercial environments."
    },
    {
      name: "Emma Wilson",
      location: "Springwood",
      content: "Exceptional end-of-lease service. The attention to detail ensured a seamless transition. They are truly the gold standard in Brisbane."
    }
  ];

  return (
    <section id="testimonials" className="bg-[#0A0A0A] section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#3B82F6] font-heading font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">
            Client Voices
          </span>
          <h2 className="text-white text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-balance max-w-4xl">
            Trusted by <br />
            <span className="font-editorial italic font-normal text-white/40 tracking-normal">Discerning</span> Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#111111] p-12 lg:p-16 flex flex-col justify-between border border-white/5 hover:border-[#3B82F6]/50 transition-all duration-700 group"
            >
              <div>
                <Quote className="w-12 h-12 text-[#3B82F6] mb-12 opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-white/80 text-xl leading-relaxed font-medium font-editorial italic mb-16">
                  "{review.content}"
                </p>
              </div>
              <div className="flex flex-col">
                <div className="h-px w-16 bg-[#3B82F6] mb-8 group-hover:w-full transition-all duration-1000" />
                <h4 className="text-white text-xs font-black tracking-[0.2em] uppercase mb-2">{review.name}</h4>
                <p className="text-[#3B82F6] text-[9px] font-black uppercase tracking-[0.3em]">
                  {review.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
