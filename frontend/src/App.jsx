




import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Splash from "./pages/public/Splash";
import Login from "./pages/public/Login";
import About from "./pages/public/About";

import Footer from "./components/Footer";
import AdminLayout from "./components/AdminLayout";

import Usuarios from "./pages/admin/Usuarios";
import UsuarioForm from "./pages/admin/UsuarioForm";
import AdminDashboard from "./pages/admin/Dashboard";

import AlbumAutor from "./pages/autor/Album";
import FigurinhaForm from "./pages/autor/FigurinhaForm";
import AutorDashboard from "./pages/autor/Dashboard";

import AlbumColecionador from "./pages/colecionador/Album";
import NovaFigurinha from "./pages/colecionador/NovaFigurinha";
import FigurinhaDetalhe from "./pages/colecionador/FigurinhaDetalhe";
import ColecionadorDashboard from "./pages/colecionador/Dashboard";

import ConfiguracaoAlbum from "./pages/autor/ConfiguracaoAlbum";

function Layout() {

  return (
    <>
      <Routes>

        {/* Públicas */}

        <Route
          path="/"
          element={<Splash />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        {/* Admin */}

        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout perfil="admin">
              <AdminDashboard />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/usuarios"
          element={
            <AdminLayout perfil="admin">
              <Usuarios />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/usuario-form"
          element={
            <AdminLayout perfil="admin">
              <UsuarioForm />
            </AdminLayout>
          }
        />

        {/* Autor */}

        <Route
          path="/autor/dashboard"
          element={
            <AdminLayout perfil="autor">
              <AutorDashboard />
            </AdminLayout>
          }
        />

        <Route
          path="/autor/album"
          element={
            <AdminLayout perfil="autor">
              <AlbumAutor />
            </AdminLayout>
          }
        />

        <Route
          path="/autor/figurinha-form"
          element={
            <AdminLayout perfil="autor">
              <FigurinhaForm />
            </AdminLayout>
          }
        />

        {/* Colecionador */}

        <Route
          path="/colecionador/dashboard"
          element={
            <AdminLayout perfil="colecionador">
              <ColecionadorDashboard />
            </AdminLayout>
          }
        />

        <Route
          path="/colecionador/album"
          element={
            <AdminLayout perfil="colecionador">
              <AlbumColecionador />
            </AdminLayout>
          }
        />

        <Route
          path="/colecionador/nova-figurinha"
          element={
            <AdminLayout perfil="colecionador">
              <NovaFigurinha />
            </AdminLayout>
          }
        />

        <Route
          path="/colecionador/figurinha/:id"
          element={
            <AdminLayout perfil="colecionador">
              <FigurinhaDetalhe />
            </AdminLayout>
          }
        />

        <Route
            path="/autor/configuracao-album"
            element={
                <AdminLayout perfil="autor">
                    <ConfiguracaoAlbum />
                </AdminLayout>
            }
        />

      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}