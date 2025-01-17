import { useEffect, useState } from "react";
import { useLoginAuthMutation } from "../slice/userSlice";

interface errorType{
  error:string
}
const Login = () => {

  const [loginUser, { data,isSuccess,isError ,error}] = useLoginAuthMutation()
  
  const [formData, setFormData] = useState({
    email: 'phantom@gmail.com',
    password:'1234'
  })

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
 };
  
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
    loginUser(formData)
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('data received')
      console.log(data)
    }
    if (isError) {
      if ('data' in error) {
        const errorInfo:errorType = error.data
        console.error(errorInfo.error)
      }

    }
  },[data,isSuccess,isError,error])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-600">
          Please sign in to your account
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name='password'
              id="password"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
