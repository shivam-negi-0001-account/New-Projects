
function countDownTimer() {

    setInterval(() => {

        let newDatee = new Date(` july 25 , 2025 , 10:00:00 `).getTime();
        // console.log(newDatee);

        let currentDatee = new Date().getTime();
        // console.log(currentDatee);


        let difference = newDatee - currentDatee;
        // console.log(difference);

        let TimeDay = Math.floor(difference / (1000 * 60 * 60 * 24));
        // console.log(TimeDay);

        let TimeHoour = Math.floor(difference / (1000 * 60 * 60));
        // console.log(TimeHoour);

        let TimeMinute = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
        // console.log(TimeMinute);

        let TimeSecond = Math.floor(difference % (1000 * 60) / (1000));
        // console.log(TimeSecond);


        document.getElementById('Day').innerHTML = TimeDay;
        document.getElementById('Hour').innerHTML = TimeHoour;
        document.getElementById('Minute').innerHTML = TimeMinute;
        document.getElementById('Second').innerHTML = TimeSecond;

    });
}
countDownTimer();



//  ===================== ( SECOND TIMER DATE )========================

function countTimer() {

    setInterval(() => {

        let NewDate = new Date(` august 29  , 2025  , 12:00:00`).getTime();
        // console.log(NewDate);

        let currentDt = new Date().getTime();
        // console.log(currentDt);

        let dffRnc = NewDate - currentDt;
        // console.log(dffRnc);

        let days = Math.floor(dffRnc / (1000 * 60 * 60 * 24));
        // console.log(days);

        let hours = Math.floor(dffRnc / (1000 * 60 * 60));
        // console.log(hours);

        let minutes = Math.floor(dffRnc % (1000 * 60 * 60) / (1000 * 60));
        // console.log(minutes);

        let secounds = Math.floor(dffRnc % (1000 * 60) / (1000));
        // console.log(secounds);

        document.getElementById('Days').innerHTML = days;
        document.getElementById('Hours').innerHTML = hours;
        document.getElementById('Minutes').innerHTML = minutes;
        document.getElementById('Seconds').innerHTML = secounds;
    })
}
countTimer();