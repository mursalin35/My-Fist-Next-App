export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/40"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 text-center text-white flex flex-col items-center">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl drop-shadow-xl">
          M.S Homoeo Complex
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-2xl opacity-95 drop-shadow">
          Trusted Homoeopathic Medicines & Natural Remedies — crafted to support your health, wellness, 
          and complete healing through safe, effective homoeo-pathy.
        </p>

        <div className="mt-8">
          <a
            href="/items"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Browse Homoeo Products
          </a>
        </div>
      </div>
    </section>
  );
}
