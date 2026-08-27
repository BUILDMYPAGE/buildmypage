/**
 * All site copy lives here. Edit this file to change what the site says —
 * you should rarely need to touch the page components themselves.
 *
 * Content imported from the live WordPress site (buildmypage.com) on 2026-08-24.
 * Portfolio, AI, capabilities, and additional client engagements imported from
 * bryanmarosch.com on 2026-08-26, rewritten from a company perspective.
 */

export const site = {
  name: "BUILDMYPAGE",
  tagline: "When Preparation Meets Opportunity",
  description:
    "BUILDMYPAGE is your full-service, one-stop shop for everything your business needs — websites, mobile apps, branding, social media, marketing, and AI — trusted by federal agencies and enterprise teams alike.",
  url: "https://www.buildmypage.com",
  email: "info@buildmypage.com",
  phone: "", // e.g. "(555) 123-4567" — leave empty to hide
  location: "Serving clients everywhere, remotely.",
  /**
   * Contact form delivery. Create a free access key at https://web3forms.com
   * (enter the email you want submissions sent to), then paste the key here.
   * Until a key is set, the form shows an email link instead.
   */
  web3formsKey: "0a86b402-1e72-4c17-a4bb-2e4e934d475d",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "AI", href: "/ai" },
  { label: "Clients", href: "/clients" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

/** Headline numbers shown on the homepage. */
export const stats = [
  { value: "15+", label: "Years of engineering experience" },
  { value: "16", label: "Federal agencies & enterprise clients" },
  { value: "40%", label: "Faster delivery with AI-assisted workflows" },
  { value: "100%", label: "Of code reviewed, tested & 508-validated" },
];

/** Full-service positioning highlighted on the homepage. */
export const oneStop = {
  eyebrow: "Full service",
  heading: "Your one-stop shop, from start to finish.",
  sub: "BUILDMYPAGE handles everything your business needs to thrive online — one team, one point of contact, from the first idea to launch and beyond. No juggling agencies, no handoffs, no gaps.",
  pillars: [
    "Websites & Web Apps",
    "Mobile Apps",
    "Branding & Design",
    "Social Media",
    "Marketing & SEO",
    "E-Commerce",
    "AI Solutions",
    "Hosting & Support",
  ],
};

export const hero = {
  eyebrow: "Web development, done right",
  heading: "Modern web applications, hand-coded and built to last.",
  sub: "From Angular and React front-ends to AI-powered solutions, BUILDMYPAGE delivers the craftsmanship trusted by federal agencies, Fortune 500 teams, and growing businesses alike.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "See what we do", href: "/services" },
};

export type Service = {
  title: string;
  blurb: string;
  points?: string[];
};

export const services: Service[] = [
  {
    title: "Angular / TypeScript Development",
    blurb:
      "We utilize the latest Angular and TypeScript technologies to deliver modern, high-performance web applications. Our expertise includes building scalable solutions using Angular services, components, and custom directives. Additionally, we have in-depth knowledge of Node Package Manager (NPM) and the most widely adopted modules, ensuring efficient and maintainable development workflows.",
  },
  {
    title: "React",
    blurb:
      "React has gained significant popularity and is often a preferred alternative to Angular for modern web development. We leverage the latest stable version of React in all our projects to ensure optimal performance and maintainability. Key features such as components, props, constants, let variables, maps, and hooks are utilized to build efficient, scalable solutions tailored to your project's needs.",
  },
  {
    title: "Artificial Intelligence Solutions",
    blurb:
      "We offer advanced Artificial Intelligence (AI) services designed to help your business harness the power of intelligent automation and data-driven decision-making. Our AI solutions leverage machine learning, natural language processing, and predictive analytics to optimize operations, enhance customer experiences, and unlock new growth opportunities. Whether you need to automate complex workflows, gain insights from large datasets, or implement AI-powered features in your applications, we provide tailored strategies and implementations that align with your unique business goals.",
  },
  {
    title: "PSD Mockup",
    blurb:
      "Have you ever needed someone to transform your ideas into a clear visual concept? We're here to help. Share your vision with us, and we'll turn it into a tangible design — bringing your ideas to life while giving you peace of mind.",
  },
  {
    title: "PSD to HTML Conversion",
    blurb:
      "Have a mockup or wireframe ready? Facing a tight deadline? Send it to us today and receive results by tomorrow. We can convert your mockup into a static or dynamic template and integrate it with any content management system of your choice.",
  },
  {
    title: "Responsive Web Design",
    blurb:
      "Do you have a website that needs to be optimized for mobile devices? We specialize in transforming any website into a user-friendly experience across all mobile platforms — from tablets and smartphones to the latest smartwatches. Ensuring your site is mobile-compatible not only enhances the user experience but also improves your search engine ranking, as search engines prioritize mobile-friendly sites over those that are not.",
  },
  {
    title: "Search Engine Optimization",
    blurb:
      "Concerned about your page ranking? Let us help improve it using the latest SEO best practices to ensure your site gets discovered. With an average SEO strength rating above 90%, you can be confident your site will start attracting targeted traffic quickly. From optimizing basic alt tags to implementing advanced Google Schemas and beyond, we cover all essential strategies to boost your online presence.",
  },
  {
    title: "Marketing Campaigns",
    blurb:
      "We manage multiple marketing campaigns and sales funnels with budgets ranging from $5,000 to $250,000 per month. In an ever-evolving technological landscape, keeping up with effective marketing strategies and targeting the right audience can be challenging. Our proven methods generate targeted traffic within days and deliver comprehensive analytical data to help optimize your budget allocation. With over a decade of marketing expertise, we are ready to manage your campaigns and drive measurable results starting today.",
  },
  {
    title: "Social Networking",
    blurb:
      "Do you need a new Facebook page created for your rapidly growing startup? Are you an emerging artist seeking greater visibility on Instagram? Or perhaps you want to expand your audience on Twitter? Whatever platform you're targeting, we'll ensure your presence stands out above the competition.",
  },
  {
    title: "Mobile Applications",
    blurb:
      "Have a new idea for a mobile application? We're the developers for that. Whether you've just invented the next breakthrough or simply want to bring your unique concept to life, we're ready to get started. We'll guide your project through the right steps and establish a solid foundation to launch your app on both major platforms — iOS and Android — quickly and efficiently.",
  },
  {
    title: "WordPress / Plugin Development",
    blurb:
      "Are you looking to establish a presence on one of the most popular platforms? Perhaps you need a custom plugin developed or modifications made to one you're already using. We can customize anything — from simple style adjustments to comprehensive changes in plugin functionality. If your requirements are unique and no existing solution fits, we can develop a custom plugin from scratch tailored specifically to your needs.",
  },
  {
    title: "eCommerce Development",
    blurb:
      "Have a popular item to sell? We have extensive experience with major e-commerce platforms, including but not limited to WooCommerce, OpenCart, and Magento. Whether you're selling vintage items or rare collectibles, we'll ensure your products are easy to find and purchase, providing a seamless shopping experience for your customers.",
  },
  {
    title: "Database Design",
    blurb:
      "Do you have a large database containing years of valuable information? We offer premium database services designed to enhance your system's performance and boost productivity. Our expertise allows us to seamlessly connect your database to a user-friendly interface and develop efficient queries tailored to your specific needs.",
  },
];

/** "Professional Overview" list from the Services page. */
export const skills = [
  "Hand code Angular, React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, SASS, Tailwind CSS, Ionic Cordova, PHP, MySQL, jQuery, and ASP.NET",
  "Extensive knowledge in multiple repositories Git, Github, Gitlab, BitBucket, Git Bash",
  "Obtained Security Clearance to work on classified assignments",
  "Ability to work in software development cycle from start to finish",
  "Experience using Cordova and Ionic",
  "Familiar with SharePoint lists, services, and content management",
  "Ability to work in multiple dev environments and branches",
  "Knowledge in multiple restful API methods",
  "Extensive knowledge of the latest Angular releases through Angular 22 — signals, standalone components, and modern control flow — with TypeScript 7",
  "Deep experience with React 19 and Next.js 16 — components, hooks, server components, and modern rendering patterns",
  "Experience with Section 508 compliance",
  "Familiar with Atlassian Jira and most kanban story boards",
  "Experience in designing layered PSD mockups and wireframes",
  "Extensive knowledge in responsive UI frameworks such as Tailwind CSS 4 and Bootstrap",
  "Great experience in developing both static and dynamic web applications",
  "Strong knowledge in Adobe Creative Suites, Figma, and Abstract",
  "Expert with Responsive CSS3 Media Queries",
  "Ability to utilize JavaScript only in an isolated environment",
  "Familiar with Optical Character Reader (OCR)",
  "Extensive knowledge in CMS platforms — WordPress, headless CMS (Payload), Joomla, Drupal — and WooCommerce and OpenCart ecommerce websites",
  "Experience in running and evaluating online marketing campaigns (email marketing and Pay Per Click (PPC) campaigns)",
  "Strong understanding of Name servers, DNS and MX records",
  "Strong client relations experience and managing multiple projects simultaneously",
  "Supportive team player with excellent communication characteristics (both on-site and remote)",
  "Agile certified with experience in many sprints, retrospectives, ceremonies, and backlog grooming",
  "Experienced in AI-assisted development with Claude, GitHub Copilot, GPT, and Gemini for improved productivity",
  "Experienced with NPM (node package manager) and commonly used modules",
  "Familiar with running SAS stored procedures",
  "Strong knowledge in Node.js applications",
  "Experienced with Angular Material themes, @mixins, and core component development using custom directives",
];

export const process = [
  {
    step: "01",
    title: "Discover",
    blurb: "A short call to understand your project, your users, and what success looks like.",
  },
  {
    step: "02",
    title: "Design & Build",
    blurb: "We design and build the solution, sharing progress along the way so there are no surprises.",
  },
  {
    step: "03",
    title: "Launch & Support",
    blurb: "We deploy, then keep everything fast, secure, and up to date long after launch.",
  },
];

export type Project = {
  name: string;
  kind: "Website" | "Mobile App";
  blurb: string;
  tags: string[];
  image: string;
  links: { label: string; href: string }[];
  featured?: boolean; // shown on the homepage
};

export const projects: Project[] = [
  {
    name: "AnidaPro",
    kind: "Website",
    blurb:
      "Company web platform we built and paired with companion native iOS and Android mobile apps.",
    tags: ["Angular", "TypeScript", "Responsive", "PWA"],
    image: "/screenshots/anidapro.jpg",
    links: [{ label: "anidapro.com", href: "https://www.anidapro.com/" }],
    featured: true,
  },
  {
    name: "Century Management Consultants",
    kind: "Website",
    blurb:
      "HOA and condominium management platform for South Florida — a Next.js front end backed by a headless CMS, with resident community search and an integrated AI assistant.",
    tags: ["Next.js", "React", "Payload CMS", "Vercel"],
    image: "/screenshots/cmcmanagement.jpg",
    links: [{ label: "cmcmanagement.biz", href: "https://cmcmanagement.biz/" }],
    featured: true,
  },
  {
    name: "USDA FEMS Dashboard",
    kind: "Website",
    blurb:
      "Fire & Environmental Mapping System dashboard for the U.S. Forest Service — our team led the UI development.",
    tags: ["Angular", "Elasticsearch", "PostgreSQL", "AWS"],
    image: "/screenshots/fems.jpg",
    links: [{ label: "fems.fs2c.usda.gov", href: "https://fems.fs2c.usda.gov/" }],
    featured: true,
  },
  {
    name: "The Nation's Report Card",
    kind: "Website",
    blurb:
      "U.S. Department of Education NAEP portal — we developed new sections of the site to Section 508 standards.",
    tags: ["Angular", "TypeScript", "Section 508", "SCSS"],
    image: "/screenshots/naep.jpg",
    links: [
      {
        label: "nationsreportcard.gov",
        href: "https://www.nationsreportcard.gov/focus_on_naep/",
      },
    ],
  },
  {
    name: "Maintain Florida",
    kind: "Website",
    blurb: "Responsive marketing and services website for a Florida property-maintenance company.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    image: "/screenshots/maintainflorida.jpg",
    links: [{ label: "maintainflorida.com", href: "https://maintainflorida.com/" }],
  },
  {
    name: "Racing Florida",
    kind: "Website",
    blurb: "Motorsports community and events site with a dynamic, mobile-first layout.",
    tags: ["JavaScript", "CSS3", "Responsive"],
    image: "/screenshots/racingflorida.jpg",
    links: [{ label: "racingflorida.net", href: "https://www.racingflorida.net/" }],
  },
  {
    name: "AnidaPro Mobile",
    kind: "Mobile App",
    blurb: "Cross-platform mobile app we built and shipped for the AnidaPro platform.",
    tags: ["Ionic", "TypeScript", "iOS", "Android"],
    image: "/screenshots/anidapro-app.jpg",
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6775009943" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.anidapro.mobile",
      },
    ],
  },
  {
    name: "FlashTree",
    kind: "Mobile App",
    blurb: "Mobile app delivering a fast, native experience on both major platforms.",
    tags: ["React Native", "iOS", "Android"],
    image: "/screenshots/flashtree-app.jpg",
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/flashtree/id1591487632" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.flashtree",
      },
    ],
  },
];

