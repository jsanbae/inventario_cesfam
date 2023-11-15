import React, {useContext, useEffect} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { OffCanvasProvider } from '../context/OffCanvasContext';
import { ConfirmDialogProvider } from '../hooks/useConfirm';

export default function MainLayout() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context.user) {
      navigate('/login');
      toast.error('No tienes una sesión activa, debes iniciar sesión para acceder al sistema.');
    }
  },[]);

  return (
      <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">

        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="col-span-5">
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="p-4 lg:p-12 bg-gray-100 h-screen">
            <ConfirmDialogProvider>
              <OffCanvasProvider>
                <Outlet />
              </OffCanvasProvider>
            </ConfirmDialogProvider>
          </div>
        </main>
      </div>
  )
}
