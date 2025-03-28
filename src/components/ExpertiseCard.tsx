
import { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ExpertiseCard = ({ title, description, icon: Icon }: ExpertiseCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-lg font-semibold text-purpro-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
