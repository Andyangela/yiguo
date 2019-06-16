$(function(){
    // 点击查看详情 弹出详情面板
    $(".hint span:nth-child(2)").on("click",function(){
        $(".mask").show();
    });
    // 点击知道了 详情面板消失
    $(".know_btn a").on("click",function(){
        $(".mask").hide();
    });
    // 发票抬头
    $(".tab a i").on("click",function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).parent("a").siblings().find("i").removeClass("active")
        };
        if($(".tab a:nth-child(1) i").hasClass("active")){
            $(".tab_bottom").removeClass("active");
        }
        if($(".tab a:nth-child(2) i").hasClass("active")){
            $(".tab_bottom").addClass("active");
        }
    });
    // 按钮  是否需要发票
    $(".no_need").on("click",function(){
        console.log("不需要发票");
        location.href="./settle.html"
    });
    $(".sure").on("click",function(){
        console.log("确定");
        location.href="./settle.html"
    })
})