// components/Footer.tsx

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px text-center">
          {/* Footer illustration */}
          <div className="pointer-events-none -z-1" aria-hidden="true">
            <svg
              className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
              width="800"
              height="264"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
              <defs>
                <radialGradient
                  id="footerglow_paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(90 0 400) scale(315.089)"
                >
                  <stop stopColor="#3ABAB4" />
                  <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Logo */}
          <div className="mb-8">
            <Link href="/" aria-label="El Men-cito">
              <svg className="w-12 h-12 mx-auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#FFD700" />
                <text x="16" y="21" fontSize="16" textAnchor="middle" fill="#FF6347">👶</text>
              </svg>
            </Link>
          </div>

          {/* Fun text */}
          <div className="text-lg font-bold">
            <p>¡Gracias por tu visita a la página de El Men-cito!, ya quiero conocerte!</p>
            <p>© El Men y La Men, todos los derechos son nuestros.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}