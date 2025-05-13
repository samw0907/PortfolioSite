const Loader: React.FC = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0f172a]">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border-4 border-transparent border-t-teal-600 rounded-full animate-spin" />
      <div className="absolute inset-[6px] border-4 border-transparent border-t-teal-400 rounded-full animate-spin-reverse" />
      <div className="absolute inset-[12px] border-4 border-transparent border-t-teal-300 rounded-full animate-spin" />
    </div>
  </div>
);

export default Loader;
