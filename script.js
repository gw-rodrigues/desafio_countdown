(()=>{

    const countdown = {
        date_now: new Date('2022 01 01 00:00:00'),
        date_end: new Date('2022 01 01 00:00:00'),
        timer_is_on: false,
        e_days: document.getElementById("days"),
        e_hours: document.getElementById("hours"),
        e_minutes: document.getElementById("minutes"),
        e_seconds: document.getElementById("seconds"),
        
    }

    function remaning_time() {
        
        countdown.date_end.setMilliseconds(-1000)

        countdown.e_days.innerHTML = ("0" + Math.floor((countdown.date_end.getTime()-countdown.date_now.getTime()) / (1000 * 3600 * 24))).slice(-2)
        countdown.e_hours.innerHTML = ("0" + countdown.date_end.getHours()).slice(-2)
        countdown.e_minutes.innerHTML = ("0" + countdown.date_end.getMinutes()).slice(-2)
        countdown.e_seconds.innerHTML = ("0" + countdown.date_end.getSeconds()).slice(-2)

        console.log(("0" + Math.floor((countdown.date_end.getTime()-countdown.date_now.getTime()) / (1000 * 3600 * 24))).slice(-2))
        console.log(("0" + countdown.date_end.getHours()).slice(-2))
        console.log(("0" + countdown.date_end.getMinutes()).slice(-2))
        console.log(("0" + countdown.date_end.getSeconds()).slice(-2))
        
        console.log(`
        getTime now: ${countdown.date_now.getTime()}
        getTime end: ${countdown.date_end.getTime()}
        `)

        if(countdown.date_end.getTime() > countdown.date_now.getTime()) {
            setTimeout(remaning_time, 1000)
        }
       
    }

    function start_countdown (days, hours, minutes, seconds){
        if(!countdown.timer_is_on){
            countdown.date_end.setDate(countdown.date_end.getDate() + days)
            countdown.date_end.setHours(hours)
            countdown.date_end.setMinutes(minutes)
            countdown.date_end.setSeconds(seconds)
            setTimeout(remaning_time, 1000)
        }
    }

    start_countdown(0,0,0,10)

})();