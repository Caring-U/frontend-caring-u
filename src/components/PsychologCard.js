import StarIcon from "../svgIcons/StarIcon";
import { useNavigate } from "react-router-dom";

export default function PsychologCard({ profile }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-56 h-96 rounded-xl shadow-xl"
      onClick={() => navigate("/client/psycolog/" + profile.id)}
    >
      <img src={profile.imageUrl} alt="image" />
      <div className="px-4 py-2">
        <h1 className="font-semibold text-gray-500">{profile.fullname}</h1>
        <div className="w-full border my-2 border-sky-600"></div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => {
                return <StarIcon key={i} />;
              })}
            </div>
            <h1 className="text-xs font-bold">{profile.rating}</h1>
          </div>
          {/* <h1 className="text-xs font-extralight text-gray-400">17 Feedback</h1> */}
        </div>
      </div>
    </div>
  );
}
