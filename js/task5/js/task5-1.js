/**
 * Created by ROMANTIC on 2017/5/8.
 */
angular.module("myApp",[])
    .controller("registerController", function ($scope) {
        $scope.userdata = {};
        $scope.submitForm = function () {}
    });
$(document).ready(function () {
    $(".register").click(function () {
        console.log($(".username").val());
        console.log($(".password").val());
        $.ajax({
            type: "POST",
            url: "/carrots-admin-ajax/a/login",
            data: {
                name: $(".username").val(),
                pwd: $(".password").val()
            },
            success: function (value) {
                var num = JSON.parse(value);
                if(num.code !== 0){
                    $(".error").text("");
                    $(".error").text(num.data.message);
                    alert("登录失败，请检查账户密码是否正确！")
                }
                else {
                    alert("登录成功！");
                    location.href = "";
                }
            }
        })
    })
});