function navChange() {
	$("#navbar").addClass("bg-darkblue py-4");
};
$(".grid img").hover(function() {
	$(this).css("opacity", "0")
}, function() {
	$(this).css("opacity", "1")
});

// TweenMax.to("#loader", 1, {opacity:0, ease:Expo.easeIn, delay: 3})