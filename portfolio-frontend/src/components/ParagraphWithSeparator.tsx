import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ParagraphWithSeparatorProps {
  children: React.ReactNode
  isLast?: boolean
}

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const ParagraphWithSeparator: React.FC<ParagraphWithSeparatorProps> = ({ children, isLast = false }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <div className="flex flex-col items-center w-full">
      {/* Paragraph content */}
      <div className="w-full">{children}</div>

      {/* Animated teal tapered line separator except after last paragraph */}
      {!isLast && (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={lineVariants}
          className="w-1/3 h-[2px] my-10 rounded"
          style={{
            backgroundImage: 'linear-gradient(to right, transparent, #14b8a6, transparent)',
          }}
        />
      )}
    </div>
  )
}

export default ParagraphWithSeparator
