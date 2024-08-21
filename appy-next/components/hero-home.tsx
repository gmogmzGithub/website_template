// components/HeroHome.tsx

import Image from 'next/image'
import PlaceholderImage from '@/public/images/Its-a-boy.png' // Usando una imagen de marcador de posición

export default function HeroHome() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-7xl mb-4 font-red-hat-display font-black" data-aos="fade-down">
                ¡Ya quiero conocerte!,
                <br />
                Atte:
                <br />
                <span className="text-8xl">Renato</span>
                <br />
                <span className="text-4xl">El mini-Men</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
                Estamos esperando la llegada de nuestro bebé en febrero de 2025. ¡Gracias por acompañarnos en este viaje!
              </p>
            </div>
            <div className="md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up" data-aos-delay="450">
              <Image
                src={PlaceholderImage}
                alt="Ultrasonido del bebé"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}