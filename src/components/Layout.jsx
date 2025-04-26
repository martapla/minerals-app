import { Outlet } from 'react-router-dom'
import Navbar from './Navbar' 

export default function Layout({ handleSearch, search }) {
  return (
    <>
      <Navbar handleSearch={handleSearch} search={search}/>
      <main>
        <Outlet />
      </main>
    </>
  )
}