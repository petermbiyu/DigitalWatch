

const myWatch = () => {
    let date = new Date ();

    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = hour >= 12 ? "PM" : "AM";
    let days = ["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    hour = hour % 12;
    hour = hour ? hour : "12"; 
    hour = hour >=10 ? hour : "0" + hour;
    min = min >=10 ? min : "0" + min;
    sec = sec >=10 ? sec : "0" + sec;

    document.getElementById('day').innerHTML = days[day];
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('ampm').innerHTML = ampm;

    setTimeout(myWatch, 1000);

}
window.addEventListener("load", myWatch)

