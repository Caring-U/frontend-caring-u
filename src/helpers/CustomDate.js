export function myDateFormat(inputDate) {

  let day = getDayName(new Date(inputDate).getDay());
  let date = new Date(inputDate).getDate();
  let month = getMonthName(new Date(inputDate).getMonth());
  let year = new Date(inputDate).getFullYear();
  return `${day}, ${date} ${month} ${year}`;


}

export function getDayName(dayNum) {
    switch (dayNum) {
        case 0:
            return `Minggu`;
        case 1:
            return `Senin`;
        case 2:
            return `Selasa`;
        case 3:
            return `Rabu`;
        case 4:
            return `Kamis`;
        case 5:
            return `Jum'at`;
        case 6:
            return `Sabtu`;
        default:
            return;
    }
}

export function getMonthName(monthNum) {
    switch (monthNum) {
        case 0:
            return `Jan`;
        case 1:
            return `Feb`;
        case 2:
            return `Mar`;
        case 3:
            return `Apr`;
        case 4:
            return `Mei`;
        case 5:
            return `Jun`;
        case 6:
            return `Jul`;
        case 7:
            return `Agust`;
        case 8:
            return `Sep`;
        case 9:
            return `Okt`;
        case 10:
            return `Nov`;
        case 11:
            return `Des`;
        default:
            return;
    }
}

export function isCurrentDate(date1) {
    date1 = new Date(date1);
    let date2 = new Date();
    let isSameDate = date1.getDate() == date2.getDate();
    let isSameMonth = date1.getMonth() == date2.getMonth();
    let isSameYear = date1.getFullYear() == date2.getFullYear();
    if (isSameYear && isSameMonth && isSameDate) return true;
    return false;
}
