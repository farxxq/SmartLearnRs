function Home() {
  return (
    <>
      <section className="w-screen h-screen md: flex flex-col bg-blue-light text-white overflow-x-hidden">
        <section className="heroSection w-full h-full p-3 flex flex-col gap-10">
          <div className=" gap-30 flex justify-center p-10">
            <div className="heading">
              <h1 className="text-4xl font-inter font-semibold">
                AI-Driven Personalized <br /> Learning Paths!
              </h1>
            </div>
            <div className="w-fit text-lg rounded-xl">
              <p className="mb-5">
                Your Personalized Learning Journey <br />
                Learn Smarter, Not Harder
              </p>
              <button className="bg-blue-midLight text-white p-3 rounded-lg font-medium tracking-tight">
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center mb-10">
            <video
              src="4497324-uhd_3840_2160_25fps.mp4"
              autoPlay
              loop
              muted
              className="w-1/2 rounded-2xl shadow-blue-dark shadow-xl"
            ></video>
          </div>
        </section>
        <section className="midSection pb-10 p-3 w-full h-full flex justify-around bg-blue/30">
          <div className="w-1/2 flex flex-col gap-5 justify-center p-4">
            <h1 className="text-3xl font-medium">
              Text explaining the content a little
            </h1>
            <p className="font-light">
              Para to explain it in short may be Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Velit, accusamus sequi, eveniet
              quibusdam asperiores omnis ex deleniti, ad animi ullam nihil quae
              tempore amet. Blanditiis nihil assumenda doloribus est error!
            </p>
            <ul className="ml-15 list-disc">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div className="w-1/4">
            <img
              src="heroImg1.jpg"
              alt="heroImg"
              className="w-full rounded-xl shadow-2xl shadow-blue-dark"
            />
          </div>
        </section>
        <section className="flex flex-col p-10 gap-10 w-full text-center bg-white text-black">
          <div className="heading flex flex-col">
            <p className="font-medium">SmartLearn Rs</p>
            <h1 className="font-semibold font-inter text-2xl">
              SmartLEarn and more about it
            </h1>
          </div>
          <div className="grid grid-cols-3 grid-row-2 gap-10">
            <div className="grid-cols-1 grid-rows-2">
              <div className="grid-cols-1 grid-row-1">
                <h4 className="font-medium">heading</h4>
                <p className="font-extralight">
                  Para for the heading Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis voluptatum veritatis quae cumque,
                  blanditiis explicabo quisquam ipsam quia praesentium doloribus
                  est eos. Alias repellat placea
                </p>
              </div>
              <div className="grid-cols-1 grid-row-1">
                <h4 className="font-medium">heading</h4>
                <p className="font-extralight">
                  Para for the heading Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis voluptatum veritatis quae cumque,
                  blanditiis explicabo quisquam ipsam quia praesentium doloribus
                  est eos. Alias repellat placea
                </p>
              </div>
            </div>
            <div className="grid-cols-1 grid-row-2 flex justify-center">
              <img
                src="heroImg1.jpg"
                alt="courses"
                className="w-1/2 flex justify-center rounded-xl"
              />
            </div>
            <div className="grid-cols-1 grid-rows-2">
              <div className="grid-cols-1 grid-row-1">
                <h4 className="font-medium">heading</h4>
                <p className="font-extralight">
                  Para for the heading Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis voluptatum veritatis quae cumque,
                  blanditiis explicabo quisquam ipsam quia praesentium doloribus
                  est eos. Alias repellat placea
                </p>
              </div>
              <div className="grid-cols-1 grid-row-1">
                <h4 className="font-medium">heading</h4>
                <p className="font-extralight">
                  Para for the heading Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis voluptatum veritatis quae cumque,
                  blanditiis explicabo quisquam ipsam quia praesentium doloribus
                  est eos. Alias repellat placea
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-blue-dark text-white p-3 rounded-lg font-medium tracking-tight">
              Explore More...
            </button>
          </div>
        </section>
        <section className="testimonial flex justify-around mt-10 w-full bg-blue-light/30">
          <div className="rounded-xl shadow-2xl bg-blue-dark shadow-fuchsia-400 flex flex-col items-center p-5 gap-2">
            <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" alt="user" className="w-20 h-20 rounded-full"/>
            <h1>Name</h1>
            <p>loremljjljljljljjkjkjkjlkjkljljljljljljlkjljlkjlkjlj</p>
          </div>
          <div className="rounded-xl shadow-2xl bg-blue-dark shadow-fuchsia-400 flex flex-col items-center p-5 gap-2">
            <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" alt="user" className="w-20 h-20 rounded-full"/>
            <h1>Name</h1>
            <p>loremljjljljljljjkjkjkjlkjkljljljljljljlkjljlkjlkjlj</p>
          </div>
          <div className="rounded-xl shadow-2xl bg-blue-dark shadow-fuchsia-400 flex flex-col items-center p-5 gap-2">
            <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" alt="user" className="w-20 h-20 rounded-full"/>
            <h1>Name</h1>
            <p>loremljjljljljljjkjkjkjlkjkljljljljljljlkjljlkjlkjlj</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
