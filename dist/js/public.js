/**
 * Created by Administrator on 2017-11-17.
 */
//        文本框清空
function clearClose(that){
    if(that.val().length!=""){
        that.next().show();
    }else{
        that.next().hide();
    }
}

//        弹窗
function ErrorArr(str){
    $(".Errordiv").fadeIn(500);
    $(".checkError").html(str);
    setTimeout(function(){
        $(".Errordiv").fadeOut(500)
    },1500);
}
$("#writeReson,#jobName,#companyName,#workTxt,#userName,#skillText,#wxChat,#myEmail,input[name='searchInput']").bind('focus',function(){
    sta();
    //或者$('#viewport').height($(window).height()+'px');
}).bind('blur',function(){
    fix();
    //或者$('#viewport').height('auto');
});
function sta(){
    $('#header').css('position','static');
    $('#footer').css('position','static');
    $('#view').css("padding",'0');
}
function fix(){
    $('#header').css({'position':'fixed'});
    $('#footer').css('position','fixed');
    $('#view').css("padding",'50px 0 64px');
}