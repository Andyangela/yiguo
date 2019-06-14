$(function(){
        // 渲染函数
        function renderer(template_id,container,data){
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
            data:'title="banner"',
            dataType: 'json',
            success: function (data) {
                renderer("banner",".mui-slider-loop",data)
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
                renderer("activity",".menu",data)
            }
        })
        // middlebanner
        $.ajax({
            url: '../php/banner.php',
            type: 'post',
            data:'title="middle"',
            dataType: 'json',
            success: function (data) {
                renderer("middle",".floor-img",data)
            }
        })
        // 横向商品
        $.ajax({
            url: '../php/indexproduct.php',
            type: 'post',
            dataType: 'json',
            success: function (data) {
                renderer("product1",".product-list-in",data)
                $("img.lazy").lazyload({effect:"fadeIn"})
            }
        })
        // 礼盒（横向商品下面的3个）
        $.ajax({
            url: '../php/indexproduct2.php',
            type: 'post',
            dataType: 'json',
            success: function (data) {
                renderer("product2",".gift",data)
                $("img.lazy").lazyload({effect:"fadeIn"})
            }
        })
        // 分类商品========
        // 礼盒专场
        $.ajax({
            url: '../php/indexproduct3.php',
            type: 'post',
            data:'sortname="礼盒专场"',
            dataType: 'json',
            success: function (data) {
                renderer("product3",".giftbox",data)
                $("img.lazy").lazyload({effect:"fadeIn"})
            }
        })
        // 精致杂粮
        $.ajax({
            url: '../php/indexproduct3.php',
            type: 'post',
            data:'sortname="精致杂粮"',
            dataType: 'json',
            success: function (data) {
                renderer("product4",".grain",data)
                $("img.lazy").lazyload({effect:"fadeIn"})
            }
        })
        // 品质干货
        $.ajax({
            url: '../php/indexproduct3.php',
            type: 'post',
            dataType: 'json',
            data:'sortname="品质干货"',
            success: function (data) {
                renderer("product5",".cargo",data)
                $("img.lazy").lazyload({effect:"fadeIn"})
            }
        })
        // 精选坚果
        $.ajax({
            url: '../php/indexproduct3.php',
            type: 'post',
            data:'sortname="精选坚果"',
            dataType: 'json',
            success: function (data) {
                renderer("product6",".nut",data)
                $("img.lazy").lazyload({effect:"fadeIn"})
            }
        })
        // 更多好货
        $.ajax({
            url: '../php/indexproduct3.php',
            type: 'post',
            data:'sortname="更多好货"',
            dataType: 'json',
            success: function (data) {
                renderer("product7",".morecargo",data)
                $("img.lazy").lazyload({effect:"fadeIn"})
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
       
       