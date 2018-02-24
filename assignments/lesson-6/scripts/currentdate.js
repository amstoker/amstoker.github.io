var currentDate = new Date();

// get day of week
 var daysOfWeek = new Array(7);
 daysOfWeek[0] = "Sunday";
 daysOfWeek[1] = "Monday";
 daysOfWeek[2] = "Tuesday";
 daysOfWeek[3] = "Wednesday";
 daysOfWeek[4] = "Thursday";
 daysOfWeek[5] = "Friday";
 daysOfWeek[6] = "Saturday";

 var dayOfWeekNumber = currentDate.getDay();
 var dayOfWeekString = daysOfWeek[dayOfWeekNumber];

//get day of month
var dayOfMonth = currentDate.getDate();

//dayofMonth
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var monthString = month[currentDate.getMonth()];
    
//get year
var year = currentDate.getFullYear();

var currentDateString = dayOfWeekString + ", " + dayOfMonth + " " + monthString + " " + year;

document.getElementById("currentdate").innerHTML = currentDateString;