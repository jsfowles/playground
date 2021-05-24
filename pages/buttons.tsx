import { motion } from 'framer-motion';
import React from 'react';
import withTransition from '@lib/withTransition';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = (enter, exit) => ({
  hidden: {
    y: exit,
  },
  show: {
    y: enter,
  },
});

const Buttons = () => {
  const [onHoverZero, setOnHoverZero] = React.useState(false);

  return (
    <div className="w-2/5 mx-auto grid gap-y-32 grid-cols-3 justify-items-center pt-[20vh]">
      {/*button one*/}
      <div className=" max-w-max h-max text-center">
        <button className="group  relative bg-transparent h-16 px-16 flex items-center justify-center to-pink-500">
          <p className="button-one transition duration-500 ease-in-out relative z-50 font-serif text-3xl tracking-wider bg-gradient-to-l from-cyan-500 to-pink-500">
            Click
          </p>
          <div className="group-hover:bg-black bg-gray-700 absolute transition duration-500 ease-in-out inset-0 border-lg z-40 rounded-full mx-auto w-[100%] group-hover:w-[90%]" />
          <div className="transition duration-500 ease-in-out mx-auto transform w-[100%] bg-gradient-to-r from-cyan-500 to-pink-500 absolute inset-0 z-30 rounded-full" />
        </button>
        <div className="font-serif text-gray-600 tracking-widest mt-10 flex justify-evenly items-center">
          <h4 className="text-7xl text-gray-600 font-outline">1.</h4>
          <div className="text-left pl-8">
            <p className="text-sm text-cyan-400 mb-2">tech:</p>
            <ul className="list-disc ">
              <li>Tailwind</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
      {/*button two*/}
      <div className=" max-w-max h-max relative text-center">
        <div className="relative">
          <button className="animate bg-white relative transform hover:translate-x-5 border-cyan-500 border-2 rounded-md h-16 px-16 z-50">
            <p className="tracking-wider font-serif text-3xl text-cyan-500">
              Click
            </p>
          </button>
          <span className="h-2/5 bg-rose-300 w-0.5 absolute left-0 top-5 z-10" />
          <span className="h-3/5 bg-pink-300 w-0.5 absolute left-1.5 top-3.5 z-10" />
          <span className="h-4/5 bg-orange-300 w-0.5 absolute left-3 top-2 z-10" />
        </div>
        <div className="font-serif text-gray-600 tracking-widest mt-10 flex justify-evenly items-center">
          <h4 className="text-7xl text-gray-600 font-outline">2.</h4>
          <div className="text-left pl-8">
            <p className="text-sm text-cyan-400 mb-2">tech:</p>
            <ul className="list-disc">
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
      </div>

      {/*button three*/}
      <div className=" max-w-max h-max relative text-center">
        <div className="relative">
          <button className="button-three h-16 px-16 relative animate text-2xl text-teal-600 z-50">
            Click
          </button>
        </div>
        <div className="font-serif text-gray-600 tracking-widest mt-10 flex justify-evenly items-center">
          <h4 className="text-7xl text-gray-600 font-outline">3.</h4>
          <div className="text-left pl-8">
            <p className="text-sm text-cyan-400 mb-2">tech:</p>
            <ul className="list-disc">
              <li>Tailwind</li>
              <li>css</li>
            </ul>
          </div>
        </div>
      </div>
      {/*button four*/}
      {/*requires framer-motion*/}
      {/*requires state*/}
      <div className="max-w-max h-max relative text-center flex flex-col items-center">
        <motion.button
          onMouseEnter={() => setOnHoverZero(true)}
          onMouseLeave={() => setOnHoverZero(false)}
          animate={{ borderRadius: onHoverZero ? '5px' : '50px' }}
          transition={{ duration: 0.4 }}
          className="h-16 w-48 rounded-full bg-gradient-to-tr from-pink-500  to-purple-400
 overflow-hidden flex justify-center items-center flex-col"
        >
          <motion.span
            variants={container}
            initial="hidden"
            animate={onHoverZero ? 'show' : 'hide'}
            className="font-serif tracking-widest text-white text-2xl flex items-center"
          >
            <motion.p variants={item(-40, 13)} transition={{ duration: 0.4 }}>
              Share
            </motion.p>
            <motion.svg
              variants={item(-40, 13)}
              transition={{ duration: 0.4 }}
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </motion.svg>
          </motion.span>
          <motion.span
            variants={container}
            initial="hidden"
            animate={onHoverZero ? 'show' : 'hide'}
            className=""
          >
            <ul className="flex">
              <motion.li
                variants={item(-15, 30)}
                transition={{ duration: 0.4 }}
                className=""
              >
                <a href="https://twitter.com/underbelly" target="_blank">
                  <svg
                    viewBox="0 0 1024 1024"
                    width="24"
                    height="24"
                    className="fill-current text-white hover:text-gray-200"
                  >
                    <path d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z" />
                  </svg>
                </a>
              </motion.li>
              <motion.li
                variants={item(-15, 30)}
                transition={{ duration: 0.4 }}
                className="px-6"
              >
                <a href="https://codepen.io/jsfowles" target="_blank">
                  <svg
                    viewBox="0 0 1024 1024"
                    width="24"
                    height="24"
                    className="fill-current text-white hover:text-gray-200"
                  >
                    <path d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z" />
                  </svg>
                </a>
              </motion.li>
              <motion.li
                variants={item(-15, 30)}
                transition={{ duration: 0.4 }}
                className=""
              >
                <a href="https://github.com/jsfowles" target="_blank">
                  <svg
                    viewBox="0 0 1024 1024"
                    width="24"
                    height="24"
                    className="fill-current text-white hover:text-gray-200"
                  >
                    <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" />
                  </svg>
                </a>
              </motion.li>
            </ul>
          </motion.span>
        </motion.button>
        <div className="font-serif text-gray-600 tracking-widest mt-10 flex justify-evenly items-center ">
          <h4 className="text-7xl text-gray-600 font-outline">4.</h4>
          <div className="text-left pl-8">
            <p className="text-sm text-cyan-400 mb-2">tech:</p>
            <ul className="list-disc ">
              <li>Tailwind</li>
              <li>Framer Motion</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
      </div>
      {/*button five*/}
      <div className="max-w-max h-max relative text-center">
        <button
          className="h-16 w-48 overflow-hidden group flex justify-center items-center
          "
        >
          <div className="bg-gray-700 hover-group:bg-black rounded-full h-16 w-16 group-hover:w-full flex justify-center items-center animate absolute left-2 group-hover:left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-5 group-hover:left-8 animate"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <div className="w-6 h-0.5 bg-white absolute left-[10px] group-hover:left-[22px] opacity-0 group-hover:opacity-100 animate" />
          </div>
          <span className="absolute right-2 group-hover:right-4 font-serif text-2xl text-black group-hover:text-white animate">
            Learn More
          </span>
        </button>
        <div className="font-serif text-gray-600 tracking-widest mt-10 flex justify-evenly items-center filter group-hover:drop-shadow-reg animate">
          <h4 className="text-7xl text-gray-600 font-outline">5.</h4>
          <div className="text-left pl-8">
            <p className="text-sm text-cyan-400 mb-2">tech:</p>
            <ul className="list-disc ">
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
      </div>
      {/*button six*/}
      <div className="max-w-max h-max relative text-center flex flex-col">
        <button className="button-six flex h-16 filter hover:drop-shadow-reg animate">
          <div className="button-six-child px-14 text-white bg-red-400 w-full h-full flex items-center justify-center text-2xl">
            button
          </div>
        </button>
        <div className="font-serif text-gray-600 tracking-widest mt-10 flex justify-evenly items-center">
          <h4 className="text-7xl text-gray-600 font-outline">6.</h4>
          <div className="text-left pl-8">
            <p className="text-sm text-cyan-400 mb-2">tech:</p>
            <ul className="list-disc ">
              <li>Tailwind</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTransition(Buttons);
