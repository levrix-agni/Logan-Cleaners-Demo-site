
import { Phone, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="bg-[#3B82F6] py-32 lg:py-48 relative overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-white font-heading font-black tracking-[0.5em] uppercase text-[10px] mb-12 block">
            Initiate Perfection
          </span>
          <h2 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 sm:mb-16 leading-[0.85] text-balance">
            Elevate Your <br />
            <span className="font-editorial italic font-normal text-white/50 tracking-normal">Environment</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-12 sm:mb-20 font-medium leading-relaxed opacity-90">
            Secure your complimentary consultation and experience the gold standard of professional cleaning across Brisbane and Logan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto">
            <button className="bg-[#0A0A0A] text-white px-10 sm:px-16 py-6 sm:py-8 rounded-none text-[10px] font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase transition-all hover:bg-white hover:text-[#111111] flex items-center justify-center group shadow-2xl">
              Request Quote
              <ArrowRight className="ml-3 sm:ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <a
              href="tel:0487145901"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 sm:px-16 py-6 sm:py-8 rounded-none text-[10px] font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase transition-all hover:bg-white hover:text-[#3B82F6] flex items-center justify-center shadow-2xl"
            >
              <Phone className="mr-3 sm:ml-4 w-4 h-4" />
              0487 145 901
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
