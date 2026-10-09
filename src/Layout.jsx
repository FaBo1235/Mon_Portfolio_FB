import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { LanguageProvider } from "./LanguageContext.jsx";

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F4F1EA] text-[#171717]">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}