import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import withTransition from '@lib/withTransition';

const CompOneMobile = () => {
  const [toggleNav, setToggleNav] = React.useState(false);
  const [toggleHover, setToggleHover] = React.useState(null);

  return (
    <>
      <main className=" h-full w-screen flex flex-col items-center justify-center mx-auto">
        <div className="">
          <h1 className="font-outline text-center text-9xl">Component One</h1>
          <h1 className="font-outline text-6xl text-center">Mobile</h1>
          <div className="max-w-[414px] mx-auto my-8">
            <div className="aspect-w-9 aspect-h-16 border-8 border-black rounded-phone overflow-hidden">
              <div className="h-4 w-1/2 bg-black mx-auto rounded-b-lg justify-center flex relative z-10">
                <div className="mt-1 h-1.5 w-8 bg-white rounded-full " />
                <div className="mt-1 h-1.5 w-2 bg-white rounded-full transform translate-x-2" />
              </div>
              <main>
                <div className="relative py-16 bg-cyan-400 h-full">
                  <div
                    className="hidden absolute top-0 inset-x-0 h-1/2 "
                    aria-hidden="true"
                  />
                  <div className="max-w-7xl mx-auto">
                    <div className="">
                      <div className="relative z-10">
                        <div
                          className="absolute inset-x-0 h-1/2"
                          aria-hidden="true"
                        />
                        <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 ">
                          <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1">
                            <img
                              className="object-cover object-center rounded-3xl shadow-2xl"
                              src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div
                          className="hidden absolute inset-0 overflow-hidden rounded-3xl"
                          aria-hidden="true"
                        >
                          <svg
                            className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 "
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                          >
                            <defs>
                              <pattern
                                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                              >
                                <rect
                                  x={0}
                                  y={0}
                                  width={4}
                                  height={4}
                                  className="text-indigo-500"
                                  fill="currentColor"
                                />
                              </pattern>
                            </defs>
                            <rect
                              width={404}
                              height={384}
                              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                            />
                          </svg>
                          <svg
                            className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                          >
                            <defs>
                              <pattern
                                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                              >
                                <rect
                                  x={0}
                                  y={0}
                                  width={4}
                                  height={4}
                                  className="text-indigo-500"
                                  fill="currentColor"
                                />
                              </pattern>
                            </defs>
                            <rect
                              width={404}
                              height={384}
                              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                            />
                          </svg>
                        </div>
                        <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6">
                          <h2
                            className="text-3xl font-extrabold text-white"
                            id="join-heading"
                          >
                            Join our team
                          </h2>
                          <p className="text-lg text-white">
                            Varius facilisi mauris sed sit. Non sed et duis dui
                            leo, vulputate id malesuada non. Cras aliquet purus
                            dui laoreet diam sed lacus, fames.
                          </p>
                          <div className=" max-w-max h-max relative text-center">
                            <div className="relative">
                              <button className="animate bg-white relative transform hover:translate-x-5 border-cyan-500 border-2 rounded-md py-3 px-4 z-50">
                                <p className="font-bold font-sans text-cyan-500">
                                  Explore open positions
                                </p>
                              </button>
                              <span className="h-2/5 bg-white w-0.5 absolute left-0 top-4 z-10" />
                              <span className="h-3/5 bg-white w-0.5 absolute left-1.5 top-3 z-10" />
                              <span className="h-4/5 bg-white w-0.5 absolute left-3 top-1.5 z-10" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default withTransition(CompOneMobile);
