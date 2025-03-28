
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-7xl font-bold text-purpro-800 mb-6">404</h1>
        <p className="text-2xl text-purpro-600 mb-8">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={18} /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
