import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import AnimatedParagraph from '../components/AnimatedParagraph'
import MyBackgroundSection from '../components/MyBackgroundSection'
import PersonalSection from '../components/PersonalSection'
import NavigationTabs from '../components/NavigationTabs'
import ParagraphWithSeparator from '../components/ParagraphWithSeparator'

const FullStackPathway = () => (
  <>
    <ParagraphWithSeparator>
      <AnimatedParagraph>
        After moving to Finland a few years ago, I focused on learning the language while looking for work in my field of geo-environmental consulting. I landed a six-month contract in the industry, but the role was well below my level of experience. It quickly became clear that without fluent, professional Finnish, progressing in that field would be tough.
      </AnimatedParagraph>
    </ParagraphWithSeparator>

    <ParagraphWithSeparator>
      <AnimatedParagraph>
        I’ve always been someone who wants to take pride in their work. If I can’t do something well, it’s hard to stay motivated. Since I wasn’t able to work to my full potential, I decided it was time for a change — and jumped into learning web development.
      </AnimatedParagraph>
    </ParagraphWithSeparator>

    <ParagraphWithSeparator>
      <AnimatedParagraph>
        I'd been considering the move for a while, especially knowing the tech industry in Finland is more open to English speakers and often doesn’t require a degree in the field. I started with some online coding courses and eventually completed the{' '}
        <a
          href="https://fullstackopen.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          Helsinki University Full Stack Open
        </a>{' '}
        in Spring 2025.
      </AnimatedParagraph>
    </ParagraphWithSeparator>

    {/* Last paragraph, no line */}
    <ParagraphWithSeparator isLast>
      <AnimatedParagraph>
        Self-learning has definitely had its challenges, but the deeper I've got into it, the more I've enjoyed it. There’s something really satisfying about building a site from scratch and watching it come to life. Learning this way has taught me to be resourceful and to figure things out on my own — a skill I now really value.
      </AnimatedParagraph>
    </ParagraphWithSeparator>
  </>
)

const sections = [
  { title: 'Full Stack Pathway', content: <FullStackPathway /> },
  { title: 'My Background', content: <MyBackgroundSection /> },
  { title: 'Personal', content: <PersonalSection /> },
]

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [headingDone, setHeadingDone] = useState(false)

  const next = () => {
    setHeadingDone(false)
    setActiveIndex((prev) => (prev + 1) % sections.length)
  }
  const prev = () => {
    setHeadingDone(false)
    setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length)
  }
  const setActive = (index: number) => {
    setHeadingDone(false)
    setActiveIndex(index)
  }

  return (
    <section className="font-josefin max-w-5xl mx-auto px-8 pb-20 relative min-h-[100vh]">
      {/* Sticky Top Tab Navigation */}
      <NavigationTabs
        sections={sections}
        activeIndex={activeIndex}
        setActive={setActive}
        prev={prev}
        next={next}
        className="sticky top-0 border-b border-transparent"
      />

      {/* Animated Section Heading */}
      <AnimatedHeading
        key={activeIndex}
        activeIndex={activeIndex}
        onAnimationComplete={() => setHeadingDone(true)}
      >
        {sections[activeIndex].title}
      </AnimatedHeading>

      {/* Section Content */}
      <AnimatePresence mode="wait">
        {headingDone && (
          <motion.div
            key={activeIndex}
            className="mt-6 mb-36 max-w-5xl mx-auto text-2xl leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            {sections[activeIndex].content}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Bottom Tab Navigation */}
      <NavigationTabs
        sections={sections}
        activeIndex={activeIndex}
        setActive={setActive}
        prev={prev}
        next={next}
        className="sticky bottom-0 border-t border-transparent mt-10"
      />
    </section>
  )
}

export default About
