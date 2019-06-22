$(".addCart").on("click", function () {
        // console.log(html)
        //加入购物车
        // 添加购物车数量
            var title = $(this).parents(".info").children(".title").text(),
                goodsName = $(this).parents(".info").children(".txt").text(),
                // // 声明获取数据
                img_url = $(this).parents(".info").siblings(".img").children("img").attr('src'),
                price = $(this).siblings(".pricrRed").text()
            username = '15938722869';
            console.log(this)


            console.log(goodsName)
            console.log(img_url)
            console.log(price)
            console.log(this)
            $.ajax({
                url: '../../php/shop-car.php',
                type: "POST",
                data: 'title="' + title + '&img_url=' + img_url + "&goodsName=" + goodsName + "&price=" + price + "&username=" + username,
                success: function (data) {
                    console.log(data)
                }
            })
            $("#shop_num").text() + 1
            var num = $("#shop_num").text();
            // console.log($("#shop_num").text())
            num++;
            $("#shop_num").text(num);
        })
