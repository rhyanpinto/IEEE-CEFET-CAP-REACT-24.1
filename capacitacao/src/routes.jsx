import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import GlobalStyle from "./styles/globalStyle"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}