import Menu from "../Menu/Menu.jsx";
import Footer from "../footer/footer.jsx";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Menu />
      <Outlet />
      
      <Footer />
    </>
  );
}
