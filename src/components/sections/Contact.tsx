import { useState } from 'react';
import { Mail, Phone, Calendar, Check } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
          consent: false
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-primary-800">Kontaktieren Sie uns</h2>
          <p className="text-lg text-gray-600">
            Bereit, Ihren Vertrieb auf die nächste Stufe zu heben? Sprechen Sie mit uns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-800">Lassen Sie uns sprechen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">E-Mail</h4>
                    <a href="mailto:info@vertriebs-arbeit.de" className="text-primary-600 hover:text-primary-800 transition-colors">
                      info@vertriebs-arbeit.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Telefon</h4>
                    <a href="tel:+491234567890" className="text-primary-600 hover:text-primary-800 transition-colors">
                      +49 (0) 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Meeting buchen</h4>
                    <a href="#" className="text-primary-600 hover:text-primary-800 transition-colors">
                      30-minütiges Strategiegespräch
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold mb-3">Unsere Adresse</h4>
                <p>Kiefernweg 11<br />50259 Pulheim<br />Deutschland</p>
                
                <div className="mt-4 h-48 bg-gray-200 rounded-lg">
                  {/* This would be replaced with an actual map integration */}
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Kartenansicht
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary-800">Schreiben Sie uns</h3>
            
            {formStatus === 'success' ? (
              <div className="bg-success-100 text-success-700 p-4 rounded-lg flex items-center">
                <Check size={20} className="mr-2 flex-shrink-0" />
                <p>Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Unternehmen *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden. *
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary py-3"
                >
                  Nachricht senden
                </button>
                
                <p className="text-xs text-gray-500 mt-3">
                  * Pflichtfelder. Weitere Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;