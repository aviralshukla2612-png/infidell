import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import '@/app/globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'INFIDELL TECHNOLOGY | Executive Tech Recruitment & Talent Solutions USA',
    hi: 'इन्फिडेल टेक्नोलॉजी | यूएस एवं अंतर्राष्ट्रीय कार्यकारी भर्ती समाधान',
    gu: 'ઇન્ફિડેલ ટેકનોલોજી | યુએસ અને વૈશ્વિક એક્ઝિક્યુટિવ ભરતી સેવાઓ'
  };

  const descriptions: Record<string, string> = {
    en: 'Premier executive search, technical recruitment, and workforce solutions connecting top engineering, AI, and leadership talent with leading US enterprises and global innovation hubs.',
    hi: 'शीर्ष अमेरिकी उद्यमों और वैश्विक नवाचार केंद्रों के साथ इंजीनियरिंग, एआई और नेतृत्व प्रतिभा को जोड़ने वाली प्रमुख तकनीकी भर्ती फर्म।',
    gu: 'અગ્રણી યુએસ કંપનીઓ અને વૈશ્વિક ટેક હબ સાથે પ્રતિભાશાળી પ્રોફેશનલ્સને જોડતી અગ્રણી ટેકનોલોજી ભરતી ફર્મ.'
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: [
      'Tech recruitment agency USA',
      'Executive search firm United States',
      'Software engineer recruitment US',
      'AI and Machine Learning talent acquisition',
      'IT staffing solutions North America',
      'Enterprise technical recruitment',
      'Silicon Valley executive recruiting',
      'New York tech recruiting agency',
      'Global workforce solutions',
      'Direct hire recruitment USA'
    ],
    metadataBase: new URL('https://infidelltech.com'),
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `https://infidelltech.com/${locale}`,
      siteName: 'INFIDELL TECHNOLOGY',
      images: [
        {
          url: '/images/bg.png',
          width: 1672,
          height: 941,
          alt: 'INFIDELL TECHNOLOGY'
        }
      ],
      locale: locale,
      type: 'website'
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en'
      }
    },
    icons: {
      icon: [
        { url: '/infidell-infinity-icon.png', sizes: 'any' },
        { url: '/icon.png', sizes: '32x32', type: 'image/png' }
      ],
      shortcut: '/infidell-infinity-icon.png',
      apple: '/infidell-infinity-icon.png'
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/infidell-infinity-icon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/infidell-infinity-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EmploymentAgency',
              name: 'INFIDELL TECHNOLOGY',
              url: 'https://infidelltech.com',
              logo: 'https://infidelltech.com/infidell-infinity-icon.png',
              description: 'Premier executive tech recruitment, engineering talent placement, and enterprise staffing solutions across the United States and global markets.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '100 Montgomery St, Suite 1800',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                postalCode: '94104',
                addressCountry: 'US'
              },
              telephone: '+1-800-518-4902',
              areaServed: ['US', 'CA', 'GB', 'Global'],
              serviceType: [
                'Executive Search',
                'Technical Staffing',
                'AI & Engineering Recruitment',
                'Direct Hire Placements',
                'Workforce Solutions'
              ]
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('infidell-theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}else{document.documentElement.classList.add('light');document.documentElement.classList.remove('dark');}}catch(e){}})();`
          }}
        />
      </head>
      <body className="bg-[#000000] text-white antialiased min-h-screen selection:bg-[#00E5F0]/30 selection:text-white transition-colors duration-300">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SmoothScrollProvider>
              <Navbar />
              <main className="relative min-h-screen">
                {children}
              </main>
              <Footer />
              <WhatsAppButton />
            </SmoothScrollProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

