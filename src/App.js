import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import IPCtoBNS from './Pages/IPCtoBNSConvertor'
import LegalSearch from './Pages/LegalSearch';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ipc-to-bns-convertor' element={<IPCtoBNS/>} />
          <Route path='/legal-search' element={<LegalSearch/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
