import React from "react";
import TopNavbarAdmin from "./TopNavbarAdmin";

export default function TablePatient() {
  return (
    <>
      <TopNavbarAdmin />
      <div className="px-6 pt-6 2xl:container">
        <div className="flex justify-center items-center h-[80vh]  border-gray-300 rounded-xl">
          <span>Table Patient</span>
        </div>
      </div>
    </>
  );
}
