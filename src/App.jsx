import { useState } from 'react'
import './App.css'

function Home() {
  return <div>Detta är startsidan</div>
}

function About() {
  return <div>Detta är om-sidan</div>
}

function Contact() {
  return <div>Detta är kontakt-sidan</div>
}

function App() {

  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("about")}>About</button>
        <button onClick={() => setCurrentPage("contact")}>Contact</button>
      </nav>

      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
    </div>
  )
}

export default App
