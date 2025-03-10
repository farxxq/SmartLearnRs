import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    past_performance: "",
    preferred_course: "",
    study_hours: "",
    learning_style: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5001/api/users/register", {
        ...formData,
        survey: {
          preferred_course: formData.preferred_course,
          study_hours: formData.study_hours,
          learning_style: formData.learning_style
        }
      });
      alert("Registration Successful!");
      console.log(response.data);
    } catch (error) {
      alert("Error registering user");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-1/3" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        
        <input name="name" placeholder="Name" className="w-full p-2 mb-2 border" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" className="w-full p-2 mb-2 border" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 mb-2 border" onChange={handleChange} />
        <input name="past_performance" type="number" placeholder="Past Performance Score" className="w-full p-2 mb-2 border" onChange={handleChange} />
        
        <h3 className="text-lg font-semibold mt-4">Survey</h3>
        <input name="preferred_course" placeholder="Preferred Course" className="w-full p-2 mb-2 border" onChange={handleChange} />
        <input name="study_hours" type="number" placeholder="Study Hours per Day" className="w-full p-2 mb-2 border" onChange={handleChange} />
        <input name="learning_style" placeholder="Learning Style (Visual/Auditory/Reading)" className="w-full p-2 mb-2 border" onChange={handleChange} />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
