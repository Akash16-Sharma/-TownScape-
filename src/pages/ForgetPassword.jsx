import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to", email);
    // API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
