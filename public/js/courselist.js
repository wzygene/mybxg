define(['jquery','template','util','state'],function ($,template,util){
    // 设置导航栏选中
    util.setMenu(location.pathname);

    $.ajax({
        type: 'get',
        url: '/api/course',
        dataType: 'json',
        success: function (data){
            var html = template('courseTpl',{list:data.result});
            $('#courseInfo').html(html);
        }
    })

});
