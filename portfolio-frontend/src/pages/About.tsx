import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import NavigationTabs from '../components/NavigationTabs'
import ParagraphWithSeparator from '../components/ParagraphWithSeparator'

import AnimatedParagraph from '../components/AnimatedParagraph'
import MyBackgroundSection from '../components/MyBackgroundSection'
import PersonalSection from '../components/PersonalSection'

const FullStackPathway = ({ onComplete }: { onComplete: () => void }) => {
  const paragraphs = [
  `After moving to Finland a few years ago, I focused on learning the language while looking for work in my field of geo-environmental consulting. I landed a six-month contract in the industry, but the role was well below my level of experience. It quickly became clear that without fluent, professional Finnish, progressing in that field would be tough.`,

  `I’ve always been someone who wants to take pride in their work. If I can’t do something well, it’s hard to stay motivated. Since I wasn’t able to work to my full potential, I decided it was time to commit to a shift into web development.`,

  <span key="fullstack">
    I'd been considering the move for a while, especially knowing the tech industry in Finland is more open to English speakers and often doesn’t require a degree in the field. I started with some online coding courses and eventually completed the{' '}
    <a
      href="https://fullstackopen.com/en"
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-600 dark:text-teal-400 underline hover:text-teal-800 dark:hover:text-teal-200 transition"
    >
      Helsinki University Full Stack Open
    </a>{' '}
    in Spring 2025.
  </span>,

  `Self-learning has definitely had its challenges, but the deeper I've got into it, the more I've enjoyed it. There’s something really satisfying about building a site from scratch and watching it come to life. Learning this way has taught me to persevere with problems myself, finding solutions independently.`,
  ]

  return (
    <>
      {paragraphs.map((text, index) => {
        const delay = index * 0.8
        const isFirst = index === 0
        const isLast = index === paragraphs.length - 1

        return (
          <ParagraphWithSeparator key={index} delay={delay} isLast={isLast}>
            <AnimatedParagraph
              delay={delay}
              onLastComplete={
                isFirst ? () => setTimeout(onComplete, 1) : undefined
              }
            >
              {text}
            </AnimatedParagraph>
          </ParagraphWithSeparator>
        )
      })}
    </>
  )
}

type Section = {
  title: string
  content: React.ComponentType<{ onComplete: () => void }>
}

const sections: Section[] = [
  { title: 'Full Stack Pathway', content: FullStackPathway },
  { title: 'My Background', content: MyBackgroundSection },
  { title: 'Personal', content: PersonalSection },
]

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [showTabs, setShowTabs] = useState(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const next = () => {
  setShowContent(false);
  setActiveIndex((prev) => (prev + 1) % sections.length);
  scrollToTop();
}

const prev = () => {
  setShowContent(false);
  setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);
  scrollToTop();
}

const setActive = (index: number) => {
  if (index === activeIndex) return;
  setShowContent(false);
  setActiveIndex(index);
  scrollToTop();
}

  const handleHeadingAnimationComplete = () => {
    setShowContent(true)
  }

  const handleParagraphsComplete = () => {
    setTimeout(() => setShowTabs(true), 0)
  }

  const CurrentContent = sections[activeIndex].content

  return (
    <section className="font-josefin max-w-5xl mx-auto px-4 sm:px-8 pb-1 relative min-h-[100vh]">
      <div className="sticky top-[60px] z-40 h-[56px] sm:h-[64px]">
        <AnimatePresence>
          {showTabs && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-white dark:bg-[#0b1120] dark:bg-opacity-90 backdrop-blur border-t border-b border-transparent border-white dark:border-[#0b1120]"
            >
              <NavigationTabs
                sections={sections}
                activeIndex={activeIndex}
                setActive={setActive}
                prev={prev}
                next={next}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatedHeading
        key={activeIndex}
        activeIndex={activeIndex}
        onAnimationComplete={handleHeadingAnimationComplete}
      >
        {sections[activeIndex].title}
      </AnimatedHeading>

      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key={activeIndex}
            className="mt-6 mb-12 max-w-5xl mx-auto text-lg sm:text-xl leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.2 }}
          >
            <CurrentContent onComplete={handleParagraphsComplete} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default About;
