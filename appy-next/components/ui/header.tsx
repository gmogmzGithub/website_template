// components/Header.tsx

import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-5">
            <Link href="/" className="block" aria-label="El Men-cito">
              <Logo />
            </Link>
          </div>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}