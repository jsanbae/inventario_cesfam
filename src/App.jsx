import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from 'src/pages/auth/Login';
import MainLayout from 'src/pages/MainLayout';
import Dashboard from 'src/pages/dashboard/Dashboard';
import Insumos from 'src/pages/insumos/Insumos';
import Inventario from 'src/pages/inventario/Inventario';
import NotFound from 'src/pages/errors/NotFound';

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
