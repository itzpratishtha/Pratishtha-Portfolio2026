import { LeadershipRole } from '../types';

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    id: 'acm-w-vice-chair',
    role: 'Vice-Chair',
    organization: 'ACM-W Student Chapter',
    period: 'Elected Leadership',
    description: 'Leading strategic student initiatives to empower women in computing, organizing collaborative development hackathons, technical workshops, and mentorship pipelines for emerging engineers.',
    highlights: [
      'Spearheaded technical coding workshops and peer algorithmic mentoring circles',
      'Coordinated industry speaker sessions and career panels with engineering leaders',
      'Advocated for inclusive tech spaces and expanded active member participation by over 40%'
    ],
    badge: 'Executive Board'
  },
  {
    id: 'piet-alumni-operations',
    role: 'Operations & Relations Member',
    organization: 'PIET Alumni Society',
    period: 'Institutional Liaison',
    description: 'Facilitating active bridges between collegiate engineering students and graduated alumni working across global technology companies.',
    highlights: [
      'Co-developed and coordinated networking initiatives linking students directly with senior developers',
      'Assisted in curating referral conduits and industry mentorship webinars',
      'Drove engagement for institutional alumni reunions and collaborative hackathons'
    ],
    badge: 'Institutional Impact'
  },
  {
    id: 'tech-event-organizer',
    role: 'Lead Organizer & Coordinator',
    organization: 'Campus Technical Events & Hackathons',
    period: 'Continuous Engagement',
    description: 'Directing logistics, technical judging criteria, and participant environments for campus-wide code sprints and hackathons.',
    highlights: [
      'Managed end-to-end technical track guidelines and repository submission pipelines',
      'Facilitated real-time problem-solving desks supporting 150+ hackathon participants',
      'Ensured seamless execution of live coding challenges and algorithmic contests'
    ],
    badge: 'Event Leadership'
  },
  {
    id: 'community-volunteering',
    role: 'Technical Volunteer & Peer Mentor',
    organization: 'Engineering Student Community',
    period: 'Ongoing Service',
    description: 'Dedicated to peer academic tutoring, open technical knowledge sharing, and hosting hands-on coding clinics for junior computer science students.',
    highlights: [
      'Conducted live peer problem-solving walk-throughs in C++ and Data Structures',
      'Assisted students with Git/GitHub setup, debugging environments, and web dev basics',
      'Fostered a culture of curiosity, disciplined daily practice, and collaborative building'
    ],
    badge: 'Community Outreach'
  }
];
