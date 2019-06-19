$(function(){
    $.ajax({
        url: '../../php/myyiguo/Ub.php',
        type: 'post',
        dataType: 'json',
        success: function (data) {
            var html="";
            for(var i = 0;i<data.length;i++){
                html+=`
                <ul class="mui-table-view">
                    <li class="error">
                        <span class="l">
                            <h5>${data[i].type}送U币</h5>
                            <p>${data[i].time}</p>
                        </span>
                        <span class="r">+${data[i].nub}</span>
                    </li>
                </ul>
                `;
            }
            $("#item1").html(html);
            $("#item2").html(html);
        }
    })
})