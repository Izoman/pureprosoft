import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <main className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4">Last updated: 06/08/2025</p>

      <p className="mb-4">
        Welcome to <strong>Pure Pro Soft</strong>. By accessing and using our website{" "}
        <a
          href="https://pureprosoft.com"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://pureprosoft.com
        </a>
        , you agree to be bound by these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Services</h2>
      <p className="mb-4">
        Our website presents general information about our software services. All
        service requests or contracts must be agreed upon separately and are not
        binding via this website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Website</h2>
      <p className="mb-4">You agree not to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Misuse the contact form</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Reproduce, copy, or distribute any content without permission</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">
        All content, branding, and materials on this website are the property of
        Pure Pro Soft unless otherwise stated. Unauthorized use is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">
        We strive to provide accurate and up-to-date information but make no
        warranties of completeness or accuracy. We are not liable for any damages
        resulting from the use of this website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. External Links</h2>
      <p className="mb-4">
        Our website may include links to external sites. We are not responsible for
        the content or privacy practices of those websites.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We may update these terms at any time. Continued use of the website
        constitutes acceptance of any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Governing Law</h2>
      <p>
        These terms are governed by the laws of Belgium, without regard to conflict
        of law principles.
      </p>
    </main>
  );
};

export default TermsAndConditions;
