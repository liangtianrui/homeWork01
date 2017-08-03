/**
 * Created by dllo on 17/8/3.
 */
$(function () {
    var scroolTopInit = 0;//记录滚动的距离
    //滚轮滚动 导航栏隐藏效果
    $(window).scroll(function () {
        var scroolTop = $(document).scrollTop();
        console.log(scroolTop);
        if (scroolTop > 50) {
            if (scroolTop < scroolTopInit) {
                $("header").slideDown(1000);
            } else {

                $("header").slideUp(1000);
            }
        }
        scroolTopInit = scroolTop;

        if (scroolTop < 600) {
            $(".touch-top").hide();
        } else {
            $(".touch-top").show();
        }



    })

    //大图片的移入移除
    $(".main-img-left").hover(function () {
        $(this).children().eq(0).css("transform", "scale(1.1)");
        $(this).children().eq(1).show(100);
    }, function () {
        $(this).children().eq(0).css("transform", "scale(1.0)");
        $(this).children().eq(1).hide(100);

    })


    //小图片的移入移除
    $(".main-img-right-div").hover(function () {
        $(this).children().eq(0).css("transform", "scale(1.1)");
        $(this).children().eq(1).show(100);
    }, function () {
        $(this).children().eq(0).css("transform", "scale(1.0)");
        $(this).children().eq(1).hide(100);
    })

    //歌曲图片的移入
    $(".song1-img").hover(function () {
        $(this).children().eq(0).css("transform", "scale(1.1)");
        $(this).children().eq(1).fadeTo(500, 0.5);

    }, function () {
        $(this).children().eq(0).css("transform", "scale(1.0)");
        $(this).children().eq(1).fadeTo(500, 0);
    })


})