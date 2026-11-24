import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { AboutSection } from '@/components/home/AboutSection';
import { OurApproachSection } from '@/components/home/OurApproachSection';
import { OurMissionValuesSection } from '@/components/home/OurMissionValuesSection';

export async function generateMetadata() {
  return {
    title: 'Executive Tech Recruitment & Talent Solutions USA | INFIDELL TECHNOLOGY',
    description: 'Learn about INFIDELL TECHNOLOGY — premier US executive search firm, ethical engineering placement standards, and leadership advisory across North America and global technology markets.'
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20 sm:pt-28">
      <AboutSection />
      <OurApproachSection />
      <OurMissionValuesSection />
    </div>
  );
}