/** The AI page. */
export const ai = {
  eyebrow: "AI Engineering",
  heading: "AI is a force multiplier — not a substitute for engineering judgment.",
  sub: "We put frontier AI models to work across our projects, from AI-assisted development to intelligent features in the products we ship. Every line still passes through senior engineers before it reaches you.",
  metrics: [
    { value: "40%", label: "Reduction in coding time through AI-assisted workflows" },
    { value: "4+", label: "Frontier LLMs in active rotation" },
    { value: "100%", label: "Of AI-generated code reviewed, tested, and 508-validated" },
  ],
  practices: [
    {
      title: "Human review on everything",
      blurb:
        "AI accelerates the work; it doesn't approve it. Every AI-generated line is reviewed by a senior engineer, covered by tests, and validated for Section 508 accessibility before it ships.",
    },
    {
      title: "The right model for the job",
      blurb:
        "We keep several frontier models — Claude, GPT, Gemini, and GitHub Copilot — in active rotation, and match each task to the model that does it best.",
    },
    {
      title: "Agentic workflows",
      blurb:
        "Beyond code assistance, we build agentic systems for our clients: MCP servers, retrieval-augmented generation (RAG), embeddings, and tool use that connect AI to your real data and workflows.",
    },
    {
      title: "Faster delivery, same craftsmanship",
      blurb:
        "AI-assisted development has cut our coding time by roughly 40% — savings we pass on as faster turnarounds and more iterations, not lower standards.",
    },
  ],
  toolkit: [
    "Claude",
    "GPT",
    "Gemini",
    "GitHub Copilot",
    "Prompt engineering",
    "Agentic workflows",
    "MCP servers",
    "RAG & embeddings",
    "Tool use",
  ],
};

