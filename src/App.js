/** @format */

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
