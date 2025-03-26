import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import auth from "../apiManger/auth";
import useUserStore from "../store/user";
import { setToken } from "../helper";

const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();

  // Initialize useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    // Send the login data to the backend API
    const response = await auth.signin(data);
    reset();
    setUser(response.data.user);
    setToken(response.data.token);
    // Navigate to home after successful login
    navigate("/");
    toast.success("Login successful!");

    setIsLoading(false);
  });

  return (
    <div className="bg-white ">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-[url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover lg:block lg:w-2/3">
          <div className="flex items-center w-full h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                MentorHub
              </h2>
              <p className="max-w-xl mt-3 text-gray-300">
                Welcome back! Sign in to continue accessing MentorHub services.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto"></div>
              <p className="mt-3 text-gray-500">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={onSubmit} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                    placeholder="example@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 "
                    >
                      Password
                    </label>
                  </div>

                  <input
                    type="password"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                      errors.password ? "border-red-500" : "border-gray-200"
                    } rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                    placeholder="Your Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    disabled={isLoading}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 disabled:opacity-50"
                  >
                    {isLoading ? "Loading..." : "Sign in"}
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <NavLink
                  to="/signup/student"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </NavLink>
                .
              </p>
              <p className="mt-2 text-sm text-center text-gray-400">
                Become a{" "}
                <NavLink
                  to="/signup/mentor"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Mentor
                </NavLink>{" "}
                with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
