import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
