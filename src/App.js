import React from 'react'

// Import React Router Dom 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import Pages 
import Header from "./Components/Layouts/Header/Header"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import NewArrivals from "./Pages/NewArrivals"
import AboutUs from "./Pages/About"
import ContactUs from "./Pages/ContactUs"



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/newarrivals' element={<NewArrivals />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
