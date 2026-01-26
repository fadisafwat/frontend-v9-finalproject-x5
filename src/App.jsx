import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import NavBar from './components/NavBar/NavBar'
// import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)
  const navItems = [
    {
      content: 'Home',
      href: '/',
    },
    {
      content: 'Products',
      href: '/products',
    },
  ]
  return (
    <>
      <NavBar
        items={navItems}
        btn="Contact Support"
      />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </>
  )
}

export default App
