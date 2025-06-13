import { motion } from 'framer-motion'
import BgsMap from '../assets/BgsMap.png'
import Soil from '../assets/Soil.png'
import ContaminatedSoil from '../assets/ContaminatedSoil.jpeg'
import ContaminatedWater from '../assets/ContaminatedWater.jpeg'
import CoalMine from '../assets/CoalMine.jpeg'
import AnimatedParagraph from './AnimatedParagraph'
import ParagraphWithSeparator from './ParagraphWithSeparator';

const banners = [
  {
    image: BgsMap,
    alt: 'BGS Map',
    heading: 'Geological Analysis & Reporting',
    caption: 'British Geological Survey Map',
    points: [
      'Interpreting geological survey data and maps.',
      'Maintaining close communication with clients & contractors, ensuring site works run smoothly.',
      'Writing reports, providing quotes to clients.',
    ],
  },
  {
    image: Soil,
    alt: 'Soil Image',
    heading: 'Site Investigations',
    caption: 'Soil Sampling',
    points: [
      'Designing intrusive site investigation programs for Phase II assessments.',
      'Undertaking trial pitting & environmental sampling on site.',
      'Hazardous waste analysis & classification.',
    ],
  },
  {
    image: ContaminatedSoil,
    alt: 'Contaminated Soil',
    heading: 'Environmental & Geotechnical Testing',
    caption: 'Contaminated Soils',
    points: [
      'Designing & supervising environmental remediation programmes.',
      'Analysing geotechnical testing results (e.g. shear strength, PSDs).',
      'Analysing environmental testing results (e.g. oils, PCBs, PAHs, VOCs).',
    ],
  },
  {
    image: ContaminatedWater,
    alt: 'Contaminated Groundwater',
    heading: 'Groundwater Testing & Analysis',
    caption: 'Contaminated Groundwater',
    points: [
      'Onsite surface & groundwater sampling & testing.',
      'Basic groundwater modelling.',
      'Contaminant plume delineation & risk assessment.',
      'Infiltration testing.',
    ],
  },
  {
    image: CoalMine,
    alt: 'Abandoned Coal Mine',
    heading: 'Mine Stability Assessments & Remediation',
    caption: 'Abandoned Coal Mine',
    points: [
      'Interpretation of the stability of shallow abandoned mineworkings.',
      'Supervision of remediation of unstable mineworkings via drilling & high-pressure grouting.',
      'Ground gas monitoring & assessments.',
    ],
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const MyBackgroundSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 space-y-12">
      {/* Intro paragraphs */}
      <div className="space-y-6">
        <AnimatedParagraph>
          I received my BSc with Honours in Earth Science at the University Of Glasgow in 2017, before entering the Geo-Environmental consulting industry with{' '}
          <a
            href="https://masonevans.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 dark:text-teal-400 underline hover:text-teal-800 dark:hover:text-teal-300"
          >
            Mason Evans Partnership
          </a>.
        </AnimatedParagraph>
        <AnimatedParagraph>
          I worked in a small team of five, conducting site investigations for some of the UK's largest house builders. This involved evaluating the geotechnical & environmental constraints of a site and advising clients on the remediation measures required to meet local government regulations.
        </AnimatedParagraph>
      </div>

      {/* Banners */}
      {banners.map(({ image, alt, heading, caption, points }, idx) => (
        <motion.div
          key={idx}
          className="space-y-4 p-6 rounded-xl bg-teal-100 dark:bg-teal-900 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
          {/* Heading */}
          <h3 className="text-2xl font-semibold text-teal-800 dark:text-teal-200 ">
            {heading}
          </h3>

          {/* Content Grid */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Points */}
            <ul className="flex-1 list-disc list-inside space-y-3 text-lg text-teal-900 dark:text-gray-300 px-1">
              {points.map((point, i) => (
                <li
                  key={i}
                  style={{
                    paddingLeft: '1.2em',
                    textIndent: '-1.2em',
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>

            {/* Image */}
            <div className="flex-shrink-0 max-w-xs w-full mx-auto">
              <img
                src={image}
                alt={alt}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-center text-sm text-teal-800 dark:text-gray-400 mt-2">
                {caption}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default MyBackgroundSection
