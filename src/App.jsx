import { useState } from 'react'
import './App.css'
import Home from './pages/Home/home.jsx'
import About from './pages/About/about.jsx'
import Contact from './pages/Contact/contact.jsx'
import Header from "./components/Header/header.jsx"
import "./font.css";
import Overview from './pages/Overview/overview.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  console.log(currentPage);

  return (
    <div className='appContainer'>
      <Header {...{currentPage, setCurrentPage}} />
      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "overview" && <Overview />}
    </div>
  )
}

export default App
