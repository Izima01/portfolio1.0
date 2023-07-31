import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';
import work4 from '../../assets/work4.jpg';
import work5 from '../../assets/work5.jpg';

export const projectsData = [
    {
        id: 1,
        image: work3,
        title: 'Rest Countries API',
        stack: ['HTML', 'CSS', 'JavaScript', 'API'],
        description: 'A web app of all the countries of the world. I consumed Restcountries API and sorted and filtered the countries. You can open a details page for each country and open details for the border countries on the details page',
        github: 'https://www.github.com/Izima01/Rest-Countries-API',
        live: 'https://artsy-marketplace.netlify.app/'
    },
    {
        id: 2,
        image: work1,
        title: 'Gaming Multi Step Form',
        stack: ['React', 'TailwindCSS', 'React-Switch' ],
        description: 'A Frontend Mentor Challenge. A form for a gaming program with different steps and options for different time frames and add-ons',
        github: 'https://github.com/Izima01/multi-step-form',
        live: 'https://fe-mentor-multi-step-form.netlify.app/'
    },
    {
        id: 3,
        image: work2,
        title: 'Crypto website landing page',
        stack: ['React', 'TailwindCSS', 'Framer Motion'],
        description: 'A landing page for a cryptocurrency currency. One of my first projects on React',
        github: 'https://www.github.com/Izima01/Crappo',
        live: 'https://crappo-challengeizzy.netlify.app/'
    },
    {
        id: 4,
        image: work4,
        title: 'Music Player Appp',
        stack: ['React', 'TailwindCSS','Axios', 'React Context', ],
        description: 'A music palyer app developed with React. I consumed a custom API and used it to display the songs and albums. You can play, pause, shuffle. Also like songs and view the liked songs',
        github: 'https://www.github.com/Izima01/Musica',
        live: 'https://izzycodes-musica.netlify.app/'
    },
    {
        id: 5,
        image: work5,
        title: 'NFT E-Commerce App',
        stack: ['React', 'TailwindCSS', 'Redux Toolkit', 'Framer Motion', 'Firebase'],
        description: 'An E-commerce app for NFTs where the data is gotten from Firebase. In the marketplace, you can sort and filter the products according to price, category e.t.c. You can add to cart and view your cart',
        github: 'https://www.github.com/Izima01/artsy-marketplace',
        live: 'https://artsy-marketplace.netlify.app/'
    },
];