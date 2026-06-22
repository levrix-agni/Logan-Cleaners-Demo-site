
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Request",
      desc: "Initial consultation to understand your unique property requirements."
    },
    {
      number: "02",
      title: "Schedule",
      desc: "Selecting a bespoke timeframe that integrates with your lifestyle."
    },
    {
      number: "03",
      title: "Execute",
      desc: "Expert application of our rigorous cleaning and restoration protocols."
    },
    {
      number: "04",
      title: "Perfect",
      desc: "Final inspection ensuring every detail meets our uncompromising standard."
    }
  ];

  return (
    <section id="process" className="bg-[#0A0A0A] section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-32">
          <span className="text-[#3B82F6] font-heading font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">
            The Journey
          </span>
          <h2 className="text-white text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-balance max-w-4xl">
            Our <span className="font-editorial italic font-normal text-white/40 tracking-normal">Signature</span> Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24 relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-px bg-white/5 -z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 group"
            >
              <div className="text-[#3B82F6] text-8xl font-black tracking-tighter mb-12 opacity-10 group-hover:opacity-100 transition-opacity duration-700 leading-none">
                {step.number}
              </div>
              <h3 className="text-white text-xs font-black mb-6 tracking-[0.3em] uppercase group-hover:text-[#3B82F6] transition-colors">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium group-hover:text-white/70 transition-colors">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
