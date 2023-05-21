import {
  mobile,
  backend,
  creator,
  web,
  blockchain,
  javascript,
  typescript,
  solidity,
  hardhat,
  stake,
  recycle,
  waffle,
  html,
  css,
  mern,
  company,
  reactjs,
  redux,
  tailwind,
  bionluk,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  amagroups,
  bgo,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: blockchain,
  },
  {
    title: "Solidity Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Git",
    icon: git,
  },

  {
    name: "Hardhat",
    icon: hardhat,
  },
  {
    name: "Waffle",
    icon: waffle,
  },
];

const experiences = [
  {
    title: "2D Animator",
    company_name: "Bionluk",
    icon: bionluk,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Oct 2021",
    points: [
      "Worked as a 2D animator at Bionluk, an online platform for freelancers",
      "Created videos and animations for various sectors, such as education, advertising and entertainment",
      "Used Adobe Animate, After Effects and Photoshop programs to design and edit animations",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "BGO Team",
    icon: bgo,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - May 2023",
    points: [
      "Bgo team is a team where university students and young age group work voluntarily to bring innovative ideas to life.",
      "BGOART, the art project of Bgo team, I made a site where users can exhibit their own pictures with the help of artificial intelligence or like a work of art.",
      "I used react, tailwind and solidity technologies in BGOART project.",
      "In the BGOART project, I created a claim page for token contract, nft contract and users to receive their salaries.",
      "I managed the process with hardhat and bsc network in BGOART project.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Amagroups",
    icon: amagroups,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Resume",
    points: [
"Here I wrote ERC-20 token contract, ERC-1155 NFT contract and staking contract. At the same time, the staking contract I wrote is innovative and a first, as it provides an extra boost when staked with the boost feature of NFTs. At this company I did these:",
"The ERC-20 token contract is a standard that defines the name, symbol, decimal number, total supply, balances and transfer transactions of tokens.",
 "The ERC-1155 NFT contract is a standard that supports both fungible and non-fungible tokens and enables the creation of multiple token types in a single contract.",
"A stake contract is a contract that allows users to earn interest by locking their tokens for a certain period of time. The staking contract I wrote increases the interest rate of staked tokens using the boost feature of NFTs."  
]},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zero waste Web 3.0",
    description:
      "Recycle Token is a cryptocurrency rewarded to users who recycle. The Recycle Token is created and operated via smart contracts. In the Recycle Token system, users drop waste objects on active devices for recycling. Active devices recognize waste objects with image processing technology and add points to the user's account. In the Recycle Token system, users drop waste objects on active devices for recycling. Active devices recognize waste objects with image processing technology and add points to the user's account.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
      {
        name: "machineLearning",
        color: "pink-text-gradient",
      },
    ],
    image: recycle,
    source_code_link: "https://github.com",
  },
  {
    name: "Stake Web 3.0",
    description:
      "Here, I wrote a staking contract using the ERC-1155 and ERC-20 token standards, which allows users to stake ERC-1155 NFTs and receive ERC-20 tokens as a reward. The staked NFTs act as a boost factor that increases the reward amount according to the duration of the stake.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
      {
        name: "stake",
        color: "pink-text-gradient",
      },
    ],
    image: stake,
    source_code_link: "https://github.com/mehmet5643/stakeWeb3",
  },
  {
    name: "Ai Mern Image Generation",
    description:
      "Where you can create amazing pictures with AI using MERN DALLE, a state-of-the-art artificial intelligence model. You can also share your creations with the community and get feedback from other users. Whether you want to make art, memes, logos or anything else, MERN DALLE can help you unleash your creativity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "dalle",
        color: "pink-text-gradient",
      },
    ],
    image: mern,
    source_code_link: "https://github.com/mehmet5643/ai-mern-image-generation",
  },
];

export { services, technologies, experiences, testimonials, projects };
