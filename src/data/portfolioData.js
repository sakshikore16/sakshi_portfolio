export const portfolioData = {
  personalInfo: {
    fullName: "Sakshi Kore",
    marathiName: "साक्षी कोरे",
    monogram: "SK", // Clean logo branding
    title: "Software Developer | UI/UX Designer | Frontend Specialist",
    tagline: "Innovative and results-driven Software Developer with a passion for building impactful, user-centric digital solutions.",
    shortIntro: "I am a frontend-focused developer and UI/UX designer dedicated to building high-performance web applications and immersive interfaces. Blending rigorous frontend architecture with clean layout design, I translate complex technical needs into fluid, intuitive user experiences.",
    careerObjective: "To leverage my skills in frontend development, human-centered UI/UX design, and full-stack integration to build scalable, visually stunning, and highly functional digital applications.",
    socials: {
      github: "https://github.com/sakshikore16",
      linkedin: "https://www.linkedin.com/in/sakshi-kore/",
      email: "sakshikore16@gmail.com",
    }
  },
  
  about: {
    biography: "Based in Mumbai, India, I bridge the gap between backend engineering, creative visual design, mobile app development, and clean frontend execution. I specialize in building end-to-end digital solutions—from training custom AI/ML computer vision models for historical manuscript OCR, to designing high-fidelity Figma interfaces and coding responsive React platforms. Rather than restricting my expertise to a single layer, I treat software as an integrated ecosystem where performance, layout aesthetics, and usability must align.",
    interests: [
      { name: "Frontend Development", icon: "Code2" },
      { name: "UI/UX Design & Figma", icon: "Palette" },
      { name: "Full-Stack Integration", icon: "Laptop" },
      { name: "System Architectures", icon: "BrainCircuit" }
    ],
    leadership: [
      {
        role: "Design Lead",
        organization: "College Coding Society",
        duration: "2024 - Present",
        description: "Leading a team of 8 designers to establish visual identities for hackathons and tech fests. Spearheaded the redesign of the society's official portal, increasing user engagement by 40%."
      }
    ]
  },

  education: [
    {
      institution: "ITM Skills University",
      degree: "Bachelor of Technology - Computer Science",
      duration: "2023 - 2027",
      cgpa: "Pursuing",
      coursework: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        "Web Development Stack",
        "Computer Networks"
      ]
    },
    {
      institution: "Prakash College",
      degree: "Higher Secondary Certificate",
      duration: "2021 - 2023",
      cgpa: "",
      coursework: []
    },
    {
      institution: "CNM School ND Parekh Pre-primary School",
      degree: "Indian Certificate of Secondary Education",
      duration: "2011 - 2021",
      cgpa: "",
      coursework: []
    }
  ],

  experience: [
    {
      company: "Harrier Information Systems Pvt. Ltd",
      role: "Software Developer Intern",
      duration: "July 2025 - Dec 2025",
      responsibilities: [
        "Developed mobile document scanner and OCR applications using C# and .NET MAUI, reducing manual document parsing efforts by approximately 60%.",
        "Built and optimized server-side backend logic using Node.js and SQL, improving transactional data processing efficiency by 35%.",
        "Implemented frontend UI refinements and automated workflow updates, successfully reducing user actions per core task from 5 steps to 2 steps.",
        "Collaborated with senior engineers in Agile scrum sprints, maintaining a 100% on-time delivery rate for 8+ major feature releases."
      ],
      technologies: ["C#", ".NET MAUI", "Node.js", "SQL", "Git", "Agile"],
      achievements: "Reduced user actions per task from 5 steps to 2 steps, and automated manual parsing efforts by 60%."
    },
    {
      company: "Digital Loop Marketing",
      role: "Digital Marketing & Web Designing",
      duration: "July 2024 - Oct 2024",
      responsibilities: [
        "Managed Meta ads and content strategies, accelerating brand client engagement by 3.8× within 2 months.",
        "Designed and developed a client landing site using React and MongoDB, resulting in a ~45% increase in user retention."
      ],
      technologies: ["React.js", "MongoDB", "Figma", "Web Design", "Meta Analytics"],
      achievements: "Designed and built client portal, boosting user retention by 45%."
    },
    {
      company: "Godshalwar Project Consultants & Developers",
      role: "Web Marketing Manager",
      duration: "Apr 2023 - Sept 2023",
      responsibilities: [
        "Monitored competitor digital content and optimized ad placement strategies, improving the campaign content relevance score by ~40% across campaigns."
      ],
      technologies: ["SEO Optimization", "Web Analysis", "Campaign Audits", "Ad Management"],
      achievements: "Improved campaign content relevance scores by approximately 40%."
    }
  ],

  skills: {
    programming: ["JavaScript", "Python", "Java", "C++", "C-Sharp", "HTML5", "CSS3"],
    frontend: ["React.js", "Vite", "Next.js", "Framer", "UI/UX", "API Integration", "Flexbox & Grid"],
    backend: ["Node.js", "Express.js", "GraphQL", "RESTful APIs", "Keycloak", "MERN Stack"],
    databases: ["MongoDB", "SQL", "PostgreSQL", "Firebase"],
    uiux: ["Figma", "Wireframing", "Typography", "Prototyping"],
    aiml: ["OCR Systems", "Document Parsing", "DSA", "Problem Solving"],
    tools: ["Git", "GitHub", "Docker", "AWS/Cloud", "Postman", "NPM", ".NET MAUI"]
  },

  projects: {
    development: [
      {
        id: "grab-on",
        title: "Grab On - Interactive Food Delivery App",
        tagline: "A Swiggy clone incorporating a random order selection spin-wheel.",
        description: "Grab On is a food ordering web replica developed in a team using ReactJS, MongoDB, and Figma. It integrates core e-commerce delivery layouts with a playful spin-wheel feature that helps users decide what to eat by selecting random meals dynamically, enhancing interactive dining engagement.",
        problemStatement: "Choosing what to eat from extensive menus causes cognitive fatigue. The challenge was to integrate a gamified decision widget (the spin-wheel) seamlessly into standard checkout flows without disrupting checkout rates.",
        features: [
          "Interactive food ordering templates designed with Figma.",
          "Dynamic random order selection spin-wheel canvas.",
          "Secure MongoDB schemas storing food menu configurations."
        ],
        techStack: ["ReactJS", "MongoDB", "Node.js", "Figma"],
        role: "Frontend Developer & UI Specialist",
        challenges: "Ensuring the spin-wheel state and food recommendations load smoothly without blocking user interactions on slower devices.",
        learnings: "Mastered React state isolation and layout paint optimization rules.",
        github: "https://github.com/ChaitanyDalvi06/GrabOn-food-delivery",
        liveDemo: "https://grab-on-food-delivery.vercel.app/",
        mockups: {
          laptop: "/assets/grabon_mockup.png",
          mobile: ""
        }
      },
      {
        id: "mood-music",
        title: "Mood-Based Music Player",
        tagline: "AI facial emotion & weather-driven personalized audio streams.",
        description: "A streaming application that analyzes user emotions via webcam capturing and cross-references them with local weather API coordinates to generate context-aware, personalized music recommendations for an immersive audio space.",
        problemStatement: "Manual playlist configuration is tedious. The goal was to build a player that senses ambient vibes (emotions and weather) to recommend music dynamically.",
        features: [
          "Real-time webcam facial parsing algorithms.",
          "Weather API integration for local coordinate tracking.",
          "Responsive, soft-edged custom music audio player controls."
        ],
        techStack: ["React.js", "Webcam API", "Weather API", "Node.js"],
        role: "Sole Developer & UX Designer",
        challenges: "Handling webcam permissions and fallback states gracefully for users with disabled cameras.",
        learnings: "Learned about browser permissions, local stream capture, and API query throttling.",
        github: "https://github.com/sakshikore16/mood_based_playlist",
        liveDemo: "https://mood-based-playlist-nine.vercel.app",
        mockups: {
          laptop: "/assets/moodtune_mockup.png",
          mobile: ""
        }
      },
      {
        id: "career-pilot",
        title: "CareerPilot - Placement Preparation Portal",
        tagline: "A unified system to track applications, log DSA progression, and run AI interviews.",
        description: "CareerPilot is a placement preparation platform built to streamline the job hunt. It replaces scattered spreadsheets and documents with a unified workspace featuring an interactive application tracker, topic-wise DSA progress trackers, and AI-powered mock interview sessions that evaluate answers and provide textual performance feedback.",
        problemStatement: "Keeping track of multiple job applications, coding problems, and schedule stages in different documents causes tracking gaps and organizational fatigue. The goal was to consolidate this into a single client portal.",
        features: [
          "Interactive job application tracker board with custom stages.",
          "Data Structures & Algorithms logs indexed by category and status.",
          "AI Mock Interview dashboard with query engines evaluating response text."
        ],
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Engines"],
        role: "Lead Full Stack Developer & UI/UX Designer",
        challenges: "Designing an interface that organizes heavy amounts of metadata (DSA topics, application logs, resumes) cleanly without causing cognitive overload.",
        learnings: "Applied advanced layout spacing and modular UI states to group details logically, resulting in a cohesive experience.",
        github: "https://github.com/sakshikore16/careerpilot",
        liveDemo: "https://careerpilot-blush.vercel.app/",
        mockups: {
          laptop: "/assets/careerpilot_mockup.png",
          mobile: ""
        }
      },
      {
        id: "collab-whiteboard",
        title: "Collaborative Whiteboard App",
        tagline: "Real-time canvas for remote team brainstorming and whiteboard logs.",
        description: "A secure, containerized whiteboard tool built for remote team collaboration. Users can draw, insert text, and brainstorm in real-time on a shared board, secured via Keycloak enterprise identity gates and deployable via Docker containers.",
        problemStatement: "Remote whiteboards require low latency and high security. The project aims to provide a deployable private canvas server that enterprise teams can launch quickly.",
        features: [
          "Multiplayer low-latency canvas drawing synchronization.",
          "Keycloak single sign-on (SSO) authentication integration.",
          "Dockerized container bundle setup for simple deployment."
        ],
        techStack: ["React.js", "Keycloak", "Docker", "Node.js", "HTML5 Canvas", "WebSockets"],
        role: "DevOps & Lead Developer",
        challenges: "Configuring container network layers to sync real-time socket connections securely under Keycloak gate verification.",
        learnings: "Mastered container networking, Keycloak client-adapter integrations, and socket room configurations.",
        github: "https://github.com/sakshikore16/Collab-Whiteboard",
        liveDemo: "https://collab-whiteboard-7cah.onrender.com/",
        mockups: {
          laptop: "/assets/whiteboard_mockup.png",
          mobile: ""
        }
      }
    ],
    uiux: [
      {
        id: "flygo",
        title: "FlyGo - Flight Booking App",
        tagline: "Designing a frictionless, mobile-first flight booking experience in Figma.",
        description: "FlyGo is a mobile user experience designed to optimize travel planning. It simplifies destination search, tier comparison, and seat selection, wrapping it in a highly responsive layout optimized for one-handed mobile use.",
        problemStatement: "Traditional travel booking platforms present dense tables and confusing filters, leading to high cognitive fatigue and checkout drop-offs on mobile viewports.",
        userResearch: "Surveyed 50 frequent travelers who cited confusing date selectors and hidden fees as primary pain points. The results suggested a clear calendar view and transparent total cost breakdowns.",
        personas: [
          {
            name: "Preeti Rao",
            role: "Corporate Travel Manager",
            needs: "Quick fare comparisons and flexible checkout receipts.",
            frustrations: "Cluttered ads, pop-ups, and nested menu flows that delay simple checkouts."
          }
        ],
        userFlow: "App launch -> Search destination -> Compare flight fares on date calendar -> Choose seating tier -> One-tap checkout.",
        wireframes: "Created low-fidelity layouts that removed promotional banners and nested sidebars, maximizing screen real estate for date grids.",
        highFidelity: "Adopted a fresh ocean-blue and clean slate palette to project reliability and clarity, coupled with clean typography and rounded panels.",
        prototypeLink: "https://www.figma.com/design/OGe4881GTdcofFCRj63LVd/flight-(high-fidelity)?node-id=0-1&t=nLnPLJilP9wKZVgG-1",
        designDecisions: "Placed primary action drawers and checkout buttons within comfortable thumb range at the bottom of the device viewport.",
        outcome: "Usability testing with 10 participants yielded an 88% task completion rate on destination selection and checkout tasks.",
        reflection: "Learned that presenting extensive search data requires extreme spacing containment and visual hierarchy to reduce cognitive fatigue.",
        mockups: {
          main: "/assets/flygo_uiux.png"
        },
        methodologies: ["User Research", "Wireframing", "UI Design", "Figma Prototyping"]
      },
      {
        id: "starbucks",
        title: "Starbucks App Redesign Clone",
        tagline: "A visual redesign redesigning custom drink selection and loyalty rewards.",
        description: "This case study focuses on improving order customization on the Starbucks mobile platform. It replaces text-heavy customizers with graphical ingredient cards, creating an intuitive customization experience.",
        problemStatement: "Ordering customized espresso drinks involves navigating multiple dropdown lists, which slows down ordering and makes customized menu discovery difficult.",
        userResearch: "Observed in-store consumer behaviors and found that 72% preferred selecting drinks using visual drink representations over scrolling through text list dropdowns.",
        personas: [
          {
            name: "Karan Johar",
            role: "Daily Caffeine Consumer",
            needs: "A visual way to save custom syrup, milk, and espresso combinations.",
            frustrations: "Too many steps required to customize syrup levels and dairy preferences on current apps."
          }
        ],
        userFlow: "Explore visual menu -> Drag-to-customize syrup and espresso levels -> Add custom template -> Pay using gift cards.",
        wireframes: "Laid out cards that replace list groups with visual grid selections showcasing beverage options.",
        highFidelity: "Integrated Starbucks' premium forest-green and warm cream palette, utilizing elegant typography and glassmorphic UI elements.",
        prototypeLink: "https://www.figma.com/design/VksyofY3DGgMfVrkDG7ppn/starbucks-high-fidelity?node-id=0-1&t=4P4zHrWbcsQBtcnL-1",
        designDecisions: "Used a visual slide-up sheet overlaying the main dashboard, letting users customize drink elements dynamically.",
        outcome: "Usability testing of the interactive prototype showed a 95% satisfaction score on customization speed.",
        reflection: "Learned how micro-interactions (slide-up sheets, animations) establish visual feedback in daily consumer apps.",
        mockups: {
          main: "/assets/starbucks_uiux.png"
        },
        methodologies: ["Visual Redesign", "Figma Components", "Usability Testing"]
      },
      {
        id: "healthians",
        title: "Healthians - Healthcare App",
        tagline: "A medication tracking and wellness companion for senior citizens living independently.",
        description: "Healthians is a mobile wellness portal designed for older users. It simplifies medication logging, stock checking, and emergency contact alerts, using design systems optimized for accessibility.",
        problemStatement: "Most health apps feature small text, complex menus, and easy-to-miss reminders, making them difficult for senior citizens with visual or physical impairments to navigate.",
        userResearch: "Conducted usability testing with senior participants who preferred high-contrast styling, large tap targets (minimum 48px), and clear, non-technical instructions.",
        personas: [
          {
            name: "Dnyaneshwar Kore",
            role: "Retired Senior Citizen",
            needs: "Clear, loud reminders to take daily heart medicine and alerts for low pill stock.",
            frustrations: "Small fonts, confusing notification overlays, and complex navigations."
          }
        ],
        userFlow: "Open app -> Check daily medication alert -> Log pill intake -> Alert contact if pill stock is critically low.",
        wireframes: "Designed wireframes containing bold, simple border dividers, removing nesting structures to keep pathways linear.",
        highFidelity: "Implemented high-contrast blue and orange containers with extra large bold font weights to guarantee legibility.",
        prototypeLink: "https://www.figma.com/design/yw7oKgXUnWjJPwBpWxyScW/Healthians%3A-Healthcare-app?node-id=0-1&t=M9d4G6tzSPkDkssu-1",
        designDecisions: "Kept the home dashboard restricted to a two-button layout: Urgent Stock and Med Check, reducing cognitive load.",
        outcome: "Tested with 10 seniors, resulting in a 92% successful task completion rate for medication logging.",
        reflection: "Designing for older users requires discarding standard developer UI layouts and prioritizing physical safety, accessibility, and high contrast.",
        mockups: {
          main: "/assets/healthians_uiux.png"
        },
        methodologies: ["Inclusive Design", "Senior User Testing", "Accessibility Audits"]
      },
      {
        id: "nirukti",
        title: "Nirukti - Indian Guide App",
        tagline: "Designing a repository for preserving regional Indian folklore, crafts, and heritage.",
        description: "Nirukti is a mobile and web application case study aimed at cataloguing regional Indian heritage. It focuses on intuitive data input for rural artisans, robust media storage, and a storytelling layout that introduces folklore to urban users.",
        problemStatement: "Intangible cultural heritage like oral history and local craft techniques are rapidly disappearing. Existing archiving systems are designed for academic institutions, making them too complex for local communities to contribute to.",
        userResearch: "We conducted interviews with 12 artisans in Maharashtra and 4 university historians. We discovered that artisans prefer voice-note descriptions, image uploads over text inputs, and simple icon-driven navigation.",
        personas: [
          {
            name: "Ameya Kore",
            role: "Local Historian & Archivist",
            needs: "A searchable, categorized database to verify historical references and read user contributions.",
            frustrations: "Lack of localized translation and unformatted community submissions."
          }
        ],
        userFlow: "User logs in -> Selects regional map -> Views regional folklore grid -> Clicks contribution -> Uploads voice note & images -> Receives verified badge -> Shared on global feed.",
        wireframes: "We designed paper sketches focusing on high-contrast layouts, followed by low-fidelity wireframes that replaced dense navigation bars with simple, iconography-driven cards.",
        highFidelity: "High-fidelity layouts use a warm terracotta and turmeric color scheme with elegant border dividers and serif heading fonts. This creates a virtual digital museum experience.",
        prototypeLink: "https://www.figma.com/design/Bfw7mZhKgw4jd4Zt73RDtR/SIH?node-id=0-1&t=caqsqC6SkESYAqRL-1",
        designDecisions: "Choosing a serif typeface (Federo) for titles reflects historic scripts, and placing a bottom-bar navigation on the mobile app ensures one-handed ease of use for rural users.",
        outcome: "The design received the 'Outstanding Social Impact' award at the College Design Showcase, with 94% of tested users reporting high clarity of contribution steps.",
        reflection: "I learned that localized design is not just translating language; it requires rethinking inputs, cognitive load, and visual metaphors.",
        mockups: {
          main: "/assets/nirukti_uiux.png"
        },
        methodologies: ["User Research", "Persona Mapping", "Wireframing", "Figma Prototyping", "Usability Audits"]
      }
    ]
  },

  achievements: [
    {
      title: "Winner - 1st Place Website Designing",
      organization: "No-Code Design Challenge",
      date: "2025",
      description: "Won first place in building and design speed, producing highly intuitive user directories under restricted templates."
    },
    {
      title: "Certified HackerRank Engineer",
      organization: "HackerRank Academy",
      date: "2025",
      description: "Validated core logic competencies with advanced certifications in Python and JavaScript syntax structures."
    },
    {
      title: "AI Tools and Prompt Specialist",
      organization: "B10X Academy",
      date: "2024",
      description: "Certified in neural prompting frameworks and AI-augmented developer integrations for accelerated sprints."
    }
  ],

  softSkills: [
    "Adaptability",
    "Quick Learning",
    "Time Management",
    "Research",
    "Problem-Solving",
    "Creativity & Innovation"
  ],
  languages: [
    "English",
    "Hindi",
    "Marathi",
    "German"
  ]
};
