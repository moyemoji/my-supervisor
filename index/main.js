 $(document).ready(function () {
     //打开登录框
     $("#my-navbar-login-btn").click(function () {
         var h = $(".my-container").height();
         $(".my-container-mask").css("height", h);
         $(".my-login").css("marginTop", "-160px");
     })

     //关闭登录框
     $(".my-container-mask").click(function () {
         $(".my-login").css("marginTop", "-1000px");
         $(".my-new-message").css("marginTop", "-1000px");
         $(".my-container-mask").css("height", "0px");
         $(".my-login input[type='text']").val("");
     })
     $(".my-cancel-btn").click(function () {
         $(".my-login").css("marginTop", "-1000px");
         $(".my-container-mask").css("height", "0px");
         $(".my-login input[type='text']").val("");
     })

     //登录按钮
     $("#my-login-btn").click(function () {
         $("#my-login-btn").addClass("login-active");
         $("#my-register-btn").removeClass("login-active");
         $(".my-login-content").css("left", "0px");
         $(".my-register-content").css("left", "350px");
     })

     //注册按钮
     $("#my-register-btn").click(function () {
         $("#my-login-btn").removeClass("login-active");
         $("#my-register-btn").addClass("login-active");
         $(".my-login-content").css("left", "-350px");
         $(".my-register-content").css("left", "0px");
     })

     //header区域的背景
     var height = $(window).height();
     $(window).scroll(function () {
         if ($(window).scrollTop() > height) {
             $(".my-header").css("background", "rgba(0,0,0,0.8)");
         } else {
             $(".my-header").css("background", "none");
         }
     });


     $("#my-upload-img").change(function () {
         var pic = document.getElementById("preview"),
             file = document.getElementById("my-upload-img");

         var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();

         // gif在IE浏览器暂时无法显示
         if (ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
             alert("图片的格式必须为png或者jpg或者jpeg格式！");
             return;
         }

         var isIE = navigator.userAgent.match(/MSIE/) != null,
             isIE6 = navigator.userAgent.match(/MSIE 6.0/) != null;

         if (isIE) {
             file.select();
             var reallocalpath = document.selection.createRange().text;

             // IE6浏览器设置img的src为本地路径可以直接显示图片
             if (isIE6) {
                 pic.src = reallocalpath;
             } else {
                 // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
                 pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
                 // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
                 pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
             }
         } else {
             html5Reader(file);
         }
     })

     function html5Reader(file) {
         var file = file.files[0];
         var reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = function (e) {
             var pic = document.getElementById("preview");
             pic.src = this.result;
         }
     }

     $(".my-add-message").click(function () {
         var h = $(".my-container").height();
         $(".my-container-mask").css("height", h);
         $(".my-new-message").css("marginTop", "-160px");
     });

     $(".my-cancel-new-message").click(function () {
         $(".my-new-message").css("marginTop", "-1000px");
         $(".my-container-mask").css("height", "0px");
     })



 })
