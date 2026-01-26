import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Features from './components/Features.jsx'
import Team from './components/Team.jsx'
import Blog from './components/Blog.jsx'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div >
      <Header />
      <Outlet />
      <Footer />

    </div>
     
  )
}

export default App
