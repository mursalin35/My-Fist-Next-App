import Link from "next/link";

export default async function ProductPage() {
  // keeping your original fetch
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Mock – Homeopathy product info mapped on fetched users
  const products = data.slice(0, 6).map((user, i) => ({
    id: user.id,
    title: `${user.name.split(" ")[0]} Homoeo Drops`,
    desc: "A trusted homoeopathic remedy for common health issues.",
    price: (150 + i * 50).toFixed(0),
    img: `https://picsum.photos/seed/homeo${i}/400/300`,
  }));

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-800">
        Our Homoeopathy Products
      </h1>

      <p className="mt-2 text-gray-600 max-w-xl">
        Explore authentic & trusted homoeopathic medicines for various health needs.
      </p>

      {/* Search + Filter */}
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow focus:ring focus:ring-green-300"
        />

        <select className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow focus:ring focus:ring-green-300">
          <option value="">All Categories</option>
          <option value="drops">Drops</option>
          <option value="tablets">Tablets</option>
          <option value="tincture">Mother Tincture</option>
          <option value="ointment">Ointments</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition hover:-translate-y-1"
          >
            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">
                {product.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {product.desc}
              </p>

              {/* Meta */}
              <p className="mt-3 font-bold text-green-800">
                ৳ {product.price}
              </p>

              {/* Details */}
              <Link
                href={`/products/${product.id}`}
                className="inline-block mt-4 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
