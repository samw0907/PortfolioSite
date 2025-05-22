import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HCRD from '../assets/HCRD.png';
import Soil from '../assets/Soil.png';
import Drilling from '../assets/Drilling.png';
import ContaminatedSoil from '../assets/ContaminatedSoil.jpeg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const geoImages = [
  {
    src: Drilling,
    alt: 'Drilling Image',
    caption: 'Drilling & Grouting',
  },
  {
    src: Soil,
    alt: 'Soil Image',
    caption: 'Environmental Testing & Remediation',
  },
    {
    src: ContaminatedSoil,
    alt: 'Contaminated Soil Image',
    caption: 'Contaminated Soils',
  },
];

const MyBackgroundSection = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % geoImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-1 space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          I started off in geo-environmental consulting in Glasgow, Scotland after graduating from university. I worked in a small team of five, conducting site investigations for some of the UK's largest house builders. This involved assessing any geo-technical or environmental constraints of a potential site, such as pollution or weak soils. Additionally, old abandoned coal mines were a significant risk and we determined if these were present and, if necessary, supervised the stabilisation measures.
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
  );
};

const sections = [
  {
    title: 'Full Stack Pathway',
    content: (
      <>
        <p className="text-gray-700 dark:text-gray-300">
          After moving to Finland a few years ago, I focused on learning the language (up to B1.1) while looking for work in my field of geo-environmental consulting. I landed a six-month contract in the industry, but the role was well below my level of experience. It quickly became clear that without fluent, professional Finnish, progressing in that field would be tough.
        </p>
        <p>
          I’ve always been someone who wants to take pride in their work. If I can’t do something well, it’s hard to stay motivated. Since I wasn’t able to work to my full potential, I decided it was time for a change — and jumped into learning web development.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I'd been considering the move for a while, especially  knowing the tech industry in Finland is more open to English speakers and often doesn’t require a degree in the field. I started with some online coding courses and eventually completed the{' '}
          <a
            href="https://fullstackopen.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          >
            Helsinki University Full Stack Open
          </a>{' '}
          in Spring 2025.
        </p>
        <p>
          Self-learning has definitely had its challenges, but the deeper I've got into it, the more I've enjoyed it. There’s something really satisfying about building a site from scratch and watching it come to life. Learning this way has taught me to be resourceful and to figure things out on my own — a skill I now really value.
        </p>
      </>
    ),
  },
  {
    title: 'My Background',
    content: <MyBackgroundSection />,
  },
  {
    title: 'Personal',
    content: (
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1 space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Outside of work, sport has always been a big part of my life.
            I represented my schools in football, field hockey, badminton, and cross-country running.
            These days running has been my main focus, completing two half-marathons and my first full marathon in 2024.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Recently I've been shifting into triathlon, putting in more time on the bike and in the pool. My next big goal is the Ironman 70.3 Tallinn next year.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            If you're also a runner or triathlete and interested in my times, you can check out my{' '}
           <a
              href="https://www.strava.com/athletes/38491517"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              Strava.
            </a>
          </p>
        </div>
        <motion.div
          className="flex-shrink-0 w-full md:w-60"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={HCRD}
            alt="HCRD Site Image"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
            Helsinki City Running Day Half-Marathon
          </p>
        </motion.div>
      </div>
    ),
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % sections.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);
  const setActive = (index: number) => setActiveIndex(index);

  return (
    <section className="font-josefin space-y-6 max-w-3xl mx-auto px-4 pb-20 relative">
      {/* Top Tab Navigation */}
      <div className="flex justify-center gap-6 mt-6 mb-28 flex-wrap">
        {sections.map((section, index) => (
          <button
            key={section.title}
            onClick={() => setActive(index)}
            className={`text-lg font-medium transition relative pb-1 ${
              index === activeIndex
                ? 'text-teal-600 dark:text-teal-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-teal-600 dark:after:bg-teal-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-teal-500'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <motion.div
        key={activeIndex}
        className="space-y-4 mt-8"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-teal-600">{sections[activeIndex].title}</h2>
        {sections[activeIndex].content}
      </motion.div>

      {/* Chevron Navigation */}
      <div className="flex justify-between mt-10 px-4">
      <button
        onClick={prev}
        className="hidden sm:flex items-center justify-center absolute left-[-3rem] top-1/2 -translate-y-1/2 text-teal-600 hover:text-teal-800 dark:hover:text-teal-300 transition px-2"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        onClick={next}
        className="hidden sm:flex items-center justify-center absolute right-[-3rem] top-1/2 -translate-y-1/2 text-teal-600 hover:text-teal-800 dark:hover:text-teal-300 transition px-2"
      >
        <ChevronRight size={36} />
      </button>
      </div>
    </section>
  );
};

export default About;
