import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[99999] transition-all duration-300 border-b ${
        isScrolled
          ? "backdrop-blur-md bg-white/90 border-gray-200 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 sm:gap-4 lg:justify-normal lg:px-0 lg:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={
                isScrolled
                  ? "/images/desa/logo.png" // Logo versi gelap saat bg putih
                  : "/images/desa/logo.png" // Logo putih untuk bg transparan
              }
              alt="Logo Desa"
              className="w-8 h-8 transition-all"
            />
            {/* <span
              className={`font-semibold text-lg transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Dashboard Desa
            </span> */}
          </Link>
        </div>

        {/* Menu */}
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className="flex items-center gap-6 text-sm font-medium">
            <div
              className={`cursor-pointer transition-colors ${
                isScrolled ? "text-gray-800 hover:text-[#383638]" : "text-white"
              }`}
              onClick={() => navigate("/desa")}
            >
              Dashboard
            </div>
            <div
              className={`cursor-pointer transition-colors ${
                isScrolled ? "text-gray-800 hover:text-[#383638]" : "text-white"
              }`}
              onClick={() => navigate("/talent")}
            >
              Talent
            </div>
            <div
              className={`cursor-pointer transition-colors ${
                isScrolled ? "text-gray-800 hover:text-[#383638]" : "text-white"
              }`}
              onClick={() => navigate("/marketplace")}
            >
              Marketplace
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
