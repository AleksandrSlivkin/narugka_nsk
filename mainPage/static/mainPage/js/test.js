$ && (Pitchdeck = {
    init: function (a, b, c, d) {
        this.functions.bind(Pitchdeck.events), this._.menu_height = $(a).height(), this._.frames = b, this.functions.set_frame_height($(b).filter("#welcome"), $(window).height()), this.functions.fade_in_frame($(b).filter("#welcome")), this._.blinking_interval_id = setInterval(this.functions.blinking_portraits, 1e3), typeof c == "boolean" && (this._.touch.enabled = c), delete this.init, delete Pitchdeck.events, typeof d == "function" && d()
    }, fetch: function (a) {
        require && typeof a == "object" && require(a, function () {
            console.log("Modules loaded:"), console.log(a)
        })
    }, attach: function (a, b) {
        b.events != undefined && (Pitchdeck.functions.bind(b.events), delete b.events), Pitchdeck.modules[a] = b, Pitchdeck.modules[a].init()
    }, _: function () {
        function a(a) {
            return Pitchdeck.modules[a] != undefined ? Pitchdeck.modules[a] : !1
        }

        function b(b) {
            return new a(b)
        }

        return b.frames = {}, b.menu_height = 0, b.blinking_interval_id = 0, b.touch = {enabled: null}, b
    }(), functions: {
        bind: function (events) {
            for (var event in events)for (var action in events[event])for (var i in events[event][action])try {
                $(eval(event)).on(action, events[event][action][i])
            } catch (e) {
                $(event).on(action, events[event][action][i])
            }
        }, set_frame_height: function (a, b) {
            var c = b - Pitchdeck._.menu_height;
            $(a).height(c), $(".content", a).height(c)
        }, fade_in_frame: function (a) {
            $("*", a).each(function () {
                $(this).css({opacity: 1})
            })
        }, transition: function (a) {
            var b = $(Pitchdeck._.frames).filter("#" + a), c = $(".content", b), d = c.filter(".content-alternate").length == 0 ? !0 : !1;
            $(".transition-arrow", b).toggleClass("transition-arrow-hidden"), $(b).data("transitioned", !d), d ? (c.filter(".content-active").toggleClass("content-active content-alternate"), c.filter(".content-hidden").toggleClass("content-hidden content-active")) : (c.filter(".content-active").toggleClass("content-active content-hidden"), c.filter(".content-alternate").toggleClass("content-alternate content-active"))
        }, "goto": function (a) {
            var b = $("*").filter("#" + a);
            try {
                Pitchdeck._(b.attr("id")).animate(100)
            } catch (c) {
            }
            var d = b.position().top - Pitchdeck._.menu_height;
            $("html,body").animate({scrollTop: d}, 1e3)
        }, blinking_portraits: function () {
            $("img.blinking-portrait[data-alternate]").each(function () {
                if (Math.floor(Math.random() * 100) > 85) {
                    var a = $(this).attr("data-alternate"), b = $(this).attr("src"), c = $(this);
                    $(this).attr("src", a), $(this).attr("data-alternate", b), setTimeout(function () {
                        c.attr("src", b), c.attr("data-alternate", a)
                    }, 200)
                }
            })
        }, update_menu_line: function (a) {
            var b = $(".ui-menu-bottom-line").width();
            a += Pitchdeck._.menu_height;
            var c = !1;
            $(Pitchdeck._.frames).each(function (d) {
                var e = $(this).offset().top, f = e + $(this).height();
                if (a >= e && a < f) {
                    var g = $(".ui-menu a[href=#" + $(this).attr("id") + "]");
                    if (g.length > 0) {
                        c = !0;
                        var h = 34;
                        b = g.position().left + Math.floor(g.width() / 2);
                        var i = (a - e) / $(this).height();
                        b += (h + Math.floor(g.width())) * i.toPrecision(2)
                    }
                    return
                }
            }), c || (b = $(".ui-menu").width()), $(".ui-menu-bottom-line").width(b)
        }, update_animations: function (a) {
            var b = $(window).height();
            $(Pitchdeck._.frames).each(function (c) {
                var d = $(this).offset().top;
                if (a + b > d && d > a) {
                    var e = Math.floor((a + b - d) / b * 100);
                    try {
                        Pitchdeck._($(this).attr("id")).animate(e)
                    } catch (f) {
                    }
                    if (c > 0) {
                        var g = $(Pitchdeck._.frames[c - 1]);
                        try {
                            Pitchdeck._(g.attr("id")).animate(100)
                        } catch (f) {
                        }
                    }
                }
            })
        }
    }, events: {
        document: {ready: []}, window: {
            scroll: [function () {
                Pitchdeck.functions.update_menu_line($(this).scrollTop())
            }, function () {
                Pitchdeck.functions.update_animations($(this).scrollTop())
            }], resize: [function () {
                var a = $(Pitchdeck._.frames).filter("#welcome");
                Pitchdeck.functions.set_frame_height(a, $(this).height())
            }]
        }, ".goto-frame": {
            click: [function (a) {
                a.preventDefault();
                var b = $(this).attr("href");
                Pitchdeck.functions.goto(b.substr(1))
            }]
        }, ".transition-arrow, .transition-frame": {
            click: [function () {
                var a = $(this).closest(".frame").attr("id");
                Pitchdeck.functions.transition(a)
            }]
        }
    }, modules: {}
})

