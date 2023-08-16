import breakout from "./breakout.png";
import furniture from "./furniture.png";
import quiz from "./quiz.png";
import tracalories from "./tracalories.png";
import todolist from "./todolist.png";
import profileOne from "./pictureF.jpg";
import profileTwo from "./pictureG.jpg";
import bubbleOne from "./bubble1.jpg";
import bubbleTwo from "./bubble2.jpg";
export { profileOne, profileTwo, bubbleOne, bubbleTwo };

export const Projects = [
  {
    id: "0",
    title: "Furniture Store",
    img: furniture,
    features: {
      one: "Add and remove Items from Cart",
      two: "Display Items in Shopping Cart",
      three: "Individual/total Price of each Items",
    },
    bulbColor: "#ffa52f",
    linkLive: "https://github.com/BeinRain06/furniture-store.git",
  },

  {
    id: "1",
    title: "Breakout Game",
    img: breakout,
    features: {
      one: "Move Paddle Right And Left",
      two: "Move Ball",
      three: "Break Bricks",
    },
    bulbColor: "#664cd6",
    linkLive: "https://github.com/BeinRain06/breakout-game.git",
  },
  {
    id: "2",
    title: "Quiz App",
    img: quiz,
    features: {
      one: "Set Numbers Questions",
      two: "Skip Questions",
      three: "Show Resume Correct Answers",
    },
    bulbColor: "#d64c6a",
    linkLive: "https://github.com/BeinRain06/quiz-app.git",
  },

  {
    id: "3",
    title: "Tracalorie App",
    img: tracalories,
    features: {
      one: "Add or remove Meals/Workouts ",
      two: "Set Limit Calories",
      three: "Show Total Calories remaining",
    },
    bulbColor: "#57103c",
    linkLive: "https://github.com/BeinRain06/tracalorie-app.git",
  },

  {
    id: "4",
    title: "To-do List",
    img: todolist,
    features: {
      one: "Dark and light Mode",
      two: "Add and Delete To-do Items",
      three: "Set Priority for Tasks",
    },
    bulbColor: "#fcff36",
    linkLive: "https://github.com/BeinRain06/To-Do-List.git",
  },
];
