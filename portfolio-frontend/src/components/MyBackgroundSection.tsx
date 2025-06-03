import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Drilling from '../assets/Drilling.png'
import Soil from '../assets/Soil.png'
import ContaminatedSoil from '../assets/ContaminatedSoil.jpeg'

const geoImages = [
  { src: Drilling, alt: 'Drilling Image', caption: 'Drilling & Grouting' },
  { src: Soil, alt: 'Soil Image', caption: 'Environmental Testing & Remediation' },
  { src: ContaminatedSoil, alt: 'Contaminated Soil Image', caption: 'Contaminated Soils' },
]

const MyBackgroundSection = () => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % geoImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-1 space-y-6">
        <p className="text-2xl text-gray-700 dark:text-gray-300">
          I started off in geo-environmental consulting in Glasgow, Scotland after graduating from university.
          I worked in a small team of five, conducting site investigations for some of the UK's largest house builders.
          This involved assessing any geo-technical or environmental constraints of a potential site, such as pollution or weak soils.
          Additionally, old abandoned coal mines were a significant risk and we determined if these were present and, if necessary, supervised the stabilisation measures.
        </p>
      </div>
      <motion.div
        className="flex-shrink-0 w-full md:w-60 relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={geoImages[imageIndex].src}
          alt={geoImages[imageIndex].alt}
          className="rounded-lg shadow-lg object-cover w-full h-40 sm:h-48 md:h-52"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
          {geoImages[imageIndex].caption}
        </p>
      </motion.div>
    </div>
  )
}

export default MyBackgroundSection
