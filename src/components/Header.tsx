'use client'
import { X, Menu } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='font-bold bg-opacity-90 shadow-md fixed top-0 left-0 right-0 z-20 bg-gray-900'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-100'>Anjan Shomodder</h1>
        <nav className='hidden md:flex space-x-4'>
          <a href='#about' className='text-gray-300 hover:text-gray-100'>
            About
          </a>
          <a href='#work' className='text-gray-300 hover:text-gray-100'>
            Work
          </a>
          <a href='#projects' className='text-gray-300 hover:text-gray-100'>
            Projects
          </a>
          <a href='#youtube' className='text-gray-300 hover:text-gray-100'>
            YouTube
          </a>
          <a href='#contact' className='text-gray-300 hover:text-gray-100'>
            Contact
          </a>
        </nav>
        <button
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className='text-gray-100' />
          ) : (
            <Menu className='text-gray-100' />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className='md:hidden bg-gray-800 px-4 py-2'>
          <a
            href='#about'
            className='block py-2 text-gray-300 hover:text-gray-100'
          >
            About
          </a>
          <a
            href='#work'
            className='block py-2 text-gray-300 hover:text-gray-100'
          >
            Work
          </a>
          <a
            href='#projects'
            className='block py-2 text-gray-300 hover:text-gray-100'
          >
            Projects
          </a>
          <a
            href='#youtube'
            className='block py-2 text-gray-300 hover:text-gray-100'
          >
            YouTube
          </a>
          <a
            href='#contact'
            className='block py-2 text-gray-300 hover:text-gray-100'
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
