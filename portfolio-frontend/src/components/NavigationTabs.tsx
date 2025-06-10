import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavigationTabsProps {
  sections: { title: string; content: React.ReactNode }[]
  activeIndex: number
  setActive: (index: number) => void
  prev: () => void
  next: () => void
  className?: string
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  sections,
  activeIndex,
  setActive,
  prev,
  next,
  className = '',
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 z-20 border-b border-transparent flex items-center justify-between sm:justify-center gap-4 py-4 px-2 ${className}`}
    >
      {/* Previous button */}
      <button
        onClick={prev}
        className="flex items-center justify-center text-teal-600 hover:text-teal-800 dark:hover:text-teal-300 transition p-2 rounded"
        aria-label="Previous section"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Tabs area */}
      <nav className="flex-1 flex justify-center items-center overflow-x-auto no-scrollbar">
        {/* Full tabs (default font-size on md+) */}
        <div className="hidden sm:flex md:gap-16 gap-4">
          {sections.map((section, index) => (
            <button
              key={section.title}
              onClick={() => setActive(index)}
              className={`whitespace-nowrap font-semibold transition relative pb-2 
                ${
                  index === activeIndex
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-300'
                }
                text-sm md:text-lg
              `}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Active tab only (mobile view) */}
        <div className="flex sm:hidden">
          <button
            className="whitespace-nowrap font-semibold text-teal-600 dark:text-teal-400 pb-2 text-sm"
            onClick={() => setActive(activeIndex)}
          >
            {sections[activeIndex].title}
          </button>
        </div>
      </nav>

      {/* Next button */}
      <button
        onClick={next}
        className="flex items-center justify-center text-teal-600 hover:text-teal-800 dark:hover:text-teal-300 transition p-2 rounded"
        aria-label="Next section"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  )
}

export default NavigationTabs
