import { Link } from "react-router-dom";

const NotFound = () => {
  return (
  <div className="flex flex-col items-center justify-center space-y-4 md:mt-24 md:flex-row md:space-x-6">
    <div className="pt-6 pb-8">
      <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-primary-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
        404
      </h1>
    </div>
    <div className="flex flex-col items-center justify-center max-w-md">
      <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
        Sorry we couldn't find this page.
      </p>
      <p className="mb-8 text-center">But dont worry, you can find plenty of other things on our homepage.</p>
      <Link to="/">
        <p 
          className="inline rounded-md border border-transparent bg-indigo-600 leading-4 text-sm py-3 px-6 text-white font-semibold text-sm transition-all duration-200 shadow transition-colors duration-150 hover:bg-indigo-800 focus:outline-none focus:shadow-outline-indigo focus:ring-2 focus:ring-offset-2 cursor-pointer">
          Back to homepage
        </p>
      </Link>
    </div>
  </div>
  )  
}

export default NotFound;
