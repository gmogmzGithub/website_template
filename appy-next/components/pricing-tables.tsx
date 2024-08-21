// components/PricingTables.tsx

import Image from 'next/image'
import BarcodeImage from '@/public/images/barcode.jpeg' // Reemplaza con la ruta correcta de la imagen del código de barras
import AmazonImage from '@/public/images/MesaDeRegalosAmazon.png' // Reemplaza con la ruta correcta de la imagen de Amazon

export default function PricingTables() {
  return (
    <>
      {/* Mesa de Regalos Amazon */}
      <section className="relative bg-gradient-to-r from-blue-400 via-blue-500 to-orange-400 border-t border-transparent dark:border-gray-800">
        {/* Background gradient (dark version only) */}
        <div className="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block" aria-hidden="true"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h2 className="h2 font-red-hat-display mb-4 text-white">Mesa de Regalos en Amazon</h2>
              <p className="text-xl text-white font-bold mb-2">¡Nuestra preferida y la más completa! 🎁</p>
              <p className="text-xl text-white">¡Gracias por acompañarnos en esta celebración especial! 🎉</p>
            </div>

            {/* Mesa de Regalos Amazon */}
            <div className="max-w-md mx-auto text-center bg-white rounded-lg p-8 shadow-lg">
              <p className="text-gray-800 mb-4">Puedes encontrar nuestra mesa de regalos en Amazon:</p>
              <div className="flex justify-center">
                <Image src={AmazonImage} alt="Mesa de Regalos Amazon" width={1312} height={242} className="object-contain" />
              </div>
              <p className="text-xl text-blue-600 mt-6 font-bold">
                <a href="https://www.amazon.com.mx/baby-reg/renato-gomez-febrero-2025-zapopan/31MZY29KMA25Z?ref_=cm_sw_r_cp_ud_dp_GRY5ABW8FNJ5H5W6QQ2Y" target="_blank" rel="noopener noreferrer">
                  ¡Haz clic aquí para ver la lista de regalos en Amazon! 🎁
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mesa de Regalos Liverpool (Sección más pequeña) */}
      <section className="relative bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 border-t border-transparent dark:border-gray-800">
        {/* Background gradient (dark version only) */}
        <div className="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block" aria-hidden="true"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-12">
            {/* Section header */}
            <div className="max-w-2xl mx-auto text-center pb-8">
              <h2 className="text-2xl font-red-hat-display mb-2 text-white">Mesa de Regalos en Liverpool</h2>
              <p className="text-lg text-white mb-2">Número de mesa: 51473457</p>
              <p className="text-md text-white">¡Gracias por acompañarnos en esta celebración especial! 🎉</p>
            </div>

            {/* Mesa de Regalos Liverpool */}
            <div className="max-w-sm mx-auto text-center bg-white rounded-lg p-4 shadow-lg">
              <p className="text-gray-800 mb-3 text-sm">Solicita a un vendedor que escanee este código de festejado una vez que realices una compra en tienda</p>
              <div className="flex justify-center">
                <Image src={BarcodeImage} alt="Código de festejado" width={200} height={200} className="object-contain" />
              </div>
              <p className="text-lg text-pink-600 mt-4 font-bold">¡Tu regalo será muy apreciado por Renato! 🎁</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}