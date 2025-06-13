import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion'

interface AnimatedHeadingProps {
  children: React.ReactNode
  activeIndex: number
  onAnimationComplete?: () => void
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const lineContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut' },
  },
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  children,
  activeIndex,
  onAnimationComplete,
}) => {
  const controls = useAnimation()
  const [underlineStarted, setUnderlineStarted] = useState(false)

  useEffect(() => {
    controls.start('visible')
    setUnderlineStarted(false)
  }, [activeIndex, controls])

  useEffect(() => {
    const text = typeof children === 'string' ? children.toUpperCase() : ''
    const lettersCount = text.replace(/\s/g, '').length
    const letterDelay = lettersCount * 50 + 350

    const letterTimer = setTimeout(() => {
      setUnderlineStarted(true)
    }, letterDelay)

    return () => clearTimeout(letterTimer)
  }, [children])

  const specialLineBreaks: Record<string, string[]> = {
    'Full Stack Pathway': ['FULL STACK', 'PATHWAY'],
    'My Background': ['MY', 'BACKGROUND'],
  }

  const lines =
    typeof children === 'string' && specialLineBreaks[children]
      ? specialLineBreaks[children]
      : [typeof children === 'string' ? children.toString().toUpperCase() : '']

  return (
    <motion.h1
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={containerVariants}
      className="max-w-5xl mx-auto text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-gray-900 dark:text-white text-center mb-[14vh] mt-[6rem] select-none leading-[1.4] px-4"
      style={{ whiteSpace: 'pre-line', wordBreak: 'normal' }}
    >
      <AnimatePresence mode="popLayout">
        {lines.map((line, lineIndex) => {
          const letters = line.split('').map((l) => (l === ' ' ? '\u00A0' : l))

          return (
            <motion.div
              key={lineIndex}
              style={{
                display: 'block',
                position: 'relative',
                paddingBottom: 28,
                marginBottom: lineIndex === 0 ? 10 : 0,
                maxWidth: '850px',
              }}
              variants={lineContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.span
                style={{ display: 'inline-block', position: 'relative' }}
                variants={containerVariants}
              >
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    style={{ display: 'inline-block' }}
                    aria-hidden={letter === '\u00A0' ? true : undefined}
                  >
                    {letter}
                  </motion.span>
                ))}

                {underlineStarted && (
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{
                      delay: lineIndex * 0.6,
                      duration: 0.6,
                      ease: 'easeOut',
                    }}
                    onAnimationComplete={() => {
                      if (onAnimationComplete && lineIndex === lines.length - 1) {
                        onAnimationComplete()
                      }
                    }}
                    style={{
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      height: 3,
                      width: '100%',
                      backgroundImage: 'linear-gradient(to right, transparent, #14b8a6, transparent)',
                      borderRadius: 2,
                      transformOrigin: 'left',
                    }}
                  />
                )}
              </motion.span>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </motion.h1>
  )
}

export default AnimatedHeading
