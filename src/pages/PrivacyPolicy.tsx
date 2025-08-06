import React from "react";

const PrivacyPolicy: React.FC = () => {
    return (
        <main className="p-6 max-w-4xl mx-auto text-gray-800">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4">Last updated: 06/08/2025</p>

            <p className="mb-4">
                At <strong>Pure Pro Soft</strong> ("we", "our", "us"), we value your
                privacy. This Privacy Policy explains how we collect, use, and protect
                your information when you visit our website{" "}
                <a
                    href="https://pureprosoft.com"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://pureprosoft.com
                </a>
                .
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p className="mb-4">
                We collect personal data that you voluntarily provide via our contact form or by emailing us, such as:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Any information you include in your message</li>
            </ul>
            <p className="mb-4">
                We also collect non-personal data automatically through cookies using Google Analytics.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Cookies & Google Analytics</h2>
            <p className="mb-4">
                We use Google Analytics to collect anonymized usage data such as:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Your IP address (shortened or anonymized)</li>
                <li>Browser type and device</li>
                <li>Pages visited and duration</li>
                <li>Geographic region (based on IP)</li>
            </ul>
            <p className="mb-4">
                This helps us analyze traffic and improve our services. We do not use this data for advertising or sell it to third parties.
            </p>
            <p className="mb-4">
                You can opt out of Google Analytics tracking using browser add-ons (e.g.,{" "}
                <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    Google Analytics Opt-out
                </a>
                ).
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Storage & Security</h2>
            <p className="mb-4">
                Your information is stored securely and only accessible by authorized personnel. We take reasonable technical and organizational measures to protect your data.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. International Visitors</h2>
            <p className="mb-4">
                Our services are available worldwide. If you are visiting from outside the EU, your information may be transferred to and processed in the EU under GDPR protections.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights (under GDPR)</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Access your personal data</li>
                <li>Correct or delete your data</li>
                <li>Object to processing</li>
                <li>Request data portability</li>
            </ul>
            <p className="mb-4">
                To exercise these rights, contact us at:{" "}
                <a href="mailto:info@pureprosoft.com" className="text-blue-600 underline">
                    info@pureprosoft.com
                </a>
            </p>
            <p className="mb-4">
                You also have the right to object to the use of cookies and tracking technologies. For this, you can disable cookies in your browser or use opt-out tools provided by third parties.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
            <p>
                If you have any questions about this policy, please contact us at:{" "}
                <a href="mailto:info@pureprosoft.com" className="text-blue-600 underline">
                    info@pureprosoft.com
                </a>
            </p>
        </main>
    );
};

export default PrivacyPolicy;
