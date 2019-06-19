$(function(){
    $.ajax({
        url: '../../php/myyiguo/coupon.php',
        type: 'post',
        dataType: 'json',
        success: function (data) {
            var html="";
            for(var i = 0;i<data.length;i++){
                html+=`
                <li class="mui-table-view-cell">
                    <div class="left">
                        <p class="money"><b class="big">${data[i].money}</b>元</p>
                        <p class="type">满${data[i].type}元可用</p>
                    </div>
                    <div class="right">
                        <img src="../../images/myyiguo/hint.png" class="isWillExpire">
                        <p class="txt">${data[i].txt}</p>
                        <p class="couponText">${data[i].couponText}商品可用</p>
                        <p class="time">${data[i].time}</p>
                    </div>
                </li>
                `;
            }
            $("#item1 .mui-table-view").html(html);
        }
    })
})