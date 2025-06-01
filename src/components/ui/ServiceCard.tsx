import { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string[];
  index: number;
  showArrow?: boolean;
}

const ServiceCard = ({
  icon,
  title,
  subtitle,
  description,
  index,
  showArrow = false
}: ServiceCardProps) => {
  return (
    <div className="relative group">
      <div className="card p-6 h-full flex flex-col">
        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
          {icon}
        </div>
        
        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shadow-md">
          {index + 1}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-primary-800">{title}</h3>
        <p className="text-primary-600 font-medium mb-4">{subtitle}</p>
        
        <ul className="space-y-2 mt-auto">
          {description.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle2 size={18} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {showArrow && (
        <div className="process-arrow">
          {/* Arrow will be styled via CSS */}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;