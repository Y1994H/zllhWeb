//轮播图
var mySwiper = $('.swiper1').swiper({
    mode: 'horizontal',
    loop: true,
    autoResize: true,
    pagination: '.swiper1 .swiper-pagination',
    paginationClickable: true,
    autoplay: 3000,
});
//我们的产业布局
$('.cy_w ul li').click(function () {
    $('.cy_w ul li').removeClass('cy_on');
    $('.cy_w .ul_list').removeClass('ul_list_on');
    $(this).addClass('cy_on');
    var _o = $(this).index();
    var _syr = $('.cy_w .ul_list');
    for (var i = 0; i < _syr.length; i++) {
        if (_o == i) {
            $(_syr[i]).addClass('ul_list_on');
        }
    }
});
// 经营理念
$('.jyln ul li').click(function () {
    $('.jyln_box').hide();
    var _n = $(this).index();
    var _syr = $('.jyln .jyln_box');
    for (var i = 0; i < _syr.length; i++) {
        if (_n == i) {
            $('.jyln_box_' + _n).show();
        }
    }
})
$(document).scroll(function () {
    //滚动高度
    var scroH = $(document).scrollTop();
    //距离顶部大于100px时
    if (scroH > 100) {
        $('header').css({
            'position': 'fixed',
            'background': 'rgba(255, 255, 255, 1)',  
        })
    } else if (scroH < 100) {
        $('header').css({
            'position': 'absolute',
            'background': 'rgba(255, 255, 255, 0)',
        })
    }

});