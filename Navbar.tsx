import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#111111]/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-white text-xl font-heading font-black tracking-tighter uppercase leading-none">
            Cleaners At Logan
          </span>
          <span className="text-[#3B82F6] text-[9px] tracking-[0.3em] font-bold uppercase mt-1">
            Premium Service Brisbane
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-8">
            <a
              href="tel:0487145901"
              className="flex items-center text-white/90 font-bold hover:text-[#3B82F6] transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 mr-2.5 text-[#3B82F6] group-hover:scale-110 transition-transform" />
              <span className="text-[11px] tracking-[0.2em] uppercase">0487 145 901</span>
            </a>
            <button className="bg-white hover:bg-[#3B82F6] hover:text-white text-[#111111] px-7 py-3.5 rounded-none text-[10px] font-black tracking-[0.2em] uppercase transition-all">
              Get Free Quote
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#111111] border-t border-white/10 flex flex-col p-8 space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-xl font-medium tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-white/10 flex flex-col space-y-6">
              <a href="tel:0487145901" className="flex items-center text-white text-lg">
                <Phone className="w-5 h-5 mr-3 text-[#3B82F6]" />
                0487 145 901
              </a>
              <button className="bg-[#3B82F6] text-white py-4 rounded-none text-xs font-bold tracking-widest uppercase">
                Get Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
