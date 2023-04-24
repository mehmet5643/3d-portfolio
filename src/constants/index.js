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
    waffle,
    html,
    css,
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
    threejs
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
        
      ],
    },
    {
      title: "Blockchain Developer",
      company_name: "Rens Token",
      icon: company,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - May 2022",
      points: [
        
      ],
    },
    {
      title: "Blockchain Developer",
      company_name: "BGO Team",
      icon: bgo,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - March 2023",
      points: [
       
      ],
    },
    {
      title: "Blockchain Developer",
      company_name: "Amagroups",
      icon: amagroups,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - April 2023",
      points: [
        
      ],
    },
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
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };