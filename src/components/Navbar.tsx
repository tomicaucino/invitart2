import { HeartIcon } from "lucide-react";

const Navbar =() => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
            <a href="/">
                <div className="flex items-center">
                    <HeartIcon className="h-6 w-6 text-rose-600 mr-2" />
                    <span className="text-xl font-serif text-rose-900">InvitArt</span>
                </div>
            </a>

          <button className="md:hidden text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </header>
  );
};

export default Navbar;