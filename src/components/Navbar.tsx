// components/Navbar.tsx
import React from 'react'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu' // Lägg till denna import

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-8">
      <ul className="flex justify-between">
        <li className="mr-4">
          <Link href="/">Min Webbyrå</Link>
        </li>
        <li>
          <HamburgerMenu /> 
          {/* Lägg till denna rad */}
          <ul className="hidden lg:flex space-x-4"> {/* Lägg till "hidden lg:flex" här */}
            <li className="mr-4">
              <Link href="/tjanster">Tjänster</Link>
            </li>
            <li className="mr-4">
              <Link href="/seo">SEO</Link>
            </li>
            <li className="mr-4">
              <Link href="/omoss">Om oss</Link>
            </li>
            <li className="mr-4">
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
