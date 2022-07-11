import Dasboard from "../svgIcons/Dasboard";
import Doctor from "../svgIcons/Doctor";
import Logout from "../svgIcons/Logout";
import Patient from "../svgIcons/Patient";
import { Link, useNavigate } from "react-router-dom";

export default function SideBarAdmin() {
  return (
    <>
      {/* Navbar Kiri */}
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 flex justify-center py-4">
            <a href="#" title="home">
              <img
                src={window.location.origin + "/foto/logo.png"}
                className="w-32"
                alt="Charing U logo"
              />
            </a>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <Link
                to="/admin"
                aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
              >
                <Dasboard />
                <span className="-mr-1 font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/psycolog"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <Doctor />
                <span class="group-hover:text-gray-700">Psychologists</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/patient"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <Patient />
                <span class="group-hover:text-gray-700">Patients</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-center items-center">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 ">
            <Logout />
            <span className="hover:text-red-700 font-semibold">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
