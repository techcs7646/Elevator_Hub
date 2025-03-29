import React, { useState } from "react";
import auth from "../apiManager/auth";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Signup = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const heading =
    role === "mentor" ? "Sign Up as Mentor " : "Sign Up as Student";
  const onSubmit = async (data) => {
    console.log("hello");
    setIsLoading(true);
    console.log("data", data, role);
    const formdata = { ...data, role };
    try {
      await auth.signup(formdata);
      reset();
      toast.success("Account created successfully.");
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="h-screen bg-green-100">
        <div className="flex items-center justify-center h-full">
          {/* Form Container */}
          <div className="w-full max-w-lg px-6 py-8 bg-white bg-opacity-90 rounded-lg shadow-xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800">{heading}</h1>
              <p className="mt-2 text-gray-600">
                Sign up to create your account
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 space-y-4 text-gray-800"
            >
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`block w-full px-4 py-2 mt-2 placeholder-gray-500 bg-gray-100 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring focus:ring-green-300 focus:outline-none`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`block w-full px-4 py-2 mt-2 placeholder-gray-500 bg-gray-100 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring focus:ring-green-300 focus:outline-none`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Username Field */}
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className={`block w-full px-4 py-2 mt-2 placeholder-gray-500 bg-gray-100 border ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring focus:ring-green-300 focus:outline-none`}
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 4,
                      message: "Username must be at least 4 characters long",
                    },
                  })}
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className={`block w-full px-4 py-2 mt-2 placeholder-gray-500 bg-gray-100 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring focus:ring-green-300 focus:outline-none`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  disabled={isLoading}
                  className="w-full px-4 py-2 font-semibold text-white transition duration-300 bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 disabled:opacity-50"
                >
                  {isLoading ? "Loading..." : "Sign Up"}
                </button>
              </div>
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <NavLink
                to="/signin"
                className="font-medium text-green-600 hover:underline"
              >
                Sign In
              </NavLink>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
