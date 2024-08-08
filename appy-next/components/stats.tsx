// components/Stats.tsx

export default function Stats() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-2xl rounded-lg">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">02/2025</div>
              <div className="text-gray-600 dark:text-gray-400">Fecha estimada de nacimiento</div>
            </div>
            <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-2xl rounded-lg">
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">Trimestre 2</div>
              <div className="text-gray-600 dark:text-gray-400">Estamos en el segundo trimestre</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}