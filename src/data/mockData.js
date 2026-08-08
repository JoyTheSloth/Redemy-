// Mock Data Repository for Redemy (Red & White E-Learning Platform - localized in INR ₹)

export const CATEGORIES = [
  {
    id: 'web-dev',
    name: 'Development',
    icon: 'Code',
    subcategories: ['Web Development', 'JavaScript', 'React JS', 'Python', 'Node.js', 'CSS & HTML']
  },
  {
    id: 'business',
    name: 'Business',
    icon: 'Briefcase',
    subcategories: ['Financial Analysis', 'Entrepreneurship', 'Management', 'Sales', 'Strategy']
  },
  {
    id: 'it-software',
    name: 'IT & Software',
    icon: 'Server',
    subcategories: ['AWS Certification', 'Ethical Hacking', 'Cybersecurity', 'Linux', 'DevOps']
  },
  {
    id: 'design',
    name: 'Design',
    icon: 'Palette',
    subcategories: ['UI/UX Design', 'Figma', 'Graphic Design', '3D & Animation', 'Photoshop']
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: 'TrendingUp',
    subcategories: ['Digital Marketing', 'SEO Masterclass', 'Social Media Marketing', 'Google Ads']
  },
  {
    id: 'ai-data',
    name: 'Data Science & AI',
    icon: 'Cpu',
    subcategories: ['Machine Learning', 'Artificial Intelligence', 'ChatGPT & LLMs', 'Data Analysis', 'Deep Learning']
  },
  {
    id: 'personal',
    name: 'Personal Development',
    icon: 'User',
    subcategories: ['Productivity', 'Leadership', 'Public Speaking', 'Time Management']
  },
  {
    id: 'music',
    name: 'Music & Creative',
    icon: 'Music',
    subcategories: ['Music Production', 'Guitar', 'Piano', 'Vocal Training', 'FL Studio']
  }
];

export const POPULAR_TOPICS = [
  'Python',
  'Web Development',
  'React JS',
  'Data Science',
  'AI & ChatGPT',
  'AWS Certified',
  'UI/UX Figma',
  'Digital Marketing'
];

