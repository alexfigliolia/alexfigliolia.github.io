import ATLLarge from "Images/atl-large.jpg";
import ATLSmall from "Images/atl-small.jpg";
import CartaLarge from "Images/carta-large.jpg";
import CartaSmall from "Images/carta-small.jpg";
import OpenSourceLarge from "Images/openSource-large.webp";
import OpenSourceSmall from "Images/openSource-small.webp";
import SkedgeLarge from "Images/skedge-desktop2.jpg";
import SkedgeSmall from "Images/skedge-small.jpg";
import WordCloudsLarge from "Images/wordClouds.png";
import WordCloudsSmall from "Images/wordClouds-small.png";

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
    name: "Open Source",
    p1: "Throughout a decade of building products for the web, there have been numerous opportunities to package up my work and donate it to the community",
    p2: "I've open sourced animation libraries, state management utilities, build-tools, performance analyzers, and more",
    imgSmall: OpenSourceSmall,
    imgLarge: OpenSourceLarge,
    url: "https://www.npmjs.com/~alexfigliolia",
  },
  {
    name: "Skedge",
    p1: "Welcome to Skedge, an easy to use mobile and desktop app for small business owners and managers. Skedge allows you to manage your team's schedules in real time.",
    p2: "Your employees are notified of new shifts and schedule changes with their own mobile app. Skedge was developed with Meteor, Node, React, Electron, and Cordova.",
    imgSmall: SkedgeSmall,
    imgLarge: SkedgeLarge,
  },
] as const;
