// components/PricingTables.tsx

import Image from 'next/image'
import BarcodeImage from '@/public/images/barcode.jpeg' // replace with the actual path to your barcode image

export default function PricingTables() {
  return (
    <section className="relative bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 border-t border-transparent dark:border-gray-800">
      {/* Background gradient (dark version only) */}
      <div className="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block" aria-hidden="true"></div>
      {/* End background gradient (dark version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-red-hat-display mb-4 text-white">Mesa de Regalos en Liverpool</h2>
            <p className="text-2xl text-white mb-4">Número de mesa: 51473457</p>
            <p className="text-xl text-white">¡Gracias por acompañarnos en esta celebración especial! 🎉</p>
          </div>

          {/* Mesa de Regalos */}
          <div className="max-w-md mx-auto text-center bg-white rounded-lg p-8 shadow-lg">
            <p className="text-gray-800 mb-4">Solicita a un vendedor que escanee este código de festejado una vez que realices una compra en tienda</p>
            <div className="flex justify-center">
              <Image src={BarcodeImage} alt="Código de festejado" width={400} height={400} className="object-contain" />
            </div>
            <p className="text-xl text-pink-600 mt-6 font-bold">¡Tu regalo será muy apreciado por El Men-cito! 🎁</p>
          </div>

        </div>
      </div>
    </section>
  )
}