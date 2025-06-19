import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const Spline3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventScroll = (e: TouchEvent) => {
      if (e.cancelable) e.preventDefault();
    };

    container.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      container.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  return (
    <div className="w-full bg-gray-100 dark:bg-[#0b1120] overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 w-full h-[300px] sm:h-[400px] relative z-10 overflow-hidden"
        style={{
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'none',
        }}
      >
        {/* Hard cap for layout control */}
        <div className="w-full h-full overflow-hidden">
          <Spline scene="https://prod.spline.design/D2CC6Aw37W8fxD2t/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Spline3D;
