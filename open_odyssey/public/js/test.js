if (Modernizr.csstransitions) {
function preloadImages(imgs, callback) {
var cache = [],
imgsTotal = imgs.length,
imgsLoaded = 0;

$(imgs).each(function (i, img) {
var cacheImage = document.createElement('img');
cacheImage.onload = function () {
if (++imgsLoaded == imgsTotal) callback();
};
cacheImage.src = $(img).attr('src');
cache.push(cacheImage);
});
};
$.fn.trans = function () {
var t = arguments[0],
d = arguments[1] || '';
if (t) {
$.each(this, function (i, e) {
$(['-webkit-', '-moz-', '-o-', '-ms-', '']).each(function (i, p) {
$(e).css(p + 'transition' + d, t);
});
});
}
};

document.write('<link rel="stylesheet" href="animations.css" />');

$(function(){
//preload images contained within elements that need to animate
preloadImages($('.services img, .featured img'), function () {
$('.services, .featured').appear({
once: true,
forEachVisible: function (i, e) {
$(e).data('delay', i);
},
appear: function () {
var delay = 150,
stagger = 800,
sequential_delay = stagger * parseInt($(this).data('delay')) || 0;

$(this).children().each(function (i, e) {
$(e).trans(i * delay + sequential_delay + 'ms', '-delay');
});
$(this).removeClass('animationBegin');
}
});
});
});
}
</script>