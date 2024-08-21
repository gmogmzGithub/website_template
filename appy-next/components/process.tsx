// components/Process.tsx

import Image from 'next/image'
import MockupImage02 from '@/public/images/mockup-ultrasonido-02.jpg'
import MockupImage03 from '@/public/images/baby_shower.png'
import MockupImage04 from '@/public/images/Chupi-Shower.png'
import IphoneMockup from '@/public/images/iphone-mockup.png'

export default function Process() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Los pasos hacia la llegada de El Mini-Men</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Acompáñanos en estos momentos especiales mientras esperamos la llegada de nuestro bebé.</p>
          </div>
          <div className="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 md:grid-cols-3 items-start md:max-w-none">
            {/* 1st Item */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">
                <span className="text-3xl">👶</span>
              </div>
              <div className="inline-flex relative justify-center items-center">
                <Image className="absolute" src={MockupImage02} width={990} height="624" style={{ maxWidth: '90%' }} alt="Ultrasonido" loading="lazy" />
                <Image className="relative max-w-full mx-auto h-auto pointer-events-none" src={IphoneMockup} width={344} height="674" alt="iPhone mockup" aria-hidden="true" loading="lazy" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold">Primer Ultrasonido</h3>
                <p className="text-gray-600 dark:text-gray-400">El momento en que vimos a Renato por primera vez.</p>
              </div>
            </div>
            {/* 2nd Item */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">
                <span className="text-3xl">🎉</span>
              </div>
              <div className="inline-flex relative justify-center items-center">
                <Image className="absolute" src={MockupImage03} width={290} height="624" style={{ maxWidth: '84.33%' }} alt="Baby Shower" loading="lazy" />
                <Image className="relative max-w-full mx-auto h-auto pointer-events-none" src={IphoneMockup} width={344} height="674" alt="iPhone mockup" aria-hidden="true" loading="lazy" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold">Baby Shower</h3>
                <p className="text-gray-600 dark:text-gray-400">Para que le demos bendiciones a Geri.</p>
              </div>
            </div>
            {/* 3rd Item */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">
                <span className="text-3xl">🍾</span>
              </div>
              <div className="inline-flex relative justify-center items-center">
                <Image className="absolute" src={MockupImage04} width={290} height="624" style={{ maxWidth: '84.33%' }} alt="Chupi-shower" loading="lazy" />
                <Image className="relative max-w-full mx-auto h-auto pointer-events-none" src={IphoneMockup} width={344} height="674" alt="iPhone mockup" aria-hidden="true" loading="lazy" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold">Chupi-shower</h3>
                <p className="text-gray-600 dark:text-gray-400">Una pequeaña peda, pero con pañales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}