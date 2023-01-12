import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    // tailwind background whole page is a image with text on top
    <div>
      {/* gradient background with 4 colors of indago animated*/}
      <article className="relative h-screen bg-gradient-to-tr from-indigo-400 to-indigo-600">
        {/* <picture>
          <source
            srcSet="https://wallpaperaccess.com/full/1647799.jpg"
            media="(min-width: 1024px)"
          />
          <img src="https://wallpaperaccess.com/full/1647799.jpg" alt="" />
        </picture> */}
        <div className="absolute top-0 left-0 w-full h-[593px]">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              BrainWeb🧠
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-white mb-4 leading-tight">
              A place to store your thoughts
            </h2>
            <Link to="/brain">
              <button className="bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg hover:shadow-xl transition duration-200">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Landing;
