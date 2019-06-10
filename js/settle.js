$(function() {
    // 遮罩层
    $(".warn").on("click", function() {
        console.log(11)
        $(".mask").show();
    })
    $(".know_btn a").on("click", function() {
        $(".mask").hide();
    })
})