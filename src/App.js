import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Success from './pages/Success'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Male from './pages/Male'
import Female from './pages/Female'
import Filters from './pages/Filters'
import SignUp2 from './pages/SignUp2'
import { LangProvider } from './context/LangContext'


const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/success' element={<Success />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/signup2' element={<SignUp2 />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/male' element={<Male />}></Route>
      <Route path='/female' element={<Female />}></Route>
      <Route path='/products' element={<Filters />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <LangProvider>
        <Main />
      </LangProvider>
    </BrowserRouter>
  )
}

export default App