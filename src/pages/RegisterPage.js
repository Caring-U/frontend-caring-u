import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/users/register", input)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <img
              className="object-cover md:rounded-t-lg"
              src="/foto/registerLog.png"
            />
            <form onSubmit={handleSubmit} className="pb-5">
              <div>
                <label className="font-semibold text-sm text-gray-600  block">
                  Username
                </label>
                <input
                  name="username"
                  value={input.username}
                  onChange={handleChange}
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
              <div>
                <label className="font-semibold text-sm text-gray-600  block">
                  E-mail
                </label>
                <input
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
              <div>
                <label className="font-semibold text-sm text-gray-600  block">
                  Password
                </label>
                <input
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
              <div>
                <label className="font-semibold text-sm text-gray-600  block">
                  Role
                </label>
                <div className="flex items-center mb-4">
                  <input
                    onChange={handleChange}
                    id="default-radio-1"
                    type="radio"
                    value="psycolog"
                    name="role"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    psychologist
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    onChange={handleChange}
                    id="default-radio-2"
                    type="radio"
                    value="client"
                    name="role"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Patient
                  </label>
                </div>
              </div>
              <button className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span className="inline-block mr-2">Register</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
