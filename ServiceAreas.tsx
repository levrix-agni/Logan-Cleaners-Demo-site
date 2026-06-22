
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    "Brisbane CBD", "South Brisbane", "Logan Central", "Springwood", 
    "Beenleigh", "Sunnybank", "Carindale", "Mount Gravatt",
    "Ipswich", "Redlands", "Indooroopilly", "Gold Coast North"
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-custom">
        <div className="bg-[#0A0A0A] p-12 lg:p-24 relative overflow-hidden border border-black/5">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-[#3B82F6] font-heading font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">
                Regional Presence
              </span>
              <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter mb-10 leading-[0.9] text-balance">
                Brisbane, Logan <br />
                <span className="font-editorial italic font-normal text-white/40 tracking-normal">& Surrounds.</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 font-medium leading-relaxed max-w-xl">
                Our elite cleaning units are strategically positioned to provide prompt and professional service throughout South East Queensland.
              </p>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-[#3B82F6]/5 border border-[#3B82F6]/20 flex items-center justify-center rounded-none">
                  <MapPin className="text-[#3B82F6] w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-black text-xs tracking-widest uppercase mb-1">Central Hub</p>
                  <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider">Brisbane Metropolitan Area</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-y-6 gap-x-12">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-1 h-1 bg-[#3B82F6] rounded-none group-hover:scale-150 transition-transform duration-500" />
                  <span className="text-white/60 text-[11px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
