import React from "react";
import {
  FileText,
  Shield,
  Copyright,
  AlertTriangle,
  Scale,
  Settings,
  Mail,
  CopyIcon,
} from "lucide-react";
import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 via-orange-950 to-black">
      {/* Header Section */}
      <div className="relative py-16 bg-black/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-100">
            Terms and Conditions
          </h1>
          <p className="text-lg text-orange-200">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-orange-900/20 backdrop-blur-sm rounded-lg p-6">
            <p className="text-orange-100">
              Welcome to AfroSwitch.com. By accessing or using this website, you
              agree to be bound by the following terms and conditions. Please
              read them carefully before proceeding.
            </p>
          </div>

          {/* Permitted Use */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-semibold text-yellow-100">
                Permitted Use
              </h2>
            </div>
            <p className="text-orange-100">
              You are authorized to access this site for personal use only.
              Duplication, modification, or distribution of the content without
              explicit permission from AfroSwitch is prohibited.
            </p>
          </section>

          {/* Trademarks */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CopyIcon className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-semibold text-yellow-100">
                Trademarks
              </h2>
            </div>
            <p className="text-orange-100">
              AfroSwitch logos and related designs are registered trademarks.
              Unauthorized use of these trademarks is strictly prohibited.
            </p>
          </section>

          {/* Ownership */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Copyright className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-semibold text-yellow-100">
                Ownership of Materials
              </h2>
            </div>
            <p className="text-orange-100">
              All materials on this site, including text, images, and designs,
              are owned by AfroSwitch and protected by copyright laws.
              Reproduction or transmission is prohibited without prior consent.
            </p>
          </section>

          {/* Prohibited Content */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-semibold text-yellow-100">
                Prohibited Content
              </h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
              <li>Content that promotes hatred, racism, or harm to others</li>
              <li>Transmission of spam, phishing, or illegal activities</li>
              <li>Exploitation or solicitation of minors</li>
            </ul>
          </section>

          {/* Disputes */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-semibold text-yellow-100">
                Disputes
              </h2>
            </div>
            <p className="text-orange-100">
              By using this site, you agree that any disputes will be governed
              by and construed in accordance with Canadian law. Litigation will
              be resolved in courts within Calgary, Alberta, Canada.
            </p>
          </section>

          {/* Changes */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-semibold text-yellow-100">
                Changes to Terms
              </h2>
            </div>
            <p className="text-orange-100">
              AfroSwitch reserves the right to modify these terms at any time.
              Changes will be effective immediately upon posting to this site.
              Continued use of the site signifies acceptance of the updated
              terms.
            </p>
          </section>

          {/* Contact Section */}
          <div className="bg-orange-900/30 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-400" />
              <p className="text-orange-200">
                If you have any questions about these terms, please contact us
                at{" "}
                <Link
                  href="mailto:support@afroswitch.com"
                  className="text-yellow-400 hover:text-yellow-300 underline"
                >
                  support@afroswitch.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