export const COURSES = [
  {
    id: 'course-1',
    title: 'The Complete 2026 Web Development Bootcamp',
    subtitle: 'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps',
    category: 'Development',
    topic: 'Web Development',
    bestseller: true,
    hotAndNew: false,
    rating: 4.8,
    reviewsCount: 364890,
    studentsEnrolled: 1240500,
    instructor: 'Dr. Angela Yu',
    instructorTitle: 'Developer and Lead Instructor at App Brewery',
    instructorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    instructorBio: 'I am Angela, a passionate instructor with over 10 years of software architecture experience teaching over 2 million students globally.',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
    price: 499,
    originalPrice: 3499,
    updatedDate: 'August 2026',
    hours: '62.5 total hours',
    lecturesCount: 420,
    level: 'All Levels',
    language: 'English',
    subtitles: ['English', 'Hindi', 'Spanish', 'French', 'German'],
    highlights: [
      'Build 16 real-world web development projects for your portfolio',
      'Learn modern HTML5, CSS3, Flexbox, Grid & responsive UI styling',
      'Master JavaScript ES6+, Async/Await, DOM manipulation and APIs',
      'Build backend RESTful APIs using Node.js, Express, and MongoDB/PostgreSQL',
      'Master React.js with modern Hooks, Redux Toolkit, and Next.js foundation'
    ],
    requirements: [
      'No coding experience required - I will teach you everything from scratch!',
      'A computer with access to the internet (Mac, Windows, or Linux)',
      'No paid software required - all tools used are 100% free'
    ],
    description: 'Welcome to the Complete Web Development Bootcamp, the highest rated web development course on Redemy! With over 1 million reviews, this course is designed to take complete beginners and turn them into job-ready full stack developers.',
    syllabus: [
      {
        sectionTitle: 'Section 1: Introduction to Front-End Web Development',
        duration: '3h 15m',
        lessons: [
          { title: '1. How the Web Works & HTTP Protocol', duration: '12:40', previewable: true },
          { title: '2. Setting Up VS Code & Developer Extensions', duration: '18:15', previewable: true },
          { title: '3. Your First HTML Page & Boilerplate', duration: '24:30', previewable: true },
          { title: '4. Essential HTML Elements & Semantic Markup', duration: '30:10', previewable: false }
        ]
      },
      {
        sectionTitle: 'Section 2: CSS3 Styling & Modern Responsive Layouts',
        duration: '8h 45m',
        lessons: [
          { title: '5. The CSS Box Model Explained', duration: '20:10', previewable: true },
          { title: '6. Modern Flexbox Layout Architecture', duration: '35:00', previewable: false },
          { title: '7. CSS Grid: Complex Web Dashboards', duration: '45:12', previewable: false },
          { title: '8. Mobile First Responsive Web Design', duration: '32:00', previewable: false }
        ]
      },
      {
        sectionTitle: 'Section 3: JavaScript ES6+ Core Principles & DOM',
        duration: '14h 20m',
        lessons: [
          { title: '9. Variables, Data Types & Operands', duration: '25:00', previewable: true },
          { title: '10. Control Flow, Loops & Arrays', duration: '40:15', previewable: false },
          { title: '11. ES6 Arrow Functions, Destructuring & Modules', duration: '55:30', previewable: false },
          { title: '12. DOM Manipulation & Building Interactive UI', duration: '62:00', previewable: false }
        ]
      },
      {
        sectionTitle: 'Section 4: React.js & Full-Stack Node Integration',
        duration: '22h 10m',
        lessons: [
          { title: '13. Introduction to React & JSX', duration: '30:00', previewable: true },
          { title: '14. State Management with useState & useEffect', duration: '48:15', previewable: false },
          { title: '15. Node.js Express REST API Setup', duration: '52:10', previewable: false },
          { title: '16. Connecting Full Stack Application to PostgreSQL', duration: '70:00', previewable: false }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    subtitle: 'Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!',
    category: 'Development',
    topic: 'Python',
    bestseller: true,
    hotAndNew: false,
    rating: 4.9,
    reviewsCount: 298120,
    studentsEnrolled: 980400,
    instructor: 'Dr. Angela Yu',
    instructorTitle: 'Developer and Lead Instructor at App Brewery',
    instructorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    instructorBio: 'Lead software engineer, tech lead, and instructor.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    price: 499,
    originalPrice: 3299,
    updatedDate: 'July 2026',
    hours: '58 total hours',
    lecturesCount: 610,
    level: 'All Levels',
    language: 'English',
    subtitles: ['English', 'Hindi', 'Spanish', 'Portuguese'],
    highlights: [
      'Master Python programming language fundamentals and advanced OOP',
      'Build games like Snake, Pong and Turtle Crossing',
      'Automate web scraping using BeautifulSoup and Selenium',
      'Data Science & Analysis with Pandas, NumPy, and Matplotlib',
      'Build web applications with Flask, Django and SQLite APIs'
    ],
    requirements: ['No prior programming experience needed.'],
    description: 'Learn Python programming by building 100 real projects over 100 days. Master automation, data analysis, web scraping, and AI APIs.',
    syllabus: [
      {
        sectionTitle: 'Day 1-10: Python Basics & Command Line Games',
        duration: '10h 00m',
        lessons: [
          { title: '1. Day 1: Working with Variables & Inputs', duration: '15:00', previewable: true },
          { title: '2. Day 2: Data Types and String Manipulation', duration: '20:10', previewable: true },
          { title: '3. Day 3: Control Flow and Logical Operators', duration: '25:40', previewable: false }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    title: 'Ultimate AWS Certified Solutions Architect Associate 2026',
    subtitle: 'Full Practice Exams included! Pass the AWS Certified Solutions Architect Associate SAA-C03 exam with hands-on labs.',
    category: 'IT & Software',
    topic: 'AWS Certified',
    bestseller: true,
    hotAndNew: false,
    rating: 4.8,
    reviewsCount: 184500,
    studentsEnrolled: 640100,
    instructor: 'Stephane Maarek',
    instructorTitle: 'AWS Certified Solutions Architect & DevOps Professional',
    instructorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    instructorBio: 'AWS Certified Cloud Solutions Architect helping millions pass AWS certifications worldwide.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    price: 599,
    originalPrice: 3999,
    updatedDate: 'August 2026',
    hours: '27.5 total hours',
    lecturesCount: 380,
    level: 'Intermediate',
    language: 'English',
    subtitles: ['English', 'Hindi', 'Japanese', 'Spanish', 'French'],
    highlights: [
      'PASS the AWS Certified Solutions Architect Associate SAA-C03 Exam',
      'All 800+ slides available as downloadable PDF',
      'Hands-on cloud architecture labs with S3, EC2, Lambda, DynamoDB',
      'Master High Availability, Load Balancing, Auto Scaling, Security'
    ],
    requirements: ['Basic understanding of networking and computing concepts.'],
    description: 'The ultimate preparation course for AWS Certified Solutions Architect Associate exam with 100% updated coverage.',
    syllabus: [
      {
        sectionTitle: 'AWS Fundamentals: IAM & EC2 Instances',
        duration: '5h 30m',
        lessons: [
          { title: '1. IAM Users, Groups & Policies Deep Dive', duration: '18:20', previewable: true },
          { title: '2. EC2 Provisioning & Security Groups', duration: '22:15', previewable: true }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    title: 'ChatGPT & Generative AI Masterclass: Prompt Engineering 2026',
    subtitle: 'Master ChatGPT, Midjourney, Claude 3.5, Gemini & AI Automation for Business, Coding, Marketing & Productivity.',
    category: 'Data Science & AI',
    topic: 'AI & ChatGPT',
    bestseller: false,
    hotAndNew: true,
    rating: 4.7,
    reviewsCount: 84200,
    studentsEnrolled: 310500,
    instructor: 'Julian Melanson & Robin Hills',
    instructorTitle: 'AI Strategist & Digital Creator',
    instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    instructorBio: 'Leading Generative AI researcher and online instructor.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    price: 449,
    originalPrice: 2999,
    updatedDate: 'August 2026',
    hours: '18.5 total hours',
    lecturesCount: 210,
    level: 'All Levels',
    language: 'English',
    subtitles: ['English', 'Hindi', 'German', 'Italian'],
    highlights: [
      'Master Advanced Prompt Engineering frameworks (Few-shot, Chain-of-thought)',
      'Automate workflows using Custom GPTs and AI API Agents',
      'Generate stunning AI images using Midjourney v6 and DALL-E 3',
      'Write clean code, debug, and design apps with AI Coding Assistants'
    ],
    requirements: ['No prior AI experience required.'],
    description: 'Unlock the power of Generative AI to boost your career, automate repetitive tasks, and master prompt engineering.',
    syllabus: [
      {
        sectionTitle: 'Prompt Engineering Secrets & ChatGPT 4o',
        duration: '4h 15m',
        lessons: [
          { title: '1. The Perfect Prompt Structure Framework', duration: '14:30', previewable: true },
          { title: '2. Advanced Context Window Optimization', duration: '19:40', previewable: true }
        ]
      }
    ]
  },
  {
    id: 'course-5',
    title: 'Figma UI/UX Design Essentials: Complete Masterclass',
    subtitle: 'Use Figma like a Pro to design websites, mobile apps, design systems, interactive prototypes, and wireframes.',
    category: 'Design',
    topic: 'UI/UX Figma',
    bestseller: true,
    hotAndNew: false,
    rating: 4.8,
    reviewsCount: 142000,
    studentsEnrolled: 480200,
    instructor: 'Daniel Walter Scott',
    instructorTitle: 'Adobe Certified Instructor & UX Specialist',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    instructorBio: 'Top rated UX designer and international speaker.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    price: 549,
    originalPrice: 3499,
    updatedDate: 'July 2026',
    hours: '29.5 total hours',
    lecturesCount: 310,
    level: 'Beginner',
    language: 'English',
    subtitles: ['English', 'Hindi', 'Spanish', 'Portuguese'],
    highlights: [
      'Master Figma Auto Layout 5.0, Components, Variants & Design Tokens',
      'Build fully interactive mobile app prototypes with realistic micro-animations',
      'Conduct UX research, user testing, wireframing, and persona creation',
      'Design clean Red & White theme web dashboards from scratch'
    ],
    requirements: ['Download free Figma desktop software or web app.'],
    description: 'Become a highly paid UI/UX designer using Figma. Learn design principles, typography, grid systems, and complete portfolio projects.',
    syllabus: [
      {
        sectionTitle: 'Figma Interface & Smart Components',
        duration: '6h 30m',
        lessons: [
          { title: '1. Mastering Auto Layout & Responsive Constraints', duration: '25:00', previewable: true },
          { title: '2. Design Tokens, Typography & Color Variables', duration: '30:15', previewable: true }
        ]
      }
    ]
  },
  {
    id: 'course-6',
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    subtitle: 'Master Search Engine Optimization (SEO), YouTube Marketing, Facebook Ads, Google Analytics, Copywriting & Email.',
    category: 'Marketing',
    topic: 'Digital Marketing',
    bestseller: false,
    hotAndNew: true,
    rating: 4.6,
    reviewsCount: 168400,
    studentsEnrolled: 720300,
    instructor: 'Rob Percival & Daragh Walsh',
    instructorTitle: 'Digital Marketer & Entrepreneur',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    instructorBio: 'Co-founders of top digital agencies having trained 1M+ marketers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    price: 449,
    originalPrice: 2799,
    updatedDate: 'June 2026',
    hours: '22.5 total hours',
    lecturesCount: 245,
    level: 'All Levels',
    language: 'English',
    subtitles: ['English', 'Hindi', 'Spanish', 'French'],
    highlights: [
      'Grow a business online from scratch with zero budget',
      'Get high organic ranking on Google with technical & keyword SEO',
      'Setup profitable Google PPC and Facebook Ads campaigns',
      'Build email marketing funnels that convert leads into customers'
    ],
    requirements: ['No previous marketing experience needed.'],
    description: 'The definitive 12-in-1 digital marketing masterclass to scale businesses, drive revenue, and run high ROI advertising campaigns.',
    syllabus: [
      {
        sectionTitle: 'SEO & Keyword Strategy Masterclass',
        duration: '5h 10m',
        lessons: [
          { title: '1. Keyword Research & Competitor Analysis', duration: '22:00', previewable: true },
          { title: '2. On-Page SEO Optimization Checklist', duration: '18:40', previewable: true }
        ]
      }
    ]
  },
  {
    id: 'course-7',
    title: 'Python for Data Science and Machine Learning Masterclass',
    subtitle: 'Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, TensorFlow, and Deep Learning!',
    category: 'Data Science & AI',
    topic: 'Data Science',
    bestseller: true,
    hotAndNew: false,
    rating: 4.8,
    reviewsCount: 198000,
    studentsEnrolled: 690200,
    instructor: 'Jose Portilla',
    instructorTitle: 'Head of Data Science at Pierian Training',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    instructorBio: 'Jose Marcial Portilla has a BS and MS in Engineering from Santa Clara University.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    price: 599,
    originalPrice: 3899,
    updatedDate: 'August 2026',
    hours: '25 total hours',
    lecturesCount: 165,
    level: 'All Levels',
    language: 'English',
    subtitles: ['English', 'Hindi', 'Spanish', 'Turkish'],
    highlights: [
      'Use Python for Data Science and Machine Learning algorithms',
      'Implement Linear Regression, K-Means Clustering, Random Forests',
      'Master Neural Networks, Deep Learning & Keras with TensorFlow',
      'Analyze big datasets using Pandas, NumPy and Plotly visualizations'
    ],
    requirements: ['Some programming experience is helpful but not required.'],
    description: 'Are you ready to start your path to becoming a Data Scientist? Learn data analysis, machine learning algorithms, and deep neural networks.',
    syllabus: [
      {
        sectionTitle: 'Python Data Analysis: NumPy & Pandas',
        duration: '6h 40m',
        lessons: [
          { title: '1. NumPy Arrays & Vectorized Calculations', duration: '28:10', previewable: true },
          { title: '2. Data Cleaning with Pandas DataFrames', duration: '35:20', previewable: true }
        ]
      }
    ]
  },
  {
    id: 'course-8',
    title: 'React 19 & Next.js 15 - The Complete Guide (2026 Edition)',
    subtitle: 'Master React 19, Server Components, Server Actions, Next.js App Router, Tailwind & Full-Stack Application Architecture.',
    category: 'Development',
    topic: 'React JS',
    bestseller: true,
    hotAndNew: true,
    rating: 4.9,
    reviewsCount: 112400,
    studentsEnrolled: 410800,
    instructor: 'Maximilian Schwarzmüller',
    instructorTitle: 'Professional Web Developer and Online Educator',
    instructorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    instructorBio: 'Top rated instructor with 2.5 million+ students on online platforms.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    price: 499,
    originalPrice: 3499,
    updatedDate: 'August 2026',
    hours: '48 total hours',
    lecturesCount: 490,
    level: 'All Levels',
    language: 'English',
    subtitles: ['English', 'Hindi', 'German', 'Spanish', 'Portuguese'],
    highlights: [
      'Build modern web applications with React 19 and Next.js App Router',
      'Understand React Server Components vs Client Components',
      'Master Server Actions, Mutations, Optimistic UI Updates',
      'State management with Context API, Zustand & TanStack Query'
    ],
    requirements: ['JavaScript knowledge (variables, functions, objects, ES6+).'],
    description: 'Learn React.js from scratch and build high performance full-stack applications with Next.js 15 and server actions.',
    syllabus: [
      {
        sectionTitle: 'React 19 Core & Component State',
        duration: '8h 20m',
        lessons: [
          { title: '1. React 19 Hooks & Compiler Optimization', duration: '32:00', previewable: true },
          { title: '2. Next.js App Router & Server Components', duration: '45:10', previewable: true }
        ]
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Priya Sharma',
    role: 'Frontend Developer at Swiggy',
    quote: 'Redemy completely transformed my career. The Web Development Bootcamp helped me switch from non-tech to software engineering in just 5 months!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    courseTaken: 'The Complete 2026 Web Development Bootcamp'
  },
  {
    id: 't-2',
    name: 'Rohan Mehta',
    role: 'Cloud Architect at TCS',
    quote: 'The AWS Certified Solutions Architect course on Redemy had the exact hands-on labs I needed. I passed my certification exam on the first try!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    courseTaken: 'Ultimate AWS Certified Solutions Architect 2026'
  },
  {
    id: 't-3',
    name: 'Ananya Gupta',
    role: 'Senior Product Designer at Razorpay',
    quote: 'Redemy’s UI/UX design courses are incredibly practical. The Figma auto layout exercises helped me craft a winning portfolio.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    courseTaken: 'Figma UI/UX Design Essentials'
  }
];

export const TRUSTED_COMPANIES = [
  'Infosys', 'TCS', 'Wipro', 'HCLTech', 'Cognizant', 'Flipkart', 'Zomato'
];
