
// INPUTS YEAR number 2022
// INPUTS Array on format MM/DD

function countHours(year, holidays) {
    let count = 0;
    holidays.map(e => {
        //const dayMonth = e.split('/');
        //const newDate = new Date(year, parseInt(dayMonth[0]) - 1, parseInt(dayMonth[1]) );
        const newDate = new Date(`${year}-${e}`);
        //const day = newDate.getDay();
        if (newDate.getDay() >= 1 && newDate.getDay() <= 5){
            count += 2;
        }
    });
    return count;
}

const year = 2022;
const holidays = ['01/06', '04/01', '12/25'];
// format MM/DD
// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

console.log(countHours(year, holidays)) // 2 days -> 4 extra hours in the year