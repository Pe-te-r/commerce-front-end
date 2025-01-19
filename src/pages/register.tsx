import React, {  useEffect, useState } from "react";
import { useRegisterAuthMutation } from "../slice/authSlice";
import { errorType } from "../types/types";
import { useToast } from "../context/toastContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { showToast } = useToast();
    const navigate = useNavigate()
    const [registerUser,{data,isSuccess,isError,error}] = useRegisterAuthMutation()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name:"",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser(formData)
    console.log("Form Data:", formData);
  };

    useEffect(() => {
        if (isSuccess) {
            console.log('here')
            showToast('successfully registered!!','success')
            navigate('/login')
            showToast('now you can login','info')
        }
        if (isError) {
            if ('data' in error) {   
                const errorInfo:errorType = error.data
                showToast(errorInfo.error,'error')
            }
        }
    },[data,isSuccess,isError,error])
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="first_name" className="block text-gray-600 mb-1 font-medium">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-gray-600 mb-1 font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
          >
            Register
          </button>
        </form>
        {/* Footer */}
        <p className="text-sm text-center text-gray-600">
         Already have an account?{" "}
          <Link to="/login" className="font-medium text-blue-600 hover:underline">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
