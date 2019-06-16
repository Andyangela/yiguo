$(function () {
    // 渲染收货地址
    function address() {
        $.ajax({
            url: "../../php/show_address.php",
            type: "post",
            dataType: "json",
            success: function (data) {
                var html = `
                <div class="address">
                    <i></i>
                    <span class="text">添加收货地址</span>
                    <span class="arrow"></span>
                </div>
                <div class="address_list active">
                    <div class="name">
                        <span>${data[0].username}</span>
                        <span>${data[0].phone_num}</span>
                    </div>
                    <div class="address1">
                        <i class="label">${data[0].address_type}</i>
                        <span class="address-details">
                        ${data[0].province}${data[0].city}${data[0].area}${data[0].detail_address}
                        </span>
                    </div>
                    <span class="arrow"></span>
                </div>
                `;
                $(".user_info").html(html);
            }
        })
    };
    address();
    // 添加收货地址
    $(".user_info").on("click", function () {
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
    // 渲染价格
    var price = localStorage.getItem("price");
    $(".payfor").html(price);
    $(".total_pay").html(price);
    // U币使用规则-遮罩层
    $(".warn").on("click", function () {
        $(".mask").show();
    });
    $(".know_btn a").on("click", function () {
        $(".mask").hide();
    });
    // u币按钮
    $(".Ub_btn").on("click", function () {
        $(".no_UB").fadeIn(1000, function () {
            $(".no_UB").fadeOut(500)
        })
    });
    // 如果有默认地址,底部 配送日期 发票信息 优惠券 可以点击开启

    // 配送日期选项
    if ($(".user_info .address_list").hasClass("active")) { //有默认地址时，才可以选择配送日期
        (function ($, doc) {
            $.init();
            $.ready(function () {
                var userPicker = new $.PopPicker();
                userPicker.setData([{
                    value: 'date',
                    text: '6月14日 星期五'
                }, {
                    value: 'date',
                    text: '6月15日 星期六'
                }, {
                    value: 'date',
                    text: '6月16日 星期日'
                }]);
                var showUserPickerButton = doc.getElementById('showUserPicker');  //获取点击的位置               
                var userResult = doc.getElementById('userResult');
                jQuery(".times").show();  //有默认地址时,配送时间显示      
                jQuery("#userResult").html(userPicker.pickers[0].items[0].text); //有默认地址时,配送日期内容改变为明天日期
                showUserPickerButton.addEventListener('tap', function (event) {
                    userPicker.show(function (items) {
                        userResult.innerText = items[0].text;  //选中的配送日期                                
                    });
                }, false);
            });
        })(mui, document);
    };
    // 发票信息
    $(".bill").on("click", function () {
        location.href = "invoice.html"
    });
    // 点击结算按钮，弹出结算面板
    $(".settle_btn").on("click", function () {
        $(".settle_mask").show();
        $(".settleBox").animate({
            "bottom": "0"
        }, 500);
    });
    // 点击X关闭结算面板
    $(".close").on("click", function () {
        $(".settle_mask").hide();
        $(".settleBox").animate({
            "bottom": "-40%"
        });
    });
    // 点击在线支付 选择支付方式
    $(".online_pay>div:nth-child(2)").on("click", function () {
        $(".online_pay_box").eq(0).animate({
            left: "0"
        }, 1000)
    });
    $(".return").on("click", function () {
        $(".online_pay_box").animate({
            left: "100%"
        }, 1000)
    });
    // 货到付款
    $(".pay_cash").on("click", function () {
        $(".pay_after").animate({
            left: "0"
        }, 1000);
    })
    // 点击按钮选中
    $(".check_btn").on("click",function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).parent(".items").siblings().find(".check_btn").removeClass("active")
        }
    });
})