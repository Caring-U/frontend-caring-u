import { React, useState } from "react";

export default function ProfilePagePsycolog() {
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState({
        senin: "",
        selasa: "",
        rabu: "",
        kamis: "",
        jumat: "",
        sabtu: "",
        minggu: "",
    });
    function handleOnChange(e) {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }
    return (
        <>
            <main className="profile-page">
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
                <section className="relative block" style={{ height: "500px" }}>
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                        }}
                    >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "70px" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-80">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img alt="..." src="/foto/profil-agit.png" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16" style={{ maxWidth: "150px" }} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button
                                                className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                                onClick={() => setShowModal(true)}
                                            >
                                                Setting Schedule
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">Agit Zaini Hidayat</h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i> Kelapa Gading, DKI Jakarta
                                    </div>
                                    <div className="mb-2 text-gray-700 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                                        Spesialisasi
                                    </div>
                                    <div className="mb-2 text-gray-700">
                                        <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                                        Depresi, Trauma, Masalah Hubungan Interpersonal
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                                I am very happy with the application development process because there are many lessons and innovations that are very challenging to solve, and my motivation at this time is to gain experience
                                                and learn from it.
                                            </p>
                                            <a href="#pablo" className="font-normal text-blue-500" onClick={(e) => e.preventDefault()}>
                                                Setting Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold uppercase">Setting Schedule</h3>
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative py-3 px-4 flex-auto row-auto ">
                                    {/* body/dropdown */}
                                    <button className="relative flex jutify-center items-center bg-white text-gray-600 rounded focus:outline-none focus:ring ring-gray-200 border shadow group">
                                        <p className="px-4">Selected Date: {input.senin}</p>
                                        <input type="date" name="senin" onChange={handleOnChange} />
                                    </button>
                                    {/* body/time */}
                                </div>
                                <div className="relative py-3 px-4 flex-auto">
                                    {/* body/dropdown */}
                                    <button className="relative flex jutify-center items-center bg-white text-gray-600 rounded focus:outline-none focus:ring ring-gray-200 border shadow group">
                                        <p className="px-4">Selected Date: {input.selasa}</p>
                                        <input type="date" name="selasa" onChange={handleOnChange} />
                                    </button>
                                    {/* body/time */}
                                </div>
                                <div className="relative py-3 px-4 flex-auto">
                                    {/* body/dropdown */}
                                    <button className="relative flex jutify-center items-center bg-white text-gray-600 rounded focus:outline-none focus:ring ring-gray-200 border shadow group">
                                        <p className="px-4">Selected Date: {input.rabu}</p>
                                        <input type="date" name="rabu" onChange={handleOnChange} />
                                    </button>
                                    {/* body/time */}
                                </div>
                                <div className="relative py-3 px-4 flex-auto">
                                    {/* body/dropdown */}
                                    <button className="relative flex jutify-center items-center bg-white text-gray-600 rounded focus:outline-none focus:ring ring-gray-200 border shadow group">
                                        <p className="px-4">Selected Date: {input.kamis}</p>
                                        <input type="date" name="kamis" onChange={handleOnChange} />
                                    </button>
                                    {/* body/time */}
                                </div>
                                <div className="relative py-3 px-4 flex-auto">
                                    {/* body/dropdown */}
                                    <button className="relative flex jutify-center items-center bg-white text-gray-600 rounded focus:outline-none focus:ring ring-gray-200 border shadow group">
                                        <p className="px-4">Selected Date: {input.jumat}</p>
                                        <input type="date" name="jumat" onChange={handleOnChange} />
                                    </button>
                                    {/* body/time */}
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
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
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
