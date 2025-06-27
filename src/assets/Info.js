const skills = [
    { key: "2", src: "icons/cpp.png", desc: "C++" },
    { key: "3", src: "icons/html.png", desc: "HTML" },
    { key: "4", src: "icons/css.png", desc: "CSS" },
    { key: "5", src: "icons/js.png", desc: "JavaScript" },
    { key: "6", src: "icons/react.png", desc: "React.js" },
    { key: "7", src: "icons/nodejs.png", desc: "Node.js" },
    { key: "8", src: "icons/expressjs.png", desc: "Express.js" },
    { key: "9", src: "icons/sql.png", desc: "SQL" },
    { key: "11", src: "icons/tailwind.png", desc: "Tailwind CSS" },
    { key: "12", src: "icons/git.png", desc: "Git" },
  ];

  const projects = [
    {
      title: "Calculator",
      description: "A modern calculator with glassmorphism design, supporting basic arithmetic operations with beautiful animations",
      tech: ["React", "CSS", "JavaScript"],
      link: "/calculator",
      githubLink: "https://github.com/saishpatil-coder/calculator",
      image: "/projects/calculator.png"
    },
    {
      title: "To-do App",
      description: "A modern todo application with local storage, filtering capabilities, and beautiful timeline design",
      tech: ["React", "CSS", "LocalStorage"],
      link: "/todo",
      githubLink: "https://github.com/saishpatil-coder/portfolio/tree/main/src/Miniprojects/projects",
      image: "/projects/todo.png"
    },
    {
      title: "Tic Tac Toe",
      description: "Interactive game with win detection, score tracking, and modern animations",
      tech: ["React", "JavaScript", "CSS"],
      link: "/tictactoe",
      githubLink: "https://github.com/saishpatil-coder/portfolio/tree/main/src/Miniprojects/TicTacToe",
      image: "/projects/tictac.png"
    },
    {
      title: "Agri-Connect",
      description: "A smart contract farming platform that bridges the gap between farmers and buyers, ensuring fair trade, transparency, and income stability.",
      tech: ["React", "Node.js", "Express", "MongoDB", "EJS", "CSS"],
      link: null,
      githubLink: "https://github.com/saishpatil-coder/AgriConnect",
      image: "/projects/CropConnect.png"
    }
    
  ];
  export { skills, projects };