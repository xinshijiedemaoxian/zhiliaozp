/**
 * Created by Administrator on 2017-11-10.
 */
var BooleanOk1=false,BooleanOk2=false,BooleanOk3=false;
$(function(){
    var mesLogin=$("#mesLogin"),pwdLogin=$("#pwdLogin");
    var titleCode=$(".titleCode"),titlePwd=$(".titlePwd");

    // var grey,blue;
    titlePwd.bind("click",function(){
         pwdLogin.show();
         mesLogin.hide();
        change($(this),'grey','blue');
        change(titleCode,'blue','grey');
     })
    titleCode.bind("click",function(){
        mesLogin.show();
        pwdLogin.hide();
        change($(this),'grey','blue');
        change(titlePwd,'blue','grey');
    })
    $("input.txtInput").each(function(){
        var logo=$("#logo");
        var loginContenId=$("#loginContent");

        //焦点事件
        $(this).focus(function(){
            var inputVal=$(this).val();
            inputMath(inputVal,this)
            $(this).parent().addClass("borderColor");
            change(logo,'titleBlur','titleFocus');
            change(loginContenId,'lcBlur','lcFocus');
            $("#hint").css({"bottom":"0"})
        }).blur(function(){
            //失去焦点事件
            $(this).prev("label").hide(0.4).parent().removeClass("borderColor");
            change(logo,'titleFocus','titleBlur');
            change(loginContenId,'lcFocus','lcBlur');
        }).keyup(function(){
            var inputVal=$(this).val();
            // 键盘事件
            inputMath(inputVal,this)
        })

    })
    //密码框 明文切换
    var showPwd=$("#showPwd")
    showPwd.click(function(){
        if($(".pwdSpan").length=== 0){
            showPwd.addClass("pwdSpan").parent(".inputPwd").children("input").attr("type","text");
        }else{
            showPwd.removeClass("pwdSpan").parent(".inputPwd").children("input").attr("type","password");
        }
    })

    function inputMath(inputVal,that){
        if(inputVal !=0){
            $(that).prev("label").show(400);
        }
    }
    function change(id,class1,class2){
        return id.is($('.'+class1)) ? id.removeClass(class1).addClass(class2) : id.addClass(class2);
    }


    // 手机号验证
     $(".phone").on("phoneCk",function () {
         var phoneVal=$(this).val();
         if((/^1[3|4|5|8][0-9]\d{4,8}$/i).test(phoneVal)){
            BooleanOk1=true;
         }else{
            BooleanOk1=false;
         }
     })
    // $(".phone").trigger("phone1Ck");
    //密码验证

    $(".userPwd").on("pwdCk",function(){
        var Pval =$(this).val();
        if((/^[a-zA-Z0-9]{6,10}$/).test(Pval)){
            BooleanOk2=true;
        }else{
            BooleanOk2=false;
        }
    })
    // 手机号验证1
    $(".phone1").on("phone1Ck",function () {
        var phone1Val=$(this).val();
        if((/^1[3|4|5|8][0-9]\d{4,8}$/i).test(phone1Val)){
            BooleanOk3=true;
        }else{
            BooleanOk3=false;
        }
    })
    //            表单清除键
    $(".txtInput").focus(function(){
        clearClose($(this));
    }).keyup(function(){
        clearClose($(this));
    }).blur(function () {
        $(this).next().hide();
    })
//            清除键作用
    $("#loginContent em").each(function(){
        $(this).on("click",function(){
            $(this).hide().prev("input").val("");
        })
    })
})
//    登录验证
function iphonecheckSubmit(){
    $(".phone").trigger("phoneCk");
    $(".userPwd").trigger("pwdCk");
    if(BooleanOk1 && BooleanOk2 ==true){
        return true;
    }else{
        var str="手机号或密码不正确";
        ErrorArr(str);
        return false;
    }
}
function keycheckSubmit(){
    $(".phone1").trigger("phone1Ck");
    if(BooleanOk3==true){
        return true;
    }else{
        var str="手机号不正确";
        ErrorArr(str);
        return false;
    }
}

