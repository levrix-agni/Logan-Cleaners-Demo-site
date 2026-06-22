
import { motion } from 'framer-motion';

const TrustSection = () => {
  const points = [
    {
      title: "Fully Insured",
      desc: "Complete coverage for high-value properties and commercial assets."
    },
    {
      title: "Reliable Team",
      desc: "Punctual, vetted professionals dedicated to service excellence."
    },
    {
      title: "Guaranteed Quality",
      desc: "Rigorous quality control protocols ensuring perfection on every visit."
    },
    {
      title: "Brisbane Based",
      desc: "Deeply rooted in the local community, serving Brisbane and Logan."
    }
  ];

  return (
    <section className="bg-white section-padding border-b border-black/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 bg-[#3B82F6]" />
                <h3 className="text-[#111111] text-xs font-black tracking-[0.2em] uppercase">{point.title}</h3>
              </div>
              <p className="text-[#666666] text-sm leading-relaxed font-medium">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
