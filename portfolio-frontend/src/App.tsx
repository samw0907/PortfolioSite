// src/App.tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        <section id="home" className="section section-anchor">
          <Home />
        </section>

        <section id="about" className="section section-anchor">
          <About />
        </section>

        <section id="projects" className="section section-anchor">
          <Projects />
        </section>

        <section id="contact" className="section section-anchor">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
