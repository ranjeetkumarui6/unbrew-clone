import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './bootstrap/dist/css/bootstrap.min.css'
import './bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Aboute from './components/Aboute'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Work from './components/Work'
import Blog from './components/Blog'
import Contact from './components/Contact'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Home' element={<Home/>}></Route>
      <Route exact path='/Aboute' element={<Aboute/>}></Route>
      <Route exact path='/Services' element={<Services/>}></Route>
      <Route exact path='/Pricing' element={<Pricing/>}></Route>
      <Route exact path='/Work' element={<Work/>}></Route>
      <Route exact path='/Blog' element={<Blog/>}></Route>
      <Route exact path='/Contact' element={<Contact/>}></Route>


    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)