import axios from "axios";
import { useEffect, useState } from "react";
import NavbarCustom from "../../components/NavbarCustom";
import { isCurrentDate } from "../../helpers/CustomDate";

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    axios
      .get("/client", {
        headers: { access_token: localStorage.getItem("access_token") },
      })
      .then(({ data }) => {
        setSchedule(data.rows);
        console.log(data.rows);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <NavbarCustom />

      <div className="container mx-auto flex justify-center gap-5 py-10">
        {/* <div className="w-1/4 shadow-xl space-y-4 py-4"> */}
        {/* <img src="/foto/profil-agit.png" alt="profil" />
          <div className="px-4">
            <h1 className="text-lg font-semibold text-gray-500">
              Agit Zaini Hidayat, Psi,.
            </h1>
          </div> */}
        {/* </div> */}
        <div className="px-8 py-10 shadow-lg shadow-sky-600 rounded-lg">
          <h1 className="text-xl font-semibold text-gray-500">Schedule List</h1>
          <div className="my-5">
            <table className="w-full">
              <thead>
                <tr className="border-y h-14">
                  <th>Psycolog Name</th>
                  <th>Schedule</th>
                  <th>Payment Status</th>
                  <th>Room Link</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-semibold">
                {schedule.map((el, i) => {
                  return (
                    <tr className="border-y h-12" key={i}>
                      <td>{el.SchedulePsikolog?.ProfilePsikolog?.fullname}</td>
                      <td>{el.SchedulePsikolog?.day}</td>
                      <td className="px-4">
                        <span
                          className={`rounded-xl px-2 font-medium capitalize ${
                            el.paymentStatus == "pending"
                              ? "bg-amber-400"
                              : "bg-green-400"
                          }`}
                        >
                          {el.paymentStatus}
                        </span>
                      </td>
                      <td>
                        {el.linkMeet &&
                          isCurrentDate(el.SchedulePsikolog?.day) && (
                            <a
                              href={el.linkMeet}
                              className="bg-sky-600 text-white px-2 py-1 rounded-lg"
                            >
                              Go To Room
                            </a>
                          )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
