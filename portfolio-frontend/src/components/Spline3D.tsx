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
    <div
      ref={containerRef}
      className="w-full h-[300px] sm:h-[400px] relative z-10"
      style={{
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'none', // important for pointer events
      }}
    >
      <Spline scene="https://prod.spline.design/D2CC6Aw37W8fxD2t/scene.splinecode" />
    </div>
  );
};

export default Spline3D;
