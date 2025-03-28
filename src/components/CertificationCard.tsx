
import { CheckCircle } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
}

const CertificationCard = ({ title, issuer }: CertificationCardProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-primary flex-shrink-0 mt-1">
        <CheckCircle size={20} />
      </div>
      <div>
        <h3 className="font-medium text-purpro-800">{title}</h3>
        <p className="text-sm text-gray-500">{issuer}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
