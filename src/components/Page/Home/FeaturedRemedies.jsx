export default function FeaturedRemedies() {
  const remedies = [
    { name: "Arnica Montana", desc: "Pain, injury & muscle relief", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ixvdB4khIu-V96hzJ_cWdrcJtmYbAWnYNw&s" },
    { name: "Aconite", desc: "Sudden cold, fever & anxiety", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08BwU7Sh7fnqa2Ok8dGi3ZLoAoMHfewWVEw&s" },
    { name: "Nux Vomica", desc: "Digestive issues & acidity", img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Strychnos_nux-vomica_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-266.jpg" },
  ];

  return (
    <section className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Remedies</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {remedies.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition border cursor-pointer"
          >
            <img src={item.img} className="w-full h-48 object-cover" alt={item.name} />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
