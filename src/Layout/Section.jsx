import { Link } from "react-router-dom";

export const Section = () => {
    return (
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full bg-transparent text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
                >
            
          </svg>
          <img
            className="object-cover w-full  rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full "
            src="https://res.cloudinary.com/dllgqcla4/image/upload/v1722409241/medium-shot-cartoonish-boy-with-burger-removebg_ixpqcy.png" 
            alt="Failed to Load"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight   sm:text-4xl sm:leading-none">
              Get Delivered 
              <br className="hidden md:block" />
               from you favourite{' '}
              <span className="inline-block text-deep-purple-accent-400">
                spot
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Whether craving pizza, sushi, or curry, Just Eat ensures that satisfying meals are just a few taps away, making it the go-to choice for food lovers seeking convenience and variety.
            </p>
            <div className="flex items-center">
              <Link
              to="/user/register"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-orange-500"  >
                <button className="">Get started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };