import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const clientRoutes = [
  {
    name: "Dashboard",
    path: "/client",
  },
  {
    name: "Psycologs",
    path: "/client/psycolog",
  },
];

const AdminRoutes = [
  {
    name: "Dashboard",
    path: "/admin",
  },
];

const PsychologRoutes = [
  {
    name: "Dashboard",
    path: "/psycolog",
  },
  {
    name: "Profile",
    path: "/psy/psycolog/psycologProfile",
  },
];

export default function NavbarCustom() {
  const navigate = useNavigate();
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    switch (localStorage.getItem("role")) {
      case "client":
        setRoutes(clientRoutes);
        break;
      case "admin":
        setRoutes(AdminRoutes);
        break;
      case "psikolog":
        setRoutes(PsychologRoutes);
        break;
    }
  }, []);

  return (
    <div className="flex justify-center py-2 bg-sky-600">
      <div className="w-3/4 flex justify-between items-center">
        <img src="/foto/logo.png" alt="logo" className="w-28" />
        <div className="flex gap-4 text-white">
          {routes.map((el, i) => {
            return (
              <button onClick={() => navigate(el.path)} key={i}>
                {el.name}
              </button>
            );
          })}
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}
