import Menu from "../Menu/Menu.jsx";
import Footer from "../footer/footer.jsx";
import { Outlet } from "react-router-dom";
import Bienvenida from "./bienvenida/bienvenida.jsx";

export default function Home() {
  return (
    <>
      <Menu />
      <Outlet />
      
      <Footer />
    </>
  );
}
