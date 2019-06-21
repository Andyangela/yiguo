$(function() {
    // ======判断用户是否登录======

    var userLogin = cookie.getCookies("username");
    if (userLogin) { //已登录
        $("header").show();
        $(".cart_login").hide();
    } else { //未登录
        $("header").hide();
        $(".cart_login").show();
    };
    //======商品列表渲染======
    function list() {
        $.ajax({
            url: "../../php/shopcart.php",
            type: "get",
            dataType: "json",
            success: function(data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += `
                    <div class="list_box" data-id="${data[i].Id}">
                        <div class="list_check">
                            <i class="active"></i>
                        </div>
                        <div class="img">
                            <img src="${data[i].img_url}" alt="">
                        </div>
                        <div class="text">
                            <h2 class="goodsName" name="goodsName">${data[i].goodsName}</h2>
                            <div class="stripe"></div>
                            <p><strong>￥</strong><b>${data[i].price}</b></p>
                        </div>
                        <div class="del">
                            <i></i>
                        </div>
                        <div class="num">
                            <span class="minus"><i></i></span><span class="count" name="count">${data[i].count}</span><span class="plus"><i></i></span>
                        </div>
                    </div>
                    `
                }
                $(".goods").html(html);
                delGoods(); //删除商品
                btnControl(); //按钮控制
                plus_btn(); //增加按钮
                minus_btn(); //减少按钮
                total_price(); //总商品和总价格
                $(".total_cart .btn").on("click", function() {
                    localStorage.setItem("count", $(".total_num").html()); //购买总数量
                    localStorage.setItem("price", $(".allPrice").html());
                    var arr = [];
                    $(".list_check i").each(function() {
                        if ($(this).hasClass("active")) {
                            var bought_img = $(this).parents(".list_box").find("img").attr("src")
                            arr.push(bought_img);
                        }
                    })
                    localStorage.setItem("bought_img", arr);
                });
                bottom_number(); //底部购物车数量

            }
        });
        // ======按钮控制======
        function btnControl() {
            if ($(".nogoods").hide() && $(".goods").show()) { //加购后，购物车显示内容
                $(".total_cart .check i").addClass("active"); //全选按钮默认开启
                $(".total_cart .btn a").removeClass("no"); //结算按钮开启
                login(); //点击结算按钮，判断用户是否登录
                // -------------------全选按钮控制-------------------
                $(".total_cart .check i").on("click", function() { //点击全选按钮
                    $(this).toggleClass('active');
                    if ($(this).hasClass("active")) { //选中全选，
                        $(".total_cart .btn a").removeClass("no"); //结算按钮开启
                        $(".list_check i").addClass("active"); //单个按钮全部选中
                        total_price(); //总数量和总价格
                    } else { //取消全选，
                        $(".total_cart .btn a").addClass("no"); //结算按钮关闭
                        $(".total_cart .btn a").on("click", function() { //没有选中商品时，结算按钮不能点击
                            location.href = "javascript:;";
                        });
                        $(".list_check i").removeClass("active"); ////单个按钮全部取消
                        total_price(); //总数量和总价格
                    }
                });
                // ----------------------单个按钮控制-------------------
                $(".list_check i").on("click", function() { //点击单个按钮
                    $(this).toggleClass("active");
                    var goods_length = $(".list_check i").length; //列表数量
                    var checked_length = $('.list_box').find('.list_check i').filter('.active').length; //选中列表的数量
                    if (goods_length == checked_length) { //两者相等，开启全选按钮，
                        $(".total_cart .check i").addClass("active");
                        $(".total_cart .btn a").removeClass("no"); //结算按钮开启
                        total_price(); //总数量和总价格
                    } else { //否则 
                        $(".total_cart .check i").removeClass("active"); //关闭全选
                        $(".total_cart .btn a").removeClass("no"); //结算按钮开启
                        total_price(); //总数量和总价格
                        if (checked_length == 0) { //如果没有选择商品
                            $(".total_cart .btn a").addClass("no"); //结算按钮关闭
                            $(".total_cart .btn a").on("click", function() { //没有选中商品时，结算按钮不能点击
                                location.href = "javascript:;";
                            });
                            total_price(); //总数量和总价格
                        }
                    }
                })
            }
        };
    };
    list();
    //======结算时判断是否登录======
    function login() {
        $(".total_cart .btn a").on("click", function() { //选购商品，进行结算时，要先判断用户是否登录
            if (userLogin) {
                location.href = "settle.html"; //已登录跳转到下一个页面
            } else {
                location.href = "../../html/login.html"; //未登录，跳转到登录页面
            }
        })
    };
    //======增加按钮======
    function plus_btn() {
        $(".plus").on("click", function() {
            var count = $(this).parents(".list_box").find(".count").html(); //加购数量
            var goodsName = $(this).parents(".list_box").find(".goodsName").html(); //当前商品名称
            count++;
            $.ajax({
                url: "../../php/plus.php",
                data: {
                    count: count,
                    goodsName: goodsName
                },
                type: "get",
                dataType: "json",
                success: function(data) {}
            });
            $(this).parents(".list_box").find(".count").html(count); //显示该商品的数量
            total_price(); //总商品和总价格
            bottom_number(); //底部购物车数量
        })
    };
    //======减少按钮=======
    function minus_btn() {
        $(".minus").on("click", function() {
            var count = $(this).parents(".list_box").find(".count").html(); //加购数量
            var goodsName = $(this).parents(".list_box").find(".goodsName").html(); //当前商品名称
            count--;
            if (count <= 1) {
                count = 1;
            }
            $.ajax({
                url: "../../php/plus.php",
                data: {
                    count: count,
                    goodsName: goodsName
                },
                type: "get",
                dataType: "json",
                success: function(data) {}
            });
            $(this).parents(".list_box").find(".count").html(count); //显示该商品的数量
            total_price(); //总商品和总价格
            bottom_number(); //底部购物车数量
        })
    };
    //======商品删除按钮======
    function delGoods() {
        $(".del i").on("click", function() { //点击删除按
            $(".shade").show(); //弹出是否删除 确认框
            $(".btnbox .yes").on("click", function() { //点击确定按钮，发起ajax请求
                $.ajax({
                    url: "../../php/del.php",
                    data: {
                        goodsName: $(".goodsName").html()
                    },
                    dataType: "json",
                    type: "GET",
                    success: function() {
                        location.assign(location) //删除后自动刷新页面
                    }
                });
                $(".shade").hide();
            });
            $(".btnbox .no").on("click", function() { //点击取消按钮,确认框消失
                $(".shade").hide();
            })
        })
        bottom_number();
    };

    // ======总数量、总价格======
    function total_price() {
        var allPrice = 0; //总价格
        var allNum = 0; //总数量
        $(".list_check i").each(function() {
            if ($(this).hasClass("active")) {
                var num = parseInt($(this).parents('.list_box').find('.count').html()); //单个商品的购买数量
                var price = parseFloat($(this).parents('.list_box').find('.text b').text()); //商品单价
                allPrice += num * price //每个商品的总价
                allNum += num; //总数量
            }
        })
        $(".allPrice").html(allPrice.toFixed(2)) //总价格
        $(".total_num").html(allNum) //总数量
    };
    // 底部 购物车数量
    function bottom_number() {
        var bottom_count = 0;
        $.ajax({
            url: "../../php/shopcart.php",
            type: "post",
            dataType: "json",
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    bottom_count += parseInt(data[i].count)
                }
                $(".bottom_num").html(bottom_count);
                localStorage.setItem("number", bottom_count);
            }
        })
    };
})