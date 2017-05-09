/**
 * Created by ROMANTIC on 2017/5/8.
 */
var passwordNum = [];
$(".register").click(function () {
    //账号
    var userName = $($(this).find(".user")).value;
    if(userName != "user"){
        $(".message").text("无此用户请重新输入");
    }
    //密码
    else if(passwordNum.length <= 6){
        $(".message").text("密码不能小于6位数");
    }
    else{
        $(".message").text("");
    }
});