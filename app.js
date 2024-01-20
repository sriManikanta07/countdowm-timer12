const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll('.deadline-format h4');

const tempdate = new Date();
const tempyear = tempdate.getFullYear();
const tempmonth = tempdate.getMonth();
const tempday = tempdate.getDate();

//setting future date/countdown

const futureDate = new Date(tempyear, tempmonth, tempday + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const monthindex = futureDate.getMonth();
const month = months[monthindex];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const secs = futureDate.getSeconds();
const Day = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${Day}, ${date} ${month} ${year}, ${hours} : ${minutes}am`

const futuretime = futureDate.getTime();
// console.log(futuretime);




function remainingtime(){
const presentDate = new Date();
const presenttime = presentDate.getTime();
// console.log(presenttime);
  let timeremain = futuretime - presenttime ;

  //time for parameters
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //calculating parameters
  let days = Math.floor(timeremain/oneDay);
  let hours = Math.floor((timeremain % oneDay) / oneHour);
  let minutes = Math.floor((timeremain % oneHour) / oneMinute);  
  let seconds = Math.floor((timeremain % oneMinute) / 1000);
  // console.log(days);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);

  const values = [days, hours, minutes, seconds];

  items.forEach(function(item,index){
     console.log(item.textContent,index);
     item.textContent = values[index];
  });
  if (timeremain < 0) {
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
  
}
let countdown = setInterval(remainingtime, 1000);



