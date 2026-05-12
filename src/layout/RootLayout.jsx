import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[#F9FBFA]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;