
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Residential Cleaning",
      desc: "Tailored cleaning solutions for high-end homes, from maintenance to specialized care.",
      image: "/hero-cleaning.jpg"
    },
    {
      title: "Commercial Cleaning",
      desc: "Maintain a pristine professional environment with our expert corporate services.",
      image: "/commercial-cleaning.jpg"
    },
    {
      title: "End of Lease",
      desc: "Detailed cleaning designed to exceed strict property management standards.",
      image: "/end-of-lease.jpg"
    },
    {
      title: "Deep Cleaning",
      desc: "A thorough, restorative sanitize focusing on every intricate architectural detail.",
      image: "/deep-clean.jpg"
    },
    {
      title: "Office Cleaning",
      desc: "Bespoke cleaning schedules to keep your workplace hygienic and prestigious.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Maintenance Care",
      desc: "Consistent, high-standard cleaning to keep your property in perpetual perfection.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="bg-[#0A0A0A] section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-8">
            <span className="text-[#3B82F6] font-heading font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">
              Core Expertise
            </span>
            <h2 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-balance">
              Services <br />
              <span className="font-editorial italic font-normal text-white/40 tracking-normal">Redefined</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-[#999999] text-base font-medium leading-relaxed max-w-sm">
              We offer a curated suite of premium cleaning solutions designed for those who demand the highest standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[500px] overflow-hidden bg-[#111111] border border-white/5"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <span className="text-[#3B82F6] text-[10px] font-black tracking-[0.3em] uppercase mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Premium Service
                </span>
                <h3 className="text-white text-3xl font-black mb-6 tracking-tighter group-hover:text-[#3B82F6] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-medium mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  {service.desc}
                </p>
                <div className="w-full h-1 bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#3B82F6] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
