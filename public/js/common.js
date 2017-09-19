define(['jquery','cookie'], function ($) {
	// NProgress.start();
	// NProgress.done();
	
	// 控制左侧菜单的折叠和展开
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 实现退出功能
	$('#logoutBtn').click(function () {
		$.ajax({
			type: 'post',
			url: 'api/logout',
			dataType: 'json',
			success: function (data) {
				if (data.code == 200) {
					location.href = 'main/login';
				}
			}
		});
	});

	// 验证用户是否登录了
	var flag = $.cookie('PHPSESSID');
	if (!flag) {
		// location.href = 'main/login';
		console.log($.cookie('PHPSESSID'));
	}


	// 填充头像信息
	var loginInfo = $.cookie('loginInfo');
	loginInfo = loginInfo && JSON.parse(loginInfo);
	$('.aside .profile img').attr('src', loginInfo.tc_avatar);
	$('.aside .profile h4').html(loginInfo.tc_name);
})