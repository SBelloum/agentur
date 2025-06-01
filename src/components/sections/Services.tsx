import { useState } from 'react';
import { 
  TrendingUp, 
  RefreshCw, 
  Users, 
  PieChart, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2 
} from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const services = [
    {
      id: 1,
      icon: <TrendingUp size={32} className="text-primary-500" />,
      title: "Online Marketing",
      subtitle: "Zielgruppen-genaue Kampagnen",
      description: [
        "Zielgruppen-genaue Kampagnen (SEO, Social Ads, Content)",
        "Markenpositionierung mit USP-Fokussierung"
      ]
    },
    {
      id: 2,
      icon: <RefreshCw size={32} className="text-primary-500" />,
      title: "Moderner Cold Outreach",
      subtitle: "Personalisierte Multi-Channel-Ansätze",
      description: [
        "Personalisierte Multi-Channel-Ansätze (LinkedIn, E-Mail, Video)",
        "KI-gestützte Präzision statt Massen-Spam"
      ]
    },
    {
      id: 3,
      icon: <Users size={32} className="text-primary-500" />,
      title: "Leadgenerierung",
      subtitle: "Qualifizierte Kontakte mit Kaufabsicht",
      description: [
        "Qualifizierte Kontakte mit Kaufabsicht",
        "Automatisierte Lead-Scoring-Systeme"
      ]
    },
    {
      id: 4,
      icon: <PieChart size={32} className="text-primary-500" />,
      title: "Verkaufsprozess-Optimierung",
      subtitle: "Sales Funnel-Design mit A/B-Testing",
      description: [
        "Sales Funnel-Design mit A/B-Testing",
        "CRM-Integration & Automatisierung"
      ]
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary-800">Wir übernehmen Ihren Vertrieb</h2>
          <p className="text-lg text-gray-600">
            Professionelle Vertriebslösungen für nachhaltiges Wachstum Ihres Unternehmens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              index={index}
              showArrow={index < services.length - 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-primary-800 mb-4">Ergebnis</h3>
          <p className="text-xl font-medium text-gray-800 mb-2">Wir übergeben Ihnen fertige Kunden</p>
          <p className="text-lg text-gray-600 italic">
            "Ihre Expertise – unser Vertrieb: So skalieren Sie ohne Personalaufwand."
          </p>
        </div>

        {/* Mobile Accordion Version */}
        <div className="md:hidden mt-10 space-y-4">
          <h3 className="text-xl font-bold text-center mb-6">Unsere Leistungen im Detail</h3>
          
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center"
                onClick={() => toggleExpand(service.id)}
              >
                <div className="flex items-center">
                  {service.icon}
                  <span className="ml-3 font-medium">{service.title}</span>
                </div>
                {expandedId === service.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedId === service.id && (
                <div className="px-6 pb-4">
                  <p className="font-medium text-primary-700 mb-2">{service.subtitle}</p>
                  <ul className="space-y-2">
                    {service.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 size={18} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;