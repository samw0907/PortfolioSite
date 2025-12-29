import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />

        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Legacy routes -> redirect to single-page sections */}
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route
              path="/projects"
              element={<Navigate to="/#projects" replace />}
            />
            <Route
              path="/contact"
              element={<Navigate to="/#contact" replace />}
            />

            <Route
              path="*"
              element={
                <div className="container-max py-20">
                  <div className="card text-center">
                    <h1 className="card-title">404 - Page Not Found</h1>
                    <p className="card-text mt-3">
                      The page you are looking for does not exist.
                    </p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
