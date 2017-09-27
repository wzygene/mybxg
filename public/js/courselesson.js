define(['jquery', 'template', 'util', 'bootstrap'], function ($, template, util) {
  // 设置导航栏按钮
  util.setMenu('/course/add');

  // 获取课程id
  var csId = util.query_param('cs_id');

  // 获取所有的可视列表
  $.ajax({
    type: 'get',
    url: '/api/course/lesson',
    data: { cs_id: csId },
    dataType: 'json',
    success: function (data) {
      // 解析数据 渲染页面
      var html = template('lessonTpl', data.result);
      $('#lessonInfo').html(html);

      // 处理添加课时操作
      $('#addLesson').click(function () {
        var html = template('modalTpl',{operate:'添加课时'});
        $('#modalInfo').html(html);
        // 显示弹窗
        $('#chapterModal').modal();
      })
      // 处理课时编辑
      $('.editLesson').click(function () {
        // 获取课时id
        var ctId = $(this).attr('data-ctId');
        // 发送ajax请求：编辑课时
        $.ajax({
          type: 'get',
          url: '/api/course/chapter/edit',
          data: { ct_id: ctId },
          dataType: 'json',
          success: function (data) {
            console.log(data);
            // 解析数据 渲染模态框
            data.result.operate = '编辑课时';
            var html = template('modalTpl',data.result);
            $('#modalInfo').html(html);
            $('#chapterModal').modal();
          }
        });

      })
    }
  });



})
