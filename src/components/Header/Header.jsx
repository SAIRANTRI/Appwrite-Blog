import React from 'react'
import { Container, LogoIcon, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  return (
    <header className='fixed top-0 left-0 w-full z-50   border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"'>
      <Container>
        <nav className='flex items-center justify-between '>
          <div className='mr-4 '>
            <Link to='/'>
              <LogoIcon width='50px' />
            </Link>
          </div>
          <ul className='flex space-x-4 text-sm'>
            {navItems.map(item => (
              item.active && (
                <li key={item.name}>
                  <button 
                    onClick={() => navigate(item.slug)}
                    className='p-4 button relative border border-blue-500 rounded-xl inline-flex items-center text-sm justify-center h-11 transition-colors hover:text-color-1
    px || "px-7"
  } {white ? "text-n-8" : "text-n-1"'
                  >
                    {item.name}
                  </button>
                </li>
              )
            ))}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
