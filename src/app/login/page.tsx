import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-wrap overflow-hidden gap-5 w-full py-10">
      {/* Left Side - Image & Illustrations */}
      <div className="relative w-full md:w-[60%] bg-gradient-to-r from-[#DFFCF5] to-[#C5F9EC] flex items-center justify-center rounded-tr-[50px] rounded-br-[50px]">
        <div className="text-center">
          <img
            src="/images/landing.png"
            alt="Sleeping Illustration"
            className="w-full h-auto max-h-[300px] md:max-h-full object-contain"
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-[35%] lg:w-[30%] p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Log in
        </h1>
        <p className="text-gray-500 mb-6">
          Welcome back! Please enter your details.
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email or phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-4">
          <a href="#" className="text-sm text-yellow-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#3E937F] text-white py-2 rounded-lg hover:bg-[#3a8976] transition">
          Log in
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="border-t w-full"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="border-t w-full"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 transition">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
            className="h-5 w-5"
          />
          <span>Log in with Google</span>
        </button>

        {/* Sign Up Link */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-yellow-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
