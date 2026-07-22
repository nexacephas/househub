import { Outlet } from "react-router-dom";

import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";

export default function PublicLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}