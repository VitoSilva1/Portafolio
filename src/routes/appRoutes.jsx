import { Route, Routes } from "react-router-dom"
import InicioPage from "../pages/inicio.jsx"
import SobreMiPage from "../pages/sobremi.jsx"
import TecnoPage from "../pages/tecno.jsx"
import ApiPage from "../pages/api.jsx"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/sobremi" element={<SobreMiPage />} />
      <Route path="/tecno" element={<TecnoPage />} />
      <Route path="/api" element={<ApiPage />} />
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  )
}
