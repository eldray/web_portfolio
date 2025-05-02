export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kwame Asante
            </span>
            <p className="text-gray-400 text-sm mt-1">
              Full-Stack Developer based in Ghana
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2023 Kwame Asante. All rights reserved.</p>
          <p className="mt-2">
            Built with <i className="fas fa-heart text-red-500"></i> in Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
