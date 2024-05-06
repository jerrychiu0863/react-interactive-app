import { NavLink } from "react-router-dom"

export default function Header() {
  const classes = (isActive: Boolean) => `inline-block px-2 flex items-center justify-center border-r border-gray-300 ${isActive ? 'bg-gray-600 text-white' : ''}`

  return (
    <header className='border-y border-gray-300'>
      <div className='h-full grid grid-cols-6'>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return classes(isActive)
          }}>
          Home
        </NavLink>
        <NavLink
          to="/piano"
          className={({ isActive }) => {
            return classes(isActive)
          }}>
          Piano
        </NavLink>
        <NavLink
          to="/tictactoe"
          className={({ isActive }) => {
            return classes(isActive)
          }}>
          Tic-Tac-Toe
        </NavLink>
        <NavLink
          to="/musicplayer"
          className={({ isActive }) => {
            return classes(isActive)
          }}>
          Music Player
        </NavLink>
      </div>
    </header>
  )
}