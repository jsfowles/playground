import React from 'react';

const One = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="transition-all duration-500 bg-gradient-to-r from-blue-500  to-teal-300 bg-size-200 bg-pos-100 hover:bg-pos-0
 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-28 xl:px-20">
          <div className="lg:self-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block">Start your free trial today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-white">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </p>
            <div className="relative mt-6">
              <button className="animate bg-white relative transform hover:translate-x-5  rounded-md h-12 px-4 z-50">
                <p className="tracking-wider uppercase text-blue-500">
                  Learn More
                </p>
              </button>
              <span className="h-2/5 bg-teal-200 w-0.5 absolute left-0 top-3.5 z-10" />
              <span className="h-3/5 bg-teal-300 w-0.5 absolute left-1.5 top-2 z-10" />
              <span className="h-4/5 bg-teal-400 w-0.5 absolute left-3 top-1 z-10" />
            </div>
          </div>
        </div>
        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 ">
          <img
            className="opacity-80 border-2 border-white transform translate-x-6 translate-y-6 rounded-3xl object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
            src="/images/sbs/sbsOne.jpg"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  </div>
);

export default One;
