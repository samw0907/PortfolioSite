import { Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <div className="page">
      <section className="section">
        <div className="container-max">
          <p className="kicker">404</p>
          <h1 className="page-title">Page not found</h1>
          <p className="lead max-w-2xl">
            The page you’re looking for doesn’t exist (or it moved).
          </p>
          <div className="mt-8">
            <Link to="/" className="btn btn-primary">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
