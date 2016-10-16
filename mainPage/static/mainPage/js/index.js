//$("#slipToLeft_1").hover(function(){$(this).slideToggle();});

TweenMax.to("#slipToLeft_1", 4, {left:'0px', repeat:0 , delay:1, ease:Elastic.easeOut});
TweenMax.to("#slipToLeft_2", 4, {left:'0px', repeat:0 , delay:2, ease:Elastic.easeOut});
TweenMax.to("#slipToLeft_3", 4, {left:'0px', repeat:0 , delay:3, ease:Elastic.easeOut});
TweenMax.to("#slipToLeft_4", 4, {left:'0px', repeat:0 , delay:4, ease:Elastic.easeOut});
$(window).load(function() {
  var logo = $("#logo"),
  txtContainer = $("#txtContainer"),
  tl,
  txt;

  function splitText(phrase) {
	var prevLetter, sentence,
    sentence = phrase.split("");
    $.each(sentence, function(index, val) {
      if(val === ""){
        val = "&nbsp;";
      }
      var letter = $("<div/>", {id : "txt" + index}).addClass('txt').html(val).appendTo(txtContainer);
      if(prevLetter) {$(letter).css("left", ($(prevLetter).position().left + $(letter).width()) + "px");};
	  prevLetter = letter;
	});
    txt = $(".txt");
  }

  function buildTimeline() {
		TweenLite.set(txtContainer, {css:{perspective:500}});
		tl = new TimelineMax({onUpdate:updateUI, repeat:-1, repeatDelay:1, yoyo:true});
		tl.from(logo, 0.5, {left:'-=90px', ease:Back.easeOut});
		tl.staggerFrom(txt, 0.4, {alpha:0}, 0.06, "textEffect");
		tl.staggerFrom(txt, 0.8, {rotationY:"-270deg", top:80, transformOrigin: "50% 50% -80", ease:Back.easeOut}, 0.06, "textEffect");
		tl.staggerTo(txt, 0.6, {rotationX:"360deg", color:"#90e500", transformOrigin:"50% 50% 10"}, 0.02);
  }

  function updateUI() {}
  function init() {
    splitText("Наружка-НСК.рф");
    buildTimeline();
    TweenLite.set($("#demoBackground"), {visibility:"visible"});
  }
  init();
});