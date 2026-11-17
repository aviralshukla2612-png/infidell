export type Locale = 'en' | 'hi' | 'gu';

export interface NavigationItem {
  key: string;
  href: string;
  label?: string;
  isButton?: boolean;
}

export type JobType = 'Full-Time' | 'Contract' | 'Remote' | 'Hybrid';
export type ExperienceLevel = 'Fresher (0-1 yrs)' | 'Mid-Level (2-5 yrs)' | 'Senior (6+ yrs)';

export interface Job {
  id: string;
  title: string;
  department: string;
  industry: string;
  location: string;
  type: JobType;
  experienceLevel: ExperienceLevel;
  experienceYears: string;
  salaryRange: string;
  postedDate: string;
  description: string;
  requirements: string[];
  skills: string[];
  isFeatured?: boolean;
  isOpen?: boolean;
}

export interface CandidateRegistrationData {
  fullName: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
  preferredIndustry: string;
  preferredLocation: string;
  resumeFileName?: string;
  termsAccepted: boolean;
}

export interface EmployerRegistrationData {
  companyName: string;
  contactPerson: string;
  workEmail: string;
  phone: string;
  industry: string;
  hiringRole: string;
  openPositions: number;
  jobLocation: string;
  jobDescription: string;
}

export interface ReferralSubmissionData {
  referrerName: string;
  referrerPhone: string;
  referralType: 'candidate' | 'employer';
  refereeName: string;
  refereePhone: string;
  refereeEmail: string;
  notes: string;
}

export interface ContactSubmissionData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: 'candidate' | 'employer' | 'referral' | 'general';
  message: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location?: string;
  content: string;
  avatarUrl?: string;
  rating?: number;
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  previousRole: string;
  company: string;
  industry: string;
  story: string;
  hike?: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericTarget?: number;
  suffix?: string;
  labelKey: string;
  descKey: string;
}

