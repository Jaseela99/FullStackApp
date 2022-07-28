import React from "react"
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
const LazyAbout=React.lazy(()=>import("./components/About"))
const LazyNavbar=React.lazy(()=>import("./components/Navbar"))
const LazyHome=React.lazy(()=>import("./components/Home"))
const LazyContact=React.lazy(()=>import("./components/Contact"))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <React.Suspense fallback="Loading..."><LazyNavbar/></React.Suspense>
      <Routes>
        <Route exact path="/" element={<React.Suspense fallback="Loading..."><LazyHome/></React.Suspense>}/>
        <Route exact path="/about" element={<React.Suspense fallback="Loading..."><LazyAbout/></React.Suspense>}/>
        <Route exact path="/contact" element={<React.Suspense fallback="Loading..."><LazyContact/></React.Suspense>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
