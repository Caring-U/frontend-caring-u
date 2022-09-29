import axios from "axios";
import { useEffect, useState } from "react";
import { isCurrentDate, myDateFormat } from "../helpers/CustomDate";

export default function HomePagePsycolog() {
    let [schedule, setSchedule] = useState([]);
    useEffect(() => {
        axios
            .get("/psikolog", {
                headers: {
                    access_token: localStorage.getItem("access_token"),
                },
            })
            .then(({ data }) => {
                setSchedule(data.result.rows);
                console.log(data.result.rows);
            })
            .catch((err) => console.log(err));
    }, []);
    // console.log("==" + schedule);
    return (
        <>
            <main>
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
                <div
                    className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "20vh",
                    }}
                >
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                        }}
                    >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">Welcome To Caring-U Homepage.</h1>
                                    <p className="mt-4 text-lg text-gray-300">This is a simple of a Landing Page you can build using Tailwind Starter Kit. It features multiple CSS components based on the Tailwindcss design system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "70px" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-20 bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center">
                            <div className="lg:pt-12 pt-6 w-full md:w-5/6 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <h6 className="text-xl font-semibold">Schedule Konsultant</h6>
                                        <p className="mt-2 mb-4 text-gray-600">Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.</p>
                                    </div>
                                    <table className="table-auto border-separate border-spacing-2 border border-slate-400">
                                        <thead>
                                            <tr>
                                                <th className="border border-slate-300">Date</th>
                                                {/* <th className="border border-slate-300">Time</th> */}
                                                <th className="border border-slate-300">Status</th>
                                                <th className="border border-slate-300">Room</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {schedule.map((sec) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td className="border border-slate-300">{myDateFormat(sec.day)}</td>
                                                            {/* <td className="border border-slate-300">{sec.time}</td> */}
                                                            {/* {sec.CustomerBooking !== null && sec.CustomerBooking.paymentStatus == "paid" ? (
                                                                <>
                                                                    <td className="border border-slate-300 font-bold uppercase text-xs ">Scheduled</td>
                                                                    <td className="border border-slate-300">
                                                                        <button
                                                                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                            type="button"
                                                                        >
                                                                            Join
                                                                        </button>
                                                                    </td>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <td className="border border-slate-300 font-bold uppercase text-xs ">Free Booking</td>
                                                                    <td className="border border-slate-300">
                                                                        <button
                                                                            className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-4 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                            type="button"
                                                                        >
                                                                            Hasn't Been Yet
                                                                        </button>
                                                                    </td>
                                                                </>
                                                            )} */}
                                                            {sec.CustomerBooking !== null && sec.CustomerBooking.paymentStatus == "paid" ? (
                                                                <>
                                                                    <td className="border border-slate-300 font-bold uppercase text-xs ">Scheduled</td>
                                                                    <td className="border border-slate-300 font-bold uppercase text-xs ">
                                                                        {sec.linkMeet && isCurrentDate(sec.SchedulePsikolog?.day) && sec.paymentStatus == "paid" ? (
                                                                            <a href={sec.linkMeet} className="bg-sky-600 text-white px-2 py-1 rounded-lg">
                                                                                Go To Room
                                                                            </a>
                                                                        ) : (
                                                                            <button className="bg-amber-600 text-white px-2 py-1 rounded-lg" disabled>
                                                                                Waiting . . .
                                                                            </button>
                                                                        )}
                                                                    </td>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <td className="border border-slate-300 font-bold uppercase text-xs ">Free Booking</td>
                                                                    <td className="border border-slate-300 font-bold uppercase text-xs ">NO Room</td>
                                                                </>
                                                            )}
                                                        </tr>
                                                    </>
                                                );
                                            })}
                                            {/* <tr>
                                            <td className="border border-slate-300">Friday</td>
                                            <td className="border border-slate-300">13-July-2022</td>
                                                <td className="border border-slate-300">06:00 PM</td>
                                                <td className="border border-slate-300 font-bold uppercase text-xs ">Scheduled</td>
                                                <td className="border border-slate-300">
                                                    <button
                                                        className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-4 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                    >
                                                        Waiting
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300">Saturday</td>
                                                <td className="border border-slate-300">14-July-2022</td>
                                                <td className="border border-slate-300">06:00 PM</td>
                                                <td className="border border-slate-300 font-bold uppercase text-xs ">Free Booking</td>
                                                <td className="border border-slate-300"></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300">Thursday</td>
                                                <td className="border border-slate-300">12-July-2022</td>
                                                <td className="border border-slate-300">06:00 PM</td>
                                                <td className="border border-slate-300 font-bold uppercase text-xs ">Scheduled</td>
                                                <td className="border border-slate-300">
                                                    <button
                                                        className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-4 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                    >
                                                        Waiting
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300">Friday</td>
                                                <td className="border border-slate-300">13-July-2022</td>
                                                <td className="border border-slate-300">06:00 PM</td>
                                                <td className="border border-slate-300 font-bold uppercase text-xs ">Scheduled</td>
                                                <td className="border border-slate-300">
                                                    <button
                                                        className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-4 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                    >
                                                        Waiting
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300">Saturday</td>
                                                <td className="border border-slate-300">14-July-2022</td>
                                                <td className="border border-slate-300">06:00 PM</td>
                                                <td className="border border-slate-300 font-bold uppercase text-xs ">Free Booking</td>
                                                <td className="border border-slate-300"></td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
