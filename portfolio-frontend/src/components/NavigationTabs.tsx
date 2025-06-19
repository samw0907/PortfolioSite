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
}) => {
  return (
<div className="bg-white dark:bg-gray-900 z-20 border-b border-transparent pt-4 pb-0.1 px-2">

      {/* MOBILE VIEW: Single tab with tight chevrons */}
      <div className="flex sm:hidden items-center justify-center gap-2">
        <button
          onClick={prev}
          className="text-teal-600 hover:text-teal-800 dark:hover:text-teal-300 transition p-1"
          aria-label="Previous section"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          className="text-sm font-semibold text-teal-600 dark:text-teal-400 px-1"
          onClick={() => setActive(activeIndex)}
        >
          {sections[activeIndex].title}
        </button>

        <button
          onClick={next}
          className="text-teal-600 hover:text-teal-800 dark:hover:text-teal-300 transition p-1"
          aria-label="Next section"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* DESKTOP VIEW: Full tabs with chevrons spaced wider */}
      <div className="hidden sm:flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
        <button
          onClick={prev}
          className="text-teal-600 hover:text-teal-800 dark:hover:text-teal-300 transition p-2 md:p-3 mx-2 sm:mx-4 md:mx-6"
          aria-label="Previous section"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <nav className="flex gap-4 md:gap-16">
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
        </nav>

        <button
          onClick={next}
          className="text-teal-600 hover:text-teal-800 dark:hover:text-teal-300 transition p-2 md:p-3 mx-2 sm:mx-4 md:mx-6"
          aria-label="Next section"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  )
}

export default NavigationTabs
