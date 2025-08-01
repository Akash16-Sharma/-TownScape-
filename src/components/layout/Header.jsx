// components/layout/Header.jsx

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Hibi (日々)</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Sign In</button>
      </div>
    </header>
  );
};
export default Header;