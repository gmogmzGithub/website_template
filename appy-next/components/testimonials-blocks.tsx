// components/TestimonialsBlocks.tsx

import Image from 'next/image'
import TestimonialImage01 from '@/public/images/Tapon.jpeg'
import TestimonialImage02 from '@/public/images/Cachetes.jpeg'
import TestimonialImage03 from '@/public/images/Rufianes.png'
import TestimonialImage04 from '@/public/images/Delia.jpeg'
import TestimonialImage05 from '@/public/images/PakkiCornelia.jpeg'

export default function TestimonialsBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            {/* Testimonial 1 */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage01} width={56} height={56} alt="Testimonial 01" loading="lazy" aria-label="Testimonial from Familia García" />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ ¡Estoy emocionado, voy a tener un ahijado! Le voy a enseñar el escorpión!. “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Tapón</cite>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage02} width={56} height={56} alt="Testimonial 02" loading="lazy" aria-label="Testimonial from Patricia y Juan" />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“Yo voy a traer al Mundo al Mini-Men“</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Dra Daniela, la mejor ginecóloga de 🇲🇽</cite>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage03} width={56} height={56} alt="Testimonial 03" loading="lazy" aria-label="Testimonial from Zhenya Ritz" />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ Un Rufiancito a la familia “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">-Los Rufianes</cite>
              </div>
            </div>
            {/* Testimonial 4 */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage04} width={56} height={56} alt="Testimonial 04" loading="lazy" aria-label="Testimonial from Lisa Champ" />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ Traiganlo a San Francisco, Emma quiere concoerlo “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Delia, "La Cocina Minimalista"</cite>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <div className="relative inline-flex flex-col mb-4">
              <Image className="rounded-full" src={TestimonialImage05} width={56} height={56} alt="Testimonial 04" loading="lazy" aria-label="Testimonial from Pakki y Cornelia" />
            </div>
            <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ Woof!!!, woof wooof woofff! “</blockquote>
            <div className="font-red-hat-display font-bold mt-2">
              <cite className="not-italic">—Pakki y Cornelia</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}