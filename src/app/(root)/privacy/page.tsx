import React from "react";
import { Mail, Globe, Phone, Shield, Lock, UserCheck } from "lucide-react";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 via-orange-950 to-black">
      {/* Header Section */}
      <div className="relative py-16 bg-black/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-100">
            Privacy Policy
          </h1>
          <p className="text-lg text-orange-200">
            Our Commitment to Protecting Your Privacy
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-invert mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <h2 className="text-2xl font-semibold text-yellow-100 m-0">
                Your Privacy, Our Promise
              </h2>
            </div>
            <p className="text-orange-100">
              At Afro Switch, we value your trust and are committed to
              safeguarding your personal information. Your privacy is essential
              to us, and we aim to provide transparency and control over how
              your data is collected, used, and shared.
            </p>
          </div>

          {/* What We Collect */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <h2 className="text-2xl font-semibold text-yellow-100 m-0">
                What Information We Collect
              </h2>
            </div>
            <ul className="space-y-3 text-orange-100">
              <li>
                <strong className="text-yellow-200">
                  Account and Purchase Information:
                </strong>{" "}
                When you create an account, purchase tickets, or buy
                merchandise, we collect details like your name, contact
                information, and payment details.
              </li>
              <li>
                <strong className="text-yellow-200">
                  Event Attendance Data:
                </strong>{" "}
                Information may be gathered from ticket agents, on-site systems,
                or other tools like WiFi and cashless payment systems.
              </li>
              <li>
                <strong className="text-yellow-200">Online Activity:</strong>{" "}
                When you use our websites or apps, we may collect data like your
                IP address, device type, and browsing behavior.
              </li>
              <li>
                <strong className="text-yellow-200">
                  Social Media Engagement:
                </strong>{" "}
                If you interact with us through social media, platforms may
                share some of your information with us.
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-orange-900/30 rounded-lg p-6 mt-12">
            <h2 className="text-2xl font-semibold text-yellow-100 mb-6">
              Contact Us
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <Link
                  href="mailto:privacy@afroswitch.com"
                  className="text-orange-200 hover:text-yellow-200"
                >
                  privacy@afroswitch.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-yellow-400" />
                <Link
                  href="https://www.priv.gc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-200 hover:text-yellow-200"
                >
                  www.priv.gc.ca
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-orange-200">1-800-282-1376</span>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-12 text-center text-orange-300 text-sm">
            Last Updated: November 15, 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
