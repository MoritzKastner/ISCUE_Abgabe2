usestrict
window.timeofArrival =0;

function currentDay(){
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Saturday"];  

let d= new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()];
let date = addLeadingZero(d.getDate())
let finaldate = day +","+ date+"." + month +"."+ d.getFullYear();
return finaldate;
}

function currentTime(){
    let d= new Date();
    let hours = addLeadingZero(d.getHours())
    let minutes = addLeadingZero(d.getMinutes())
    let seconds = addLeadingZero(d.getSeconds())
    let time = hours + ":" + minutes + ":" + seconds;
    return time;
}
function getTimeDay(){
    let d= new Date();
    document.getElementById("day").innerHTML=currentDay();
    document.getElementById("time").innerHTML=currentTime();
   timeofArrival = d.getTime();
}

function addLeadingZero(value){
if (value < 10 ){
    value = value.toString().padStart(2,"0");
}
return value;
}
function timeOnPage(){
    let d= new Date();
let top = timeofArrival-d.getTime();
let toptime = new Date(top)
let hours = addLeadingZero(toptime.getHours())
let minutes = addLeadingZero(toptime.getMinutes())
let seconds = addLeadingZero(toptime.getSeconds())
alert(hours + ":" + minutes + ":" + seconds);
}
function refresh(){
    location.reload();
    window.timeofArrival = 0;
}