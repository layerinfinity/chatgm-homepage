import { date } from 'yup';

export type ActivityPost = {
  imageUrl?: string;
  subHeading: string;
  heading: string;
  brief: string;
  date: string;
  link: string;
};

export const ACTIVITY_POSTS: Array<ActivityPost> = [
  {
    imageUrl: 'images/activities/why-is-it-more-than-your-average-chat-app.png',
    subHeading: 'Unveiling Chatgm',
    heading: "Why it's more than your average chat app",
    brief:
      'Explore why ChatGM is the ultimate choice for GenZ and crypto users today! With secure chats, user-friendly crypto wallets, and a web3 browser, we’re revolutionizing digital connectivity.',
    date: 'Mon, 05 June 2023',
    link: 'https://medium.com/@ethan_4414/bf462945c052',
  },
  {
    imageUrl: 'images/activities/introducing-our-exciting-new-avatar-of-chatgm.png',
    subHeading: 'Unveiling Chatgm',
    heading: 'Introducing Our Exciting New Avatar of Chatgm',
    brief:
      'Express your unique personality with a wide spectrum of avatars from wild beasts to cosmic zodiac signs. Add a vibrant twist to your chats while embracing our brand philosophy of creativity and innovation.',
    date: 'Mon, 05 June 2023',
    link: 'https://medium.com/@ethan_4414/84df802627f0',
  },
  {
    imageUrl: 'images/activities/crypto-for-dummies.png',
    subHeading: 'Unveiling Chatgm',
    heading: 'Crypto for dummies: Basic things you need to know about Crypto',
    brief:
      'How do you get started with crypto? What are the basics you need to know? And how can you stay safe and secure while exploring this new world? In this blog post, we will answer these questions.',
    date: 'Tue, 06 June 2023',
    link: 'https://medium.com/@ethan_4414/1c31a8f868d8',
  },
];
