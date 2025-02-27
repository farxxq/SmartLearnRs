import { Link } from "react-router-dom";

export function CourseCard() {
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
      <div className="w-full text-center">
        <h1 className="text-3xl font-semibold">Explore our courses...</h1>
        <p>description about this</p>
      </div>
      <div className="flex md:flex gap-5 p-10">
        {courses.map((course) => {
          return (
            <>
              <div className="flex flex-col gap-5 md:w-1/3 w-full h-full p-5 rounded-xl border-7 border-primary bg-secondary">
                <h1 className="text-2xl font-bold">{course.heading}</h1>
                <p className="text-lg font-light">{course.desc}</p>
                <Link
                  to="#"
                  className="bg-bgColor w-fit py-3 px-4.5 mt-5 text-lg rounded-xl"
                >
                  Explore Course
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export function TestimonialCards() {
  const testimonials = [
    {
      id: "1",
      heading: "Stud 1",
      desc: "Hello this is description",
      img: "stud1",
    },
    {
      id: "2",
      heading: "Stud 2",
      desc: "Hello this is description",
      img: "stud2",
    },
    {
      id: "3",
      heading: "Stud 3",
      desc: "Hello this is description",
      img: "stud3",
    },
  ];

  return (
    <>
      <div className="w-full text-center">
        <h1 className="text-3xl font-semibold">Explore our courses...</h1>
        <p>description about this</p>
      </div>
      <div className="flex flex-col md:flex gap-5 p-10">
        {testimonials.map((testimonials) => {
          return (
            <>
              <div className="flex text-center py-8 w-full h-full bg-gray-500 border-8 border-primary rounded-xl">
                <div className="w-full rounded-full">
                  <img src="#" alt={`${testimonials.heading}`} />
                </div>
                <div className="flex flex-col gap-5 p-3 text-primary">
                  <h1 className="text-2xl font-bold">{testimonials.heading}</h1>
                  <p className="text-lg font-light">{testimonials.desc}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
