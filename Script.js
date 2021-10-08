

const daysEl = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minsE = document.getElementById("mins");
const secE = document.getElementById("seconds");

const NewYears= "1 Jan 2022";
function Count_down(){

    const NewYearDate = new Date(NewYears);
    const CurrentDate = new Date();
    const totalseconds = (NewYearDate - CurrentDate)/ 1000;
    const days = Math.floor(totalseconds/3600) / 24;
    const hours = Math.floor(totalseconds/3600) % 24;
    const mins = Math.floor(totalseconds/60)  % 60;
    const sec = Math.floor(totalseconds) % 60;


    daysEl.innerHTML=Math.floor(days);
    hoursE.innerHTML= Math.floor(hours);
    minsE.innerHTML=Math.floor(mins);
    secE.innerHTML=Math.floor(sec);

}
    // function formatTime(time){
    // return time <  10 ? '0 $ {time} :time;
    // }

    Count_down();
    setInterval(Count_down, 1000);