<?php 
  
  // 这个文件就是根据 url 返回相应的页面 -----  这就是路由
  header('content-type:text/html;charset=utf8');

  // echo '<div>主页内容</div>';

  // 根据 url 中的特征判断用户想访问哪个页面

  // include('./view/main/login.html');
  
  // var_dump($_SERVER);

  // 默认的目录名称
  $dir = 'main';
  // 默认的文件名称
  $fileName = 'index';

  if(array_key_exists('PATH_INFO',$_SERVER)){
    // 路径存在
    // 请求路径
    $path = $_SERVER['PATH_INFO'];  // /main/index
    // 截取字符串
    $str = substr($path,1);  //  main/index
    $ret = explode('/',$str);  // 这个方法类似于js 中的split方法，只是语法格式不一样
    // var_dump($ret);   // 打印数组不能用echo，要用var_dump

    if(count($ret) == 2){
      // 两层路径
      // 覆盖默认
      $dir = $ret[0];
      // 覆盖默认文件名称
      $fileName = $ret[1];
    }else {
      // 其他情况，统一跳转到登录页
      $fileName = 'login';
    }
  }

  include('./view/'.$dir.'/'.$fileName.'.html');
  
?>
