// define(['jquery','cookie'], function ($) {
//     // 实现登录功能
//     $('#loginBtn').click(function () {
//         $.ajax({
//             type: 'post',
//             url: '/api/login',
//             data: $('#loginForm').serialize(),
//             dataType: 'json',
//             success: function (data) {
//                 console.log(data);
//                 if (data.code === 200) {
//                     // 存储用户登录之后的信息
//                     $.cookie('loginInfo', JSON.stringify(data.result),{
//                         path: '/'
//                     });
//                     // 登录成功 跳转到主页
//                     location.href = '/';
//                 }
//             }
//         })
//         // jquery中的 return false 既阻止默认事件，还阻止冒泡
//         // 原生js 中的 return false 只会阻止默认事件，不会阻止冒泡
//         return false;
//     });
// })
// 登录功能

define(['jquery','cookie'], function ($) {
    $('#loginForm').on('submit', function () {
        var formData = $(this).serialize();
        $.ajax({
            url: '/api/login',
            type: 'post',
            data: formData,
            success: function (info) {
                if(info.code == 200) {
                    // cookie 只能字符串类型
                    $.cookie('loginfo', JSON.stringify(info.result), {path: '/'});
                    location.href = '/';
                }
            }
        });
        return false;
    });
});