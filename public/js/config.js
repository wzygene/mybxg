require.config({
    baseUrl: '/public/assets',
    paths: {
        // 这里的文件没有先后顺序之分
        jquery: 'jquery/jquery.min',
        cookie: 'jquery-cookie/jquery.cookie',
        validate: 'jquery-validate/jquery-validate.min',
        form: 'jquery-form/jquery.form',
        template: 'artTemplate/template-web',
        bootstrap: 'bootstrap/js/bootstrap.min',
        datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker',
        language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        uploadify: 'jquery-uploadify/jquery.uploadify',
        ckeditor: 'ckeditor/ckeditor',
        region: 'jquery-region/jquery.region',
        util: '../js/util',
        index: '../js/index',
        common: '../js/common',
        login: '../js/login',
        teacherlist: '../js/teacher-list',
        teacheradd: '../js/teacher-add',
        settings: '../js/settings',
        courselist: '../js/courselist',
        courseadd: '../js/courseadd',
        coursebasic: '../js/coursebasic'
    },
    shim: {
        bootstrap : {
            deps : ['jquery']
        },
        language: {
            deps : ['jquery','datepicker']
        },
        validate: {
            deps : ['jquery']
        },
        uploadify: {
            deps : ['jquery']
        },
        ckeditor: {
            exports: 'CKEDITOR'
        }
    } 
})