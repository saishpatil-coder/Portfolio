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
      title: "Todo App",
      description: "A modern todo application with local storage and filtering capabilities",
      tech: ["React", "CSS", "LocalStorage"],
      link: "/todo",
      image: "/react.png"
    },
    {
      title: "Tic Tac Toe",
      description: "Interactive game with win detection and game history",
      tech: ["React", "JavaScript", "CSS"],
      link: "/tictactoe",
      image: "/js.png"
    },
    {
      title: "Payment Gateway",
      description: "Secure payment processing system with multiple payment options",
      tech: ["React", "Node.js", "Stripe"],
      link: "/payment",
      image: "/react2.png"
    }
  ];
  export { skills, projects };