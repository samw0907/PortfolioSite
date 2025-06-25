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
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    if (value !== prev) {
      setFlipping(true)
      const timeout = setTimeout(() => {
        setPrev(value)
        setFlipping(false)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [value, prev])

  const paddedValue = String(value).padStart(2, '0')
  const paddedPrev = String(prev).padStart(2, '0')

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-1">
        {paddedValue.split('').map((char, idx) => {
          const prevChar = paddedPrev[idx]
          return (
            <div
              key={idx}
              className="relative w-[40px] h-[60px] perspective-[800px] text-orange-400 font-mono text-4xl"
            >
              {/* Static Top Half - now shows top part */}
              <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden rounded-t-md bg-black border border-orange-500 flex items-start justify-center z-10">
                <div className="h-[75%] mt-[8.5px]">{char}</div>
              </div>

              {/* Static Bottom Half - now shows bottom part */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden rounded-b-md bg-black border border-orange-500 border-t-0 flex items-end justify-center z-10">
                <div className="h-[-75%] mb-[8.5px]">{char}</div>
              </div>

              {/* Animated Flip */}
              {flipping && (
                <>
                  {/* Outgoing Top Half Flip */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1/2 overflow-hidden rounded-t-md bg-black border border-orange-500 flex items-start justify-center z-20"
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: -90 }}
                    style={{ transformOrigin: 'bottom' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-[75%] mt-[3.5px]">{prevChar}</div>
                  </motion.div>

                  {/* Incoming Bottom Half Flip */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden rounded-b-md bg-black border border-orange-500 border-t-0 flex items-end justify-center z-20"
                    initial={{ rotateX: 90 }}
                    animate={{ rotateX: 0 }}
                    style={{ transformOrigin: 'top' }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <div className="h-[-75%] mb-[8.5px]">{char}</div>
                  </motion.div>
                </>
              )}
            </div>
          )
        })}
      </div>
      <span className="text-xs text-orange-200 mt-1 uppercase">{label}</span>
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
    <div className="flex justify-center gap-4">
      <FlipUnit value={countdown.days} label="Days" />
      <FlipUnit value={countdown.hours} label="Hrs" />
      <FlipUnit value={countdown.minutes} label="Min" />
      <FlipUnit value={countdown.seconds} label="Sec" />
    </div>
  )
}

export default SplitFlapCountdown
