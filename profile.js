//navigatorのリンク先へのスムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html': href);
    //移動距離を取得（http://www.jquerystudy.info/reference/css/offset.html）
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing"
    );
  });
});
