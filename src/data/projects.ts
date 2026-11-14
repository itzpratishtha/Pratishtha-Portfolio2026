import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'skillswap',
    title: 'SKILLSWAP',
    tagline: 'AI-Powered Peer-to-Peer Skill Exchange Marketplace',
    category: 'AI & Systems',
    shortOverview: 'A full-stack skill exchange marketplace using MERN and Gemini APIs to connect learners with relevant mentors through a virtual credit-based transaction system.',
    problemSolved: 'Traditional mentorship and tutoring platforms suffer from high financial barriers and inefficient mentor-mentee matching, leaving self-driven learners without structured guidance.',
    myContribution: 'Architected the end-to-end marketplace flow, developed virtual credit-based transaction logic, implemented state-driven request workflows for enrollment lifecycles, and built analytics dashboards for tracking user engagement.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Gemini API'], // Removed MySQL & Tailwind CSS as requested
    keyFeatures: [
      'Multi-role authentication (Learner, Mentor, Dual-role)',
      'Virtual credit-based transaction system for peer-to-peer learning',
      'AI-powered mentor recommendations leveraging Gemini API',
      'State-driven request workflows managing enrollment lifecycles from initiation to completion',
      'Interactive skill discovery with category tagging',
      'REST APIs and analytics dashboards tracking user engagement and progress'
    ],
    githubUrl: 'https://github.com/itzpratishtha/SkillSwap-Marketplace',
    liveUrl: 'https://skill-swap-marketplace-three.vercel.app/login',
    imageUrl: '/images/project-skillswap.png',
    featured: true,
    accentColor: '#CCFF00',
    architectureNotes: [
      'Credit escrow mechanism guarantees safe session completions before balance transfer',
      'Gemini API integration matching mentor expertise with learner skill deficits',
      'State-driven request workflows for transparent session scheduling and approval'
    ]
  },
  {
    id: 'piet-alumni-connect',
    title: 'PIET ALUMNI CONNECT',
    tagline: 'Institutional Alumni & Student Networking Portal',
    category: 'Full-Stack',
    shortOverview: 'A full-stack alumni networking platform built with Node.js, Express.js, MySQL, and JavaScript supporting secure communication, mentorship, and job discovery.',
    problemSolved: 'University students frequently lack direct, vetted access to graduated alumni in top technology firms, causing missed opportunities for industry guidance and campus referrals.',
    myContribution: 'Designed and implemented RESTful APIs with role-based authentication and OTP-based email verification, integrated Socket.IO for real-time messaging, and optimized relational database queries.',
    techStack: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Socket.io', 'JWT'],
    keyFeatures: [
      'Role-based authentication with OTP-based email verification',
      'Real-time messaging between students and alumni powered by Socket.IO',
      'Dynamic alumni directory with company, domain, and graduation year filters',
      'Verified job and internship discovery board',
      'Optimized MySQL relational queries and backend operations for scalability',
      'Institutional community feeds and mentorship request conduits'
    ],
    githubUrl: 'https://github.com/itzpratishtha/alumni_connect_portal',
    liveUrl: 'https://alumniconnectportal.vercel.app/login.html',
    imageUrl: '/images/alumni connect.png',
    featured: true,
    accentColor: '#60A5FA',
    architectureNotes: [
      'Normalized relational MySQL schemas ensuring high query performance across alumni records',
      'Socket.IO rooms with reconnection fallbacks for instantaneous chat delivery',
      'Token-based stateless authentication preventing session hijack vulnerabilities'
    ]
  },
  {
    id: 'hospital-patient-records',
    title: 'HOSPITAL PATIENT RECORD SYSTEM',
    tagline: 'Secure Healthcare Data Management Architecture',
    category: 'Full-Stack',
    shortOverview: 'A centralized patient clinical record management system designed for medical staff to track diagnostics, medical history, and clinical appointments securely.',
    problemSolved: 'Paper-based and disjointed hospital records cause medical errors, lost diagnostics, and slow administrative handoffs between departments.',
    myContribution: 'Engineered the Python Flask backend application layer, designed relational schemas for patient histories, doctors, and appointments, and built clean tabular administrative dashboards.',
    techStack: ['Python Flask', 'MySQL', 'HTML5', 'CSS3', 'REST APIs'],
    keyFeatures: [
      'Comprehensive patient registry with persistent unique health IDs',
      'Clinical consultation tracking and prescription history logging',
      'Doctor appointment scheduling and departmental allocation',
      'Secure query interface with role-restricted record views',
      'Optimized SQL queries for fast lookup across diagnostic logs',
      'Responsive dashboard for administrative and nursing staff'
    ],
    githubUrl: 'https://github.com/itzpratishtha/Hospital-Patient-Record',
    // Live demo removed as requested
    imageUrl: '/images/project-hospital.jpg',
    featured: true,
    accentColor: '#34D399',
    architectureNotes: [
      'ACID-compliant MySQL transaction control to prevent concurrent booking conflicts',
      'Sanitized SQL queries and parameterized inputs eliminating injection vulnerabilities',
      'Lightweight server-rendered Flask templates for rapid rendering in low-bandwidth clinic networks'
    ]
  }
];
