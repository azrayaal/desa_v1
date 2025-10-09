export default function NavbarDesa() {
  return (
    <nav className="absolute top-0 w-full py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left: Brand */}
        <a href="#" className="text-white font-medium tracking-wide text-lg">
          Desa
        </a>

        {/* Center: Menu */}
        <ul className="hidden lg:flex space-x-6 mx-auto">
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right: Socials */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <button className="lg:hidden text-white">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
