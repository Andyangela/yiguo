

    $(".tabMain div").on("click", function () {

        $(this).addClass("active").siblings().removeClass("active")
        // 判断当点击 新品时请求新品的内容
        
        if ($(this).index() == 1) {

                $.ajax({
                    url: "../../php/new.php",
                    type: "POST",
                    dataType: "json",
                    success: function (data) {
                        console.log(data)
                        var html = "";
                        for (var j = 0; j < data.length; j++) {
                            html += '<div class="productList line-bottom"><div class="shop_info"><div class="img"><img src="' + data[j].img + '" alt=""></div><div class="info"><p class="title"> ' + data[j].title + '</p><p class="txt">' + data[j].txt + '</p><p class="price"><span class="pricrRed"> ' + data[j].priceRed + '</span><span class="standard">' + data[j].standard + '</span><span class="addCart"></span></p></div></div></div>';
                        }
                        $(".outermost").html(html);
                        // console.log(html)
                        $(".tabNav div").on("click", function () {
                            // $(this).eq($(this).index).html(html).show().siblings()
                            $(".outermost .productList").html(html).siblings().hide()
                        })
                    }
                })
        }
        if ($(this).text() == "销量") {
            function nut() {
                $.ajax({
                    url: "../../php/nut.php",
                    type: "POST",
                    dataType: "json",
                    success: function (data) {
                        // console.log(data)
                        var html = "";
                        for (var j = 0; j < data.length; j++) {
                            html += '<div class="productList line-bottom"><div class="shop_info"><div class="img"><img src="' + data[j].img + '" alt=""></div><div class="info"><p class="title"> ' + data[j].title + '</p><p class="txt">' + data[j].txt + '</p><p class="price"><span class="pricrRed"> ' + data[j].priceRed + '</span><span class="standard">' + data[j].standard + '</span><span class="addCart"></span></p></div></div></div>';
                        }
                        $(".outermost").html(html);
                        console.log(html)
                    }
                })
            }
            nut()
        }
        if ($(this).text() == "价格") {
            function nut() {
                $.ajax({
                    url: "../../php/nut.php",
                    type: "POST",
                    dataType: "json",
                    success: function (data) {
                        // console.log(data)
                        var html = "";
                        for (var j = 0; j < data.length; j++) {
                            html += '<div class="productList line-bottom"><div class="shop_info"><div class="img"><img src="' + data[j].img + '" alt=""></div><div class="info"><p class="title"> ' + data[j].title + '</p><p class="txt">' + data[j].txt + '</p><p class="price"><span class="pricrRed"> ' + data[j].priceRed + '</span><span class="standard">' + data[j].standard + '</span><span class="addCart"></span></p></div></div></div>';
                        }
                        $(".outermost").html(html);
                        console.log(html)
                        // $(".tabNav div").on("click", function () {
                        // 	// $(this).eq($(this).index).html(html).show().siblings()
                        // 	$(".outermost .productList").html(html).siblings().hide()
                        // })
                    }
                })
            }
            nut()
        }
    })
    // 价格
    var i = 1;
    $(".tabMain i").on("click", function () {
        i++;
        if (i % 2 == 0) {
            $(this).addClass("drop").siblings().removeClass("drop");
            // i = 2;
            console.log(1)

        } else {
            $(this).addClass("litre").siblings().removeClass("litre")
            // i=1;
            console.log(2)
        }
    })


        function nut() {
            $.ajax({
                url: "../../php/nut.php",
                type: "POST",
                dataType: "json",
                success: function (data) {
                    // console.log(data)
                    var html = "";
                    for (var j = 0; j < data.length; j++) {
                        html += '<div class="productList line-bottom"><div class="shop_info"><div class="img"><img src="' + data[j].img + '" alt=""></div><div class="info"><p class="title"> ' + data[j].title + '</p><p class="txt">' + data[j].txt + '</p><p class="price"><span class="pricrRed"> ' + data[j].priceRed + '</span><span class="standard">' + data[j].standard + '</span><span class="addCart"></span></p></div></div></div>';
                        // html += '<a class="num"><i id="shop_num">0</i></a>< a href = "#" id = "gotop" class="top" ></a > '
                    }
                    $(".outermost").html(html);
                }   
            })
        }
        nut()
 
