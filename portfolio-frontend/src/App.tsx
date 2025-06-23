import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full text-gray-800 dark:text-gray-100 bg-white dark:bg-[#0f172a]">
        <Navbar />

        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="text-center text-2xl mt-10">404 - Page Not Found</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
