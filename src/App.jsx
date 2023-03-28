import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from './pages/dashboard/Dashboard';
import Insumos from './pages/insumos/Insumos';
import Inventario from './pages/inventario/Inventario';

function App() {

  return (
    <Router>
      <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
    
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className='col-span-5'>
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="p-4 lg:p-12 bg-gray-100 h-screen">
    
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/insumos" element={<Insumos />} />
              <Route path="/inventario" element={<Inventario />} />
            </Routes>

          </div>
        </main>

      </div>
    </Router>
  )
}

export default App
