import { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedParagraphProps {
  children: React.ReactNode
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300"
      style={{ marginBottom: 0 }}
    >
      {children}
    </motion.p>
  )
}

export default AnimatedParagraph
