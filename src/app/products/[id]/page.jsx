import Link from "next/link";

export default async function ProductId({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await res.json();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-16 px-6">
      <div className="container mx-auto max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow p-8">
        
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-green-700 dark:text-green-400">
            Product Details
          </h1>

          <Link
            href="/products"
            className="px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            ⬅ Back to Products
          </Link>
        </div>

        {/* Banner / Big Image */}
        <div className="w-full h-56 rounded-xl overflow-hidden mb-6">
          <img
            src={`https://picsum.photos/seed/${id}/800/400`}
            alt="Product Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Title */}
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          {data.name} Homoeopathy Remedy
        </h2>

        {/* Meta Info */}
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
          Product ID: {id} • Price: ৳{100 + id * 10}
        </p>

        {/* Full Description */}
        <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          This homoeopathic product is carefully crafted to support your
          well-being using natural principles. Recommended for general health
          improvement and suitable for all age groups.  
          <br /><br />
          Purity Guaranteed • No Side Effects • Trusted by Experts.
        </p>
      </div>
    </div>
  );
}
