export default function ProductCategories() {
  const categories = [
    { name: "Mother Tinctures", img: "/images/category1.jpg" },
    { name: "Dilutions", img: "/images/category2.jpg" },
    { name: "Tablets & Tonics", img: "/images/category3.jpg" },
    { name: "Ointments", img: "/images/category4.jpg" },
  ];

  return (
    <section className="py-16 bg-zinc-100 dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Product Categories</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-800 border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-40 object-cover" />

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
