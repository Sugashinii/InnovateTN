import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🚀 InnovateTN
        </Link>

        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/clinics" className="hover:text-blue-600 font-medium">
            Clinics
          </Link>
          <Link to="/symptoms" className="hover:text-blue-600 font-medium">
            Symptoms
          </Link>
        </div>
      </div>
    </nav>
  );
}
