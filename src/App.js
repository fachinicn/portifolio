import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/Navbar.jsx";
import Sobre from "../src/components/Sobre.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Habilidades from "./components/Habilidades.jsx";
import Projetos from "./components/Projetos.jsx";
import ProjetosPainel from "./components/ProjetoPainel.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-sobre-mim">
        <Sobre />
        <AboutMe />
      </div>
      <div className="container-habilidades">
        <Habilidades />
      </div>
      <div className="container-projetos">
        <Projetos />
        <ProjetosPainel />
      </div>
      <div className="container-contato">
        <Footer />
      </div>
    </div>
  );
}

export default App;
