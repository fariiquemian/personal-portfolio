import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  web_dev,
  Wordpress,

  lenex,
  ascend,
  balmerlawn,
  bowman,
  gowers,
  t5group,
  threejs,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Work",
  },
  
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "WordPress Customization",
    icon: web,
  },
  {
    title: "WordPress Development",
    icon: mobile,
  },
  {
    title: "Headless WordPress",
    icon: backend,
  },
  {
    title: "PHP Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SENIOR WEB DEVELOPER",
    company_name: "AdVenture Media Group",
    icon: web_dev,
    iconBg: "#383E56",
    date: "2020 - present",
    points: [
      "AdVenture Media Group specializes in PPC management, Google Ads, and social media advertising,",
      "using data-driven strategies to optimize marketing campaigns.",
      "As a React developer, I worked on theme customization, bug fixes, responsive edits, and headless WordPress.",
      "I managed a team, conducted code reviews, and collaborated with designers for UI/UX improvements.",
      "My responsibilities included developing custom plugins, integrating third-party APIs, and optimizing website performance.",
      "I also worked with various CMS platforms like Shopify, Drupal, Magento, and Webflow,",
    ],
  },
  {
    title: "WORDPRESS DEVELOPER",
    company_name: "Factory 360",
    icon: Wordpress,
    iconBg: "#E6DEDD",
    date: "2015 - 2019",
    points: [
      "An award-winning agency blending digital and physical experiences for impactful marketing.",
      "Built custom responsive themes, optimized for retina displays using CSS media queries.",
      "Proficient in PHP, JavaScript, Bootstrap, and jQuery for frontend development.",
      "Specialized in WordPress, WooCommerce, Webflow, and CMS platforms like Drupal and Magento.",
      "Managed Webflow projects, optimized SEO, and integrated third-party APIs.",
      "Designed with HTML, CSS, SASS, and Bootstrap, ensuring mobile-friendly performance."
    ],
  },

];

const testimonials = [
  {
    testimonial: "Great communication and excellent problem-solving skills. Highly recommended!",
    name: "David",
    image: "https://shorturl.at/5l8s7",
  },
  {
    testimonial: "Highly skilled professional developer. My website runs perfectly now!",
    name: "John",
    image: "https://shorturl.at/5l8s7",
  },
  {
    testimonial: "Excellent work delivered on time with great attention to detail and professionalism.",
    name: "Paul",
    image: "https://shorturl.at/5l8s7",
  },
];
const projects = [
  {
    name: "ASCEND",
    description:
      "Ascend Indiana connects employers with skilled talent to bridge workforce gaps. It offers job seekers opportunities in high-growth industries. The platform helps companies find qualified professionals.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
    ],
    image: ascend,
    source_code_link: "https://ascendindiana.wpenginepowered.com/",
  },
  {
    name: "LENEX",
    description:
      "LENEX Steel specializes in commercial steel fabrication and design. Their platform showcases an impressive portfolio of past projects. It highlights service areas and provides easy inquiry options for clients.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "ajax",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
    ],
    image: lenex,
    source_code_link: "https://lenexsteel.com/",
  },
  {
    name: "COOL WITH BOWMAN",
    description:
      "Bowman Heating & Cooling provides comprehensive HVAC services. They serve Raleigh, Garner, and the Triangle area. Their team handles installations, repairs, and maintenance for all systems.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: bowman,
    source_code_link: "https://coolwithbowman.com/",
  },
  {
    name: "GOWER'S",
    description:
      "Gowers Brake & Alignment offers complete automotive repair services. They specialize in brake systems and wheel alignments. The shop provides maintenance for all vehicle makes and models.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
    ],
    image: gowers,
    source_code_link: "https://gowersbrakeandalignment.com/",
  },
  {
    name: "T5 GROUP",
    description:
      "T5 Group delivers professional automotive repair and maintenance. Their services include brake repairs and wheel alignment. They work on all types of vehicles with expert care.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: t5group,
    source_code_link: "https://t5groupllc.com/",
  },
  {
    name: "BALMER LAWN",
    description:
      "Balmer Lawn Hotel is a premier hotel in the city center. It features a luxurious spa and modern fitness center. Guests can enjoy scenic views from the rooftop terrace and enjoy a relaxing stay.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: balmerlawn,
    source_code_link: "https://www.balmerlawnhotel.com/",
  },
];
export { services, technologies, experiences, testimonials, projects };
