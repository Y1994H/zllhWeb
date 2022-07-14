
/*
 * REM适配：
 *   1.动态设置html标签font-size；
 *   2.动态设置html标签data-dpr、data-img-rate属性；
 *   3.用户调整系统字体大小时，避免页面样式错乱；
 *   4.计算公式：
 *      750的设计稿，量图的大小 / 100 => rem数值
 */

(function (document, window) {
    var docEl = document.documentElement,
        user_webset_font, // 用户设置的浏览器的字体大小(兼容ie)
        rate = 1, // 用户设置的字体大小和默认16px的比例系数
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

    if (docEl.currentStyle) {
        user_webset_font = docEl.currentStyle['fontSize'];
    } else {
        user_webset_font = getComputedStyle(docEl, false)['fontSize'];
    }

    // 用户调整系统字体大小或浏览器字体大小时，需要做兼容。
    rate = parseFloat(user_webset_font) / 16;

    /**
     * 设置html标签font-size
     */
    var resetRootFontSize = function () {
        var clientWidth = docEl.clientWidth;

        if (!clientWidth) return;

        if (clientWidth >= 1080) {
            docEl.style.fontSize = 200 / rate + 'px';
        } else {
            // 750设计稿
            docEl.style.fontSize = 100 * ( clientWidth / 750 ) / rate + 'px';
            // 375设计稿
            // docEl.style.fontSize = 100 * (clientWidth / 375) / rate + 'px';
        }
    };

    /**
     * 设置html的data-dpr/data-img属性（供选用而设置）。
     */
    var resetDpr = function () {
        if (!window.devicePixelRatio) return;
        // 屏幕像素比大于等于3,采用3倍图,否则使用2倍图.
        var imgRate = window.devicePixelRatio >= 3 ? 3 : 2;

        docEl.setAttribute('data-dpr', window.devicePixelRatio);
        docEl.setAttribute('data-img-rate', imgRate);
    };

    // 直接执行，不放到 DOMContentLoaded 事件执行，否则页面能感知到跳动
    resetRootFontSize();
    resetDpr();

    if (!window.addEventListener) return;
    window.addEventListener(resizeEvent, function () {
        resetRootFontSize();
        resetDpr();
    }, false)
})(document, window);

