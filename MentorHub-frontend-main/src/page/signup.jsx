import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import auth from "../apiManger/auth"; // Import your auth API manager
import toast from "react-hot-toast"; // For notifications

const SignUp = () => {
  const { role } = useParams(); // Use params to get the role
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const heading =
    role === "mentor" ? "Sign Up as Mentor" : "Sign Up as Student"; // Dynamic heading based on role

  // Initialize useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = {
      ...data,
      role, // Add role to form data
    };
    try {
      await auth.signup(formData); // Adjust your API call as necessary
      reset();
      toast.success("Account created successfully.");
      navigate("/signin");
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Failed to sign up.");
    }
    setIsLoading(false);
  };

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
                {role === "mentor"
                  ? "Join MentorHub as a Mentor and start helping students achieve their goals."
                  : "Create your student account to start learning with our best mentors."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto"></div>
              <h1 className="text-4xl font-bold">{heading}</h1>
              <p className="mt-3 text-gray-500">
                Sign up to create your account
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } rounded-lg  focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40`}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40`}
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

                {/* Username Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                      errors.username ? "border-red-500" : "border-gray-200"
                    } rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40`}
                    {...register("username", {
                      required: "Username is required",
                      minLength: {
                        value: 4,
                        message: "Username must be at least 4 characters long",
                      },
                    })}
                  />
                  {errors.username && (
                    <p className="text-sm text-red-500">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                      errors.password ? "border-red-500" : "border-gray-200"
                    } rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40`}
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
                    {isLoading ? "Loading..." : "Sign Up"}
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Already have an account?{" "}
                <NavLink
                  to="/signin"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign In
                </NavLink>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