/** Categorized tech stack shown on the Services page. */
export type Capability = {
  category: string;
  items: string[];
};

export const capabilities: Capability[] = [
  {
    category: "AI & Automation",
    items: [
      "Claude",
      "GPT",
      "Gemini",
      "GitHub Copilot",
      "Prompt engineering",
      "Agentic workflows",
      "MCP servers",
      "RAG & embeddings",
      "Tool use",
    ],
  },
  {
    category: "Front-End",
    items: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SASS/SCSS",
      "Vue.js",
      "jQuery",
      "Bootstrap",
      "D3.js",
      "Webpack",
    ],
  },
  {
    category: "Back-End",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "C# / .NET Core",
      "PHP",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    category: "Mobile",
    items: ["React Native", "Ionic Cordova", "iOS", "Android", "Progressive Web Apps"],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Git / GitHub / GitLab",
      "Docker",
      "Kubernetes",
      "AWS (S3, EC2, CloudFront, Lambda)",
      "Azure",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    category: "Databases",
    items: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Oracle"],
  },
  {
    category: "Practices & Tools",
    items: [
      "Agile / Scrum",
      "Test-Driven Development",
      "Section 508 / WCAG compliance",
      "Jira",
      "Figma",
      "Adobe Creative Suite",
    ],
  },
];

