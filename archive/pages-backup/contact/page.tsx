import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Mail, Phone, Clock, ShieldCheck, Building2 } from 'lucide-react';

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-32 pb-24 bg-[#000000] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-xs font-bold text-[#00E5F0] uppercase tracking-widest mb-4">
            Connect With Us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Get in Touch With Infidell.
          </h1>
          <p className="text-base sm:text-lg text-[#AEB8C2] mt-4 leading-relaxed">
            Have questions about candidate registration, active job openings, employer hiring mandates, or the Refer & Earn program? Our team is here to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#202A30] shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-2">Send an Inquiry</h2>
              <p className="text-xs sm:text-sm text-[#AEB8C2] mb-6">
                Fill out the form below. We will assign your request to a specialized recruitment consultant.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Right Column: Office & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#202A30] space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#00E5F0]" />
                <span>Corporate Headquarters</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#AEB8C2]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00E5F0] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Physical Address</strong>
                    <span>INFIDELL TECHNOLOGY LLP, Corporate Office, Technology Park, Ahmedabad, Gujarat, India - 380015</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Email Support</strong>
                    <a href="mailto:careers@infidelltech.com" className="hover:text-white transition-colors">
                      careers@infidelltech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#00BFD0] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Direct Helpline</strong>
                    <span>+91 79 4890 2345 / +91 98250 12345</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#00E5F0] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Operating Hours</strong>
                    <span>Monday - Saturday: 9:30 AM to 6:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Digital Map Canvas Card */}
            <div className="glass-panel rounded-2xl p-6 border border-[#202A30] overflow-hidden relative">
              <div className="h-44 w-full rounded-xl bg-[#080B0E] border border-[#202A30] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 hero-mesh-grid opacity-60" />
                <div className="relative z-10 flex flex-col items-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00E5F0]/20 border border-[#00E5F0] flex items-center justify-center text-[#00E5F0] mb-2 animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-white">Ahmedabad Technology Hub</span>
                  <span className="text-[10px] text-[#AEB8C2]">Western India Recruitment HQ</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0D10] border border-[#202A30] flex items-center gap-3 text-xs text-[#AEB8C2]">
              <ShieldCheck className="w-4 h-4 text-[#00C7B1] flex-shrink-0" />
              <span>Zero candidate fees charged at any office or digital interaction point.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

