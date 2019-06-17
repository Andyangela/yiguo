$(function() {

    // ========有收货地址时  渲染数据=========
    function addressList() {
        $.ajax({
            url: "../../php/addressList.php",
            type: "post",
            dataType: "json",
            success: function(data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += `
                        <li data-id="${data[i].Id}">
                            <div class="item">
                                <div class="left">
                                    <div class="personal_info">${data[i].username}&emsp;&emsp;${data[i].phone_num}</div>
                                    <div class="address_info">
                                        <i class="type">${data[i].address_type}</i>
                                        ${data[i].province}${data[i].city}${data[i].area}${data[i].detail_address}
                                    </div>
                                    <a href="javascript:;"></a>
                                </div>
                            </div>
                            <div class="operate">
                                <div class="default">
                                    <i class="default_btn" data-defaults="${data[i].default_address}"></i>
                                    <span>设为默认</span>
                                </div>
                                <div class="operate_right">
                                    <span class="edit">编辑</span>
                                    <span class="edit del">删除</span>
                                </div>
                            </div>
                        </li>
                    `;
                }
                $(".addressList ul").html(html); //渲染结束
                operation();
                default_address();
            }
        })
    };
    addressList();

    function operation() {
        //  点击选择当前收货地址 -----还没加动态数据
        $(".item .left a").on("click", function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active")
            } else {
                $(this).addClass("active");
                // location.href = "./settle.html";
                $(this).parents("li").siblings().find(".item .left a").removeClass("active");
            }
        });

        // 编辑 跳转到编辑地址页面 
        $(".edit:nth-child(1)").on("click", function() {
            location.href = "./addAddress.html";
            localStorage.setItem("data_id", "0")
        });
        // ===========删除地址===========
        $(".del").on("click", function() {
            var data_id = $(this).parents("li").data("id");
            $.ajax({
                url: "../../php/del_address.php",
                data: {
                    data_id: data_id
                },
                type: "post",
                dataType: "json",
                success: function(data) {
                    location.assign(location) //删除后自动刷新页面
                }
            })
        })
    };

    function default_address() { //========没写出来=======
        $(".default_btn").each(function() { //从数据库渲染的数据中 获取默认地址
            if ($(this).data("defaults") == "yes") {
                $(this).addClass("active");
                $(this).next().html("默认地址");
                $(this).parents("li").siblings().find(".default_btn").removeClass("active");
            };
            // if (!$(this).hasClass("active")) {}


            // if ($(this).data("defaults") == "no") {
            //     $(this).on("click", function() {
            //         var data_id = $(this).parents("li").data("id");
            //         $(this).addClass("active");
            //         $(this).next().html("默认地址");
            //         $(this).parents("li").siblings().find(".default_btn").removeClass("active");
            //         $.ajax({
            //             url: "../../php/my_default.php",
            //             data: {
            //                 data_id: data_id
            //             },
            //             type: "post",
            //             dataType: "json",
            //             success: function(data) {
            //                 console.log(data)
            //                 console.log(111)
            //             }
            //         });
            //     })
            // }
            // //不是默认地址  点击选为默认地址
        });






    };

})