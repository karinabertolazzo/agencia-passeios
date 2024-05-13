import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/layout/pages/Home/Home"
import Destinos from "./components/layout/pages/Destinos/Destinos";
import Sobre from "./components/layout/pages/Sobre/Sobre";
import Contato from "./components/layout/pages/Contato/Contato";
import Footer from "./components/layout/Footer/Footer"

import './App.css';
import Navbar from './components/layout/Navbar/Navbar';

function App() {
  return (

     <>

   

    <BrowserRouter>
    <Navbar />
    <h1>Agência de Passeios</h1>
      <Routes>

        <Route exact path="/" element ={<Home />} ></Route>/
        <Route exact path="/Destinos" element ={<Destinos />} ></Route>/
        <Route exact path="/Sobre" element ={<Sobre />} ></Route>/
        <Route exact path="/Contato" element ={<Contato />}></Route>/
   
    </Routes>
    <Footer />
   </BrowserRouter> 
    
   </>
  )
}
export default App;
