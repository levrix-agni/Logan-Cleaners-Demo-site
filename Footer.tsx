
import { Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-32 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="flex flex-col space-y-10">
            <div>
              <span className="text-white text-xl sm:text-2xl font-black tracking-tighter uppercase leading-none block">
                Cleaners At Logan
              </span>
              <span className="text-[#3B82F6] text-[8px] sm:text-[9px] tracking-[0.4em] font-black uppercase mt-2 block">
                Premium Service Brisbane
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-medium">
              Redefining cleaning standards for Brisbane's most prestigious properties through uncompromising dedication to perfection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-[#3B82F6] hover:text-white text-white/40 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-[#3B82F6] hover:text-white text-white/40 transition-all">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-12">Expertise</h4>
            <ul className="space-y-6 text-white/40 text-xs font-black tracking-widest uppercase">
              <li><a href="#services" className="hover:text-[#3B82F6] transition-colors">Residential</a></li>
              <li><a href="#services" className="hover:text-[#3B82F6] transition-colors">Commercial</a></li>
              <li><a href="#services" className="hover:text-[#3B82F6] transition-colors">End of Lease</a></li>
              <li><a href="#services" className="hover:text-[#3B82F6] transition-colors">Deep Restoration</a></li>
              <li><a href="#services" className="hover:text-[#3B82F6] transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-12">Navigation</h4>
            <ul className="space-y-6 text-white/40 text-xs font-black tracking-widest uppercase">
              <li><a href="#services" className="hover:text-[#3B82F6] transition-colors">Our Portfolio</a></li>
              <li><a href="#why-us" className="hover:text-[#3B82F6] transition-colors">The Standard</a></li>
              <li><a href="#process" className="hover:text-[#3B82F6] transition-colors">Signature Process</a></li>
              <li><a href="#testimonials" className="hover:text-[#3B82F6] transition-colors">Client Voices</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Request Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-12">Contact</h4>
            <ul className="space-y-8 text-white/40 text-xs font-black tracking-widest uppercase">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-6 text-[#3B82F6] flex-shrink-0" />
                <a href="tel:0487145901" className="hover:text-white transition-colors">0487 145 901</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-6 text-[#3B82F6] flex-shrink-0" />
                <a href="mailto:info@cleanersatlogan.com.au" className="hover:text-white transition-colors lowercase">info@cleanersatlogan.com.au</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-6 text-[#3B82F6] flex-shrink-0" />
                <span className="leading-relaxed">Brisbane Metropolitan <br />Queensland, AU</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20 text-xs">
          <p>© {new Date().getFullYear()} Cleaners At Logan. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
