(()=>{

    //               COUNTDOWN SECTION
    // VARS
    const countdown = {
        date_now: new Date('2022 01 01 00:00:00'),
        date_end: new Date('2022 01 01 00:00:00'),
        timer_is_on: false,
        e_days: document.getElementById("days"),
        e_hours: document.getElementById("hours"),
        e_minutes: document.getElementById("minutes"),
        e_seconds: document.getElementById("seconds"),
        e_start_button: document.getElementById('start'),
        e_input_days: document.getElementById('input-days'),
        e_input_time: document.getElementById('input-time')
    }
    // DECREMENT
    let timeOut;
    function remaning_time() {   
        countdown.date_end.setMilliseconds(-1000)

        let calc_days = Math.floor((countdown.date_end.getTime()-countdown.date_now.getTime()) / (1000 * 3600 * 24))

        countdown.e_days.innerHTML = calc_days.toString().length < 2 ? ("0" + calc_days).slice(-2) : calc_days
        countdown.e_hours.innerHTML = ("0" + countdown.date_end.getHours()).slice(-2)
        countdown.e_minutes.innerHTML = ("0" + countdown.date_end.getMinutes()).slice(-2)
        countdown.e_seconds.innerHTML = ("0" + countdown.date_end.getSeconds()).slice(-2)

        if(countdown.date_end.getTime() > countdown.date_now.getTime()) {
           timeOut = setTimeout(remaning_time, 1000)
        }
       
    }
    // START
    function start_countdown (days, time){      
        if(!countdown.timer_is_on){
            countdown.timer_is_on = true
            countdown.date_end = new Date(`2022 01 01 ${time}`)
            countdown.date_end.setDate(parseInt(days) + 1)

            setTimeout(remaning_time, 1000)
        }else{
            countdown.timer_is_on = false
            clearTimeout(timeOut)
            start_countdown(days, time)
        }
    }

    //SET PREDEFINED VALUES
    countdown.e_input_days.value = '11';
    countdown.e_input_time.value = '11:11:11';

    //GET INPUTVALS
    function getData(){
        start_countdown(countdown.e_input_days.value, countdown.e_input_time.value)
    }

    //PRE-START COUNTDOWN
    getData()

    //LISTENER TO START BTN
    countdown.e_start_button.addEventListener('click', getData)


    //                      MODAL SECTION
    //TOGGLE CLASS
    function toogleModal() {
        document.getElementById('modal').classList.toggle('opened')
    }

    //LISTENER TO OPEN AND CLOSE SUBSCRIBE FORM BUTTON
    document.getElementById('modal-open-button').addEventListener('click', toogleModal)
    document.getElementById('modal-close-button').addEventListener('click', toogleModal)

})();