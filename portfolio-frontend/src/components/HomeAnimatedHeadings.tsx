import { useEffect, useState } from 'react'
import { motion, Variants, useAnimation } from 'framer-motion'

interface HomeAnimatedHeadingsProps {
  text: string
  onComplete?: () => void
  className?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, when: 'beforeChildren' },
  },
}

const letterVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: 'easeOut' },
  },
}

const HomeAnimatedHeadings: React.FC<HomeAnimatedHeadingsProps> = ({ text, onComplete, className }) => {
  const controls = useAnimation()
  const [animateClass, setAnimateClass] = useState(false)

  useEffect(() => {
    setAnimateClass(true)
    controls.start('visible').then(() => {
      if (onComplete) onComplete()
    })
  }, [controls, onComplete])

  return (
    <motion.div
      className={`${className} invisibleUntilAnimate ${animateClass ? 'animate' : ''}`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          aria-hidden={char === ' ' ? true : undefined}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default HomeAnimatedHeadings
