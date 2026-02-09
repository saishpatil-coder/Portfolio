import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './Components/Head/Navbar';
import Profile from './Components/Head/Profile';
import { TicTac, Todo } from './Miniprojects';
import Calculator from './Miniprojects/Calculator/Calculator';
import CurrencyConverter from './Miniprojects/CurrencyConverter/CurrencyConverter';
import Resume from './Components/Resume/Resume';
import SmallResume from './Components/Resume/SmallResume';
import { isdark } from './context/dark';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaLaptopCode, FaArrowRight, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import SkillSection from './Components/skills/SkillSection';
import Footer from './Components/foot/Footer';
import Projects from './Components/projects/Projects';

const Float = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <div className="profile-hero-bg">
        <Profile />
      </div>

      {/* Projects Section */}
      <Projects />

      {/*Skill Section */}
      <SkillSection />

      {/* Resume Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">
        <SmallResume />
      </div>
    </>
  );
};

function App() {
  const [isDark, setISDark] = useState(false);
  let setDark = () => setISDark(!isDark);

  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <isdark.Provider value={{ isDark, setDark }}>
          <div className={isDark ? 'bg-dark text-light' : 'bg-light text-dark'}>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </isdark.Provider>
      ),
      children: [
        { path: "/", element: <Float /> },
        { path: "skills", element: <SkillSection /> },
        { path: "tictactoe", element: <TicTac /> },
        { path: "todo", element: <Todo /> },
        { path: "calculator", element: <Calculator /> },
        { path: "currency", element: <CurrencyConverter /> },
        { path: "resume", element: <Resume /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
