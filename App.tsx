import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] selection:bg-[#3B82F6] selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <WhyChooseUs />
        <Process />
        <Results />
        <Testimonials />
        <ServiceAreas />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
