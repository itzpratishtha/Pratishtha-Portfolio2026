import { Certification } from '../types';

export interface DualAward {
  title: string;
  years: string[];
  designation: string;
  awardingBody: string;
  description: string;
  badgeAccent: string;
  image2025: string;
  image2026: string;
}

export const DUAL_CODER_AWARD: DualAward = {
  title: 'Coder of the Year',
  years: ['2025', '2026'],
  designation: 'Two-Time Consecutive Winner & Academic Star',
  awardingBody: 'Poornima Institute of Engineering and Technology, Jaipur',
  description: 'Conferred back-to-back in 2025 and 2026 at the annual Kalanidhi Award Ceremonies in recognition of exemplary coding mastery, competitive programming benchmarks at HackerRank, and sustained technical leadership among peers.',
  badgeAccent: '#CCFF00',
  image2025: '/images/coder 2025.jpeg',
  image2026: '/images/coder2026.jpg',
};

export const LEETCODE_MILESTONE = {
  title: 'LeetCode 200-Day Badge',
  streak: '200+ Consecutive Days in 2026',
  solvedCount: '450+ Problems Solved',
  focusAreas: ['Arrays & Hashing', 'Trees & Graphs', 'Dynamic Programming', 'Recursion & Backtracking'],
  description: 'Demonstrated algorithmic discipline with 200+ consecutive days of competitive problem-solving in 2026, conquering 450+ Data Structures & Algorithms challenges on LeetCode (@itz_pratishtha).',
  platform: 'LeetCode',
  badgeTag: 'Algorithmic Mastery',
  profileUrl: 'https://leetcode.com/u/Pratishtha_somani/',
  badgeImageUrl: '/images/leetcode200day.jpg'
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'coder-of-the-year-2025',
    title: 'Coder of the Year 2025',
    issuer: 'Poornima Institute of Engineering and Technology',
    yearOrStatus: 'Award 2025 (Session 2024–25)',
    category: 'Award',
    description: 'Award of Excellence presented to Ms. Pratishtha Somani (Reg: PIET24CS131, B.Tech CSE) along with INR 2100 cash prize for excellent contribution as best coder at HackerRank on the occasion of Kalanidhi Annual Award Ceremony on 2nd October 2025. Signed by Principal & Director Dr. Dinesh Goyal.',
    imageUrl: '/images/coder 2025.jpeg',
    tags: ['Competitive Programming', 'Kalanidhi 2025', 'PIET Jaipur', 'Cash Prize INR 2100'],
    featured: true
  },
  {
    id: 'coder-of-the-year-2026',
    title: 'Coder of the Year 2026',
    issuer: 'Poornima Institute of Engineering and Technology',
    yearOrStatus: 'Award 2026 (Two-Time Winner)',
    category: 'Award',
    description: 'Consecutive two-time recipient of the premier institutional coding honor, conferred on stage at Kalanidhi 2026 celebrating continued algorithmic leadership, peer impact, and developer distinction.',
    imageUrl: '/images/coder2026.jpg',
    tags: ['Competitive Programming', 'Two-Time Winner', 'Kalanidhi 2026', 'Institutional Honors'],
    featured: true
  },
  {
    id: 'leetcode-200-day-badge',
    title: 'LeetCode 200-Day Badge',
    issuer: 'LeetCode',
    yearOrStatus: 'Milestone Honor (2026)',
    category: 'Software Engineering',
    description: 'Conferred for solving problems 200+ consecutive days in 2026. Solved 450+ Data Structures & Algorithms challenges across Trees, Dynamic Programming, Graphs, and Hash Maps (@itz_pratishtha).',
    verificationUrl: 'https://leetcode.com/u/Pratishtha_somani/',
    imageUrl: '/images/leetcode200day.jpg',
    tags: ['LeetCode 200 Days', '450+ Solved', 'Data Structures', 'Problem Solving'],
    featured: true
  },
  {
    id: 'postman-api-fundamentals',
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    yearOrStatus: 'Certified Student Expert (Feb 24, 2026)',
    category: 'Data & APIs',
    description: 'Mastery over REST API architecture, HTTP methods, authorization headers, collection runners, automated testing suites, and API documentation standards. Awarded to Pratishtha Somani on Feb 24, 2026.',
    verificationUrl: 'https://postman.com',
    imageUrl: '/images/postman.png',
    tags: ['REST APIs', 'Postman', 'API Testing', 'Collection Runners'],
    featured: true
  },
  {
    id: 'ibm-starting-with-ai',
    title: 'IBM – Starting with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    yearOrStatus: 'Issued on Jul 28, 2026',
    category: 'AI & Cloud',
    description: 'Successfully satisfied the requirements for Getting Started with Artificial Intelligence: core principles of neural networks, machine learning paradigms, cognitive systems, and ethical AI deployment.',
    verificationUrl: 'https://www.credly.com/badges/602b48a4-ad58-4ee1-96d0-57deb70c9188',
    imageUrl: '/images/ibm ai.png',
    tags: ['Artificial Intelligence', 'IBM SkillsBuild', 'Credly Verified', 'Neural Networks'],
    featured: false
  },
  {
    id: 'yuva-ai-for-all',
    title: 'Yuva AI for All – DOITC, Rajasthan',
    issuer: 'Department of Information Technology & Communication (DOITC), Rajasthan & INDIAai',
    yearOrStatus: 'Issued on 13 September 2026',
    category: 'AI & Cloud',
    description: 'Declaration of Completion awarded to Pratishtha Somani for successfully completing the online course YUVA AI FOR ALL. Certificate Number: AI-20260913-378823.',
    credentialId: 'AI-20260913-378823',
    issueDate: '13 September 2026',
    imageUrl: '/images/yuvaai.png',
    tags: ['DOITC Rajasthan', 'INDIAai', 'AI-20260913-378823', 'Public Tech'],
    featured: false
  },
  {
    id: 'salesforce-agentforce',
    title: 'Salesforce Agentforce',
    issuer: 'Department of Computer Engineering, PIET, Jaipur',
    yearOrStatus: 'Workshop (6th–7th August 2026)',
    category: 'AI & Cloud',
    description: 'Certificate of Participation for successfully participating in the two-day workshop on "Salesforce Agentforce: AI-Powered CRM and Intelligent Automation" exploring autonomous agent workflows and conversational intelligence.',
    imageUrl: '/images/salesforce.jpg',
    tags: ['Autonomous Agents', 'Salesforce Agentforce', 'Intelligent Automation', 'PIET'],
    featured: false
  },
  {
    id: 'sql-basic-hackerrank',
    title: 'SQL Basic – HackerRank',
    issuer: 'HackerRank',
    yearOrStatus: 'Earned on 08 Sep, 2025',
    category: 'Software Engineering',
    description: 'Passed the HackerRank skill certification test in SQL (Basic). Verified competency in relational schemas, aggregate functions, filtering, and table joins. Certificate ID: 1AC6543F7D84.',
    credentialId: '1AC6543F7D84',
    verificationUrl: 'https://www.hackerrank.com/certificates/1AC6543F7D84',
    imageUrl: '/images/sql_basic.png',
    tags: ['SQL (Basic)', 'HackerRank', 'ID: 1AC6543F7D84', 'Relational Databases'],
    featured: false
  }
];