export type Client = {
  name: string;
  industry: string;
  paragraphs: string[];
};

export const clients: Client[] = [
  {
    name: "TriWest Healthcare Alliance",
    industry: "Healthcare",
    paragraphs: [
      "Currently delivering enterprise front-end development for TriWest Healthcare Alliance in partnership with Cognitive Medical Systems. Building Angular and Power Apps interfaces, configuring RESTful APIs with role-based payloads, and translating Figma designs into pixel-perfect Angular Material components. Also shipping companion native mobile apps — Android via Bubblewrap and Android Studio, iOS via Swift and Xcode with TestFlight archiving — with unit testing handled in Jasmine and Karma.",
    ],
  },
  {
    name: "United States Postal Service",
    industry: "Government",
    paragraphs: [
      "Served as a Senior Developer on the USPS IBPS project, delivering high-quality front-end solutions using Angular, TypeScript, RxJS, state management, and component libraries. Designed and integrated UI components including modal dialogs and event-driven services, while managing API integrations and parameter updates. Conducted regression and unit testing on sprint releases to ensure reliability and performance.",
      "Collaborated within a 25-member cross-functional team, using VersionOne for ticketing, sprint planning, burndown tracking, and capacity management. Managed source control through GitHub, maintaining structured pull requests and updating CHANGELOG files. Utilized Google Developer Tools for debugging network requests and Postman to authenticate various user roles by generating tokens.",
    ],
  },
  {
    name: "United States Department of Education",
    industry: "Government",
    paragraphs: [
      "Led the development of multiple NAEP website sections by translating Adobe XD mockups into responsive, pixel-perfect HTML5, CSS3, and JavaScript interfaces with jQuery, JSON, and API integrations. Ensured accessibility through 508 compliance reviews and responsive design, while collaborating within a 30-member Agile Scrum team to perform testing and deploy updates to AWS S3 and internal CMS platforms. Improved development efficiency by integrating GitHub Copilot, significantly reducing coding time and boosting productivity.",
    ],
  },
  {
    name: "United States Department of Agriculture",
    industry: "Government",
    paragraphs: [
      "Contributed to the development of the Fire Environment Mapping System (FEMS) dashboard (wildfire.gov) as part of a 25-member Agile team. Utilized Elasticsearch for efficient record lookups and built Angular 14 components, services, and material themes to support a scalable UI. Developed Angular services to call multiple APIs and return aggregated data to a single component, leveraging TypeScript, promises, observables, data binding, and various UI elements. Integrated Kepler.gl to create interactive map layers and filters based on GraphQL query results. Collaborated on UI design using Figma and Abstract, and managed version control and CI/CD through GitLab and Jenkins pipelines. Employed React with hooks such as useEffect and useMemo for API response handling, Redux for state management, and Webpack for optimized bundling through a VPN. Troubleshot build errors with Maven and browser debugging tools, implemented Angular pipes for formatted durations, and maintained code quality using ESLint, Prettier, and other VSCode extensions.",
    ],
  },
  {
    name: "Halliburton",
    industry: "Energy",
    paragraphs: [
      "Contributed to the development of the VISUM V1 dashboard, focusing on building Caprock Integrity and Well Schematics visualizations using ECharts. Applied Agile methodologies and managed tasks in Jira, while closely monitoring GitLab pipelines and overseeing pull requests for production deployments. Utilized Maven for build management and Webpack with Babel loader for optimized bundling. Collaborated on UI design with Figma wireframes and developed features using Angular 11 and Angular CLI, leveraging material theme components and @mixins for consistent styling. Maintained code quality using ESLint, Prettier, and other VSCode extensions. Implemented Redux state management and filtering logic, and worked with React hooks for mobile page functionality. Regularly reported progress in business-facing standups and pair programmed with team members to meet critical deadlines and solve complex development challenges.",
    ],
  },
  {
    name: "Wex",
    industry: "Fintech",
    paragraphs: [
      "Contributed to the development of the WEX Developers API Portal (developer.wexinc.com), a centralized platform showcasing the full suite of WEX APIs. The portal provided detailed API documentation, use cases, and integration guides tailored for various departments and partners. Ensured the platform was intuitive, well-organized, and user-friendly to support developers in efficiently accessing and implementing WEX's API solutions.",
    ],
  },
  {
    name: "Department of Homeland Security",
    industry: "Government",
    paragraphs: [
      "Worked on the Mobius Inventory Dashboard as part of a 25-member Agile team, leveraging Elasticsearch for efficient record lookups. Developed Angular 11 components, services, and material themes to build a responsive and scalable user interface. Created Angular services to integrate multiple APIs and return aggregated data to a single component, utilizing TypeScript, promises, observables, data binding, and various UI elements. Managed code versioning and CI/CD workflows through GitLab, including pipeline monitoring and pull request handling. Additionally, resolved build issues using Maven and browser console debugging tools to ensure application stability and performance.",
    ],
  },
  {
    name: "Lockheed Martin",
    industry: "Defense",
    paragraphs: [
      "Worked on the development of single-page applications using Angular 8, implementing dynamic FormControl methods and step-based navigation through services and route guards. Collaborated within a DevOps team of 25 senior-level engineers, utilizing Jira for task management and branching workflows, and GitLab for version control and code reviews. Deployed and maintained SharePoint lists for content control and participated in Agile ceremonies including planning sessions and story point estimations. Integrated NgRx for state management using reducers, actions, and effects, and applied RxJS to handle observables and asynchronous operations. Utilized Jenkins for automated testing and deployments, and followed GitLab pipeline processes to resolve build errors. Maintained clean and consistent code using VSCode with ESLint, Prettier, and other essential extensions.",
    ],
  },
  {
    name: "General Dynamics",
    industry: "Defense",
    paragraphs: [
      "Contributed to the development of the FAFSA (MyStudentAid) mobile application for the U.S. Department of Education, supporting financial aid applicants through a secure and accessible digital platform. Held the necessary security clearance to work on classified projects. Ensured full Section 508 compliance by implementing accessibility attributes such as aria-label, aria-hidden, talkback support, and keyboard navigation. Worked within an Agile environment using Jira for task management, participating in daily standups and bi-weekly sprints. Managed code reviews and pull requests via Bitbucket. Utilized Ionic Cordova as the core mobile framework and built Angular 8 components and services for data handling. Conducted unit testing with Karma and Jasmine, and oversaw DevOps processes from planning to deployment. Modified Webpack for VPN-specific bundling, and used JavaScript observables with map operators for asynchronous operations. Developed across multiple environments using VS Code, Xcode, Android Studio, and Sublime Text.",
    ],
  },
  {
    name: "Idaho National Labs",
    industry: "Research",
    paragraphs: ["Built dashboard for monitoring energy."],
  },
  {
    name: "Office Depot",
    industry: "Retail",
    paragraphs: [
      "Supported the CompuCom merger by modernizing the VPS/OA Dashboard, converting legacy code into a scalable Angular 4 application. Leveraged Angular CLI, Material Themes, and Bootstrap components to build responsive dashboards and form interfaces. Utilized JavaScript observables and operators such as map, forEach, and reduce for efficient data processing, and implemented promises for reliable data transfer protocols. Developed dynamic JSON-based form controls in TypeScript and wrote modular SASS styles using @mixins. Built Angular services to handle data manipulation and API integration, ensuring smooth communication through JSON payloads based on user-driven parameters.",
      "Worked in a Test-Driven Development (TDD) environment using Jasmine and spyOn for robust unit testing. Collaborated directly with the business and principal developers in an Agile framework, managing tasks and code reviews via GitHub and Git Bash. Ensured Section 508 compliance with appropriate use of aria-labels, roles, and other accessibility standards. Tools used included Visual Studio Code and Notepad++ for development and debugging.",
    ],
  },
  {
    name: "NextEra Energy Resources",
    industry: "Energy",
    paragraphs: [
      "Developed UI components using Angular 2 and 4 with TypeScript, incorporating core Angular features such as components, modules, services, constructors, and directives. Converted static HTML pages into dynamic Angular web applications with data binding, filters, and reusable components. Created a global corporate theme using Angular Material Themes, leveraging @mixins and custom directives for consistent styling. Built responsive interfaces using Bootstrap and styled all elements with SASS. Utilized JavaScript observables with map operators and managed dependencies through Node Package Manager (NPM).",
      "Worked across two major Agile projects simultaneously, contributing in multiple sprints, ceremonies, and standups, while providing technical feedback and peer training. Managed tasks through Jira, updating workflows for QA and UAT, and committed code via Git repositories. Supported mobile development efforts using the Ionic framework. Designed logos and graphical assets using Adobe Photoshop CC to enhance UI branding and presentation.",
    ],
  },
  {
    name: "Activision — Call of Duty: Advanced Warfare",
    industry: "Entertainment",
    paragraphs: [
      "Converted the Call of Duty: Advanced Warfare launch site into a fully responsive mobile ecosystem as lead front-end developer on the Perficient engagement. Transformed layered PSD designs into HTML5, CSS3, and Bootstrap layouts with jQuery Mobile, and optimized the site to sustain 99.9% uptime through the high-traffic global launch of one of the year's biggest game releases.",
    ],
  },
  {
    name: "Salesforce.com",
    industry: "Technology",
    paragraphs: [
      "Served as lead front-end developer building UI features with Visualforce and Apex, alongside HTML5, CSS3, JavaScript, and jQuery. Participated in early Lightning Component pilots and implemented responsive layouts with CSS Flexbox across the platform.",
    ],
  },
  {
    name: "Locus Traxx, Inc.",
    industry: "Logistics",
    paragraphs: [
      "Built LocusTraxx.com and its companion mobile web app on an AngularJS, jQuery, PHP, MySQL, and C#/.NET stack with SQL Server integration. Beyond development, managed a team of .NET and Linux developers and QA staff, handling everything from design through deployment for the cargo-monitoring platform.",
    ],
  },
  {
    name: "Bankrate, Inc.",
    industry: "Financial Media",
    paragraphs: [
      "Led front-end development on the Interest.com redesign using HTML, CSS3, PHP, MySQL, JavaScript, and jQuery, including a WordPress migration within an ASP.NET/SQL Server environment.",
    ],
  },
];

