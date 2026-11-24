import React from 'react';
import dynamic from 'next/dynamic';
import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { CandidatesPlacedInSection } from '@/components/home/CandidatesPlacedInSection';
import { AboutSection } from '@/components/home/AboutSection';
import { WorkforceSolutionSection } from '@/components/home/WorkforceSolutionSection';
import { OurApproachSection } from '@/components/home/OurApproachSection';
import { SimpleTransparentProcessSection } from '@/components/home/SimpleTransparentProcessSection';
import { CareersSection } from '@/components/home/CareersSection';

// Dynamically split below-the-fold sections with SSR enabled for maximum Performance & SEO
const OurPartnersSection = dynamic(
  () => import('@/components/home/OurPartnersSection').then((mod) => mod.OurPartnersSection),
  { ssr: true }
);
const CandidateAndEmployerExperienceSection = dynamic(
  () => import('@/components/home/CandidateAndEmployerExperienceSection').then((mod) => mod.CandidateAndEmployerExperienceSection),
  { ssr: true }
);
const OurMissionValuesSection = dynamic(
  () => import('@/components/home/OurMissionValuesSection').then((mod) => mod.OurMissionValuesSection),
  { ssr: true }
);
const TestimonialsSection = dynamic(
  () => import('@/components/home/TestimonialsSection').then((mod) => mod.TestimonialsSection),
  { ssr: true }
);
const FAQSection = dynamic(
  () => import('@/components/home/FAQSection').then((mod) => mod.FAQSection),
  { ssr: true }
);
const InsightsSection = dynamic(
  () => import('@/components/home/InsightsSection').then((mod) => mod.InsightsSection),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import('@/components/home/ContactSection').then((mod) => mod.ContactSection),
  { ssr: true }
);

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <CandidatesPlacedInSection />
      <AboutSection />
      <WorkforceSolutionSection />
      <OurApproachSection />
      {/* 
        CRITICAL NON-NEGOTIABLE BOUNDARY:
        SimpleTransparentProcessSection and all its GSAP animation timelines are 100% protected and untouched.
      */}
      <SimpleTransparentProcessSection />
      <CareersSection />
      <OurPartnersSection />
      <CandidateAndEmployerExperienceSection />
      <OurMissionValuesSection />
      <TestimonialsSection />
      <FAQSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
}
