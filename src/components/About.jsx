import React from "react";

const About = () => {
  return (
    <div
      className="border-t border-b text-slate-900 border-slate-900 max-w-[1200px] mx-auto my-12"
      id="about"
    >
      <div className="md:grid md:grid-cols-1 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 text-blue-500">
              {" "}
              About Me{" "}
            </h2>
            <p className="text-base lg:text-lg">
              Hi, I'm Bryan Rachmat, a dedicated 4th-year Computing Science
              student with a keen interest in developing dynamic web
              applications. My recent projects have immersed me in the world of
              JavaScript frameworks, specifically Node.js and Angular, allowing
              me to create full-stack applications from the ground up. I've
              gained practical experience in deployment, server management, and
              database integration, with a particular focus on leveraging AWS
              services to build scalable, efficient solutions. Driven by a
              passion for technology and its potential to solve real-world
              problems, I am eager to apply my skills in a practical, hands-on
              environment. I am currently seeking internship opportunities where
              I can contribute to meaningful projects, expand my technical
              expertise, and further explore the intersection of software
              development and innovative digital solutions. I am excited about
              the prospect of joining a team where I can not only grow as a
              developer but also contribute to creating impactful technology
              products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
