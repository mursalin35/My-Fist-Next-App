export default function Testimonials() {
  const reviews = [
    { name: "Hasan Ali", text: "Excellent remedies! Worked very well for my chronic pain." },
    { name: "Rumana Akter", text: "High quality products & fast customer service." },
    { name: "Sabbir Rahman", text: "Trusted homoeo shop, authentic remedies always available." },
  ];

  return (
    <section className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow hover:shadow-xl transition border"
          >
            <p className="text-gray-700 dark:text-gray-300 italic">“{r.text}”</p>
            <h4 className="mt-4 font-semibold text-lg">{r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
