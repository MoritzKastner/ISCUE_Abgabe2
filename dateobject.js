usestrict
function currentDay(){
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Saturday"];  

let d= new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()];
let date = day +","+ d.getDate() +"." + month +"."+ d.getFullYear();
return date;
}

function currentTime(){
    let d= new Date();
    let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return time;
}
function getTimeDay(){
    document.getElementById("day").innerHTML=currentDay();
    document.getElementById("time").innerHTML=currentTime();
   
}

function addLeadingZero(value){
value;
}
function timeOnPage(){

}
function refresh(){
    location.reload();
}