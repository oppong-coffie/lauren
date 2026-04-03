import { useState } from 'react'

export default function CollectionFilter() {
  const [filters, setFilters] = useState({
    season: 'all',
    year: 'all'
  })

  return (
    <section className="max-w-[1400px] mx-auto py-[30px] px-5 border-b border-neutral-200">
      <div className="flex gap-10 flex-wrap sm:flex-col sm:gap-5">
        <div className="flex items-center gap-3.75 sm:flex-col sm:items-start">
          <label htmlFor="season" className="text-sm font-semibold uppercase tracking-[0.5px] text-[#1a1a1a]">Season</label>
          <select 
            id="season" 
            value={filters.season}
            onChange={(e) => setFilters({...filters, season: e.target.value})}
            className="py-2.5 px-3.75 border border-neutral-300 bg-white text-sm text-[#1a1a1a] cursor-pointer min-w-[150px] transition-colors duration-300 hover:border-[#1a1a1a] focus:border-[#1a1a1a] focus:outline-none sm:w-full"
          >
            <option value="all">All Seasons</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
        </div>

        <div className="flex items-center gap-3.75 sm:flex-col sm:items-start">
          <label htmlFor="year" className="text-sm font-semibold uppercase tracking-[0.5px] text-[#1a1a1a]">Year</label>
          <select 
            id="year" 
            value={filters.year}
            onChange={(e) => setFilters({...filters, year: e.target.value})}
            className="py-2.5 px-3.75 border border-neutral-300 bg-white text-sm text-[#1a1a1a] cursor-pointer min-w-[150px] transition-colors duration-300 hover:border-[#1a1a1a] focus:border-[#1a1a1a] focus:outline-none sm:w-full"
          >
            <option value="all">All Years</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>
    </section>
  )
}
