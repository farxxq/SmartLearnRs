import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">SmartLearn AI</h1>
        <p className="mt-4 text-lg md:text-xl">
          Personalized Learning Paths Powered by AI 🚀
        </p>
        <div className="mt-6">
          <Link to='/#' className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Get Started
          </Link>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose SmartLearn?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl">🧠</div>
            <h3 className="text-xl font-semibold mt-4">
              Personalized Learning
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              AI-driven recommendations ensure you always know what to learn
              next.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl">📈</div>
            <h3 className="text-xl font-semibold mt-4">Adaptive Study Plan</h3>
            <p className="text-gray-600 mt-2 text-center">
              Your study plan adjusts based on performance, keeping you on
              track.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl">🚀</div>
            <h3 className="text-xl font-semibold mt-4">
              Career-Oriented Courses
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              Learn exactly what’s needed for Web Dev, Data Science, or Cloud
              Computing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl">💡</div>
            <h3 className="text-xl font-semibold mt-4">Smart Analytics</h3>
            <p className="text-gray-600 mt-2 text-center">
              Track your progress with AI-powered insights and real-time
              analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Start Your Learning Journey Today
        </h2>
        <p className="mt-4 text-lg">
          Join thousands of learners using AI-powered study paths!
        </p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
