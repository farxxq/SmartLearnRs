import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import {CourseCard, TestimonialCards} from "../components/Card";

function Home() {
  const courses = [
    {
      id: "1",
      heading: "Web Development",
      desc: "Hello this is description",
    },
    {
      id: "2",
      heading: "Data Science",
      desc: "Hello this is description",
    },
    {
      id: "3",
      heading: "Cloud Computing",
      desc: "Hello this is description",
    },
  ];

  return (
    <>
      <div className="w-full bg-bgColor">
        {/* Hero Section */}
        <section className="w-full bg-primary heroSection flex justify-evenly p-5 ">
          <div className="leftHero w-1/2 ">
            <div className="heading">
              <h1 className="text-4xl font-semibold">
                Learn Smarter, Not Harder –<br /> AI-Driven Personalized
                Learning Paths!
              </h1>
              <h4 className="">Your Personalized Learning Journey</h4>
            </div>
            <div className="bg-btn w-fit py-3 px-4.5 mt-5 text-lg rounded-xl">
              <Link>Get Started</Link>
            </div>
          </div>
          <div className="rightHero w-1/4 ">
            <img src="" alt="heroImg" />
          </div>
        </section>
        {/* trailing section */}
        <section>
          <div className="bg-primary w-full h-10"></div>
        </section>
        {/* Explore courses section */}
        {/* <section className="w-full">
          <div className="searchBar p-5 text-center">
            <form action="#" className="flex justify-center">
              <input
                type="text"
                placeholder="Search courses..."
                className=" rounded-lg p-2.5 text-sm mr-3"
              />
              <button
                type="submit"
                className="rounded-full p-2.5 text-2xl bg-primary text-white font-bold "
              >
                <CiSearch />
              </button>
            </form>
          </div>
        </section> */}
        {/* Benifits */}
        {/* <section className="benifits w-full flex justify-around p-5">
          <div className="rightHero w-1/4 ">
            <img src="" alt="heroImg" />
          </div>
          <div className="leftHero w-1/2 ">
            <h1 className="text-3xl font-semibold text-center mb-8">
              Why Choose Us?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-md flex flex-col gap-5">
                <h3 className="text-lg font-semibold">
                  🧠 Personalized Learning Paths
                </h3>
                <p className="font-light">
                  Get AI-powered course recommendations based on your skills and
                  learning progress. No more guesswork!
                </p>
              </div>

              <div className="bg-white p-5 rounded-md flex flex-col gap-5">
                <h3 className="text-lg font-semibold">
                  📈 Adaptive Study Plan
                </h3>
                <p className="font-light">
                  Our AI dynamically adjusts your study plan based on your
                  performance, helping you stay on track.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md flex flex-col gap-5">
                <h3 className="text-lg font-semibold">
                  🚀 Career-Oriented Courses
                </h3>
                <p className="font-light">
                  Learn exactly whats needed for your{" "}
                  <strong>dream career</strong> - Web Dev, Data Science, or
                  Cloud Computing.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md flex flex-col gap-5">
                <h3 className="text-lg font-semibold">
                  💡 Smart Insights & Analytics
                </h3>
                <p className="font-light">
                  Track your learning habits, progress, and achievements with
                  real-time insights and data-driven feedback.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* Courses Offered */}
        <section className="courses">
          <div className="w-full">
            <CourseCard/>
          </div>
        </section>
        {/* Student Testimonials */}
        <section className="testimonials">
          <div className="w-full">
            <TestimonialCards/>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
