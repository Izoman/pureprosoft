
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="mb-4 text-primary">
        <Icon size={36} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-purpro-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-primary group-hover:translate-x-1 transition-transform">
        <Link to={link} className="flex items-center gap-2">
          Learn More <span className="text-lg">→</span>
        </Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
