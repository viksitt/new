const enddate = new Date("21 sep, 2024 20:56:00").getTime();
const startdate = new Date().getTime();


let x = setInterval(function updatetimer(){
    const now = new Date().getTime();
     const distancecover = now-startdate;
     const distancepend = enddate-now;
     
     //days
     const days = Math.floor(distancepend/(24*60*60*1000));
     const hrs= Math.floor((distancepend%(24*60*60*1000)/(60*60*1000)));
     const mins= Math.floor((distancepend%(60*60*1000))/(60*1000));
     const secs= Math.floor((distancepend%(60*1000))/(1000));

     document.getElementById("days").innerHTML=days;
     document.getElementById("hrs").innerHTML=hrs;
     document.getElementById("minutes").innerHTML=mins;
     document.getElementById("seconds").innerHTML=secs;


     const totaldist= enddate-startdate;
     const perc = ((distancecover/totaldist)*100);

     document.getElementById("progress-bar").style.width=perc + "%";
     if(distancepend<0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPIRED";

     }
     

 },1000);
