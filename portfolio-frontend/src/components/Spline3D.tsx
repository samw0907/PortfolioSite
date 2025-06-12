import Spline from '@splinetool/react-spline';

const Spline3D = () => {
  return (
    <div
      className="w-full h-[300px] sm:h-[400px] relative z-10 touch-none select-none"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <Spline scene="https://prod.spline.design/D2CC6Aw37W8fxD2t/scene.splinecode" />
    </div>
  );
};

export default Spline3D;
