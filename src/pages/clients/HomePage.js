import axios from "axios";
import { useEffect, useState } from "react";
import NavbarCustom from "../../components/NavbarCustom";
import PsychologCard from "../../components/PsychologCard";
import CircleIcon from "../../svgIcons/CircleIcon";

export default function HomePage() {
  const [psychologs, setPsycologs] = useState([]);
  useEffect(() => {
    axios.get("/list-psikolog").then(({ data }) => {
      setPsycologs(data.result.rows);
    });
  }, []);
  return (
    <div>
      <NavbarCustom />
      <div className="flex justify-center py-10">
        <div className="w-3/4">
          <h1 className="font-semibold text-5xl mb-10">FIND YOUR PSYCHOLOG</h1>
          <div className="flex flex-wrap gap-8 mb-10">
            {psychologs.map((el, i) => {
              return <PsychologCard profile={el} key={i} />;
            })}
          </div>
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => {
              return <CircleIcon key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
