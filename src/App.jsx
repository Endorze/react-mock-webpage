import { useState } from 'react'
import './App.css'
import Home from './pages/Home/home.jsx'
import About from './pages/About/about.jsx'
import Contact from './pages/Contact/contact.jsx'
import Header from "./components/Header/header.jsx"
import "./font.css";


function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className='appContainer'>
      <Header {...{currentPage, setCurrentPage}} />
      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
    </div>
  )
}

export default App
