import work1 from '../../assets/work1.webp';
import work4 from '../../assets/work4.webp';
import work5 from '../../assets/work5.webp';
import work6 from '../../assets/work6.webp';
import work8 from '../../assets/work8.webp';
import work9 from '../../assets/work9.webp';
import work10 from '../../assets/work10.png';
import work12 from '../../assets/work 12.png';

export const projectsData = [
  {
    id: 1,
    category: 'fullstack',
    image: work12,
    title: 'Travaye Web App',
    stack: [
      'React',
      'Tailwind',
      'MongoDB',
      'Express',
      'NodeJS',
      'Notification API',
    ],
    description:
      'A web app to browse, save, book outing locations in your area based on different categories and budgets',
    github: '',
    live: 'https://www.travaye.ng/',
  },
  {
    id: 2,
    category: 'fullstack',
    image: work10,
    title: 'RenCostume Web App',
    stack: ['React', 'Zustand', 'SupaBase'],
    description:
      'An e-commerce web app to rent and buy costumes for acting or parties.',
    github: 'https://github.com/Razeetech/RENCOSTUME',
    live: 'https://www.rencostume.com/',
  },
  {
    id: 4,
    category: 'fullstack',
    image: work8,
    title: 'Talkative Chat App',
    stack: [
      'React',
      'TailwindCSS',
      'Zustand',
      'TypeScript',
      'MongoDB',
      'Express JS',
      'Node JS',
      'Socket.io',
    ],
    description:
      'A full stack chat app where you can chat personally. You can create group chats, add or remove people on it and chat. Real-time notifications with SocketIO and fully responsive',
    github: 'https://github.com/Izima01/talkative-chat/',
    live: 'https://talkative-chat.vercel.app/',
  },
  {
    id: 5,
    category: 'fullstack',
    image: work9,
    title: 'E-Learning App',
    stack: [
      'React',
      'TailwindCSS',
      'UseContext',
      'MongoDB',
      'Express JS',
      'Node JS',
    ],
    description:
      'A full stack E-Learning app where you can find E-books, VIdeos and full on courses to learn and upskill.',

    github: '',
    live: 'https://mellow-longma-801e80.netlify.app/',
  },
  {
    id: 6,
    category: 'frontend',
    image: work5,
    title: 'NFT E-Commerce App',
    stack: [
      'React',
      'TailwindCSS',
      'Redux Toolkit',
      'Framer Motion',
      'Firebase',
    ],
    description:
      'An E-commerce app for NFTs In the marketplace, you can sort and filter the products and add to cart',
    github: 'https://www.github.com/Izima01/artsy-marketplace',
    live: 'https://artsy-marketplace.netlify.app/',
  },
  {
    id: 7,
    category: 'frontend',
    image: work6,
    title: 'Trivia App',
    stack: ['React', 'Redux Toolkit', 'React Swiper', 'Open Trivia API'],
    description:
      'A quiz app with API gottr=en from an API which has different categories and difficulties of trivia questions. Countdown timer and scoring system',
    github: 'https://github.com/Izima01/portfolio1.0',
    live: 'https://izzys-trivia-app.netlify.app',
  },
  {
    id: 8,
    category: 'frontend',
    image: work4,
    title: 'Music Player App',
    stack: ['React', 'TailwindCSS', 'Axios', 'React Context', 'Rest API'],
    description:
      'A music palyer app developed with React. I consumed a custom API and used it to display the songs and albums. You can play, pause, shuffle. Also like songs and view the liked songs',
    github: 'https://www.github.com/Izima01/Musica',
    live: 'https://izzycodes-musica.netlify.app/',
  },
  {
    id: 9,
    category: 'frontend',
    image: work1,
    title: 'Gaming Multi Step Form',
    stack: ['React', 'TailwindCSS', 'React-Switch'],
    description:
      'A Frontend Mentor Challenge. A form for a gaming program with different steps and options for different time frames and add-ons',
    github: 'https://github.com/Izima01/multi-step-form',
    live: 'https://fe-mentor-multi-step-form.netlify.app/',
  },
];
