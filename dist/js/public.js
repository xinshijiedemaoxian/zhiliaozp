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