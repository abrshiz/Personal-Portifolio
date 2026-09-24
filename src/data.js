export const PROFILE = {
  name: 'Abrham Wendesen Tadesse',
  handle: 'abrshiz',
  alias: 'Suhel',
  role: 'Full-Stack Developer',
  location: 'Dire Dawa, Ethiopia',
  timezone: 'EAT (UTC+3) · Remote friendly',
  status: 'Open to opportunities',
  resume: '/Doc/AbrhamWendesenTadesseCV.pdf',
  photo: '/images/photo_2025-12-29_12-17-17.jpg',
  summary:
    'I build reliable web applications end to end — from database schemas and REST APIs to the interfaces people actually use. Currently working mostly with React, Node, and Java.',
  bio: [
    'I got into programming because I wanted to understand how things work under the hood. That curiosity turned into a real passion for building — from backend APIs and database systems to clean, responsive frontends.',
    "I care about writing code that's easy to read and maintain. Whether it's a solo project or a team collaboration, I try to keep things simple, tested, and well-documented.",
    "Outside of coding, I'm usually exploring new tools, mentoring other devs, or just enjoying life in Dire Dawa.",
  ],
};

export const STATS = [
  { value: '11+', label: 'Projects shipped' },
  { value: '10+', label: 'Technologies' },
  { value: '3+', label: 'Years coding' },
];

export const FOCUS_AREAS = [
  { icon: 'fas fa-code', title: 'Full-Stack Development', desc: 'End-to-end features, from data model to interface.' },
  { icon: 'fas fa-database', title: 'Database Design & Optimization', desc: 'Relational and document schemas built to scale.' },
  { icon: 'fas fa-plug', title: 'REST API Development', desc: 'Predictable, documented services other teams can trust.' },
  { icon: 'fas fa-mobile-alt', title: 'Responsive & Mobile-First', desc: 'Interfaces that hold up on every screen size.' },
  { icon: 'fas fa-brain', title: 'Machine Learning Basics', desc: 'Practical models for classification and prediction.' },
];

export const SKILL_GROUPS = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'C++', icon: 'devicon-cplusplus-plain' },
    ],
  },
  {
    title: 'Frameworks & Runtime',
    items: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
    ],
  },
];

export const PROJECTS = [
  {
    name: 'AI Resume Analyzer',
    repo: 'abrshiz/AI-Resume-Analyzer',
    desc: 'AI-powered tool that parses and grades resumes automatically.',
    detail:
      'Extracts structure from uploaded resumes, scores them against role criteria, and returns actionable feedback in seconds.',
    tags: ['Node.js', 'AI', 'Puter'],
    img: '/images/ScreenShoots/Ai%20Resume.png',
    featured: true,
  },
  {
    name: 'Local Services Marketplace',
    repo: 'abrshiz/Local-Services-Marketplace',
    desc: 'Connect with local service providers in your area.',
    detail:
      'A two-sided marketplace with provider profiles, search by location and category, and a booking flow backed by MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB'],
    img: '/images/ScreenShoots/Local%20Service%20Market.png',
    featured: true,
  },
  {
    name: 'Restaurant Management',
    repo: 'yab147/Restaurant-Management-system',
    desc: 'End-to-end management system for restaurant operations.',
    detail:
      'Covers orders, menu, inventory and staff in one dashboard, with a MySQL schema designed around daily service workflows.',
    tags: ['React', 'Node.js', 'MySQL'],
    img: '/images/ScreenShoots/Restaurant-Management-System.jpg',
    featured: true,
  },
  {
    name: 'Heart Disease Prediction',
    repo: 'abrshiz/Heart-Disease-prediction',
    desc: 'ML model that predicts heart disease risk from patient data.',
    tags: ['Python', 'ML', 'Scikit-learn'],
    img: '/images/ScreenShoots/Heart%20Disease.png',
  },
  {
    name: 'Chaos Security Monkey',
    repo: 'Ethiopian-Cursor-Community/Chaos-Security-Monkey',
    desc: 'Security testing tool for checking infrastructure resilience.',
    tags: ['Security', 'Testing', 'DevOps'],
    img: '/images/ScreenShoots/Chaos%20Monkey.webp',
  },
  {
    name: 'WorkDesk',
    repo: 'abrshiz/WorkDesk',
    desc: 'A workspace and productivity management tool.',
    tags: ['React', 'Node.js'],
    img: '/images/ScreenShoots/WorkDEsk.png',
  },
  {
    name: 'Simple E-Commerce',
    repo: 'abrshiz/Simple-E-Commerce',
    desc: 'A clean, lightweight online shopping platform.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    img: '/images/ScreenShoots/E-Commerce.jpg',
  },
  {
    name: 'Attendance Checker',
    repo: 'abrshiz/Attendance-Checker',
    desc: 'Streamlined tool for tracking student attendance.',
    tags: ['Java', 'MySQL'],
    img: '/images/ScreenShoots/Attendance.jpg',
  },
  {
    name: 'OpenGL Rolling Ball',
    repo: 'abrshiz/Rolling-Ball',
    desc: '3D graphics game built from scratch with OpenGL.',
    tags: ['C++', 'OpenGL', 'GLUT'],
    img: '/images/ScreenShoots/Open%20GL.webp',
  },
  {
    name: 'Real-time Chat App',
    repo: 'abrshiz/Java-Oriented-Socket-Chat-App',
    desc: 'Multi-client chat system with under 20ms local latency.',
    tags: ['Java', 'Sockets', 'Threading'],
    img: '/images/ScreenShoots/chatApp.avif',
  },
  {
    name: 'Hospital Management',
    repo: 'wegen-jr/java-project',
    desc: 'Full hospital suite — patients, scheduling, billing.',
    tags: ['Java', 'Swing', 'MySQL'],
    img: '/images/ScreenShoots/HMS.webp',
  },
];

export const CONTACT = [
  { key: 'email', icon: 'fas fa-envelope', label: 'Email', value: 'abrshiz@yahoo.com', href: 'mailto:abrshiz@yahoo.com' },
  { key: 'phone', icon: 'fas fa-phone', label: 'Phone', value: '+251 987 075 109', href: 'tel:+251987075109' },
  { key: 'location', icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Dire Dawa, Ethiopia' },
  { key: 'timezone', icon: 'fas fa-clock', label: 'Timezone', value: 'EAT (UTC+3) · Remote friendly' },
];

export const SOCIALS = [
  { label: 'GitHub', handle: '@abrshiz', icon: 'fab fa-github', href: 'https://github.com/abrshiz' },
  { label: 'LinkedIn', handle: 'in/abrshiz', icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/abrshiz' },
  { label: 'Telegram', handle: '@abrshiz', icon: 'fab fa-telegram-plane', href: 'https://t.me/abrshiz' },
  { label: 'Email', handle: 'abrshiz@yahoo.com', icon: 'fas fa-envelope', href: 'mailto:abrshiz@yahoo.com' },
];

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];
