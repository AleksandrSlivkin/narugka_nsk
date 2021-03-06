window.log = function () {
    log.history = log.history || [], log.history.push(arguments);
    if (this.console) {
        var b = arguments, c;
        b.callee = b.callee.caller, c = [].slice.call(b), typeof console.log == "object" ? log.apply.call(console.log, console, c) : console.log.apply(console, c)
    }
}, function (a) {
    function b() {
    }

    for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; !!(d = c.pop());)a[d] = a[d] || b
}(function () {
    try {
        return console.log(), window.console
    } catch (a) {
        return window.console = {}
    }
}());
var dependencies = ["libs/modernizr-2.5.3.min", "pitchdeck.min", "libs/cufon", "libs/Grapher"];
require(dependencies, function () {
    var a = [Modernizr.fontface, Modernizr.backgroundsize, Modernizr.csstransforms, Modernizr.canvas, Modernizr.svg], b = function () {
        for (var b in a)if (!a[b])return !1;
        return !0
    }();
    b ? ($("#unsupported, #fallback").remove(), require(["libs/cufon-font-selector"], function () {
        Selector.run()
    }), console.log("Piccsy Pitchdeck Loaded"), Pitchdeck.init($("header"), $(".frame"), Modernizr.touch, function () {
        Pitchdeck.fetch(["modules/problem", "modules/solution", "modules/team", "modules/product", "modules/traction"])
    })) : $("#unsupported").show()
})

