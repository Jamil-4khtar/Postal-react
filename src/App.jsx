// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SearchPage from './components/SearchPage'
import ResultsPage from './components/ResultsPage'

function App() {
  return (
    <>
      {/* <SearchPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/postal-react' element={<SearchPage/>} />
          <Route path='/postal-react/results' element={<ResultsPage/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
