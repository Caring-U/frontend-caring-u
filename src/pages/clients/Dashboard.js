import axios from "axios";
import { useEffect, useState } from "react";
import NavbarCustom from "../../components/NavbarCustom";
import { isCurrentDate, myDateFormat } from "../../helpers/CustomDate";

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [paymantDetail, setPaymantDetail] = useState({
    va: "",
  });

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
                      <td>{myDateFormat(el.SchedulePsikolog?.day)}</td>
                      <td className="px-4">
                        <span
                          onClick={() => {
                            if (el.paymentStatus == "pending") {
                              setPaymantDetail({
                                va: el.VAPaymentMidtrans,
                              });
                              setShowModal(true);
                            }
                          }}
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
                        isCurrentDate(el.SchedulePsikolog?.day) &&
                        el.paymentStatus == "paid" ? (
                          <a
                            href={el.linkMeet}
                            className="bg-sky-600 text-white px-2 py-1 rounded-lg"
                          >
                            Go To Room
                          </a>
                        ) : (
                          <button
                            className="bg-amber-600 text-white px-2 py-1 rounded-lg"
                            disabled
                          >
                            Waiting . . .
                          </button>
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold uppercase text-gray-600 ">
                    Payment Detail
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="px-10 w-96">
                  <table className="w-full">
                    <tbody>
                      <tr className="h-10">
                        <td>Virtual Acount</td>
                        <td>{paymantDetail.va}</td>
                      </tr>
                      <tr className="h-10">
                        <td>Midtrans Simulator</td>
                        <td>
                          {" "}
                          <a
                            href="https://simulator.sandbox.midtrans.com/permata/va/index"
                            target="_blank"
                            className="bg-sky-600 px-4 py-2 rounded-lg"
                          >
                            go to simulator
                          </a>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
