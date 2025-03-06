'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const SignupPage = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:4000/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Signup successful!');
        console.log('Success:', result);
      } else {
        setError(result.message || 'Signup failed');
      }
    } catch (error) {
      setError('Something went wrong!');
      console.error('Error:', error);
    }

    setLoading(false);
  };
  return (
    <div className="flex flex-wrap overflow-hidden gap-5 w-full md:py-10 bg-gradient-to-l from-slate-50 to-green-100">
      <div className="relative w-full md:w-[60%] bg-gradient-to-r from-[#DFFCF5] to-[#C5F9EC] flex items-center justify-center rounded-tr-[50px] rounded-br-[50px]">
        <div className="text-center">
          <img
            src="/images/landing.png"
            alt="Sleeping Illustration"
            className="w-full h-auto max-h-[300px] md:max-h-full object-contain"
          />
        </div>
      </div>

      <div className="w-full md:w-[35%] lg:w-[30%] p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Register Now
        </h1>
        <p className="text-gray-500 mb-6">
          Welcome ! Please enter your details.
        </p>

<form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email or phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="number">
            Mobile Number
          </label>
          <input
            type="number"
            id="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button className="w-full bg-[#3E937F] text-white py-2 rounded-lg hover:bg-[#3a8976] transition">
          Sign up
        </button>
        </form>

        <div className="flex items-center justify-center my-6">
          <div className="border-t w-full"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="border-t w-full"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 transition">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
            className="h-5 w-5"
          />
          <span>Log in with Google</span>
        </button>

        <p className="mt-6 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link href="login" className="text-yellow-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupPage;
