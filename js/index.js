$(function () {
    var arr = [];
    arr = location.hash.split("=");
    $.ajax({
        url: '../php/getcity.php',
        type: 'get',
        data: 'nameId=' + arr[1],
        dataType: 'json',
        success: function (data) {
            $('.address span').html(data[0].area);
        }
    })
    // 渲染函数
    function renderer(template_id, container, data) {
        var template = document.getElementById(template_id).innerHTML;
        var html = ejs.render(template, {
            data: data
        });
        $(container).html(html);
    }
    // banner
    $.ajax({
        url: '../php/banner.php',
        type: 'post',
        data: 'title="banner"',
        dataType: 'json',
        success: function (data) {
            renderer("banner", ".mui-slider-loop", data)
            mui.init()
            var gallery = mui('.mui-slider');
            gallery.slider({
                interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
            });
        }
    })
    // 活动
    $.ajax({
        url: '../php/indexactivity.php',
        type: 'post',
        dataType: 'json',
        success: function (data) {
            renderer("activity", ".menu", data)
        }
    })
    // middlebanner
    $.ajax({
        url: '../php/banner.php',
        type: 'post',
        data: 'title="middle"',
        dataType: 'json',
        success: function (data) {
            renderer("middle", ".floor-img", data)
        }
    })
    // 横向商品
    $.ajax({
        url: '../php/indexproduct.php',
        type: 'post',
        dataType: 'json',
        success: function (data) {
            renderer("product1", ".product-list-in", data)
            $("img.lazy").lazyload({
                effect: "fadeIn"
            })
        }
    })
    // 礼盒（横向商品下面的3个）
    var index;
    $.ajax({
        url: '../php/indexproduct2.php',
        type: 'post',
        dataType: 'json',
        success: function (data) {
            renderer("product2", ".gift", data)
            $("img.lazy").lazyload({
                effect: "fadeIn"
            })
            $(".price-addcart").on("click", function () {
                $img = $(this).parents(".proitem2").find(".lazy").data("original");
                $title = $(this).parents(".proitem2").find(".header").text();
                $money = $(this).parents(".proitem2").find(".money").text();
                $count = 1;
                $.ajax({
                    url:'../php/examnum.php',
                    type:'get',
                    data:'title="'+$title+'"',
                    success:function(data){
                        if(data=="添加一整条"){
                            $.ajax({
                                url: '../php/index_addcart.php',
                                type: 'post',
                                data: {
                                    'img': $img,
                                    'title': $title,
                                    "money": $money,
                                    'count': $count,
                                },
                            })
                        }else{
                            
                            data=JSON.parse(data)
                            $num=Number(data.count)
                            $num++;
                            
                            $.ajax({
                                url:'../php/updatecount.php',
                                type:'get',
                                data:'count='+$num+'&title="'+$title+'"',
                            })
                        }
                    }
                })
                
                $(".tip").css("display", "block");
                setTimeout(function () {
                    $(".tip").css("display", "none");
                }, 2000);
            })
        }
    })

    // 分类商品========
    // 礼盒专场
    $.ajax({
        url: '../php/indexproduct3.php',
        type: 'post',
        data: 'sortname="礼盒专场"',
        dataType: 'json',
        success: function (data) {
            renderer("product3", ".giftbox", data)
            $("img.lazy").lazyload({
                effect: "fadeIn"
            })
        }
    })
    // 精致杂粮
    $.ajax({
        url: '../php/indexproduct3.php',
        type: 'post',
        data: 'sortname="精致杂粮"',
        dataType: 'json',
        success: function (data) {
            renderer("product4", ".grain", data)
            $("img.lazy").lazyload({
                effect: "fadeIn"
            })
        }
    })
    // 品质干货
    $.ajax({
        url: '../php/indexproduct3.php',
        type: 'post',
        dataType: 'json',
        data: 'sortname="品质干货"',
        success: function (data) {
            renderer("product5", ".cargo", data)
            $("img.lazy").lazyload({
                effect: "fadeIn"
            })
        }
    })
    // 精选坚果
    $.ajax({
        url: '../php/indexproduct3.php',
        type: 'post',
        data: 'sortname="精选坚果"',
        dataType: 'json',
        success: function (data) {
            renderer("product6", ".nut", data)
            $("img.lazy").lazyload({
                effect: "fadeIn"
            })
        }
    })
    // 更多好货
    $.ajax({
        url: '../php/indexproduct3.php',
        type: 'post',
        data: 'sortname="更多好货"',
        dataType: 'json',
        success: function (data) {
            renderer("product7", ".morecargo", data)
            $("img.lazy").lazyload({
                effect: "fadeIn"
            })
        }
    })
    // 回顶部
    $(document).scroll(function () {
        if (window.pageYOffset == 400) {
            $(".totop").css("display", "block");
        } else if (window.pageYOffset < 400) {
            $(".totop").css("display", "none");
        }
    })
})