import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const AppHeader2: React.FC = () => {
  const [isApplicationMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const menuItems = [
    { letter: "M", label: "Marketplace", url: "https://www.shopify.com/" },
    { letter: "E", label: "Export", url: "https://www.alibaba.com/" },
    { letter: "T", label: "Talent", url: "https://www.linkedin.com/" },
    { letter: "A", label: "Art", url: "https://www.instagram.com/" },
  ];

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[99999] transition-all duration-300 border-b ${
        isScrolled
          ? "backdrop-blur-md bg-white/90 border-gray-200 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        {/* Logo */}
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 sm:gap-4 lg:justify-normal lg:px-0 lg:py-4">
          <Link to="/desa" className="flex items-center gap-2">
            <img
              src={"/images/desa/logo.png"}
              alt="Logo Desa"
              className="w-8 h-8 transition-all"
            />
          </Link>
        </div>

        {/* Menu */}
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className="flex items-center gap-8 text-sm font-medium">
            {menuItems.map(({ letter, label, url }) => (
              <a
                key={letter}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(letter)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center justify-center overflow-hidden group"
              >
                {/* Huruf singkatan */}
                <div
                  className={`absolute transition-all duration-500 ease-out ${
                    hovered === letter
                      ? "opacity-0 translate-y-[-10px]"
                      : "opacity-100 translate-y-0"
                  } ${
                    isScrolled
                      ? "text-gray-800 group-hover:text-[#383638]"
                      : "text-white/90"
                  }`}
                >
                  {letter}
                </div>

                {/* Label penuh */}
                <div
                  className={`transition-all duration-500 ease-out ${
                    hovered === letter
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[10px]"
                  } ${
                    isScrolled
                      ? "text-gray-800 group-hover:text-[#383638]"
                      : "text-white/90"
                  }`}
                >
                  {label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader2;
