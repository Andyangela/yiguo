$(function() {
    // 添加收货地址
    $(".address").on("click", function() {
        location.href = "./addressList.html"
    });
    //计算共多少件商品
    var num = localStorage.getItem("count");
    $(".num_title .num").html(num);
    //渲染所购买的商品图片
    function lists_img() {
        var bought_img = (localStorage.getItem("bought_img")).split(","); //获取购物车中购买商品的图片链接
        var html = "";
        for (var i = 0; i < bought_img.length; i++) {
            html += `
            <li>
                <img src="${bought_img[i]}" alt="">
            </li>
            `
        }
        $(".list").html(html);
    }
    lists_img();
    // U币使用规则-遮罩层
    $(".warn").on("click", function() {
        $(".mask").show();
    });
    $(".know_btn a").on("click", function() {
        $(".mask").hide();
    })
})