import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import AppRoutes from './routes/appRoutes'
import FooterComponent from './components/footer'

export default function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <main className="app-main">
        <AppRoutes />
      </main>
      <FooterComponent/>
    </BrowserRouter>
  )
}