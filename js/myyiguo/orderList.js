$(function () {
    var username = window.location.search.split("&")[0].split('=')[1];
    var page = window.location.search.split("&")[1].split('=')[1];
    $('.mui-slider-indicator').children().eq(page).addClass('mui-active').siblings().removeClass('mui-active');
    var widths = page * $('.mui-control-item').width();
    var widths2 = page * (window.innerWidth);
    setTimeout(function () {
        $('#sliderProgressBar').css({
            transform: 'translate3d(' + widths + 'px, 0px, 0px)'
        })
        $('.mui-slider-group').css({
            transform: 'translate3d(-' + widths2 + 'px, 0px, 0px)'
        })
    }, 1)

    // 订单的数据请求
    $.ajax({
        url: '../../php/myyiguo/orderList.php',
        type: 'post',
        data: "username=" + username,
        dataType: 'json',
        success: function (data) {
            $("#item1").css({
                paddingTop: '0rem'
            });
            var html="";
            for(var i = 0;i<data.length;i++){
                html+=`
                <ul class="orderUl">
                    <li class="orderLi line-top">
                        <div class="line-bottom">
                            <div class="status"><span class="orderCode">订单编号:${data[i].number}</span> <span
                                    class="orderTime">${data[i].times}</span> <span
                                    class="orderStatus gray">已取消</span></div>
                            <div class="commodity-show line-top">
                                <ul class="scroll clear">
                                    <li class="list-img clear">
                                        <p class="imgShow"><img
                                                src="${data[i].imgs}">
                                        </p>
                                    </li>
                                </ul>
                                <p class="orderMsg"><span class="orderNum">共1件合计:</span> <span
                                        class="price">${data[i].prices}</span></p>
                            </div>
                            <div class="operationBtn line-top">
                                <!---->
                                <!----> <a class="orderTrack">订单跟踪</a></div>
                        </div>
                    </li>
                </ul>`;
            }
            $("#item1").html(html);
        }
    })
})