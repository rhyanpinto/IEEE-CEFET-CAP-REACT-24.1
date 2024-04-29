import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  )
}