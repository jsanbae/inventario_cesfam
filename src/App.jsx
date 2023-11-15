import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/auth/Login';
import MainLayout from './pages/MainLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Insumos from './pages/insumos/Insumos';
import Inventario from './pages/inventario/Inventario';
import NotFound from './pages/errors/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />}/> */}
          <Route path="/" element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="insumos" element={<Insumos />} />
            <Route path="inventario" element={<Inventario />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
