import { NextRequest, NextResponse } from 'next/server';
import { verifiedJobs } from '@/data/jobs';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search')?.toLowerCase() || '';
  const industry = searchParams.get('industry') || '';
  const experience = searchParams.get('experience') || '';
  const location = searchParams.get('location')?.toLowerCase() || '';

  let filtered = verifiedJobs;

  if (search) {
    filtered = filtered.filter(
      (job) =>
        job.title.toLowerCase().includes(search) ||
        job.skills.some((s) => s.toLowerCase().includes(search)) ||
        job.description.toLowerCase().includes(search)
    );
  }

  if (industry && industry !== 'all') {
    filtered = filtered.filter((job) => job.industry.toLowerCase() === industry.toLowerCase());
  }

  if (experience && experience !== 'all') {
    filtered = filtered.filter((job) => job.experienceLevel === experience);
  }

  if (location && location !== 'all') {
    filtered = filtered.filter((job) => job.location.toLowerCase().includes(location));
  }

  return NextResponse.json({
    success: true,
    count: filtered.length,
    jobs: filtered
  });
}

