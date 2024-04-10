import React from "react";

const Work = () => {
  return (
    <div
      className=" border-b border-slate-900 max-w-[1200px] mx-auto p-5"
      id="work"
    >
      <div className="pb-8">
        <p className="text-4xl  mb-3 font-bold text-blue-500">
          Experiences / Projects
        </p>
      </div>

      <div className="mb-6">
        <h1 className="text-4xl mt-5 font-semibold">
          <a
            href="https://github.com/rachmatbryan/MyStore"
            className="hover:text-blue-500 transition duration-300"
          >
            Angular Online Store &rarr;
          </a>
        </h1>
        <p className="mt-2 text-base">
          {" "}
          This Angular project is a sleek, feature-rich e-commerce application,
          encapsulating components for product listings, shopping cart
          functionality, and checkout processes, demonstrating a strong
          understanding of modular design and full-stack development. Its
          organized structure, inclusive of dedicated services and model
          definitions, reflects meticulous attention to detail, essential for a
          responsive and user-friendly shopping experience.
        </p>
      </div>
      <div className="mb-6">
        <h1 className="text-4xl mt-5 font-semibold">
          <a
            href="https://github.com/rachmatbryan/ImageAPI"
            className="hover:text-blue-500 transition duration-300"
          >
            {" "}
            ImageAPI &rarr;
          </a>
        </h1>
        <p>
          {" "}
          The Image API project, structured in Node.js with Express, showcases
          an efficient solution for dynamic image resizing, featuring a robust
          set of endpoints that respond to user-specified dimensions. Its clean
          directory organization, complete with original and resized image
          storage, testing suites with Jasmine, and middleware utilities,
          underscores the API's capability to deliver optimized images for
          various web applications.
        </p>
      </div>
      <div className="mb-6">
        <h1 className="text-4xl mt-5 font-semibold">
          <a
            href="https://github.com/rachmatbryan/401-Project"
            className="hover:text-blue-500 transition duration-300"
          >
            Elderly Cognitive Game (ESP32) &rarr;
          </a>
        </h1>
        <p>
          {" "}
          In my physical computing class, me and my teammate developed a
          cognitive game for the elderly, using electronic components and
          micro-python for ESP-32.{" "}
        </p>
      </div>
      <div className="mb-6">
        <h1 className="text-4xl mt-5 font-semibold">
          <a
            href="https://github.com/rachmatbryan/WinklerPhoto"
            className="hover:text-blue-500 transition duration-300"
          >
            Photography Website &rarr;
          </a>
        </h1>
        <p>
          {" "}
          This modern photography website, designed with HTML, CSS, and
          JavaScript, offers a visually stunning platform that elegantly
          showcases photographic work. With a responsive layout, interactive
          galleries, and a sleek user interface, it reflects an excellent fusion
          of aesthetic appeal and functional design, tailored to provide
          visitors with an immersive viewing experience.
        </p>
      </div>
      <div className="mb-6">
        <h1 className="text-4xl mt-5 font-semibold">
          <a
            href="https://github.com/rachmatbryan/StorefrontBackend"
            className="hover:text-blue-500 transition duration-300"
          >
            Storefront Backend &rarr;
          </a>
        </h1>
        <p>
          The "Storefront Backend" project is an efficiently architected backend
          system, crafted using Express and PostgreSQL, embodying the core
          functionalities of a storefront with a suite of RESTful APIs. It
          features well-defined handlers, robust data models, and a
          comprehensive test suite, ensuring a resilient and scalable foundation
          for e-commerce operations.{" "}
        </p>
      </div>
      <div className="mb-6">
        <h1 className="text-4xl mt-5 font-semibold">
          <a
            href="https://github.com/rachmatbryan/nd0067-c4-deployment-process-project-starter"
            className="hover:text-blue-500 transition duration-300"
          >
            Deployment Practice &rarr;
          </a>
        </h1>
        <p>
          The 'Udagram' project encapsulates a sophisticated cloud application,
          deployed using AWS services, demonstrating a scalable infrastructure
          suitable for a social media platform. It's integrated with CircleCI
          for continuous integration and deployment, ensuring code changes are
          automatically built, tested, and deployed with precision.
          Comprehensive documentation within the repository highlights the
          application's dependencies, infrastructure, and deployment pipeline,
          evidencing a professional approach to modern software development.{" "}
        </p>
      </div>
      <div className="mb-6">
        <h1 className="text-4xl mt-5 font-semibold">
          <a
            href="https://github.com/rachmatbryan/marta"
            className="hover:text-blue-500 transition duration-300"
          >
            Research Assistant &rarr;
          </a>
        </h1>
        <p>
          {" "}
          In my Research Assistant role at TWU, I co-authored "MARTA: Modern
          Automatic Renderings from Text to Animation," a pioneering publication
          presented at the 2023 IEEE UEMCON, contributing to the frontier of
          AI-driven 3D animation technology. My work involved the innovative
          application of Python, Blender, and machine learning, showcasing the
          potential of NLP and Stable Diffusion in automating digital
          storytelling.{" "}
        </p>
      </div>
      <div className="mb-6">
        <h1 className="text-4xl mt-5 font-semibold">
          <a
            href="https://www.linkedin.com/in/bryan-rachmat-a48006269/"
            className="hover:text-blue-500 transition duration-300"
          >
            Teaching Assistant &rarr;
          </a>
        </h1>
        <p>
          As a Teaching Assistant, I facilitated learning in Java and
          Object-Oriented Programming, mentoring students to enhance their
          coding proficiency, and I meticulously graded assignments, providing
          detailed feedback to foster their academic development. This role
          demanded a deep understanding of the subject matter and the ability to
          communicate complex concepts with clarity.{" "}
        </p>
      </div>
    </div>
  );
};

export default Work;
