import { useEffect, useState } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'

interface HomeAnimatedHeadingsProps {
  text: string
  onComplete?: () => void
  className?: string
  wordGap?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.035, when: 'beforeChildren' }, // faster stagger
  },
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.35 }, // faster letter animation
  },
}

const HomeAnimatedHeadings: React.FC<HomeAnimatedHeadingsProps> = ({
  text,
  onComplete,
  className,
  wordGap,
}) => {
  const controls = useAnimation()
  const [animateClass, setAnimateClass] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setAnimateClass(true)
    controls.start('visible').then(() => {
      if (onComplete) onComplete()
    })

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [controls, onComplete])

  return (
    <motion.div
      className={`${className} invisibleUntilAnimate ${animateClass ? 'animate' : ''}`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        letterSpacing: 'normal',
        lineHeight: '0.65',
      }}
    >
      {text.split(' ').map((word, wordIndex) => {
        const isSamWilliamson = text === 'SAM WILLIAMSON'
        const customMargin =
          wordGap ||
          (isSamWilliamson && wordIndex === 0
            ? '1.5rem'
            : !isSamWilliamson && isMobile
            ? '0.5rem'
            : '0.75rem')

        return (
          <span
            key={wordIndex}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              marginRight: wordIndex < text.split(' ').length - 1 ? customMargin : 0,
              marginBottom: wordIndex === 0 && isSamWilliamson ? '0.4em' : 0,
            }}
          >
            {word.split('').map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                style={{
                  whiteSpace: 'pre',
                  display: 'inline-block',
                }}
                aria-hidden={char === ' ' ? true : undefined}
              >
                {char}
              </motion.span>
            ))}
          </span>
        )
      })}
    </motion.div>
  )
}

export default HomeAnimatedHeadings
