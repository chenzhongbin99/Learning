$(function(){

    //鼠标滑过banner，左右按钮进行显示和隐藏

    $(".banner").hover(function(){

        $(".lr").show();

    },function(){

        $(".lr").hide();

    });

    //点击下面的小按钮，图片进行左右切换效果

    $(".anniu li").click(function(){

        $(this).addClass("on").siblings().removeClass("on");

        var num=$(this).index();

        $(".pic").animate({marginLeft:-350*num},"slow");

    });

    //图片自动轮播效果

    var a=0;

    var automatic=setInterval(function(){

        a++;

        a=a%5;

        $(".pic").animate({marginLeft:-350*a},"slow");

        $(".anniu li").eq(a).addClass("on").siblings().removeClass("on");

    },6000);

    //点击左右按钮，图片进行切换效果

    $(".pre").click(function(){

        a--;

        a=(a+5)%5;

        $(".pic").animate({marginLeft:-350*a},"slow");

        $(".anniu li").eq(a).addClass("on").siblings().removeClass("on");

    });

    $(".next").click(function(){

        a++;

        a=a%5;

        $(".pic").animate({marginLeft:-350*a},"slow");

        $(".anniu li").eq(a).addClass("on").siblings().removeClass("on");

    });

});