import { useState } from 'react'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { HashRouter, Route, Routes } from "react-router-dom"
import { Toaster } from '@/components/ui/toaster'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
