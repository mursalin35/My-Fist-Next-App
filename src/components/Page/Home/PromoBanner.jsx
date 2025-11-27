export default function PromoBanner() {
  return (
    <section className="py-20 -mb-12 bg-green-50 border-y border-green-200">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        <span className="text-green-700 font-semibold tracking-wide uppercase">
          M.S Homoeo Complex
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mt-2">
          Natural Healing Starts with the Right Remedies
        </h2>

        <p className="mt-4 text-gray-700 max-w-2xl">
          Select from trusted homeopathic medicines that support holistic healing,
          boost immunity, and improve overall well-being—naturally.
        </p>

    

        {/* Decorative Icons Row */}
        <div className="mt-10 flex gap-8 opacity-80">
          <div className="flex flex-col items-center">
            <span className="text-3xl">🌿</span>
            <p className="text-sm mt-1 text-gray-600">Natural</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">💊</span>
            <p className="text-sm mt-1 text-gray-600">Safe Remedies</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">📜</span>
            <p className="text-sm mt-1 text-gray-600">Certified Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
}
