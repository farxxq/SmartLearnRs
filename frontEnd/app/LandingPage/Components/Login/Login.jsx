import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5001/api/users/login", formData);
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("token", response.data.token);
      alert("Login Successful!");
    } catch (error) {
      alert("Invalid credentials");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-1/3" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input name="email" type="email" placeholder="Email" className="w-full p-2 mb-2 border" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 mb-2 border" onChange={handleChange} />

        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
