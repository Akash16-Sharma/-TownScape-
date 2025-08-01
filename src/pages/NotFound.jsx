import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-gray-700 text-lg">Page Not Found</p>
        <Link
          to="/"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go back to Login
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
