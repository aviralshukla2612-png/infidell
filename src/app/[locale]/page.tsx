import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { CandidatesPlacedInSection } from '@/components/home/CandidatesPlacedInSection';
import { AboutSection } from '@/components/home/AboutSection';
import { OurApproachSection } from '@/components/home/OurApproachSection';
import { OurPartnersSection } from '@/components/home/OurPartnersSection';
import { CandidateAndEmployerExperienceSection } from '@/components/home/CandidateAndEmployerExperienceSection';
import { CareersSection } from '@/components/home/CareersSection';
import { SimpleTransparentProcessSection } from '@/components/home/SimpleTransparentProcessSection';
import { OurMissionValuesSection } from '@/components/home/OurMissionValuesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { InsightsSection } from '@/components/home/InsightsSection';
import { ContactSection } from '@/components/home/ContactSection';

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
      {/* 
        CRITICAL NON-NEGOTIABLE BOUNDARY:
        SimpleTransparentProcessSection and all its GSAP animation timelines are 100% protected and untouched.
      */}
      <SimpleTransparentProcessSection />
      <OurApproachSection />
      <OurPartnersSection />
      <CandidateAndEmployerExperienceSection />
      <CareersSection />
      <OurMissionValuesSection />
      <TestimonialsSection />
      <FAQSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
}
