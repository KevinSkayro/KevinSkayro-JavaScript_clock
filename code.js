function clock_screen(){
    const time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    
    if (hrs === 0){
        hrs = '12';
    }

    if(hrs < 10){
        hrs = '0' + hrs;
    }
    if(mins < 10){
        mins = '0' + mins;
    }
    if(secs < 10){
        secs = '0' + secs;
    }
    

    //time
    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = ':' + mins;
    document.getElementById('seconds').innerHTML = ':' + secs;
}
setInterval(clock_screen, 1000)

function clock_date(){
    const timedate = new Date();
    let day = timedate.getDate();
    let month = timedate.getMonth();
    let year = timedate.getFullYear();

document.getElementById('months').innerHTML = month + 1 +' /';
document.getElementById('days').innerHTML = day + ' /';
document.getElementById('years').innerHTML = year;
}

setInterval(clock_date, 1000)