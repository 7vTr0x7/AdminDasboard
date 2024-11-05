import React, { useState } from "react";
const Login = () => {
  const [darkMode, setDarkMode] = useState(true);

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-black px-5">
      <form
        className={`xl:max-w-lg ${
          darkMode ? "bg-[#222222]" : "bg-white"
        }  w-full p-5 sm:p-10 rounded-md`}>
        <h1
          className={`text-center text-xl sm:text-3xl font-semibold ${
            darkMode ? "text-white" : "text-black"
          }`}>
          {isLogin ? "Login" : "Register"}
        </h1>
        <div className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
            <input
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="email"
              required
              placeholder="Enter your email"
            />

            <input
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="password"
              required
              placeholder="Password"
            />
            <button className="mt-5 tracking-wide font-semibold bg-yellow-300 text-black w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-3"> {isLogin ? "Login" : "Register"}</span>
            </button>
            <p className="mt-6 text-xs text-gray-600 text-center">
              {isLogin ? "Don't have account?" : "Already have an account?"}

              <span
                className="text-[#E9522C] font-semibold cursor-pointer"
                onClick={() => setIsLogin((prev) => !prev)}>
                {" "}
                {isLogin ? "Sign up" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
