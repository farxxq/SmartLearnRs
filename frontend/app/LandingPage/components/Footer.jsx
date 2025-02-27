function Footer() {
  return (
    <>
      <footer className="bg-primary text-black py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">
                📞 Contact Us
              </h3>
              <p className="text-sm">Email: support@smartlearn.com</p>
              <p className="text-sm">Phone: +91 98765 43210</p>
              <p className="text-sm">Address: Bangalore, India</p>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">
                ℹ️ About Us
              </h3>
              <p className="text-sm">
                SmartLearn is an AI-driven platform that helps students learn
                smarter with personalized course recommendations and adaptive
                study plans.
              </p>
            </div>

            {/* Explore Courses */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">
                🎓 Explore Courses
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-btn duration-150">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-btn duration-150">
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-btn duration-150">
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-btn duration-150">
                    Machine Learning
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">
                🔗 Quick Links
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-btn duration-150">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-btn duration-150">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-btn duration-150">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-btn duration-150">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-black text-2xl">
              🌍
            </a>
            <a href="#" className="text-gray-400 hover:text-black text-2xl">
              📘
            </a>
            <a href="#" className="text-gray-400 hover:text-black text-2xl">
              📸
            </a>
            <a href="#" className="text-gray-400 hover:text-black text-2xl">
              🐦
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm mt-6 text-gray-600">
            &copy; {new Date().getFullYear()} SmartLearn. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
