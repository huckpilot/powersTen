// select video element
var vid = document.getElementById('bgvid');
var now = document.getElementById('bgvid').currentTime;

//var vid = $('#v0')[0]; // jquery option

// pause video on load
vid.pause();

// alternative & optimized implementation  thanks to http://codepen.io/daveroma/
window.onscroll = function(){
  $('div.scrollpopup').html(window.pageYOffset);
  vid.currentTime = window.pageYOffset/100;
};

function autoScrollTo(el) {
    var top = $("#" + el).offset().top;
    $("html, body").animate({ scrollTop: top }, 10000);
}







