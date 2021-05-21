import React from 'react';

const Buttons = () => {
  return (
    <div className="h-full w-2/5 mx-auto grid grid-flow-col grid-cols-3 justify-items-center pt-[20vh]">
      {/*button one*/}
      <div className=" max-w-max h-max ">
        <button className="group  relative bg-transparent h-16 px-16 flex items-center justify-center to-pink-500">
          <p className="button-one transition duration-500 ease-in-out relative z-50 font-serif text-3xl tracking-wider bg-gradient-to-l from-cyan-500 to-pink-500">
            Button
          </p>
          <div className="group-hover:bg-black bg-gray-700 absolute transition duration-500 ease-in-out inset-0 border-lg z-40 rounded-full mx-auto w-[100%] group-hover:w-[90%]" />
          <div className="transition duration-500 ease-in-out mx-auto transform w-[100%] bg-gradient-to-r from-cyan-500 to-pink-500 absolute inset-0 z-30 rounded-full" />
        </button>
      </div>
      {/*button two*/}
      <div className=" max-w-max h-max relative">
        <button className="animate bg-white relative transform hover:translate-x-5 border-cyan-500 border-2 h-16 px-16 z-50">
          <p className="tracking-wider font-serif text-3xl text-cyan-500">
            Button
          </p>
        </button>
        <span className="h-2/5 bg-rose-300 w-0.5 absolute left-0 top-5 z-10" />
        <span className="h-3/5 bg-pink-300 w-0.5 absolute left-1.5 top-3.5 z-10" />
        <span className="h-4/5 bg-orange-300 w-0.5 absolute left-3 top-2 z-10" />
      </div>
      {/*button three*/}
      <div className=" max-w-max h-max relative">
        <button className="button-three bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 block border transition ease-in-out hover:border-4 border-white rounded-[3.125em] px-12 text-3xl font-outline text-white h-16">
          Button
        </button>
      </div>
    </div>
  );
};

export default Buttons;
