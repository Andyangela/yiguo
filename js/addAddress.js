$(function () {
    // 省市区三级联动
    // 省
    var province_option = document.querySelector("#province"),
        city_option = document.querySelector("#city"),
        area_option = document.querySelector("#area");
    for (var key in place) {
        province_option.innerHTML += "<option>" + key + "</option>";
    }
    Citys();
    Areas();
    $("#province").on("change", function () { //省改变，市 区 也改变
        Citys();
        Areas();
    });
    $("#city").on("change", function () { //市改变  区也改变
        Areas();
    })

    function Citys() { //市
        city_option.innerHTML = "";
        var cityArr = place[province_option.value][0];
        for (var i in cityArr) {
            city_option.innerHTML += "<option>" + i + "</option>"
        }
    };

    function Areas() { //区
        area_option.innerHTML = "";
        var areaArr = place[province_option.value][0][city_option.value];
        for (var k in areaArr) {
            for (var j in areaArr[k]) {
                area_option.innerHTML += "<option>" + j + "</option>"
            }
        }
    };
    // 选择地址类型
    $(".chooseBtn").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").parent().siblings().find(".chooseBtn").addClass("active");
        } else {
            $(this).addClass("active").parent().siblings().find(".chooseBtn").removeClass("active");
        }
    });
    // 设为默认地址
    $(".default_btn").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });
    // 前一个页面编辑，进入此页面修改信息
    var data_id = localStorage.getItem("data_id");
    function edit() {
        if (data_id) {
            $.ajax({
                url: "../../php/edit_address.php",
                data: {
                    data_id: data_id
                },
                type: "post",
                dataType: "json",
                success: function (data) {
                    $("input").eq(0).val(data[0].username);
                    $("input").eq(1).val(data[0].phone_num);
                    $("input[name=detail_address]").val(data[0].detail_address);
                    $("select").eq(0).val(data[0].province);
                    $("select").eq(1).val(data[0].city);
                    $("select").eq(2).val(data[0].area);
                    if (data[0].address_type == "家庭") {
                        $(".chooseBtn").eq(1).addClass("active")
                    } else {
                        $(".chooseBtn").eq(0).addClass("active")
                    }
                }
            });
            $(".submit").on("click", function () {
                before_submit(); //提交之前的操作  
                $.ajax({
                    url: "../../php/edit_address2.php",
                    data: {
                        data_id: data_id,
                        username: $(".lists:nth-child(1) input").val(),
                        phone_num: $(".lists:nth-child(2) input").val(),
                        province: $("#province").val(),
                        city: $("#city").val(),
                        area: $("#area").val(),
                        detail_address: $(".lists:nth-child(6) input").val()
                    },
                    type: "post",
                    dataType: "json",
                    success: function (data) {
                        location.href = "settle.html"
                    }
                });
            })

        }

    };
    edit();
    if (!data_id) {
        $(".submit").on("click", function () {  // 点击保存地址
            before_submit(); //提交之前的操作
            $.ajax({
                url: "../../php/addAddress.php",
                data:
                    "username=" + $(".lists:nth-child(1) input").val() +
                    "&phone_num=" + $(".lists:nth-child(2) input").val() +
                    "&province=" + $("#province").val() + "&city=" + $("#city").val() +
                    "&area=" + $("#area").val() + "&detail_address=" + $(".lists:nth-child(6) input").val(),
                type: "post",
                dateType: "json",
                success: function (data) {
                    console.log(data)
                    location.href = "settle.html"
                }
            });
        });
    }
    function before_submit() {  //提交之前的操作
        var patt = /^1[3-9]\d{9}$/; //验证手机号码格式
        if ($(".lists:nth-child(1) input").val() == "") { //联系人不能为空
            $(".warn").html("联系人不能为空").fadeIn(2000, function () {
                $(this).fadeOut()
            });
            return false;
        } else {
            if ($(".lists:nth-child(2) input").val() == "") { //手机号码不能为空
                $(".warn").html("手机号码不能为空").fadeIn(2000, function () {
                    $(this).fadeOut()
                });
                return false;
            } else if (!patt.test($(".lists:nth-child(2) input").val())) { //手机号码格式不正确
                $(".warn").html("手机号码格式不正确").fadeIn(2000, function () {
                    $(this).fadeOut()
                });
                return false;
            }
        };
        if ($(".lists:nth-child(6) input").val() == "") { //详细地址不能为空
            $(".warn").html("详细地址不能为空").fadeIn(2000, function () {
                $(this).fadeOut()
            });
            return false;
        };
        $(".chooseBtn").each(function () { //判断所选地址类型
            if ($(this).hasClass("active")) {
                address_type = $(this).next().html();
                $.ajax({
                    url: "../../php/address_type.php",
                    data: {
                        "address_type": address_type,
                        "username": $(".lists:nth-child(1) input").val()
                    },
                    dataType: "json",
                    type: "post",
                    success: function (data) {
                    }
                })
            }
        });

        if ($(".default_btn").hasClass("active")) { //判断是否是默认地址
            default_address = "yes";
            $.ajax({
                url: "../../php/default_address.php",
                data: {
                    "default_address": default_address,
                    "username": $(".lists:nth-child(1) input").val()
                }
                ,
                type: "post",
                dateType: "json",
                success: function (data) {
                }
            })
        } else {
            default_address = "no"
        };
    };


})