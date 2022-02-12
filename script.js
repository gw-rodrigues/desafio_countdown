(()=>{

    const countdown = {
        finish_time_millis: 0,
        timer_is_on: false,
        e_days: document.getElementById("days"),
        e_hours: document.getElementById("hours"),
        e_minutes: document.getElementById("minutes"),
        e_seconds: document.getElementById("seconds"),
        
    }

    function writteTime () {

        countdown.finish_time_millis.setMilliseconds(countdown.finish_time_millis.getMilliseconds() - 1000)
        countdown.e_days.innerText = countdown.finish_time_millis.getDay().toString()
        countdown.e_hours.innerText = countdown.finish_time_millis.getHours().toString()
        countdown.e_minutes.innerText = countdown.finish_time_millis.getMinutes().toString()
        countdown.e_seconds.innerText = countdown.finish_time_millis.getSeconds().toString() 
        
        if(Date.parse(countdown.finish_time_millis) > 0) {
            setTimeout(writteTime, 1000)
        }
        
    };

    function startTimer(days, hours, minutes, seconds){
        if(!countdown.timer_is_on){
            countdown.finish_time_millis = new Date(Date.now() + (days * 86400000) + (hours * 3600000) + (minutes * 60000) + (seconds * 1000))
            setTimeout(writteTime, 1000)
        }
    }

    startTimer(6,33,22,11)

})();