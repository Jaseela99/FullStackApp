
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
