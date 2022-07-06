import PsychologCard from "../components/PsychologCard";
import CircleIcon from "../svgIcons/CircleIcon";

export default function HomePage() {
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
      <div className="flex justify-center py-10">
        <div className="w-3/4">
          <h1 className="font-semibold text-5xl mb-10">FIND YOUR PSYCHOLOG</h1>
          <div className="flex flex-wrap gap-8 mb-10">
            {[...Array(4)].map(() => {
              return <PsychologCard />;
            })}
          </div>
          <div className="flex justify-center gap-2">
            {[...Array(3)].map(() => {
              return <CircleIcon />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
