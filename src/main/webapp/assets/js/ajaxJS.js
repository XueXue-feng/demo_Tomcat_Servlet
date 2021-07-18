/* 入口函数 */
$(document).ready(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});
$(function () {
    /*页面一加载就ajax异步请求数据*/
    $.post("load/loadAllDataServlet", {}, function (data) {
        var divs = "";
        for (var i = 0; i < data.length; i++) {
            divs = divs + '<div class="swiper-slide">\n' + '    ' +
                '                        <div class="swiper-slide-image slide-inner">\n' + '' +
                '                                <img alt="Rall" src="' + data[i].mainImage + '"  >\n' + '  ' +
                '                          </div>\n' + '   ' +
                '                         <a href="hrefServlet?indexId=5&tag=' + data[i].tag + '"   data-type="ajax-load">\n' + '' +
                '                                <div class="swiper-slide-content">\n' + ' ' +
                '                                   <p data-swiper-parallax="-600">' + data[i].tag + '</p>\n' + '                                    <h1 data-swiper-parallax="-450">' + data[i].tag_discribe + '</h1>\n' + '                                </div>\n' + '                            </a>\n' + '                        </div>';
        }
        $("#swiper-wrapper-all").html(divs);
    }, "json");
});



