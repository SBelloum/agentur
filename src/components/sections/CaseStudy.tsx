import { TrendingUp, Users, BarChart3, Target, CheckCircle2 } from 'lucide-react';

const CaseStudy = () => {
  const achievements = [
    {
      icon: <TrendingUp size={24} className="text-success-500" />,
      title: "37% Umsatzwachstum",
      description: "in nur 5 Monaten"
    },
    {
      icon: <Users size={24} className="text-success-500" />,
      title: "68% mehr qualifizierte Anfragen",
      description: "durch präzise Zielgruppenansprache"
    }
  ];

  const strategies = [
    {
      title: "Zielgruppen-Radar",
      items: [
        "Branchenfokus: Mittelstand (50-250 MA)",
        "Präzise ICP-Definition: CFOs mit Digitalisierungsdruck"
      ]
    },
    {
      title: "Leadgenerierung in Krisenzeiten",
      items: [
        "Value-First Content-Strategie (Webinare, Whitepaper)",
        "LinkedIn Thought Leadership Kampagne"
      ]
    },
    {
      title: "Umsatzsteigerungssystem",
      items: [
        "Automatisierter Follow-up-Funnel",
        "Social Proof Integration (Case Studies)"
      ]
    }
  ];

  return (
    <section id="case-study" className="section bg-primary-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-primary-800">Case Study: Caro Unternehmensberatung</h2>
          <p className="text-lg text-gray-600">
            Wie wir einer Unternehmensberatung zu signifikantem Wachstum verhalfen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Challenges and Solutions */}
          <div className="space-y-8">
            <div className="card p-6 bg-white">
              <h3 className="text-xl font-bold mb-4 text-primary-800">Herausforderung</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-error-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-error-500 font-bold text-sm">!</span>
                  </div>
                  <span>Lead-Einbruch während Marktunsicherheiten</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-error-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-error-500 font-bold text-sm">!</span>
                  </div>
                  <span>Unklare Zielgruppenansprache</span>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl font-bold text-primary-800">Unsere Lösung</h3>
              
              {strategies.map((strategy, index) => (
                <div key={index} className="card p-6 bg-white">
                  <h4 className="font-bold text-lg mb-3 text-primary-700">{strategy.title}</h4>
                  <ul className="space-y-2">
                    {strategy.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 size={18} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Results */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary-700 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Ergebnis</h3>
                <p className="text-primary-100">
                  Messbarer Erfolg durch strategischen Vertriebsansatz
                </p>
              </div>
              
              <div className="p-6">
                {/* Results Graph */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <BarChart3 size={24} className="text-primary-600 mr-2" />
                      <span className="font-medium">Umsatzentwicklung</span>
                    </div>
                    <div className="text-sm text-gray-500">5 Monate</div>
                  </div>
                  
                  {/* Simple Graph Visualization */}
                  <div className="relative h-40">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200"></div>
                    <div className="absolute bottom-0 left-0 h-full w-full flex items-end">
                      <div className="w-1/6 h-12 bg-primary-300 rounded-t-sm mx-0.5"></div>
                      <div className="w-1/6 h-16 bg-primary-300 rounded-t-sm mx-0.5"></div>
                      <div className="w-1/6 h-20 bg-primary-400 rounded-t-sm mx-0.5"></div>
                      <div className="w-1/6 h-24 bg-primary-500 rounded-t-sm mx-0.5"></div>
                      <div className="w-1/6 h-32 bg-primary-600 rounded-t-sm mx-0.5"></div>
                      <div className="w-1/6 h-40 bg-primary-700 rounded-t-sm mx-0.5 relative">
                        <div className="absolute -top-9 -right-4 w-20 h-8 bg-accent-500 text-white text-sm font-bold rounded flex items-center justify-center">
                          +37%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Key Achievements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 p-5 rounded-lg border-l-4 border-success-500"
                    >
                      <div className="flex items-center mb-2">
                        {achievement.icon}
                        <h4 className="font-bold ml-2">{achievement.title}</h4>
                      </div>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* Testimonial */}
                <div className="mt-8 p-5 bg-gray-50 rounded-lg">
                  <div className="italic text-gray-700">
                    "Das Team von Vertriebs-Arbeit hat uns nicht nur geholfen, die Krise zu überstehen, sondern sogar stärker daraus hervorzugehen. Ihre strategische Herangehensweise hat unseren gesamten Vertriebsprozess transformiert."
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                      CU
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Carolin Urbanek</div>
                      <div className="text-sm text-gray-500">Geschäftsführerin, Caro Unternehmensberatung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;