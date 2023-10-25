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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Search Engine Optimization",
    icon: mobile,
  },
  {
    title: "App Development",
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
    title: "Full Stack Developer",
    company_name: "Freelancing",
    icon: 'https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png',
    iconBg: "#383E56",
    date: "November 2022 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with international clients and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Laudco Media",
    icon: 'https://www.laudco.com/wp-content/uploads/2021/10/cropped-NkqJmjVfVYE9cegFgw0V-2.png',
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Wordpress and other related technologies.",
      "SEO of websites and and ensuring cross-browser compatibility.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a 3D Data graph website as our product, but Ravi proved me wrong.",
    name: "George Padvorac",
    designation: "CO-Founder",
    company: "nwis",
    image: "https://media.licdn.com/dms/image/D5635AQEKwSmj-ospXQ/profile-framedphoto-shrink_400_400/0/1696699346925?e=1698811200&v=beta&t=3q6ZO9QpTj7IHN73WqCUPzeZN7Y-T6d765Qh0MConqo",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ravi does.",
    name: "Ashwin",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ravi optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Pshyco",
    description:
      "SocialPshyco is a social media website. Here user can upload posts and also users can see other users posts and also like comment their posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ravi80595/socialPshycho",
  },
  {
    name: "Pharmbuddy",
    description:
      "Pharmbuddy is an E-commerce website with user-friendly features for shopping and a custom Content Management System (CMS) that simplifies admin tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/itsDipaks/Farm-Buddy.com",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
