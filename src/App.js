import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Recent from "./pages/Recent";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [theme, settheme] = useState('dark')

  const darkmode = () =>
  {
    theme==='light'?settheme('dark'):settheme('light')
  }

  return (
    <Router>

      <div className={theme==='dark'? 'darktheme': ''}>

        <Header theme={theme} darkmode={darkmode}/>

        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/recent-post" element={<Recent/>} />
          </Routes>
        </div>

        <Footer/>

      </div>

    </Router>
  );
}

export default App;
