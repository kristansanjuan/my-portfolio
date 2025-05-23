import { useState } from 'react'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from '@/components/ui/toaster'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
