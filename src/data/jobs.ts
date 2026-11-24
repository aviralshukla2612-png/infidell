import { Job } from '@/types';

export const verifiedJobs: Job[] = [
  {
    id: 'job-101',
    title: 'Lead Full-Stack Systems Architect',
    department: 'Engineering',
    industry: 'Information Technology',
    location: 'San Francisco, CA / Hybrid',
    type: 'Full-Time',
    experienceLevel: 'Senior (6+ yrs)',
    experienceYears: '6-10 Years',
    salaryRange: '$165,000 - $210,000 / yr',
    postedDate: '2026-11-10',
    description: 'Architect modern enterprise SaaS platforms, high-throughput distributed systems, and real-time event streaming architectures.',
    requirements: [
      'Deep proficiency in Next.js, React, Node.js, and TypeScript',
      'Production mastery with PostgreSQL, Redis distributed caching, and Kafka',
      'Demonstrated distributed systems architecture and engineering leadership'
    ],
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
    isFeatured: true,
    isOpen: true
  },
  {
    id: 'job-102',
    title: 'Principal Cloud & DevOps Infrastructure Architect',
    department: 'Infrastructure',
    industry: 'Information Technology',
    location: 'Austin, TX / Remote',
    type: 'Full-Time',
    experienceLevel: 'Senior (6+ yrs)',
    experienceYears: '5-9 Years',
    salaryRange: '$140,000 - $185,000 / yr',
    postedDate: '2026-11-12',
    description: 'Architect multi-region Kubernetes clusters, GitOps continuous deployment, and enterprise infrastructure security across AWS and GCP.',
    requirements: [
      'Extensive production experience with AWS/GCP, Terraform, and Kubernetes',
      'Proven architecture design for zero-trust networks and GitOps automation',
      'Deep Linux kernel fundamentals and site reliability engineering (SRE) practices'
    ],
    skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Linux', 'GCP'],
    isFeatured: true,
    isOpen: true
  },
  {
    id: 'job-103',
    title: 'Senior Corporate Financial Analyst & Controller',
    department: 'Finance',
    industry: 'Finance and Accounting',
    location: 'New York, NY / Hybrid',
    type: 'Full-Time',
    experienceLevel: 'Mid-Level (2-5 yrs)',
    experienceYears: '4-7 Years',
    salaryRange: '$135,000 - $175,000 / yr',
    postedDate: '2026-11-14',
    description: 'Oversee corporate financial modeling, US GAAP statutory compliance, SaaS metrics (ARR, NRR, CAC), and institutional board reporting.',
    requirements: [
      'CPA license or Level 2/3 CFA charterholder',
      'Advanced financial modeling, DCF valuation, and capital allocation strategy',
      'Thorough mastery of US GAAP accounting, SEC filings, and ERP NetSuite/SAP'
    ],
    skills: ['Financial Modeling', 'US GAAP', 'SEC Compliance', 'SaaS Metrics', 'NetSuite', 'Valuation'],
    isFeatured: false,
    isOpen: true
  },
  {
    id: 'job-104',
    title: 'Industrial Robotics & Automation Systems Engineer',
    department: 'Engineering',
    industry: 'Engineering',
    location: 'Detroit, MI / On-site',
    type: 'Full-Time',
    experienceLevel: 'Mid-Level (2-5 yrs)',
    experienceYears: '3-6 Years',
    salaryRange: '$115,000 - $155,000 / yr',
    postedDate: '2026-11-08',
    description: 'Design, commission, and optimize advanced PLC/SCADA automation architectures and collaborative robotic systems for automotive/advanced manufacturing facilities.',
    requirements: [
      'B.S. in Mechatronics, Electrical, or Mechanical Engineering',
      'Proven experience with Rockwell Allen-Bradley ControlLogix and Siemens TIA Portal',
      'Hands-on integration with FANUC, KUKA, or ABB industrial robotics'
    ],
    skills: ['PLC Programming', 'SCADA', 'Allen-Bradley', 'Siemens TIA Portal', 'Industrial Robotics'],
    isFeatured: true,
    isOpen: true
  },
  {
    id: 'job-105',
    title: 'Enterprise B2B SaaS Strategic Account Director',
    department: 'Commercial',
    industry: 'Sales and Marketing',
    location: 'Boston, MA / Hybrid',
    type: 'Full-Time',
    experienceLevel: 'Senior (6+ yrs)',
    experienceYears: '6-10 Years',
    salaryRange: '$150,000 - $220,000 / yr + OTE',
    postedDate: '2026-11-09',
    description: 'Spearhead enterprise software acquisitions, lead multi-year Master Service Agreements with Fortune 500 accounts, and expand recurring revenue.',
    requirements: [
      'Proven track record exceeding $2.5M+ annual recurring revenue (ARR) quotas in enterprise SaaS',
      'Expertise navigating complex procurement, legal redlines, and C-suite consensus building',
      'Strong executive presence across MEDDPICC sales methodologies'
    ],
    skills: ['B2B Sales', 'Enterprise Account Management', 'SaaS', 'Contract Negotiation', 'MEDDPICC'],
    isFeatured: false,
    isOpen: true
  },
  {
    id: 'job-106',
    title: 'Technical Talent Acquisition Partner (Executive Search)',
    department: 'Human Resources',
    industry: 'Human Resources',
    location: 'Chicago, IL / Remote',
    type: 'Full-Time',
    experienceLevel: 'Mid-Level (2-5 yrs)',
    experienceYears: '3-6 Years',
    salaryRange: '$85,000 - $120,000 / yr',
    postedDate: '2026-11-13',
    description: 'Lead talent pipelining for specialized engineering squads, execute confidential executive headhunting, and optimize candidate lifecycle conversion.',
    requirements: [
      '3+ years full-lifecycle technical recruitment experience within high-growth US tech or agency search',
      'Advanced sourcing proficiency across LinkedIn Recruiter, GitHub, and specialized engineering communities',
      'Demonstrated skill in equity compensation guidance and candidate offer negotiations'
    ],
    skills: ['Tech Recruitment', 'Talent Sourcing', 'Candidate Screening', 'ATS Greenhouse', 'Executive Search'],
    isFeatured: false,
    isOpen: true
  },
  {
    id: 'job-107',
    title: 'Frontend Software Engineer (React / Next.js / TypeScript)',
    department: 'Engineering',
    industry: 'Information Technology',
    location: 'Denver, CO / Hybrid',
    type: 'Full-Time',
    experienceLevel: 'Mid-Level (2-5 yrs)',
    experienceYears: '2-4 Years',
    salaryRange: '$80,000 - $105,000 / yr',
    postedDate: '2026-11-15',
    description: 'Develop fluid interactive design systems, optimize web performance Core Web Vitals, and build accessible customer-facing web applications.',
    requirements: [
      'Strong proficiency in TypeScript, React 19, Next.js App Router, and Tailwind CSS',
      'Deep understanding of browser rendering performance, accessibility (WCAG AA), and responsive layouts',
      'B.S. in Computer Science or demonstrable open-source / commercial web application experience'
    ],
    skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git'],
    isFeatured: false,
    isOpen: true
  },
  {
    id: 'job-108',
    title: 'Global Supply Chain & Freight Operations Director',
    department: 'Operations',
    industry: 'Operations',
    location: 'Atlanta, GA / Hybrid',
    type: 'Full-Time',
    experienceLevel: 'Senior (6+ yrs)',
    experienceYears: '7-12 Years',
    salaryRange: '$120,000 - $160,000 / yr',
    postedDate: '2026-11-11',
    description: 'Direct international ocean and air freight logistics, customs trade compliance, North American carrier contracts, and automated distribution fulfillment.',
    requirements: [
      'Extensive background in international container logistics, US Customs compliance (CBP), and multi-modal transport',
      'Demonstrated leadership managing cross-functional distribution centers and carrier partnerships',
      'Mastery in enterprise supply chain ERPs (SAP, Manhattan Associates, Oracle SCM)'
    ],
    skills: ['Supply Chain', 'Logistics Operations', 'Freight Forwarding', 'Trade Compliance', 'Warehouse SOPs'],
    isFeatured: false,
    isOpen: true
  },
  {
    id: 'job-109',
    title: 'Vice President of Product Engineering',
    department: 'Executive',
    industry: 'Information Technology',
    location: 'Seattle, WA / Hybrid',
    type: 'Full-Time',
    experienceLevel: 'Senior (6+ yrs)',
    experienceYears: '10-15 Years',
    salaryRange: '$240,000 - $340,000 / yr + Equity',
    postedDate: '2026-11-18',
    description: 'Direct multi-tier engineering organizations (80+ engineers), lead enterprise cloud platform reliability, and steer technical strategy aligned with board objectives.',
    requirements: [
      'Proven track record leading engineering organizations at high-growth tech enterprises',
      'Architectural mastery across hyper-scale cloud platforms, distributed databases, and high-concurrency microservices',
      'Direct reporting to CEO/CTO with proven talent mentorship and organizational scaling'
    ],
    skills: ['Engineering Leadership', 'Distributed Systems', 'Cloud Strategy', 'Executive Management', 'Talent Mentorship'],
    isFeatured: true,
    isOpen: true
  },
  {
    id: 'job-110',
    title: 'Principal AI / LLM Solutions Architect',
    department: 'Engineering',
    industry: 'Information Technology',
    location: 'San Francisco, CA / Remote',
    type: 'Full-Time',
    experienceLevel: 'Senior (6+ yrs)',
    experienceYears: '7-12 Years',
    salaryRange: '$220,000 - $310,000 / yr + Equity',
    postedDate: '2026-11-19',
    description: 'Design and deploy production-grade generative AI systems, agentic workflows, multi-modal LLM microservices, and high-throughput vector retrieval architectures.',
    requirements: [
      'Deep expertise in Python, PyTorch, LangChain, LlamaIndex, and vector databases (Pinecone, Qdrant, Milvus)',
      'Production track record serving fine-tuned foundation models, speculative decoding, and strict LLM guardrails',
      'Proven experience delivering enterprise AI solutions with enterprise compliance and data privacy'
    ],
    skills: ['Generative AI', 'LLMs', 'Vector Databases', 'Python', 'PyTorch', 'RAG Architecture'],
    isFeatured: true,
    isOpen: true
  }
];
