import { useState } from "react";

import Splash from "./pages/splash";
import Login from "./pages/login";
import About from "./pages/about";

import Footer from "./components/Footer";

function App() {
  const [pagina, setPagina] = useState("splash");

  return (
    <>
      {pagina === "splash" && (
        <Splash
          onFinish={() => setPagina("login")}
        />
      )}

      {pagina === "login" && (
        <Login />
      )}

      {pagina === "about" && (
        <About />
      )}

      <Footer />
    </>
  );
}

export default App;