import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Head/Navbar';
import Profile from './Components/Head/Profile';
import Skills from './Components/Head/Skills';
import TicTac from './Miniprojects/TicTacToe/TicTac';
import Todo from './Miniprojects/projects/Todo'

// Define the Float component
const Float = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Float />, // Use the Float component here
      children: [
        { path: "skills", element: <Skills /> },
        // { path: "/", element: <Profile /> }
        { path: "/", element: <Profile></Profile> },
        { path: "tictactoe" , element : <TicTac></TicTac>},
        { path:"todo",element:<Todo></Todo>}
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
