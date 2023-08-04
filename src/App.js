import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';

const Home = () => <section className='content'><h2>Página Inicial</h2></section>;
const Sobre = () => <h2>Sobre mim</h2>;
const Youtube = () => <h2>Canal Youtube</h2>;
const ProjetosGratuitos = () => <h2>Projetos Gratuitos</h2>;
const ProjetosPagos = () => <h2>Projetos Pagos</h2>;

const App = () => {
  return (
    <Router>
      <div className="content-container">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/projetos-gratuitos" element={<ProjetosGratuitos />} />
          <Route path="/projetos-pagos" element={<ProjetosPagos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
