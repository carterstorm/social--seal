import FacebookSvg from "./assets/facebook_svg.svg";
import YoutubeSvg from "./assets/youtube_svg.svg";
import InstagramSvg from "./assets/instagram_svg.svg";
import LinkedInSvg from "./assets/linkedin_svg.svg";
import GoogleSvg from "./assets/google_svg.svg";
import TwitterSvg from "./assets/twitter_svg.svg";

import SwiperPhoto1 from "/swiper_1.jpg";
import SwiperPhoto2 from "/swiper_2.jpg";
import SwiperPhoto3 from "/swiper_3.jpg";
import SwiperPhoto4 from "/swiper_4.jpg";
import SwiperPhoto5 from "/swiper_5.jpg";
import { PersonType } from "./types";

// ----------------- Hero -----------------

export const socials = [
  {
    id: 1,
    socialImage: LinkedInSvg,
    path: "https://www.linkedin.com/",
  },
  {
    id: 2,
    socialImage: FacebookSvg,
    path: "https://www.facebook.com/",
  },
  {
    id: 3,
    socialImage: InstagramSvg,
    path: "https://www.instagram.com/",
  },
  {
    id: 4,
    socialImage: TwitterSvg,
    path: "https://twitter.com/",
  },
  {
    id: 5,
    socialImage: GoogleSvg,
    path: "https://www.google.com/",
  },
  {
    id: 6,
    socialImage: YoutubeSvg,
    path: "https://www.youtube.com/",
  },
];

// ----------------- Social Marketing -----------------

export const marketingCardsData = [
  { id: 1, title: "offices", number: 100 },
  { id: 2, title: "workers", number: 10 },
  { id: 3, title: "customers", number: 15 },
  { id: 4, title: "projects", number: 1300 },
];

// ----------------- Swiper Data -----------------

export const swiperData = [
  { id: 1, url: SwiperPhoto1 },
  { id: 2, url: SwiperPhoto2 },
  { id: 3, url: SwiperPhoto3 },
  { id: 4, url: SwiperPhoto4 },
  { id: 5, url: SwiperPhoto5 },
];

export const swiperBreakpoints = {
  340: {
    slidesPerView: 1.2,
    spaceBetween: 20,
  },
  390: {
    slidesPerView: 1.2,
    spaceBetween: 24,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 24,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  769: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

// ----------------- Monitoring Section Data -----------------

export const monitoringList = [
  {
    id: 1,
    text: "Brand Impersonation",
    borderColor: "#FFD78D",
    bgColor: "#FFFAF1",
  },
  {
    id: 2,
    text: "Compromised Account",
    borderColor: "#FFEF3E",
    bgColor: "#FFFFEE",
  },
  { id: 3, text: "Scams", borderColor: "#FFD78D", bgColor: "#FFFAF1" },
  {
    id: 4,
    text: "Hi-jacked Posts",
    borderColor: "#C0D4F1",
    bgColor: "#F6FCFF",
  },
  { id: 5, text: "Bad Sentiment", borderColor: "#FFEF3E", bgColor: "#FFFFEE" },
  { id: 6, text: "Bad Reviews", borderColor: "#FFB6D8", bgColor: "#FFF6FA" },
  {
    id: 7,
    text: "Competitor Envy",
    borderColor: "#CFE2CF",
    bgColor: "#F7FFF7",
  },
  { id: 8, text: "False Media", borderColor: "#C0D4F1", bgColor: "#F6FCFF" },
  {
    id: 9,
    text: "Low Social Authority",
    borderColor: "#FFAFAF",
    bgColor: "#FFF6F6",
  },
  {
    id: 10,
    text: "Information Inaccuracy",
    borderColor: "#DAC0FF",
    bgColor: "#FCF9FF",
  },
  {
    id: 11,
    text: "Missed Messages",
    borderColor: "#FFB6FF",
    bgColor: "#FFF6FF",
  },
];

// ----------------- People Section Data -----------------

export const people: PersonType[] = [
  {
    id: "1",
    name: "Ryan Vetrovs",
    jobTitle: "CEO Kawasaki Inc.",
    personImage: "/person_1.png",
  },
  {
    id: "2",
    name: "Emerson Saris",
    jobTitle: "CEO Kawasaki Inc.",
    personImage: "/person_2.png",
  },
  {
    id: "3",
    name: "Lindsey Schleifer",
    jobTitle: "CEO Kawasaki Inc.",
    personImage: "/person_3.png",
  },
];
