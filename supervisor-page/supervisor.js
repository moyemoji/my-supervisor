 $(document).ready(function () {
     //header区域的背景
     var height = $(window).height();
     $(window).scroll(function () {
         if ($(window).scrollTop() > height) {
             $(".my-header").css("background", "rgba(0,0,0,0.8)");
         } else {
             $(".my-header").css("background", "none");
         }
     });

     //打开登录框
     $("#my-navbar-login-btn").click(function () {
         var h = $(".my-container").height();
         $(".my-container-mask").css("height", h);
         $(".my-login").css("z-index","10001").css("marginTop", "-160px");
     })

     //关闭登录框
     $(".my-container-mask").click(function () {
         $(".my-login").css("marginTop", "-1000px");
         $(".my-new-message").css("marginTop", "-1000px");
         $(".my-edit-form").css("top","-1000px");
         $(".my-container-mask").css("height", "0px");
         $(".my-login input[type='text']").val("");
         $(".my-new-message textarea").val("");
         $("#preview").attr("src", "");
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

     //添加评论
     $(".my-add-btn").click(function () {
         $(".my-add-comment form").css("height", "240px");
     })

     //取消发表评论
     $(".my-cancel-push").click(function () {
         $(".my-add-comment form").css("height", "0px");
     })

     //评论打星
     $(".my-add-star-radio").click(function () {
         for (var i = 0; i < 5; i++) {
            $(".my-add-star-radio").eq(i).prop("checked", false); 
         }
         
         var index = parseInt($(this).val());
         $(".my-star-num").val(index);
         for (var i = 0; i < index; i++) {
             $(".my-add-star-radio").eq(i).prop("checked", "checked");
         }
     });
     
     //打开编辑框
     $(".my-edit-btn input").click(function(){
         var h = $(".my-container").height();
         $(".my-edit-form").css("top","100px");
         $(".my-container-mask").css("height", h);
     })
     //关闭编辑框
     $(".cancel-edit-form").click(function(){
         $(".my-edit-form").css("top","-1000px");
         $(".my-container-mask").css("height", "0px");
     })
 })
