import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-600">Contact Us</h2>
        <p className="text-gray-600 text-center mt-2">
          Have questions? Reach out to us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Send a Message</h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Write your message..."
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
            <p className="text-gray-600 mt-2">Feel free to reach out to us directly.</p>

            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-2xl">📍</span>
                <p className="text-gray-700">123 SmartLearn St, Bangalore, India</p>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-2xl">📞</span>
                <p className="text-gray-700">+91 98765 43210</p>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-2xl">✉️</span>
                <p className="text-gray-700">support@smartlearn.com</p>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-2xl">🌐</span>
                <p className="text-gray-700">www.smartlearn.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
