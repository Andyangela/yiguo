var username = $.cookie("username");
if (username) {
	$.ajax({
		url: '../../php/myyiguo/property.php',
		type: 'post',
		data: "username=" + username,
		dataType: 'json',
		success: function (data) {
			$('.imgborder').removeClass("imgborder").css({
				width: '2.32rem',
				height: '2.32rem',
				borderRadius: '50%',
				overflow: 'hidden',
			})
			$('.top img').css({
				width: '2.26rem',
				height: '2.26rem',
				borderRadius: '50%',
			})
			$("#datum a").text(username);
			$("#datum").append(`<p class="memberIcon"><i class=""></i><span>普卡</span></p>`);
			$("#datum").append(`<p class="upgrade">再积累3000.00实付金额可升至银卡会员</p>`);
			//签到
			$(".top").after(`<div id="sign"><p class="signIn"><a href="javascript:;"><i class="gift"></i>签到送好礼<i class="goBack"></i></a></p></div>`);
			var sign = $.cookie('sign');
			$('#sign').on("click", function () {
				if (!sign) {
					$.cookie('sign', true, {
						expires: 1,
						path: '/'
					})
					$.cookie('first', true, {
						expires: 1,
						path: '/'
					})
					location.href = "SignIn.html";
				}
			})
			if (sign) {
				$("#sign").html(`<div class="signIn">已连续签到1天</div>`);
				$(".header .signIn").css({
					padding: ".25rem .3rem",
					background: "#5fd2a8"
				})
			}
			var Bmoney = data.balance.split(".");
			$(".top").after(`<div class="grandTotal"><a href="javascript:;">当前累计商品实付金额0.00</a></div>`);
			$(".header .bottom a:nth-child(1) .num").html(`${Bmoney[0]}.<span>${Bmoney[1]}</span>`);
			$(".header .bottom a:nth-child(2) .num").text(`${data.youbi}`);

			// 卡包余额
			$(".mecard").on("click", function () {
				location.href = "../../html/myyiguo/meCardBag.html";
			})
			// 悠币
			$(".Ub").on("click", function () {
				location.href = "../../html/myyiguo/Ubills.html";
			})
			// 订单列表的href
			// 待支付
			$(".orderList1").attr("href", "orderList.html?username=" + username + "&page=1")
			// 待收货
			$(".orderList2").attr("href", "orderList.html?username=" + username + "&page=2")
			// 待评价
			$(".orderList3").attr("href", "orderList.html?username=" + username + "&page=3")
			// 全部
			$(".orderList").attr("href", "orderList.html?username=" + username + "&page=0")
			//点击出现下载手机版
			$(".exchange").on("click", function () {
				$('.maskHint').css({
					display: "block"
				});
				$('.btnone').on("click", function () {
					$('.maskHint').css({
						display: "none"
					});
				})
				$('.btntwo').on("click", function () {
					location.href = "https://front.yiguo.com/h5/download/appdownload.html";
				})
			})
			// 优惠券
			$(".coupon").on("click", function () {
				location.href = "../../html/myyiguo/coupon.html";
			})
			// 帮助中心
			$(".QuestionList").on("click", function () {
				location.href = "../../html/myyiguo/QuestionList.html";
			})
			// 我的团购
			$(".orderLists").on("click", function () {
				location.href = "../../html/myyiguo/orderLists.html";
			})
			// 收货地址
			$(".addressList").on("click", function () {
				location.href = "../../html/shopcart/addressList.html";
			})
		}
	})
} else {
	$(function () {
		$(".imgborder,a,ul").on("click", function () {
			location.href = "../index/login.html";
		})
	})
}