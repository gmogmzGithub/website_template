import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
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
          
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Middle links */}
            <div className="w-1/3 text-sm text-gray-700 mb-2 md:mb-0 md:order-1">
                <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                    Terms
                </a>{' '}
                ·{' '}
                <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                    Privacy Policy
                </a>
            </div>

            {/* Logo */}
            <Link className="flex-none md:order-2 mx-auto" href="/" aria-label="Cruip">
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_a">
                      <stop stopColor="#3ABAB4" offset="0%" />
                      <stop stopColor="#7F9CF5" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_b">
                      <stop stopColor="#3ABAB4" offset="0%" />
                      <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#flogo_a)" />
                  <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#flogo_b)" />
                </svg>
            </Link>

            {/* Copyrights note */}
            <div className="w-1/3 text-gray-600 dark:text-gray-400 text-sm md:order-3 text-right">
                &copy; Cruip.com. All rights reserved.
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
