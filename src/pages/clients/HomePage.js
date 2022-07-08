import NavbarCustom from "../../components/NavbarCustom";
import PsychologCard from "../../components/PsychologCard";
import CircleIcon from "../../svgIcons/CircleIcon";

export default function HomePage() {
  return (
    <div>
      <NavbarCustom />
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
