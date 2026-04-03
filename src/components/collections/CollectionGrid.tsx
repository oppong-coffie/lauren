export default function CollectionGrid() {
  const collections = [
    { id: 1, name: 'Spring Essence', year: 2026, emoji: '🌸' },
    { id: 2, name: 'Summer Radiance', year: 2026, emoji: '☀️' },
    { id: 3, name: 'Autumn Grace', year: 2025, emoji: '🍂' },
    { id: 4, name: 'Winter Splendor', year: 2025, emoji: '❄️' },
    { id: 5, name: 'Artisan Edition', year: 2026, emoji: '🎨' },
    { id: 6, name: 'Heritage Classic', year: 2026, emoji: '👑' },
  ]

  return (
    <section className="max-w-[1400px] mx-auto py-[60px] px-5">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-10 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-[25px]">
        {collections.map((col) => (
          <div key={col.id} className="text-center cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <div className="w-full aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center text-[100px] mb-5 rounded md:text-[70px]">
              {col.emoji}
            </div>
            <h3 className="text-[18px] font-normal text-[#1a1a1a] mb-2.5">{col.name}</h3>
            <p className="text-[12px] text-neutral-400 uppercase tracking-widest mb-3.75">{col.year}</p>
            <button className="py-2.5 px-[25px] bg-transparent border border-[#1a1a1a] text-[#1a1a1a] text-[12px] font-semibold tracking-[0.5px] uppercase cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white">
              View Collection
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
