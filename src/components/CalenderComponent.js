import { useEffect } from "react";

function CalenderItem() {
  return <div className=" h-10 border"></div>;
}

export default function CalenderComponent() {
  let template = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];
  useEffect(() => {
    let currDate = new Date();
    const firstDay = new Date(currDate.getFullYear(), currDate.getMonth(), 1);
    console.log(firstDay.getDay()); // 👉️ Sat Oct 01 2022 ...
    const lastDay = new Date(currDate.getFullYear(), currDate.getMonth() + 1);
    console.log(lastDay); // 👉️ Mon Oct 31 2022 ...
  }, []);
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wen</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center border h-14 w-14">1</td>
          <td className="text-center border h-14 w-14">2</td>
          <td className="text-center border h-14 w-14">3</td>
          <td className="text-center border h-14 w-14">4</td>
          <td className="text-center border h-14 w-14">5</td>
          <td className="text-center border h-14 w-14">6</td>
          <td className="text-center border h-14 w-14">7</td>
        </tr>
      </tbody>
    </table>
  );
}
