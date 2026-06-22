

const Results = () => {
  return (
    <section className="bg-white section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5">
            <span className="text-[#3B82F6] font-heading font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">
              The Portfolio
            </span>
            <h2 className="text-[#111111] text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-8 sm:mb-10 leading-[0.9] text-balance">
              Meticulous <br />
              <span className="font-editorial italic font-normal text-[#CCCCCC] tracking-normal">Restoration</span>
            </h2>
            <p className="text-[#666666] text-lg mb-12 font-medium leading-relaxed max-w-md opacity-80">
              Visual evidence of our uncompromising standards. We transform high-end spaces into their most pristine state.
            </p>
            <div className="flex space-x-16">
              <div>
                <div className="text-[#111111] text-5xl font-black mb-2 tracking-tighter">500<span className="text-[#3B82F6]">+</span></div>
                <div className="text-[#999999] text-[9px] uppercase tracking-[0.3em] font-black">Properties Restored</div>
              </div>
              <div>
                <div className="text-[#111111] text-5xl font-black mb-2 tracking-tighter">100<span className="text-[#3B82F6]">%</span></div>
                <div className="text-[#999999] text-[9px] uppercase tracking-[0.3em] font-black">Retention Rate</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="/kitchen-result.jpg"
                  alt="Results"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=600"
                  alt="After"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            <div className="pt-16 space-y-6">
               <div className="relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=600"
                  alt="After"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"
                  alt="Detail"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
