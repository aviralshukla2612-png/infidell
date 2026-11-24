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
    en: 'INFIDELL TECHNOLOGY | Recruitment & Career Placement Services',
    hi: 'इन्फिडेल टेक्नोलॉजी | भर्ती एवं करियर प्लेसमेंट सेवाएं',
    gu: 'ઇન્ફિડેલ ટેકનોલોજી | ભરતી અને કારકિર્દી પ્લેસમેન્ટ સેવાઓ'
  };

  const descriptions: Record<string, string> = {
    en: 'Connecting qualified candidates with verified employer partners across IT, Engineering, Finance, and Corporate sectors throughout India. Personalized career guidance and strategic talent acquisition.',
    hi: 'भारत भर में आईटी, इंजीनियरिंग, वित्त और कॉर्पोरेट क्षेत्रों में योग्य उम्मीदवारों को सत्यापित कंपनियों से जोड़ना। समर्पित करियर मार्गदर्शन एवं परामर्श।',
    gu: 'સમગ્ર ભારતમાં આઈટી, એન્જિનિયરિંગ, ફાઇનાન્સ અને કોર્પોરેટ ક્ષેત્રોમાં યોગ્ય ઉમેદવારોને ચકાસાયેલી કંપનીઓ સાથે જોડવું.'
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: [
      'Recruitment agency India',
      'Job placement Ahmedabad',
      'Infidell Technology',
      'Career placement services',
      'Tech recruitment',
      'Career advisory registration'
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

