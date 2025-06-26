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
    <div className="flex flex-col items-center font-mono">
      <div className="flex gap-[0.2em] perspective-[60em]">
        {paddedValue.split('').map((char, idx) => {
          const prevChar = paddedPrev[idx]
          const isFlipping = flippingIndexes.includes(idx)

          return (
            <div
              key={idx}
              className="relative w-[0.75em] h-[1.3em] text-white text-[3.2em] leading-[0.1em] tracking-widest"
            >
              {/* Static Top Half */}
              <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden rounded-t-sm bg-[#121212] border-b-[1px] border-white flex items-start justify-center z-10 shadow-inner">
                <div className="w-full mt-[0.55em] text-center">
                  {char}
                </div>
              </div>

              {/* Static Bottom Half */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden rounded-b-sm bg-[#101010] border-t-[1px] border-white flex items-end justify-center z-10 shadow-inner">
                <div className="w-full mb-[0.65em] text-center">
                  {char}
                </div>
              </div>

              {/* Animated Flip */}
              {isFlipping && (
                <>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1/2 overflow-hidden rounded-t-sm bg-black border-b-[1px] border-white flex items-start justify-center z-20"
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: -90 }}
                    style={{ transformOrigin: 'bottom' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full mt-[0.45em] text-center">
                      {prevChar}
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden rounded-b-sm bg-black border-t-[1px] border-white flex items-end justify-center z-20"
                    initial={{ rotateX: 90 }}
                    animate={{ rotateX: 0 }}
                    style={{ transformOrigin: 'top' }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <div className="w-full mb-[0.55em] text-center">
                      {char}
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          )
        })}
      </div>
      <span className="text-[0.55em] text-white mt-[0.3em] uppercase tracking-wider">
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
    <div className="w-full max-w-[500px] mx-auto flex flex-nowrap justify-center items-center gap-x-[1em] text-[clamp(0.75em,3.5vw,1.2em)] overflow-hidden">
      <FlipUnit value={countdown.days} label="Days" />
      <FlipUnit value={countdown.hours} label="Hrs" />
      <FlipUnit value={countdown.minutes} label="Min" />
      <FlipUnit value={countdown.seconds} label="Sec" />
    </div>
  )
}

export default SplitFlapCountdown