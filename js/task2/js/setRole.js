/**
 * Created by ChrisChen on 2017/4/25.
 */
var setRole = document.getElementById("set-role");//设置按钮
var setDetails = document.getElementById("set-details");//玩家角色
var roleDetails = document.getElementById("role-details");//具体内容
var playersNum = document.getElementById("playersNum");//输入框值
var goDeal = document.getElementById("deal");//翻牌按钮
var killer = [];//杀手
var civilian = [];//平民
var total = [];//数组
var thePlayers;
var dates = 1;

//玩家配比
function setPlayers() {
    total.length = playersNum.value;
    console.log(total.length);
    setDetails.innerHTML = "";
    //判断杀手人数
    if(playersNum.value == 8){
        killer.length = 1;
        console.log(killer.length);
    }
    else {
        killer.length = parseInt(total.length/4);
    }
    //把killer传入数组
    for(var k=0; k<killer.length; k++){
        killer[k] = "杀手";
    }
    console.log(typeof(killer.length));
    console.log(total.length);
    //把civilian传入数组
    for(var c=0; c<((total.length)-(killer.length)); c++){
        civilian[c] = "平民";
    }
    console.log(total.length);
    //把两者传入数组
    total = killer.concat(civilian);
    console.log(total);
    //乱序
    function randomsort(a, b) {
        return Math.random()>.5? -1:1;
    }
    total.sort(randomsort);
    //再次赋值
    total.length = playersNum.value;
    //改变玩家角色
    roleDetails.innerHTML = "";

    //玩家角色
    for(var i=0; i<total.length; i++){
        if(total[i]=="杀手"){
            console.log(total[i]+"第x号:"+(i+1));
            var newLi = document.createElement("li");
            newLi.className = "pant";
            //小方块颜色
            var pantColor = document.createElement("span");
            pantColor.setAttribute("class","orange");
            //玩家角色 文字
            var pantText = document.createElement("span");
            pantText.className = "pant-text";
            pantText.innerText = (i+1) + "号-" + total[i];
            newLi.appendChild(pantText);
            newLi.insertBefore(pantColor, pantText);
            roleDetails.appendChild(newLi);
        }
        else if(total[i]=="平民"){
            console.log(total[i]+"第x号:"+(i+1));
            var newLi = document.createElement("li");
            newLi.className = "pant";
            //小方块颜色
            var pantColor = document.createElement("span");
            pantColor.setAttribute("class","blue");
            //玩家角色 文字
            var pantText = document.createElement("span");
            pantText.setAttribute("class","pant-text");
            pantText.innerText = (i+1) + "号-" + total[i];
            newLi.appendChild(pantText);
            newLi.insertBefore(pantColor, pantText);
            roleDetails.appendChild(newLi);
        }
    }
    setDetails.innerHTML = roleDetails.innerHTML;
    //转字符串 数据储存
    thePlayers = JSON.stringify(total);
    sessionStorage.total = thePlayers;
    dates = JSON.stringify(dates);
    sessionStorage.dates = dates;
}
setRole.addEventListener("click", setPlayers);

//翻牌按钮
function heal() {
    if(total.length!==0){
        location.href="task2-3.html";
    }
    else {
        alert("请先进行玩家配比！");
    }
}
goDeal.addEventListener("click", heal);