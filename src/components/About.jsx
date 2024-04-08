import React from "react";

const About = () => {
  return (
    <div
      className="border-t border-b text-slate-900 border-slate-900 max-w-[1200px] mx-auto my-12"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="md:grid md:grid-cols-2 sm:py-16">
          <div className="mt-4 md:mt-0 text-left flex">
            <div className="my-auto mx-6">
              <h2 className="text-4xl font-bold mb-4 text-blue-500">
                {" "}
                About Me{" "}
              </h2>
              <p className="text-base lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                aliquid dolorem maxime dignissimos cumque laboriosam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
