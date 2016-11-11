$(window).ready(function () {
    // var cs3 = $('.cs3').cs3({
    //     pagination: {
    //         container: '.cs3-9 .cs3-pagination'
    //     },
    //     navigation: {
    //         next: '.cs3-9 .cs3-slide-next',
    //         prev: '.cs3-9 .cs3-slide-prev'
    //     },
    //
    //     autoplay: {
    //         enabled: true,
    //         delay: 2000,
    //         disableOnInteraction: true
    //     },
    // });
    // cs3.params.effects = "galaxy, polaroid, bricks3d, tiles3d, blocks_h_3, explosion";
    // cs3.calcEffects();


    var txtContainer = $("#txtContainer"), txt;

    function splitText(phrase) {
        $.each(phrase.split(""), function (index, val) {
            if (val === "") {
                val = "&nbsp;";
            }
            $("<div/>", {id: "txt" + index}).addClass('txt').html(val).appendTo(txtContainer);
        });
        txt = $(".txt");
    }

    function buildTimeline() {
        var tl = new TimelineMax({repeat: -1, repeatDelay: 1, yoyo: true});
        tl.staggerFrom(txt, 0.4, {alpha: 0}, 0.06, "textEffect");
        tl.staggerFrom(txt, 0.8, {
            rotationY: "-270deg",
            top: 80,
            transformOrigin: "50% 50% -80",
            ease: Back.easeOut
        }, 0.06, "textEffect");
        tl.staggerTo(txt, 0.6, {rotationX: "360deg", color: "#90e500", transformOrigin: "50% 50% 10"}, 0.02);
    }

    function init() {
        splitText("Наружка-НСК.рф");
        buildTimeline();
        // TweenLite.set($("#demoBackground"), {visibility: "visible"});
    }

    init();

    // var showChar = 200;
    // var ellipsestext = "...";
    // var moretext = "more";
    // var lesstext = "less";
    // $('.more').each(function () {
    //     var content = $(this).html();
    //     if (content.length > showChar) {
    //         var c = content.substr(0, showChar);
    //         var h = content.substr(showChar - 1, content.length - showChar);
    //         var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
    //         $(this).html(html);
    //     }
    //     // if (isBottomView($(this).get(0))) {
    //     //     TweenMax.to($(this), 2.5, {alpha: 1}, 0.6);
    //     // }
    // });
    //
    // $(".morelink").click(function () {
    //     if ($(this).hasClass("less")) {
    //         $(this).removeClass("less");
    //         $(this).html(moretext);
    //     } else {
    //         $(this).addClass("less");
    //         $(this).html(lesstext);
    //     }
    //     $(this).parent().prev().toggle();
    //     $(this).prev().toggle();
    //     return false;
    // });

    // function isBottomView(el) {
    //     return el.getBoundingClientRect().bottom <= window.innerHeight + el.getBoundingClientRect().height - 50;
    // }
    //
    // $(window).scroll(function () {
    //     $('.more').each(function () {
    //         if (isBottomView($(this).get(0))) {
    //             TweenMax.to($(this), 2.5, {alpha: 1}, 0.6);
    //         } else {
    //             // TweenMax.to($(this), 4, {left: '0px', repeat: 1, delay: 1, ease: Elastic.easeOut});
    //             TweenMax.to($(this), 2.5, {alpha: 0}, 0.6);
    //         }
    //     })
    // });

    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});





