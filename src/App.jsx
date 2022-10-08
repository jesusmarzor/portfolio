import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error404 } from '@/views/Error404';
import { Portfolio } from '@/views/Portfolio';
import '@/config/i18n';

import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
              <Route
                path='/'
                element={<Portfolio/>}
              />
              <Route
                path='*'
                element={<Error404/>}
              />
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
