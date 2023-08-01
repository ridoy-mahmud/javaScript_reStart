function leap_year(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log("Leap Year");
    }
    else {
        console.log("Not Leap Year");
    }
}
const year = 2017;
leap_year(year);