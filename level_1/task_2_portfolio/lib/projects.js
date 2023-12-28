import madlibs from "../public/projects/madlibs.jpg";
import melon from "../public/projects/melon.jpg";
import amazd from "../public/projects/amazd.jpg";
import unify from "../public/projects/unify.jpg";

const projects = [
  {
    id: 1,
    title: "10 Melon",
    description: "10 Melon is a movie website designed with Next.js & Tailwind CSS, offering a diverse range of films. Providing detailed descriptions, trailers, and recommendations, it's the ultimate destination for movie enthusiasts.",
    image: melon.src,
    path: "https://10melon.netlify.app/",
    code: "https://github.com/liliumorion/movie-project-alfrak-betikh"
  },
  {
    id: 2,
    title: "madlibs",
    description: "Madlibs is an entertaining word game that's suitable for all ages, where players fill in the blank with various types of words without knowing the context of the story, which often results in funny or nonsensical combinations.",
    image: madlibs.src,
    path: "https://liliumorion.github.io/madlibz/",
    code: "https://github.com/liliumorion/madlibz"
  },
  {
    id: 3,
    title: "AmaZD",
    description: "AmaZD, crafted with Next.js & Tailwind CSS, is an user-friendly e-commerce platform that offers a range of products across different categories like fashion & electronics using a third-party API, ensuring an exceptional shopping journey.",
    image: amazd.src,
    path: "https://e-commerce-project-amazon.vercel.app/",
    code: "https://github.com/liliumorion/e-commerce-project-amazon"
  },
  {
    id: 4,
    title: "Unify",
    description: "Unify is a platform that promotes charitable actions where users can exchange their daily items, ensuring community connections while making a positive social impact and encouraging sustainability.",
    image: unify.src,
    path: "https://unify-team-a.vercel.app/",
    code: "https://unify-team-a.vercel.app/"
  },
];

export default projects;