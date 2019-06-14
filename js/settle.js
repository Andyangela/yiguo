$(function() {
    // 添加收货地址
    $(".user_info").on("click", function() {
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
    $(".warn").on("click", function() {
        $(".mask").show();
    });
    $(".know_btn a").on("click", function() {
        $(".mask").hide();
    });
    // u币按钮
    $(".Ub_btn").on("click", function() {
        $(".no_UB").fadeIn(1000, function() {
            $(".no_UB").fadeOut(500)
        })
    });
    // 如果有默认地址,底部 配送信息 发票信息 优惠券 可以点击开启
    // var picker = new mui.PopPicker();
    // picker.setData([{ value: 'zz', text: '智子' }]);
    // picker.show(function(selectItems) {
    //     console.log(selectItems[0].text); //智子
    //     console.log(selectItems[0].value); //zz 
    // })


    // 配送日期选项
    if ($(".user_info .address_list").hasClass("active")) { //有默认地址时，才可以选择配送日期
        (function($, doc) {            
            $.init();            
            $.ready(function() {                        
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
                showUserPickerButton.addEventListener('tap', function(event) {                  
                    userPicker.show(function(items) {  
                        userResult.innerText = items[0].text ;  //选中的配送日期                                
                    });               
                }, false);          
            });         
        })(mui, document);
    };
    // 发票信息
    $(".bill").on("click", function() {
        location.href = ""
    })
})