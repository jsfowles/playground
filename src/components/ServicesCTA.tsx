const Component = (props) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="reverse-gradient rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div className="lg:self-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-white">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </p>
          </div>
        </div>
        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img
            className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
            src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  </div>
);
export default Component;
