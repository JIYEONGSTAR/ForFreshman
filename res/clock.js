var clockContainer, clockTitle; //시간 보여주기
var date, startTime, gap, hours, startHours, minutes, startMinutes, seconds, startSeconds, sec_gap, min_gap, hours_gap;

function getTime() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10?`0${hours}` : hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;
}
function start_click(){
    startTime=new Date();
    startHours = startTime.getHours();
    startMinutes = startTime.getMinutes();
    startSeconds = startTime.getSeconds();
    duringTitle.classList.add("start");
    duringTitle.classList.remove("notshow");
}

function getduringTime(){
    if(hours>23){
        hours=hours+24;
    }
    hours_gap=hours-startHours;
    if(minutes>=startMinutes){
        min_gap=minutes-startMinutes;
    }else{
        min_gap=minutes+60-startMinutes;
        hours_gap-=1;
    }
    if(seconds>=startSeconds){
        sec_gap=seconds-startSeconds;
    }else{
        sec_gap=seconds+60-startSeconds;
        if(min_gap==0){
            hours_gap=hours_gap-1;
            min_gap+=60;
            min_gap-=1;
        }
        min_gap-=1;
    }
    duringTitle.innerText=`${hours_gap < 10 ? `0${hours_gap}`:hours_gap}:${min_gap < 10 ? `0${min_gap}`:min_gap}:${sec_gap<10?`0${sec_gap}`:sec_gap}`
}
function init(){
    getTime();
    setInterval(getTime,1000);//1초마다 시간변경
    setInterval(getduringTime,1000);
}