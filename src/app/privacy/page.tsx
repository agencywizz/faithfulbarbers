import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Faithful Barbers",
  description: "Our privacy policy and GDPR compliance information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8"
        >
          <span>←</span>
          <span>Back to home</span>
        </Link>

        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gold mb-2">
          Privacy Policy
        </h1>
        <p className="text-cream/60 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 text-cream/80">
          {/* 1. Introduction */}
          <section>
            <h2 className="font-heading text-2xl font-semibold text-gold mb-4">
              1. Introduction
            </h2>
            <p>
              Faithful Barbers ("we", "us", "our", or "Company") operates the Faithful Barbers website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          {/* 2. Information Collection */}
          <section>
            <h2 className="font-heading text-2xl font-semibold text-gold mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gold/80 mb-2">
                  Personal Data
                </h3>
                <p>
                  When you use our booking system or contact us, we may collect:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-cream/70">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Appointment preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gold/80 mb-2">
                  Usage Data
                </h3>
                <p>
                  We automatically collect information about how you interact with our website:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-cream/70">
                  <li>Pages visited and time spent</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>IP address (anonymized)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Cookies */}
          <section>
            <h2 className="font-heading text-2xl font-semibold text-gold mb-4">
              3. Cookies & Tracking
            </h2>
            <p className="mb-4">
              We use cookies to improve your browsing experience. Cookies are small files stored on your device.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gold/80 mb-1">
                  Essential Cookies
                </h3>
                <p className="text-sm text-cream/70">
                  Required for site functionality (e.g., booking system, consent preferences).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gold/80 mb-1">
                  Analytics Cookies
                </h3>
                <p className="text-sm text-cream/70">
                  Help us understand how visitors use our site to improve user experience.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Use of Data */}
          <section>
            <h2 className="font-heading text-2xl font-semibold text-gold mb-4">
              4. How We Use Your Data
            </h2>
            <ul className="list-disc list-inside space-y-2 text-cream/70">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information for service improvement</li>
              <li>To monitor usage and detect technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* 5. Security */}
          <section>
            <h2 className="font-heading text-2xl font-semibold text-gold mb-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* 6. GDPR Rights */}
          <section>
            <h2 className="font-heading text-2xl font-semibold text-gold mb-4">
              6. Your Rights Under GDPR
            </h2>
            <p className="mb-4">
              If you are located in the European Union, you have the following rights under the General Data Protection Regulation (GDPR):
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gold/80 mb-1">
                  Right of Access
                </h3>
                <p className="text-sm text-cream/70">
                  You can request a copy of your personal data.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gold/80 mb-1">
                  Right to Rectification
                </h3>
                <p className="text-sm text-cream/70">
                  You can correct inaccurate or incomplete personal data.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gold/80 mb-1">
                  Right to Erasure
                </h3>
                <p className="text-sm text-cream/70">
                  You can request deletion of your data (subject to legal obligations).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gold/80 mb-1">
                  Right to Object
                </h3>
                <p className="text-sm text-cream/70">
                  You can object to processing of your personal data for specific purposes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gold/80 mb-1">
                  Right to Data Portability
                </h3>
                <p className="text-sm text-cream/70">
                  You can request your data in a structured, commonly used format.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Contact */}
          <section>
            <h2 className="font-heading text-2xl font-semibold text-gold mb-4">
              7. Contact Us
            </h2>
            <p className="mb-3">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-charcoal-light border border-gold/20 rounded-sm p-4 space-y-2">
              <p>
                <span className="text-gold font-semibold">Company:</span> Faithful Barbers
              </p>
              <p>
                <span className="text-gold font-semibold">Address:</span> Main St, Castlereagh, Castlerea, Co. Roscommon, F45 X934
              </p>
              <p>
                <span className="text-gold font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@faithfulbarbers.ie"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  faithfulbarbers1@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* 8. Changes */}
          <section>
            <h2 className="font-heading text-2xl font-semibold text-gold mb-4">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
