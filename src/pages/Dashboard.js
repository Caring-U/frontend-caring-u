import TopNavbarAdmin from "../components/TopNavbarAdmin";

export default function Dashboard() {
  return (
    <>
      <TopNavbarAdmin />
      <div className="px-6 pt-6 2xl:container">
        <div className="flex justify-center items-center h-[80vh]  border-gray-300 rounded-xl">
          <span>Dasboard</span>
        </div>
      </div>
    </>
  );
}
