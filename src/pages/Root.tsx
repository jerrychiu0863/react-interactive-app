import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function Root() {
  return (
    <div className='w-screen h-screen grid grid-rows-[48px_1fr]'>
      <Header />
      <div className='flex justify-center items-center'>
        <Outlet />
      </div>
    </div>
  )
}