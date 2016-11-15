$(window).ready(function () {
    var txtContainer = $(".txtContainer"), txt;

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
        tl.staggerTo(txt, 0.6, {rotationX: "360deg", color: "#808080", transformOrigin: "50% 50% 10"}, 0.02);
    }

    function init() {
        splitText("Наружка-НСК.рф");
        buildTimeline();
    }

    init();
////////////////////////////////////////////////////////////////
    var showChar = 160;
    var ellipsestext = "...";
    var moretext = "читать";
    var lesstext = "скрыть";
    $('.more').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar - 1, content.length - showChar);
            var html = c +
                '<span class="moreellipses">'
                + ellipsestext + '&nbsp;' +
                '</span>' +
                    '<span class="morecontent">' +
                        '<span>'
                            + h +
                        '</span>' +
                    '&nbsp;&nbsp;' + '<a href="" class="morelink">' + moretext + '</a>' +
                '</span>';
            $(this).html(html);
        }
    });

    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
/////////////////////////////////////////////////////////////
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
})
;





