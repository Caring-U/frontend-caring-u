import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavbarCustom from "../../components/NavbarCustom";
import axios from "axios";
import { myDateFormat } from "../../helpers/CustomDate";

export default function PsycologProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [psycolog, setPsycolog] = useState({});
  const [price, setPrice] = useState("");
  const handleBooking = (item) => {
    console.log(item);
    // navigate("/client/checkout");
  };
  useEffect(() => {
    axios.get("/list-psikolog/" + id).then(({ data }) => {
      setPsycolog(data.result);
    });
  }, [id]);
  return (
    <div>
      <NavbarCustom />
      <div className="flex justify-center">
        <div className="max-w-5xl my-16">
          <div className="flex gap-4">
            <div className="w-1/3">
              <img
                src={psycolog?.imageUrl}
                alt="profile"
                className="rounded-2xl"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-8">
              <div className="shadow-lg px-4 py-2">
                <h1 className="font-semibold text-4xl text-gray-500">
                  {psycolog?.fullname}
                </h1>
                <div className="w-full border-2 my-2 border-sky-600"></div>
              </div>
              <div className="border shadow-lg rounded-md px-4 py-2">
                <h1 className="font-semibold text-gray-500 mb-2 text-xl border-b">
                  Deskripsi
                </h1>
                <p>{psycolog?.description}</p>
              </div>
              <div className="border shadow-lg p-2 rounded-lg">
                <div className="px-8 py-2 rounded-3xl">
                  <h1 className="flex justify-center font-bold text-lg text-gray-500">
                    Pilih Jadwal Konsultasi
                  </h1>
                  <div className="w-full border-2 my-2 border-sky-600"></div>
                  <div className="flex flex-wrap justify-center gap-4">
                    {psycolog?.SchedulePsikologs?.map((el, i) => {
                      return (
                        <button
                          key={i}
                          className="px-5 py-1 rounded-full border-2 border-sky-600"
                          onClick={() => {
                            setPrice(el.price);
                            localStorage.setItem(
                              "order",
                              JSON.stringify({
                                name: psycolog?.fullname,
                                scheduleId: el.id,
                                day: el.day,
                                price: el.price,
                              })
                            );
                          }}
                        >
                          <h1>{myDateFormat(el.day)}</h1>
                          <h3>{el.time}</h3>
                        </button>
                      );
                    })}
                  </div>
                  <div className="w-full border-2 my-2 border-sky-600"></div>
                  <div className="flex justify-between items-end mt-8 mb-4">
                    {price && (
                      <button
                        onClick={() => navigate("/client/checkout")}
                        className="px-12 py-2 bg-sky-600 rounded-full text-white"
                      >
                        Booking
                      </button>
                    )}
                    <div className="flex items-end">
                      <h1 className="text-gray-500 font-semibold">
                        Jumlah Pembayaran :{" "}
                      </h1>
                      <h1 className="px-4 py-1 border-b-2 border-orange-400 text-2xl font-semibold text-gray-700">
                        {price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
