import React from "react";

const RegisterPage = () => {
  return (
    <div class="h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div class="px-5 py-7">
            <img
              className="object-cover md:rounded-t-lg"
              src="/foto/registerLog.png"
            />
            <form action="" className="pb-5">
              <div>
                <label class="font-semibold text-sm text-gray-600  block">
                  Username
                </label>
                <input
                  type="text"
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
              <div>
                <label class="font-semibold text-sm text-gray-600  block">
                  E-mail
                </label>
                <input
                  type="text"
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
              <div>
                <label class="font-semibold text-sm text-gray-600  block">
                  Password
                </label>
                <input
                  type="text"
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
              <button
                type="button"
                class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span class="inline-block mr-2">Register</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
