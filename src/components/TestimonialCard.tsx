
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, role, company, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-6 italic">"{quote}"</blockquote>
      <div className="flex items-center">
        <div className="ml-3">
          <p className="font-medium text-purpro-800">{author}</p>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
