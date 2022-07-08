import NavbarCustom from "../../components/NavbarCustom";

export default function Dashboard() {
  return (
    <>
      <NavbarCustom />

      <div className="container mx-auto flex gap-5 py-10">
        <div className="w-1/4 shadow-xl space-y-4 py-4">
          <img src="/foto/profil-agit.png" alt="profil" />
          <div className="px-4">
            <h1 className="text-lg font-semibold text-gray-500">
              Agit Zaini Hidayat, Psi,.
            </h1>
          </div>
        </div>
        <div className="w-3/4 px-8 py-10 shadow-lg shadow-sky-600 rounded-lg">
          <h1 className="text-xl font-semibold text-gray-500">Schedule List</h1>
          <div className="my-5">
            <table className="w-full">
              <thead>
                <tr className="border-y h-14">
                  <th>Psycolog Name</th>
                  <th>Schedule</th>
                  <th>Payment Status</th>
                  <th>Price</th>
                  <th>Room Link</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-semibold">
                <tr className="border-y h-12">
                  <td>Agit Zaini Hidayat, Psi,.</td>
                  <td>2022-07-21, 10.00</td>
                  <td>
                    <span className="bg-green-400 rounded-xl px-2 font-medium">
                      Success
                    </span>
                  </td>
                  <td>Rp.1.000.000</td>
                  <td></td>
                  <td>
                    <span className="bg-green-400 rounded-xl px-2 font-medium">
                      Done
                    </span>
                  </td>
                </tr>
                <tr className="border-y h-12">
                  <td>Agit Zaini Hidayat, Psi,.</td>
                  <td>2022-07-21, 10.00</td>
                  <td>
                    <span className="bg-green-400 rounded-xl px-2 font-medium">
                      Success
                    </span>
                  </td>
                  <td>Rp.1.000.000</td>
                  <td>
                    <a
                      href="https://coda.io/d/CARING-U-FINAL-PROJECT-ETHIOPIAN_dFun99Sc0q_/Table-database_suwW_#_luBkj"
                      className="bg-sky-600 text-white px-2 py-1 rounded-lg"
                    >
                      Go To Room
                    </a>
                  </td>
                  <td>
                    <span className="bg-amber-400 rounded-xl px-2 font-medium">
                      Waiting
                    </span>
                  </td>
                </tr>
                <tr className="border-y h-12">
                  <td>Agit Zaini Hidayat, Psi,.</td>
                  <td>2022-07-21, 10.00</td>
                  <td>
                    <span className="bg-amber-400 rounded-xl px-2 font-medium">
                      Waiting
                    </span>
                  </td>
                  <td>Rp.1.000.000</td>
                  <td></td>
                  <td>
                    <span className="bg-amber-400 rounded-xl px-2 font-medium">
                      Waiting
                    </span>
                  </td>
                </tr>
                <tr className="border-y h-12">
                  <td>Agit Zaini Hidayat, Psi,.</td>
                  <td>2022-07-21, 10.00</td>
                  <td>
                    <span className="bg-red-400 rounded-xl px-2 font-medium">
                      Cancel
                    </span>
                  </td>
                  <td>Rp.1.000.000</td>
                  <td></td>
                  <td>
                    <span className="bg-red-400 rounded-xl px-2 font-medium">
                      Cancel
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
