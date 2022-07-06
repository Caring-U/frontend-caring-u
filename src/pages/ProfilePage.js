import BackArrow from "../svgIcons/BackArrow";

export default function ProfilePage() {
  return (
    <div>
      <div className="flex justify-center py-2 bg-sky-600">
        <div className="w-3/4 flex justify-between items-center">
          <img src="/foto/logo.png" alt="logo" className="w-28" />
          <div className="flex gap-4 text-white">
            <a href="#">Menu 1</a>
            <a href="#">Menu 2</a>
            <a href="#">Menu 3</a>
            <a href="#">Menu 4</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-5xl">
          <div className="my-6">
            <BackArrow />
          </div>
          <div className="flex gap-4">
            <div className="w-1/3">
              <img
                src="/foto/profil-agit.png"
                alt="profile"
                className="rounded-2xl"
              />
            </div>
            <div className="w-2/3">
              <h1 className="font-semibold text-4xl text-gray-500">
                Agit Zaini Hidayat, Psi,. Psikolog
              </h1>
              <div className="w-full border-2 my-2 border-sky-600"></div>
              <div className="mb-4">
                <h1 className="font-semibold text-gray-500 mb-2">Deskripsi</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div className="border-4 border-sky-600 px-8 py-2 rounded-3xl">
                <h1 className="flex justify-center font-bold text-lg text-gray-500">
                  Jadwal Konsultasi
                </h1>
                <div className="w-full border-2 my-2 border-sky-600"></div>
                <div className="flex flex-wrap justify-center gap-4">
                  {[...Array(5)].map(() => {
                    return (
                      <button className="px-5 py-1 rounded-full border-2 border-sky-600">
                        <h1>Hari ini</h1>
                        <h3>06 - Jul</h3>
                      </button>
                    );
                  })}
                  <button className="px-5 py-1 rounded-full border-2 border-sky-600">
                    <h1>Lainnya</h1>
                  </button>
                </div>
                <div className="w-full border-2 my-2 border-sky-600"></div>
                <div className="flex justify-between items-end mt-8 mb-4">
                  <button className="px-12 py-2 bg-sky-600 rounded-full text-white">
                    Booking
                  </button>
                  <div className="flex items-end">
                    <h1 className="text-gray-500 font-semibold">
                      Jumlah Pembayaran :{" "}
                    </h1>
                    <h1 className="px-4 py-1 border-b-2 border-orange-400 text-2xl font-semibold text-gray-700">
                      Rp. 100.000
                    </h1>
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
