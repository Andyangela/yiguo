$(function(){
    $.ajax({
        url: '../../php/myyiguo/mecard.php',
        type: 'post',
        dataType: 'json',
        success: function (data) {
            $("#money").text(data.balance)
        }
    })
})