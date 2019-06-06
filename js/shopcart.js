$(function() {
    // 判断用户是否登录
    var userLogin = localStorage.getItem("username");
    if (userLogin) { //已登录
        $("header").show();
        $(".cart_login").hide();
    } else { //未登录
        $("header").hide();
        $(".cart_login").show();
    }



    //商品列表渲染
    function list() {
        $.ajax({
            url: "../../php/shopcart.php",
            type: "get",
            dataType: "json",
            success: function(data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += `
                    <div class="list_box">
                        <div class="list_check">
                            <i class="active checked"></i>
                        </div>
                        <div class="img">
                            <img src="${data[i].img_url}" alt="">
                        </div>
                        <div class="text">
                            <h2 class="goodsName">${data[i].goodsName}</h2>
                            <div class="stripe"></div>
                            <p><strong>￥</strong><b>${data[i].price}</b></p>
                        </div>
                        <div class="del">
                            <i></i>
                        </div>
                        <div class="num">
                            <span class="minus"><i></i></span><span class="count">${data[i].count}</span><span class="plus"><i></i></span>
                        </div>
                    </div>
                    `
                }
                $(".goods").html(html);
                chooseGoods();
                plusBtn();
            }
        })
    }
    list();


    // 如果购物车内有商品，按钮全部默认 开启
    function chooseGoods() {
        if ($(".nogoods").hide() && $(".goods").show()) {
            $(".total_cart .check i").removeClass("no").addClass("active");
            $(".total_cart .btn a").removeClass("no");
            login();
            $(".total_cart .check i").on("click", function() { //全选-----按钮控制
                    if ($(this).attr("class") == "active") { //取消全选按钮
                        $(".total_cart .check i").removeClass("active");
                        $(".list_check i").removeClass("active");
                        $(".total_cart .btn a").addClass("no");
                        $(".total_cart .btn a").on("click", function() { //没有选中商品时，结算按钮不能点击
                            location.href = "javascript:;";
                        })
                    } else { //全选按钮开启
                        $(".total_cart .check i").addClass("active");
                        $(".list_check i").addClass("active");
                        $(".total_cart .btn a").removeClass("no"); //结算按钮开启
                        login();
                    }
                })
                // 单个-----按钮控制
            $(".list_check i").on("click", function() {
                if ($(this).attr("class") == "checked") { //未选中商品，
                    $(this).attr("class", "checked active"); //点击选中要选的商品
                    if ($(this).attr("class") == "checked active") { //选中部分商品时，全选按钮不开启，结算按钮开启
                        $(".total_cart .btn a").removeClass("no");
                        if ($(".list_box").length > 1) {
                            $(".total_cart .check i").removeClass("active");
                        } else {
                            $(".total_cart .check i").addClass("active");
                        }
                        //选中全部商品时，按钮全部开启
                        if ($(this).parents(".list_box").siblings().children().eq(0).children().attr("class") == "checked active") {
                            $(".total_cart .btn a").removeClass("no");
                            $(".total_cart .check i").addClass("active");
                        }
                    }
                } else { //已选中全部商品
                    $(this).attr("class", "checked"); //点击取消所选商品
                    $(".total_cart .check i").removeClass("active"); //取消全选按钮
                    if ($(".list_box").length = 1) {
                        $(".total_cart .btn a").removeClass("no");
                    }
                    if ($(this).attr("class") == "checked") {
                        if ($(".list_box").length = 1) {
                            $(".total_cart .btn a").removeClass("no");
                        }
                        if ($(this).parents(".list_box").siblings().children().eq(0).children().attr("class") == "checked") {
                            //取消全部商品时，所以按钮关闭
                            $(".total_cart .btn a").addClass("no");
                        }
                    }
                }
            })
        }
    }


    function login() {
        $(".total_cart .btn a").on("click", function() { //选购商品，进行结算时，要先判断用户是否登录
            if (userLogin) {
                location.href = ""; //已登录跳转到下一个页面
            } else {
                location.href = "../../html/login/login.html"; //未登录，跳转到登录页面
            }
        })
    }

    //商品加减按钮
    function plusBtn() {
        var index = 1;
        $(".plus").on("click", function() {
            index++;
            $(".count").html(index)
        })
        $(".minus").on("click", function() {
            index--;
            if (index <= 1) {
                index = 1;
            }
            $(".count").html(index)
        })
    }

})