import './App.css';
import Firstpg from './Component/Firstpg';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Component/Services';
import Contact from './Component/Contact';
import About from './Component/About';

function App() {
  return (
    <BrowserRouter>
     <Home/>
    <div className="App">
     <Routes>
     <Route path='/' element={<Firstpg/>}></Route>
     <Route path='/services' element={<Services/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
