import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Splash from "./pages/public/Splash";
import Login from "./pages/public/Login";
import About from "./pages/public/About";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {

  const location = useLocation();

  const mostrarHeader =
    !["/", "/login", "/about"].includes(
      location.pathname
    );

  return (
    <>
      {mostrarHeader && (
        <Header />
      )}

      <Routes>

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