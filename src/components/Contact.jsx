import React from "react";

const Contact = () => {
  return (
    <div class="max-w-[2000px] mx-auto bg-slate-900 sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 class="text-4xl font-bold leading-tight text-gray-50">
          Contact Me
        </h2>
      </div>

      <div class="max-w-[800px] mx-auto">
        <div class="mt-6 border-gray-50 rounded-xl">
          <div class="p-10">
            <form action="https://getform.io/f/lajkoxvb" method="POST">
              <div class="grid grrid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div class="mt-2.5 relative>">
                    <input
                      type="text"
                      name="text"
                      id=" "
                      placeholder="Name"
                      class="border-gray-50 w-full px-4 py-4 text-slate-900 placeholder-slate-900 rounded-md 
                    focus:outline-none focus:border-blue-600"
                    ></input>
                  </div>
                </div>
                <div>
                  <div class="mt-2.5 relative>">
                    <input
                      type="email"
                      name="email"
                      id=" "
                      placeholder="Email"
                      class="border-gray-50 w-full px-4 py-4 text-slate-900 placeholder-slate-900 rounded-md 
                    focus:outline-none focus:border-blue-600"
                    ></input>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <div class="mt-2.5 relative>">
                    <input
                      type="message"
                      name="message"
                      id=" "
                      placeholder="Your Message"
                      class="border-gray-50 w-full px-4 py-4 text-slate-900 placeholder-slate-900 rounded-md 
                    focus:outline-none focus:border-blue-600"
                    ></input>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <button
                    type="submit"
                    class="text-xl w-full p-4 mt-2 font-semifold text-slate-900 bg-blue-600 rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
