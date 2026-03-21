"use client";

import React, { useState, useEffect } from "react";

type CookieConsentProps = {
  privacyHref?: string;
};

const CookieConsent: React.FC<CookieConsentProps> = ({ privacyHref = "/privacy" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      className="fixed bottom-0 left-0 right-0 z-50 flex items-end justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl rounded-sm border border-gold/20 bg-charcoal-light shadow-2xl shadow-black/60">
        <div className="p-5 sm:p-6">
          <h2
            id="cookie-title"
            className="font-heading text-lg sm:text-xl font-semibold text-gold mb-2"
          >
            Cookie Preferences
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-cream/80 mb-5">
            We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. By clicking "Accept", you consent to our use of cookies as described in our{" "}
            <a
              href={privacyHref}
              className="text-gold hover:text-gold-light transition-colors underline"
            >
              Privacy Policy
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleAccept}
              className="px-6 py-2.5 bg-gold text-charcoal font-semibold rounded-sm hover:bg-gold-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label="Accept cookies"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-6 py-2.5 border border-gold/30 text-cream hover:bg-charcoal hover:border-gold/50 transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label="Decline cookies"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
