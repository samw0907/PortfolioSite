import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const calculateCountdown = (targetDate: string) => {
  const total = new Date(targetDate).getTime() - new Date().getTime()
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  return { total, days, hours, minutes, seconds }
}

const FlipUnit = ({ value, label }: { value: number; label: string }) => {
  const [prev, setPrev] = useState(value)
  const [flippingIndexes, setFlippingIndexes] = useState<number[]>([])

  useEffect(() => {
    const paddedValue = String(value).padStart(2, '0')
    const paddedPrev = String(prev).padStart(2, '0')

    const newFlippingIndexes = paddedValue
      .split('')
      .map((char, i) => (char !== paddedPrev[i] ? i : -1))
      .filter(i => i !== -1)

    if (newFlippingIndexes.length > 0) {
      setFlippingIndexes(newFlippingIndexes)
      const timeout = setTimeout(() => {
        setPrev(value)
        setFlippingIndexes([])
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [value, prev])

  const paddedValue = String(value).padStart(2, '0')
  const paddedPrev = String(prev).padStart(2, '0')

  return (
    <div className="flex flex-col items-center font-mono min-w-[3.5rem]">
      <div className="flex gap-[0.25em] perspective-[60em]">
        {paddedValue.split('').map((char, idx) => {
          const prevChar = paddedPrev[idx]
          const isFlipping = flippingIndexes.includes(idx)

          return (
            <div
  key={idx}
  className="relative w-[0.9em] h-[1.3em] text-black dark:text-white text-[min(2.8em,5.5vw)] leading-[0.1em] tracking-widest border border-neutral-300 dark:border-neutral-600 rounded-sm"
>
  {/* Static Top Half */}
  <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden 
    rounded-t-sm bg-[#eeeeee] dark:bg-[#121212] 
    border-b[0.5px] border-black dark:border-white 
    scale-y-[1] sm:scale-y-100 
    flex items-start justify-center z-10 shadow-inner"
  >
    <div className="w-full mt-[0.55em] pl-[0.09em] text-center">{char}</div>
  </div>

  {/* Static Bottom Half */}
  <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden 
    rounded-b-sm bg-[#e0e0e0] dark:bg-[#101010] 
    border-t border-black dark:border-white 
    scale-y-[1.1] sm:scale-y-100 
    flex items-end justify-center z-10 shadow-inner"
  >
    <div className="w-full mb-[0.6em] pl-[0.08em] text-center">{char}</div>
  </div>

  {/* Animated Flip */}
  {isFlipping && (
    <>
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 overflow-hidden 
          rounded-t-sm bg-[#cccccc] dark:bg-black 
          border-b-[0.5px] border-black dark:border-white 
          scale-y-[1.3] sm:scale-y-100 
          flex items-start justify-center z-20"
        initial={{ rotateX: 0 }}
        animate={{ rotateX: -90 }}
        style={{ transformOrigin: 'bottom' }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full mt-[0.55em] pl-[0.09em] text-center">{prevChar}</div>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 overflow-hidden 
          rounded-t-sm bg-[#cccccc] dark:bg-black 
          border-b-[0.5px] border-black dark:border-white 
          flex items-start justify-center z-20"
        initial={{ rotateX: 0 }}
        animate={{ rotateX: -90 }}
        style={{ transformOrigin: 'bottom' }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full mt-[0.55em] pl-[0.09em] text-center">{prevChar}</div>
      </motion.div>
    </>
  )}
</div>

          )
        })}
      </div>
      <span className="text-[0.55em] text-black dark:text-white mt-[0.3em] uppercase tracking-wider">
        {label}
      </span>
    </div>
  )
}

const SplitFlapCountdown = () => {
  const [countdown, setCountdown] = useState(calculateCountdown('2026-08-22T07:00:00'))

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown('2026-08-22T07:00:00'))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div className="max-w-full mx-auto overflow-x-auto scrollbar-hide">
        <div className="w-max flex flex-nowrap justify-start items-center gap-x-[1em] text-[1em]">
          <FlipUnit value={countdown.days} label="Days" />
          <FlipUnit value={countdown.hours} label="Hrs" />
          <FlipUnit value={countdown.minutes} label="Min" />
          <FlipUnit value={countdown.seconds} label="Sec" />
        </div>
      </div>
    </div>
  )
}

export default SplitFlapCountdown
