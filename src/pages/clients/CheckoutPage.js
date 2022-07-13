import { useState } from "react";
import NavbarCustom from "../../components/NavbarCustom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(JSON.parse(localStorage.getItem("order")));
  const [bank, setBank] = useState({});
  const handleSubmit = () => {
    const input = {
      schedulePsikologId: data.scheduleId,
      bank: bank.name,
    };
    axios
      .post("/client/booking", input, {
        headers: { access_token: localStorage.getItem("access_token") },
      })
      .then(({ data }) => {
        console.log(data);
        navigate("/client");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <NavbarCustom />
      <div className="flex justify-center">
        <div className="w-5/12 px-16 py-20  bg-sky-50">
          <div className="">
            <h1 className="font-bold text-2xl text-gray-800 mb-4">
              Pilih Bank Transfer
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between border px-4 h-18">
                <img src="/foto/Bank-BCA-Logo.png" alt="BCA" className="w-20" />
                <button
                  onClick={() => {
                    setBank({
                      img: "/foto/Bank-BCA-Logo.png",
                      name: "BCA",
                    });
                  }}
                >
                  Pilih
                </button>
              </div>
              <div className="flex justify-between border px-4 py-3 h-14">
                <img src="/foto/Bank-BNI-Logo.png" alt="BNI" className="w-20" />
                <button
                  onClick={() => {
                    setBank({
                      img: "/foto/Bank-BNI-Logo.png",
                      name: "BNI",
                    });
                  }}
                >
                  Pilih
                </button>
              </div>
              <div className="flex justify-between border px-4 py-3 h-14">
                <img src="/foto/Bank-BRI-Logo.png" alt="BRI" className="w-20" />
                <button
                  onClick={() => {
                    setBank({
                      img: "/foto/Bank-BRI-Logo.png",
                      name: "BRI",
                    });
                  }}
                >
                  Pilih
                </button>
              </div>
              <div className="flex justify-between border px-4 h-18">
                <img
                  src="/foto/Bank-Permata-Logo.png"
                  alt="Permata"
                  className="w-20"
                />
                <button
                  onClick={() => {
                    setBank({
                      img: "/foto/Bank-Permata-Logo.png",
                      name: "permata",
                    });
                  }}
                >
                  Pilih
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12 p-20">
          <h1 className="font-bold text-3xl text-gray-500 mb-4">
            Checkout Page
          </h1>
          <div className="border-y px-4 py-4">
            <h1 className="font-bold text-2xl text-gray-800 mb-4">Pesanan</h1>
            <div className="flex justify-between mb-4 text-semibold text-gray-500">
              <h1>
                {data.name},. - {data.day}
              </h1>
              <h1>{data.price}</h1>
            </div>
          </div>
          <div className="border-y px-4 py-4">
            <h1 className="font-bold text-2xl text-gray-800 mb-4">
              Metode Pembayaran
            </h1>
            <div className="flex justify-between mb-4 text-semibold text-gray-500">
              <h1>Transfer Melalui Bank</h1>
              <img src={bank.img} alt="" className="w-20" />
            </div>
          </div>
          <div>
            <div className="flex justify-end mt-20">
              <button
                onClick={handleSubmit}
                className="bg-sky-600 text-white px-20 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
