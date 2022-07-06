import StarIcon from "../svgIcons/StarIcon";
import { useNavigate } from "react-router-dom";

export default function PsychologCard() {
  const navigate = useNavigate();
  return (
    <div
      className="w-56 h-96 rounded-xl shadow-xl"
      onClick={() => navigate("/psikolog/id")}
    >
      <img src="/foto/profil-agit.png" alt="image" />
      <div className="px-4 py-2">
        <h1 className="font-semibold text-gray-500">
          Agit Zaini Hidayat, Psi,. Psikolog
        </h1>
        <div className="w-full border my-2 border-sky-600"></div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <div className="flex">
              {[...Array(5)].map(() => {
                return <StarIcon />;
              })}
            </div>
            <h1 className="text-xs font-bold">5.0</h1>
          </div>
          {/* <h1 className="text-xs font-extralight text-gray-400">17 Feedback</h1> */}
        </div>
      </div>
    </div>
  );
}
