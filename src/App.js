import './App.css';
import Tick from './components/data';
import Footer from './components/footer';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from './pages/contato';
import Headers from './components/navbar';
import Comprar from './pages/comprar';
import Viagens from './pages/viagens';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/viagens' element={<Viagens />} />
          <Route path='/comprar' element={<Comprar />} />
        </Routes>
      </BrowserRouter>

      <Footer ano={2022} Marca={"@GoodTrip"} />
      <Tick />
    </div>
  );
}

export default App;
