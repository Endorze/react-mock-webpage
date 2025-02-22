import { useState } from 'react'
import './App.css'
import Home from './pages/Home/home.jsx'
import About from './pages/About/about.jsx'
import Contact from './pages/Contact/contact.jsx'

function App() {

  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div>
      <div className='header'>
        <div className='navWrap'>
          <a onClick={() => setCurrentPage("home")}>Home</a>
          <a onClick={() => setCurrentPage("about")}>About</a>
          <a onClick={() => setCurrentPage("contact")}>Contact</a>
        </div>
      </div>

      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
    </div>
  )
}

export default App
