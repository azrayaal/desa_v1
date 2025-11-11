import { useTheme } from "../../context/ThemeContext";

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3.33334V1.66667M10 18.3333V16.6667M16.6667 10H18.3334M1.66675 10H3.33341M15.8334 4.16667L17.0417 2.95834M2.95841 17.0417L4.16675 15.8333M15.8334 15.8333L17.0417 17.0417M2.95841 2.95834L4.16675 4.16667M14.1667 10C14.1667 12.3012 12.3012 14.1667 10 14.1667C7.69881 14.1667 5.83341 12.3012 5.83341 10C5.83341 7.69881 7.69881 5.83334 10 5.83334C12.3012 5.83334 14.1667 7.69881 14.1667 10Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3.33334C6.31814 3.33334 3.33341 6.31807 3.33341 10C3.33341 13.6819 6.31814 16.6667 10 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.31807 13.6819 3.33334 10 3.33334Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 1.66667V3.33334M10 16.6667V18.3333M18.3334 10H16.6667M3.33341 10H1.66675M15.8334 4.16667L14.6251 5.375M5.37492 14.625L4.16658 15.8333M15.8334 15.8333L14.6251 14.625M5.37492 5.375L4.16658 4.16667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

