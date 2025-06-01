import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-secondary-500"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-accent-500"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white animate-fadeIn mb-6">
            Vertriebs-Arbeit
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 animate-fadeIn animate-delay-200">
            Ihr Full-Service Vertriebspartner
          </p>
          <p className="text-lg md:text-xl text-primary-200 mb-10 animate-fadeIn animate-delay-400">
            Von Slimane Belloum & Marcel Klotz
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center animate-fadeIn animate-delay-600">
            <a href="#services" className="btn btn-primary">
              Unsere Leistungen
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#contact" className="btn btn-outline border-white text-white hover:bg-white/10">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto fill-white">
          <path d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;