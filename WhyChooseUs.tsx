
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Bespoke Service",
      desc: "Tailored strategies for every property's unique architectural requirements."
    },
    {
      title: "Consistent Excellence",
      desc: "Rigorous protocols that ensure the same high standard every single visit."
    },
    {
      title: "Elite Professionals",
      desc: "Highly trained specialists committed to the art of meticulous cleaning."
    },
    {
      title: "Transparent Values",
      desc: "Clear communication and absolute integrity in every client interaction."
    }
  ];

  return (
    <section id="why-us" className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[#3B82F6] font-heading font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">
              The Standard
            </span>
            <h2 className="text-[#111111] text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-8 sm:mb-10 leading-[0.9] text-balance">
              Why Choose <br />
              <span className="font-editorial italic font-normal text-[#CCCCCC] tracking-normal">Cleaners At Logan?</span>
            </h2>
            <p className="text-[#666666] text-lg mb-16 font-medium leading-relaxed max-w-xl opacity-80">
              We don't just maintain spaces; we elevate them. Our commitment to excellence has made us the trusted choice for Brisbane's most discerning property owners.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col space-y-4">
                  <h4 className="text-[#111111] font-black text-xs tracking-[0.2em] uppercase">{reason.title}</h4>
                  <p className="text-[#888888] text-sm leading-relaxed font-medium">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 aspect-[5/6] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000"
                alt="Professional Cleaning"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-4 right-4 sm:-bottom-16 sm:-right-12 bg-[#111111] p-8 sm:p-12 lg:p-16 z-20 max-w-[200px] sm:max-w-[280px] shadow-2xl"
            >
              <div className="text-[#3B82F6] text-4xl sm:text-6xl font-black mb-2 sm:mb-4 tracking-tighter leading-none">100</div>
              <div className="text-white text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase font-black leading-relaxed">
                Percent <br />Satisfaction <br /><span className="text-white/40">Guaranteed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
