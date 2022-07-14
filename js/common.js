// 菜单
$('.btn_no').on('click', function(){
    $('.menu_wrap').animate({
        right: '0px',
        opacity: 1,
    },500);
});
// 关闭菜单
$('#off').on('click', function(){
    $('.menu_wrap').animate({
        right: '-7.5rem',
        opacity: 0,
    },500);
});
// 
var _link = true;
$('.menu_ul li').click(function(){
    $(this).find(".menu_ul_b").slideToggle("slow");
    if(_link){
        $('.menu_ul li').removeClass('link');
        $(this).addClass('link');
        _link = false;
    }else{
        $('.menu_ul li').removeClass('link');
        _link = true;
    }
})