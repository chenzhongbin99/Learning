var circle=document.getElementsByClassName("circle");
var btnStart=document.getElementById("start");
var num=[];
var color=[];
var timer;
var btnEnd=document.getElementById("end");

function flash() {
    //随机3个数字
    for(var i=0;i<3;i++){
        num[i]=parseInt(Math.random()*9);
    }
    console.log(num);
    //3个不同格子
    if(num[0]==num[1]||num[0]==num[2]||num[1]==num[2]){
        flash();
    }
    //随机3个颜色

    for(var j=0;j<3;j++){
        color[j]="#"+("00000"+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
    }
}

//开始闪
function startFlash() {
    clearInterval(timer);//清楚已设置对象
    timer=setInterval(startFlash,1000);
    for(var i=0;i<circle.length;i++){
        circle[i].style.backgroundColor="orange";
    }
    flash();
    for(var n=0;n<3;n++){
        circle[num[n]].style.backgroundColor=color[n];
    }
}
btnStart.onclick=function () {
    startFlash();
}

//结束闪
function endFlash() {
    clearInterval(timer);//清楚已设置对象
    for(var i=0;i<circle.length;i++){
        circle[i].style.backgroundColor="orange";
    }
}
btnEnd.onclick=function () {
    endFlash();
}

