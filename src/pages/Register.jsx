import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering user with", form);
    // You can add backend logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Register
        </button>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