export type Testimonial = {
  title: string;
  quote: string;
  name: string;
  company: string;
  featured?: boolean; // shown on the homepage
};

export const testimonials: Testimonial[] = [
  {
    title: "Upmost Satisfaction!",
    quote:
      "I am greatly pleased to recommend BUILDMYPAGE. He took up the task of building my business website, accommodating all my requirements to construct one as needed. He proved to be an integral part of attracting prospective customers to my website, which helped my business prosper ten-fold. His team of online marketing specialists took care of my marketing campaign to the point that I had no need to look over it. Within just about a few months, my website was bringing in great business to my company. Due to the unrelenting efforts of BUILDMYPAGE, my business website became the most profitable promotional campaigns launched so far within a calendar year. I am quite happy to take time out of my busy schedule to recommend his services.",
    name: "Candida Springer",
    company: "Blue Arrow",
  },
  {
    title: "A Trusted and Reliable Source!",
    quote:
      "It was a true pleasure working with BUILDMYPAGE on our massive project. Assigning him as our lead front-end developer felt like the right decision from the start. He managed to provide us a magnificent and modern user interface that was compatible across all browsers and devices. Not only did BUILDMYPAGE play an important role in our project but he also made efforts to meet tight deadlines and help other developers when needed. You will find impeccable craftsmanship and dedication with this developer and adding him to any project would be considered a brilliant decision.",
    name: "Matthew Bennett",
    company: "SalesForce.com",
  },
  {
    title: "The All Around Web Guy!",
    quote:
      "When we initially interviewed with BUILDMYPAGE we were impressed with the way he presented himself. He had an answer to every question we had and knew where to go right away. Just a few days after signing him on board we had a new user interface all laid out. A couple of weeks later, we had our first mobile web app. From then on all our web related projects were directed to and handled by him. This included project management, design, development, and deployment. It was a true pleasure to work with BUILDMYPAGE and the knowledge he had to offer.",
    name: "David Benjamin",
    company: "Locus Traxx, Inc.",
  },
  {
    title: "Extremely Positive Asset!",
    quote:
      "BUILDMYPAGE did an excellent job working on our site redesign and was an asset to our organization. He has excellent written and verbal communication skills, is extremely organized, can work independently and is able to follow through to ensure the job gets done. The redesign required a thorough knowledge of HTML, CSS, jQuery, ASP.net and Photoshop. He is always willing to offer his assistance and had an excellent rapport with everyone in the office. If his performance in our company is a good indication of how he would perform in yours, he would be an extremely positive asset to your program.",
    name: "Sharon Giannotti",
    company: "Bankrate, Inc.",
  },
  {
    title: "Finally Someone Who Understands Code!",
    quote:
      "I have collaborated with BUILDMYPAGE on multiple web development projects. He is fast, efficient and very knowledgable with web development programming and working with WordPress. His knowledge and efforts are just some of the many excellent qualities produced and shared by him. If you have a PSD that needs to come to life this is your guy. I would highly recommend him to anyone looking to build or customize a website or e-commerce platform.",
    name: "Mindi Bear",
    company: "Sr. Graphic Designer",
  },
  {
    title: "Fast and Efficient!",
    quote:
      "The level of code provided by BUILDMYPAGE was nothing short of phenomenal and exceeded our expectations. After providing him a PSD mockup, not even a day went by before we received a preview URL of the progress of our project. Our revisions were minimal and were made within a few hours, which gave us plenty of time to deploy. Not to mention the responsive layout now allows our site to reach out to a wider audience across multiple platforms. Expect excellent communication, knowledge, and leadership when working with this programmer.",
    name: "Andrew Berns",
    company: "Applied Card Systems",
    featured: true,
  },
  {
    title: "Someone Who Takes Initiative!",
    quote:
      "When my business first started out I had a great product in mind but knew little about marketing it online. Well to my surprise BUILDMYPAGE was one of my first clients to try out my product and loved it. He loved it so much he wanted to be part of the team and offered his web services to me. It only took BUILDMYPAGE about 5 minutes of explaining to me the benefits of having a website and its potential to bring in targeted consumers before I knew that this was perfect for me and my business. Now my company is running strong and my need for marketing has been happily solved.",
    name: "Terry Burger",
    company: "Burger Motorsports, LLC.",
  },
  {
    title: "The Right Guy for The Job, Period!",
    quote:
      "BUILDMYPAGE's excellent eye for design has benefited me tremendously. I now have the ability to send people to my website and have them view all event information for the exact day and time they choose. He took the time to sit with me and thoroughly listen to what I was looking for in my website. While explaining what I had in mind to BUILDMYPAGE, he already had a design layout in mind for me, and that design is still what is running my website today. Creativity, Reliability, and Dedication are just the few characteristics found within this designer.",
    name: "Brian Caplan",
    company: "Florida Group Rides, LLC.",
  },
  {
    title: "Your Knowledge Brought Me Success!",
    quote:
      "I will admit that I am still not that familiar with the internet and its capabilities. So therefore, I did not know of its potential and was hesitant at first. After weeks of carefully interviewing many different web designers and observing a lot of strong candidates, I decided to move forward with BUILDMYPAGE. He had the skills and ambition of someone who has goals in life and knows where they're going. Once BUILDMYPAGE started sending me rough drafts of what I was to expect from my website, I knew that my investment was in good hands. Since then my company has expanded tremendously and my clientele is right there with it. Thank you Sir!",
    name: "Edwin Ferhan",
    company: "ECS Tech, Inc.",
  },
];

export const contact = {
  heading: "Let's build something.",
  sub: "Tell us a little about your project and what you need. We'll get back to you within one business day.",
};
