import ATLSmall from "Images/atl-small.jpg";
import ATLLarge from "Images/atl-large.jpg";
import CartaLarge from "Images/carta-large.jpg";
import CartaSmall from "Images/carta-small.jpg";
import WordCloudsSmall from "Images/wordClouds-small.png";
import WordCloudsLarge from "Images/wordClouds.png";
import SkedgeSmall from "Images/skedge-small.jpg";
import SkedgeLarge from "Images/skedge-desktop2.jpg";
import ReactSmall from "Images/react-small.jpg";
import ReactLarge from "Images/react-desktop2.jpg";
import SVSmall from "Images/sv-small.jpg";
import SVLarge from "Images/sv-large.jpg";
import CommerceSmall from "Images/gnocchi-small.jpg";
import CommerceLarge from "Images/gnocchi.jpg";
import EatSmall from "Images/republic-small.jpg";
import EatLarge from "Images/republic-large.jpg";
import OpenSourceSmall from "Images/openSource-small.webp";
import OpenSourceLarge from "Images/openSource-large.webp";

export default [
  {
    name: "Atlassian",
    p1: "At Atlassian, I worked as a full-stack engineer aimed at improving Confluence performance and developer experience",
    p2: "I built tools designed to automate dependency removal, analyze JavaScript delivery to the browser, improve caching, and more",
    url: "https://www.atlassian.com/software/confluence",
    imgSmall: ATLSmall,
    imgLarge: ATLLarge,
  },
  {
    name: "Carta",
    p1: "At Carta Healthcare, I worked as a lead frontend engineer building tools for improving patient-care through AI and automation",
    p2: "Our team built a suite of tools for improving the quality of data collection, purchasing and inventory, and staff scheduling",
    url: "https://www.carta.healthcare",
    imgSmall: CartaSmall,
    imgLarge: CartaLarge,
  },
  {
    name: "Word Clouds",
    p1: "Word Clouds is a crossword puzzle game for all iOS and Android devices. Train your brain and vocabulary as you play through thousands of puzzles!",
    p2: "Words Clouds was built with React Native, a serverless backend using Google Cloud, and Node.js for generating crossword puzzles.",
    url: "https://itunes.apple.com/us/app/word-clouds/id1435511292?mt=8",
    imgSmall: WordCloudsSmall,
    imgLarge: WordCloudsLarge,
  },
  {
    name: "Skedge",
    p1: "Welcome to Skedge, an easy to use mobile and desktop app for small business owners and managers. Skedge allows you to manage your team's schedules in real time.",
    p2: "Your employees are notified of new shifts and schedule changes with their own mobile app. Skedge was developed with Meteor, Node, React, Electron, and Cordova.",
    imgSmall: SkedgeSmall,
    imgLarge: SkedgeLarge,
  },
  {
    name: "React",
    p1: "Welcome to REACT property management software. REACT will handle your maintenance, income, and expenses while creating accounting statements for you.",
    p2: "With a seperate apps for managers and owners, communication and issue tracking is instant. It has built-in real time chat for an easier means of communication.",
    imgSmall: ReactSmall,
    imgLarge: ReactLarge,
  },
  {
    name: "Open Source",
    p1: "Throughout a decade of building products for the web, there have been numerous opportunities to package up my work and donate it to the community",
    p2: "I've open sourced animation libraries, state management utilities, build-tools, performance analyzers, and more",
    imgSmall: OpenSourceSmall,
    imgLarge: OpenSourceLarge,
    url: "https://www.npmjs.com/~alexfigliolia",
  },
  {
    name: "Piper Chat",
    p1: "Piper Chat is a parody application based on the popular HBO television show Silicon Valley. It is a fully functional text, voice and video chat that is built for iOS, Android, and all modern browsers",
    p2: "Under the hood is JavaScript front to back. Core technologies include web sockets, WebRTC, MongoDB and views built with React/React Native.",
    imgSmall: SVSmall,
    imgLarge: SVLarge,
    url: "https://github.com/alexfigliolia/piperchat",
  },
  {
    name: "Republic 50",
    p1: "Republic 50 was a neighborhood restaurant in Queens, NY. Bootstrapping a on a budget, I spun up a quick website for them to use back in 2014",
    p2: "While the restaurant is no longer in business, I do still have an original prototype for the design of their website. Feel free to check it out!",
    imgSmall: CommerceSmall,
    imgLarge: CommerceLarge,
    url: "https://alexfigliolia.github.io/republic50",
  },
  {
    name: "Food Steez",
    p1: "A couple college friends opened a food-focused advertising agency. When I saw that their website was less-than responsive, I spun them up a quick design for them.",
    p2: "Today, their production website is far superior. It utilizes a bunch of new features that simply weren't around 8-10 years ago.",
    imgSmall: EatSmall,
    imgLarge: EatLarge,
    url: "https://alexfigliolia.github.io/fs",
  },
] as const;
