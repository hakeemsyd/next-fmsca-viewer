export const abbreviatedMonths: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const completeMonths: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
export const formatDate = (dateString: string, withDaySuffix: boolean, completeMonth: boolean): string => {
    if (dateString.length === 0) return "";
    const date: Date = new Date(dateString);
    const day: number = date.getDate();
    const month: string = completeMonth ? completeMonths[date.getMonth()] : abbreviatedMonths[date.getMonth()];
    const year: number = date.getFullYear();

    if (withDaySuffix) return `${day}${getDaySuffix(day)} ${month} ${year}`;
    else return `${day} ${month} ${year}`;
};

function getDaySuffix(day: number): string {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}
