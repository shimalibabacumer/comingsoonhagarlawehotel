"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, Twitter, Facebook, X, CheckCircle } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set launch date to 4 days from now
    const now = new Date();
    const launchDate = new Date(now.getTime() + (4 * 24 * 60 * 60 * 1000)).getTime();

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = launchDate - currentTime;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success message
    setShowSuccessMessage(true);
    setEmail("");

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black text-white">
      {/* Decorative circles background */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full border border-orange-500/20"></div>
        <div className="absolute right-[10%] top-[40%] h-64 w-64 rounded-full border border-orange-500/10"></div>
        <div className="absolute right-[-5%] top-[60%] h-48 w-48 rounded-full border border-orange-500/15"></div>
      </div>

      {/* Keyframe animation styles */}
      <style jsx>{`
        @keyframes glowing-pulse {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(251, 146, 60, 0.4),
              0 0 40px rgba(251, 146, 60, 0.3),
              0 0 60px rgba(251, 146, 60, 0.2),
              0 0 80px rgba(251, 146, 60, 0.1);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(251, 146, 60, 0.6),
              0 0 60px rgba(251, 146, 60, 0.5),
              0 0 90px rgba(251, 146, 60, 0.4),
              0 0 120px rgba(251, 146, 60, 0.3);
          }
        }
        
        .logo-glow {
          animation: glowing-pulse 3s ease-in-out infinite;
          border-radius: 20px;
          padding: 20px;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .success-message {
          animation: slideInUp 0.4s ease-out;
        }
      `}</style>

      {/* Header with Logo */}
      <header className="relative z-10 flex items-center justify-center px-8 py-8 md:py-12">
        <div className="logo-glow">
          <Image
            src="/logo/hagarlawehotellogo.png"
            alt="Hagarlawe Hotel - Luxury Boutique Accommodation"
            width={200}
            height={100}
            className="h-auto w-40 md:w-48"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-280px)] flex-col items-center justify-center px-8 py-16 text-center md:px-16">
        {/* Coming Soon Heading with Glow Effect */}
        <h1 className="mb-8 text-6xl font-bold tracking-wider text-orange-400 md:text-7xl lg:text-8xl xl:text-9xl"
          style={{
            textShadow: '0 0 40px rgba(251, 146, 60, 0.8), 0 0 80px rgba(251, 146, 60, 0.4), 0 0 120px rgba(251, 146, 60, 0.2)'
          }}>
          COMING SOON
        </h1>

        {/* Subtitle */}
        <p className="mb-12 max-w-3xl text-xl font-light text-gray-200 md:text-2xl lg:text-3xl">
          Experience Premium Luxury Hotel Accommodation & World-Class Hospitality
        </p>

        {/* Description */}


        {/* Countdown Timer - Days, Hours, Minutes, Seconds */}
        <div className="mb-12 flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-orange-500/30 bg-orange-500/5 md:h-28 md:w-28">
              <span className="text-4xl font-bold text-orange-400 md:text-5xl">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-3 text-sm uppercase tracking-wider text-gray-400 md:text-base">Days</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-orange-500/30 bg-orange-500/5 md:h-28 md:w-28">
              <span className="text-4xl font-bold text-orange-400 md:text-5xl">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-3 text-sm uppercase tracking-wider text-gray-400 md:text-base">Hours</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-orange-500/30 bg-orange-500/5 md:h-28 md:w-28">
              <span className="text-4xl font-bold text-orange-400 md:text-5xl">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-3 text-sm uppercase tracking-wider text-gray-400 md:text-base">Minutes</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-orange-500/30 bg-orange-500/5 md:h-28 md:w-28">
              <span className="text-4xl font-bold text-orange-400 md:text-5xl">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-3 text-sm uppercase tracking-wider text-gray-400 md:text-base">Seconds</span>
          </div>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="success-message mb-6 w-full max-w-2xl rounded-lg border-2 border-green-500/30 bg-green-500/10 p-6">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <p className="text-lg font-semibold text-green-400">
                Thank you for subscribing!
              </p>
            </div>
            <p className="mt-2 text-sm text-green-300/80">
              We'll notify you the moment Hagarlawe Hotel goes live. Get ready for an unforgettable luxury experience!
            </p>
          </div>
        )}

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="mb-6 w-full max-w-2xl">
          <div className="flex flex-col items-center gap-0 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for exclusive hotel booking offers"
              required
              className="w-full rounded-full border-2 border-orange-500 bg-transparent px-6 py-4 text-orange-400 placeholder:text-orange-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/50 sm:rounded-l-full sm:rounded-r-none md:px-8"
            />
            <button
              type="submit"
              className="mt-4 w-full whitespace-nowrap rounded-full bg-orange-500 px-8 py-4 font-semibold uppercase tracking-wider text-white transition-all hover:bg-orange-600 sm:mt-0 sm:w-auto sm:rounded-l-none sm:rounded-r-full md:px-12"
            >
              Notify Me
            </button>
          </div>
        </form>

        {/* Privacy Text */}
        <p className="text-sm text-gray-400">
          Be the first to receive updates on hotel reservations and special rates. We value your privacy and data security.
        </p>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 px-8 py-8 md:flex-row md:px-16">
        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © 2024 Hagarlawe Hotel - Premium Luxury Accommodation
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm">
          <button
            onClick={() => setShowPrivacyModal(true)}
            className="text-gray-400 transition-colors hover:text-white underline-offset-4 hover:underline"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setShowTermsModal(true)}
            className="text-gray-400 transition-colors hover:text-white underline-offset-4 hover:underline"
          >
            Terms of Service
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="rounded-full p-2 text-orange-500 transition-colors hover:bg-orange-500/10"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="rounded-full p-2 text-orange-500 transition-colors hover:bg-orange-500/10"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="rounded-full p-2 text-orange-500 transition-colors hover:bg-orange-500/10"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-slate-900 p-8 text-left shadow-2xl">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-orange-500/10 hover:text-white"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="mb-6 text-3xl font-bold text-orange-400">Privacy Policy</h2>

            <div className="space-y-4 text-gray-300">
              <p className="text-sm text-gray-400">Last Updated: November 2024</p>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">1. Information We Collect</h3>
                <p>
                  At Hagarlawe Hotel, we collect personal information when you sign up for updates, make hotel reservations,
                  or book accommodation. This includes your name, email address, phone number, and payment details for
                  secure hotel booking transactions.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">2. How We Use Your Information</h3>
                <p>
                  We use your information to process hotel reservations, send booking confirmations, provide guest services,
                  and share exclusive offers about our luxury hotel amenities, spa services, and accommodation packages.
                  Your data helps us deliver exceptional hospitality experiences.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">3. Data Security</h3>
                <p>
                  Your privacy is our priority. We implement industry-standard security measures to protect your personal
                  information during hotel bookings and throughout your stay. All payment information is encrypted and
                  securely processed.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">4. Third-Party Sharing</h3>
                <p>
                  We do not sell or share your personal information with third parties for marketing purposes.
                  Information may be shared with trusted service providers who assist with hotel operations,
                  reservations, and guest services.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">5. Your Rights</h3>
                <p>
                  You have the right to access, update, or delete your personal information at any time.
                  Contact our guest services team to manage your preferences or unsubscribe from communications.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">6. Contact Us</h3>
                <p>
                  For questions about our privacy practices or to exercise your rights, please contact us at
                  privacy@hagarlawehotel.com or visit our reception desk during your stay.
                </p>
              </section>
            </div>

            <button
              onClick={() => setShowPrivacyModal(false)}
              className="mt-8 w-full rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-slate-900 p-8 text-left shadow-2xl">
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-orange-500/10 hover:text-white"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="mb-6 text-3xl font-bold text-orange-400">Terms of Service</h2>

            <div className="space-y-4 text-gray-300">
              <p className="text-sm text-gray-400">Last Updated: November 2024</p>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">1. Hotel Reservations & Booking</h3>
                <p>
                  By making a reservation at Hagarlawe Hotel, you agree to provide accurate information for your
                  hotel booking. All reservations are subject to availability and confirmation. Premium suites and
                  luxury accommodation must be secured with valid payment information.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">2. Cancellation Policy</h3>
                <p>
                  Hotel reservations may be cancelled up to 48 hours before check-in for a full refund.
                  Cancellations made within 48 hours of arrival may be subject to a one-night accommodation charge.
                  Special rates and packages may have different cancellation terms.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">3. Check-In & Check-Out</h3>
                <p>
                  Standard check-in time is 3:00 PM and check-out is 11:00 AM. Early check-in and late check-out
                  are subject to availability and may incur additional charges. Please contact our guest services
                  for special arrangements.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">4. Hotel Amenities & Services</h3>
                <p>
                  Guests have access to all hotel amenities including spa facilities, fitness center, dining services,
                  and concierge assistance. Some premium services may require advance booking or additional fees.
                  We reserve the right to modify amenities and services with notice.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">5. Guest Conduct</h3>
                <p>
                  All guests must respect other visitors and hotel property. We maintain a peaceful environment
                  for all. Disruptive behavior, damage to property, or violation of hotel policies may result in
                  immediate removal without refund.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">6. Payment Terms</h3>
                <p>
                  All hotel charges must be settled upon check-out. We accept major credit cards and secure payment methods.
                  A valid credit card is required at check-in for incidentals and room charges during your stay.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">7. Liability</h3>
                <p>
                  Hagarlawe Hotel is not responsible for loss or damage to personal belongings. We recommend using
                  in-room safes for valuables. Our liability for any claim is limited to the cost of your accommodation.
                </p>
              </section>

              <section>
                <h3 className="mb-2 text-xl font-semibold text-white">8. Contact Information</h3>
                <p>
                  For questions about these terms or your hotel reservation, please contact us at
                  reservations@hagarlawehotel.com or call our front desk.
                </p>
              </section>
            </div>

            <button
              onClick={() => setShowTermsModal(false)}
              className="mt-8 w-full rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}