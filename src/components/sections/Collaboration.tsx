import { useState } from 'react';
import { Check, X, Info } from 'lucide-react';

const Collaboration = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const requirements = [
    {
      title: "Ernsthafte Mehrwert-Definition",
      icon: <Check size={20} className="text-success-500" />,
      description: [
        "90-min Intensiv-Workshop zu Ihrer Wirtschaftsrelevanz",
        "Harte Faktenprüfung: Warum sollten Kunden gerade Sie wählen?"
      ]
    },
    {
      title: "Präzises Ideal-Kundenprofil",
      icon: <Check size={20} className="text-success-500" />,
      description: [
        "Geografische/industrielle Fokussierung",
        "Schmerzpunkte & Kaufmotive Ihrer Zielgruppe"
      ]
    },
    {
      title: "Erfolgsgeschichten-Dokumentation",
      icon: <Check size={20} className="text-success-500" />,
      description: [
        "Bisherige KPI-Steigerungen (Umsatz, ROI, Conversion)",
        "Referenzable Projektergebnisse"
      ]
    },
    {
      title: "Leistungs- & Zukunftspanorama",
      icon: <Check size={20} className="text-success-500" />,
      description: [
        "Aktuelle Vertriebsstruktur-Analyse",
        "3-Jahres-Entwicklungsplan mit Meilensteinen"
      ]
    }
  ];

  const nonRequirements = [
    {
      title: "Unrealistische Erwartungen",
      icon: <X size={20} className="text-error-500" />,
      description: "Sofortige Ergebnisse ohne strategische Grundlage"
    },
    {
      title: "Unklare Zielgruppe",
      icon: <X size={20} className="text-error-500" />,
      description: "\"Jeder ist unser Kunde\"-Mentalität"
    },
    {
      title: "Keine Erfolgsnachweise",
      icon: <X size={20} className="text-error-500" />,
      description: "Fehlen von nachweisbaren Erfolgen oder Referenzen"
    }
  ];

  return (
    <section id="collaboration" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-primary-800">Voraussetzungen für die Zusammenarbeit</h2>
          <p className="text-lg text-gray-600">
            Wir führen nur Projekte mit klarer Wertbasis durch. Dafür benötigen wir:
          </p>
        </div>
        
        {/* Collaboration Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <img 
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Zwei Hände, die ein Puzzle verbinden" 
              className="w-full h-auto rounded-xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent rounded-xl flex items-end">
              <div className="p-6 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Gemeinsam zum Erfolg</h3>
                <p className="text-white/90">
                  Eine starke Partnerschaft braucht klare Grundlagen
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs on Desktop */}
        <div className="hidden md:block">
          <div className="flex border-b border-gray-200 mb-8">
            <button
              className={`py-3 px-6 text-lg font-medium ${
                activeTab === 0
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-primary-500'
              }`}
              onClick={() => setActiveTab(0)}
            >
              Was wir brauchen
            </button>
            <button
              className={`py-3 px-6 text-lg font-medium ${
                activeTab === 1
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-primary-500'
              }`}
              onClick={() => setActiveTab(1)}
            >
              Was nicht funktioniert
            </button>
          </div>

          <div className="transition-all duration-300">
            {activeTab === 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((req, index) => (
                  <div key={index} className="card p-6 hover:border-primary-300 border-2 border-transparent transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-success-100 flex items-center justify-center mr-4">
                        {req.icon}
                      </div>
                      <h3 className="text-xl font-bold">{req.title}</h3>
                    </div>
                    <ul className="space-y-2 pl-14">
                      {req.description.map((item, idx) => (
                        <li key={idx} className="text-gray-700">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nonRequirements.map((req, index) => (
                  <div key={index} className="card p-6 hover:border-error-300 border-2 border-transparent transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-error-100 flex items-center justify-center mr-4">
                        {req.icon}
                      </div>
                      <h3 className="text-lg font-bold">{req.title}</h3>
                    </div>
                    <p className="text-gray-700 pl-14">{req.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Version - Show Everything */}
        <div className="md:hidden">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary-700 mb-4 flex items-center">
              <Check size={20} className="text-success-500 mr-2" />
              Was wir brauchen
            </h3>
            
            {requirements.map((req, index) => (
              <div key={index} className="card p-5">
                <h4 className="text-lg font-bold mb-2">{req.title}</h4>
                <ul className="space-y-2">
                  {req.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-success-500 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <h3 className="text-xl font-bold text-primary-700 mt-8 mb-4 flex items-center">
              <X size={20} className="text-error-500 mr-2" />
              Was nicht funktioniert
            </h3>
            
            {nonRequirements.map((req, index) => (
              <div key={index} className="card p-5">
                <h4 className="text-lg font-bold mb-2">{req.title}</h4>
                <p className="text-gray-700">{req.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tip Box */}
        <div className="mt-12 bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg max-w-3xl mx-auto">
          <div className="flex items-start">
            <Info size={24} className="text-primary-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-primary-800 mb-2">Unsere Erfolgsformel</h4>
              <p className="text-gray-700">
                Die besten Ergebnisse erzielen wir mit Unternehmen, die bereits einen gewissen Markterfolg haben, aber ihren Vertrieb auf die nächste Stufe heben wollen. 
                Wir helfen Ihnen, Ihre Stärken zu identifizieren und gezielt zu skalieren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;