import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { CandidatesPlacedInSection } from '@/components/home/CandidatesPlacedInSection';
import { WhatIsInfidellSection } from '@/components/home/WhatIsInfidellSection';
import { WhyChooseInfidellSection } from '@/components/home/WhyChooseInfidellSection';
import { OurPartnersSection } from '@/components/home/OurPartnersSection';
import { WorkforceSolutionSection } from '@/components/home/WorkforceSolutionSection';
import { LivePlacementUpdatesSection } from '@/components/home/LivePlacementUpdatesSection';
import { SuccessSinceEstablishmentSection } from '@/components/home/SuccessSinceEstablishmentSection';
import { SimpleTransparentProcessSection } from '@/components/home/SimpleTransparentProcessSection';
import { OurMissionValuesSection } from '@/components/home/OurMissionValuesSection';
import { InsightsSection } from '@/components/home/InsightsSection';

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
      <WhatIsInfidellSection />
      <WhyChooseInfidellSection />
      <OurPartnersSection />
      <WorkforceSolutionSection />
      <LivePlacementUpdatesSection />
      <SuccessSinceEstablishmentSection />
      <SimpleTransparentProcessSection />
      <OurMissionValuesSection />
      <InsightsSection />
    </>
  );
}

