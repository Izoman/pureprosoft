import React, { useEffect, useState } from "react";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      enableAnalytics();
    }
  }, []);

  useEffect(() => {
    // Allow reopening from outside via custom event
    const handleReopen = () => {
      setShowBanner(true);
      setHasInteracted(false); // show both accept/decline again
    };

    window.addEventListener("reopenCookieBanner", handleReopen);
    return () => window.removeEventListener("reopenCookieBanner", handleReopen);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    enableAnalytics();
    setShowBanner(false);
    setHasInteracted(true);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShowBanner(false);
    setHasInteracted(true);
  };

  const enableAnalytics = () => {
    if (!(window as any).gaInitialized) {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-RVHF5KEDNP"; // Replace with your GA ID
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-RVHF5KEDNP", { anonymize_ip: true }); // Replace with your GA ID

      (window as any).gaInitialized = true;
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-md">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          We use cookies to analyze traffic and improve your experience. You can accept or decline cookies.
        </p>
        <div className="flex gap-2">
          <button
            onClick={acceptCookies}
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="bg-gray-700 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
