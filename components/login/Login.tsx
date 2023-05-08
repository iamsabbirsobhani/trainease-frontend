export default function Login() {
  return (
    <div className=" max-w-xl m-auto mt-24 mb-24 ">
      <form className=" max-w-lg shadow-md rounded-md m-auto p-5">
        <div className=" flex flex-col mt-5">
          <label className="text-lg" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="flex flex-col mt-5">
          <label className="text-lg" htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent"
            type="password"
            name="password"
            id="password"
          />
        </div>

        <div className=" mt-3 text-right">
          <a href="" className=" p-2 text-blue-500">
            <p>Forgot Password?</p>
          </a>
        </div>

        <div className=" mt-1 text-center">
          <button
            className=" p-2 bg-sky-900 rounded-md font-semibold text-gray-50 w-40"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
