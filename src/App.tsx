import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import Root from './pages/Root';
import Home from './pages/Home';
import Piano from './pages/Piano';
import TicTacToe from './pages/TicTacToe';
import MusicPlayer from './pages/MusicPlayer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/piano', element: <Piano /> },
      { path: '/tictactoe', element: <TicTacToe /> },
      { path: '/musicplayer', element: <MusicPlayer /> }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
