import { useEffect, useState, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import { tsParticles } from '@tsparticles/engine';

const ParticlesBackground: React.FC = () => {
  // Initialize with correct mode synchronously to avoid flicker on initial render
  const [isDark, setIsDark] = useState(() => 
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    loadAll(tsParticles);

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const memoizedParticles = useMemo(() => (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      {...({ engine: tsParticles } as any)}
      options={{
        fullScreen: false,
        background: {
          color: { value: isDark ? '#0f172a' : '#ffffff' },
        },
        particles: {
          number: {
            value: 200,
            density: { enable: true },
          },
          color: { value: isDark ? '#2dd4bf' : '#14B8A6' },
          shape: { type: 'circle' },
          opacity: {
            value: 0.65,
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.6,
            outModes: { default: 'out' },
          },
          links: {
            enable: true,
            color: isDark ? '#5EEAD4' : '#0F766E',
            distance: 130,
            opacity: 0.6,
            width: 1,
          },
        },
      }}
    />
  ), [isDark]);

  return memoizedParticles;
};

export default ParticlesBackground;
