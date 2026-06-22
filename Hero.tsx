import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Cinematic Background with Enhanced Lighting */}
      <div className="absolute inset-0">
        <img
          src="/hero-cleaning.jpg"
          alt="Premium Interior"
          className="w-full h-full object-cover opacity-40 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 container-custom w-full pt-12 pb-24 md:pb-0">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] sm:leading-[0.8] mb-8 sm:mb-12 text-balance">
              The Art of <br />
              <span className="font-editorial italic font-normal text-white/40 tracking-tight">Pure.</span>
            </h1>
            
            <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-10 sm:mb-16 font-medium tracking-tight">
              Bespoke cleaning services for Brisbane's most prestigious properties. 
              Uncompromising standards, meticulously delivered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 max-w-md sm:max-w-none">
              {/* Primary Glass CTA */}
              <button className="glass-cta shine-effect text-white px-8 sm:px-14 py-5 sm:py-7 rounded-none text-[10px] sm:text-[11px] font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase flex items-center justify-center group">
                <span className="relative z-10 flex items-center">
                  Get Free Quote
                  <ArrowRight className="ml-3 sm:ml-4 w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              
              {/* Secondary Glass CTA */}
              <a
                href="tel:0487145901"
                className="glass-cta shine-effect text-white px-8 sm:px-14 py-5 sm:py-7 rounded-none text-[10px] sm:text-[11px] font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase flex items-center justify-center group"
              >
                <span className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  0487 145 901
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
