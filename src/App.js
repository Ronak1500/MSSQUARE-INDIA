import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './Pages/Header'
import Projects from './Pages/Projects'
import Text from './Pages/Text'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Text' element={<Text/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App