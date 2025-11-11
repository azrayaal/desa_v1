import { Link } from "react-router";
import { useSidebar } from "../context/SidebarContext";

const AppSidebar: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen, setHovered, toggleMobileSidebar } = useSidebar();

  const sidebarWidth = isExpanded || isHovered ? "w-[290px]" : "w-[90px]";
  const isVisible = isExpanded || isHovered;

  return (
    <aside
      className={`fixed left-0 top-0 z-99999 flex h-screen flex-col overflow-y-hidden bg-white border-r border-gray-200 dark:border-gray-800 dark:bg-gray-900 transition-all duration-300 ease-in-out ${sidebarWidth} ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex h-full flex-col overflow-y-auto overflow-x-hidden">
        {/* Logo Section */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-800">
          <Link to="/" className="flex items-center gap-3">
            {isVisible ? (
              <>
                <img
                  className="dark:hidden"
                  src="./images/desa/logo.png"
                  alt="Logo"
                  style={{ height: "32px" }}
                />
                <img
                  className="hidden dark:block"
                  src="./images/logo/logo-dark.svg"
                  alt="Logo"
                  style={{ height: "32px" }}
                />
              </>
            ) : (
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            )}
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-4">
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    toggleMobileSidebar();
                  }
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {isVisible && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/public"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    toggleMobileSidebar();
                  }
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                {isVisible && <span>Public</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;

