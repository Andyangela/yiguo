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
    function Areas() {  //区
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
    $(".default_btn").on("click",function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
    })

})