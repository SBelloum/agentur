import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Vertriebs-Arbeit</h3>
            <p className="text-gray-300 mb-4">
              Ihr Full-Service Vertriebspartner für nachhaltiges Wachstum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Unsere Leistungen
                </a>
              </li>
              <li>
                <a href="#collaboration" className="text-gray-300 hover:text-white transition-colors">
                  Voraussetzungen
                </a>
              </li>
              <li>
                <a href="#case-study" className="text-gray-300 hover:text-white transition-colors">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Kiefernweg 11, 50259 Pulheim
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <a href="tel:+491234567890" className="text-gray-300 hover:text-white transition-colors">
                  +49 (0) 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@vertriebs-arbeit.de" className="text-gray-300 hover:text-white transition-colors">
                  info@vertriebs-arbeit.de
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Erhalten Sie regelmäßig Tipps und Trends zum Thema Vertrieb.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button type="submit" className="btn btn-primary">
                Abonnieren
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Vertriebs-Arbeit. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Impressum
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Datenschutz
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;