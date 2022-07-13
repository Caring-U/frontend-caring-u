import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/users/login", input)
      .then(({ data }) => {
        localStorage.setItem("access_token", data.result);
        localStorage.setItem("role", data.role);
        switch (data.role) {
          case "admin":
            navigate("/admin");
            break;
          case "client":
            navigate("/client");
            break;
          case "psikolog":
            navigate("/psycolog");
            break;
          default:
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="2xl:container h-screen m-auto">
      <div hidden className="fixed inset-0 w-7/12 lg:block">
        <span className="absolute left-6 bottom-6 text-sm">
          Foto by CHARING-U
        </span>
        <img
          src="/foto/loginLog.jpg"
          alt="login logo Caring-U"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        hidden
        role="hidden"
        className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"
      ></div>
      <div className="relative h-full ml-auto lg:w-6/12">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div className="space-y-4 flex justify-center flex-col items-center">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
              <img src="/foto/logo.png" className="w-40" alt="charingu logo" />
            </a>
            <p className="font-medium text-lg text-gray-600">
              Welcome to Caring U !
            </p>
          </div>

          <div role="hidden" className="mt-12 border-t">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
              Login
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 py-6">
            <div>
              <input
                name="email"
                value={input.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-sky-600 focus:invalid:outline-none"
              />
            </div>

            <div>
              <input
                name="password"
                value={input.password}
                onChange={handleChange}
                type="password"
                placeholder="Your Password "
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-sky-600 focus:invalid:outline-none"
              />
            </div>

            <div>
              <button className="w-full px-6 py-3 rounded-lg bg-sky-600 transition hover:bg-sky-700 focus:bg-sky-700 ">
                <span className="font-semibold text-white text-lg">Login</span>
              </button>
              <p class="border-t pt-6 text-sm">
                Don't have an account ?{" "}
                <button
                  onClick={() => navigate("/register")}
                  className="text-sky-500"
                >
                  Sign up
                </button>
              </p>
            </div>
          </form>

          <div className="border-t text-gray-500 pt-12">
            <div className="text-center space-x-4">
              <span>&copy; Charing-U</span>
              <a href="#" className="text-sm hover:text-sky-900">
                Contact
              </a>
              <a href="#" className="text-sm hover:text-sky-900">
                Privacy & Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
