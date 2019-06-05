var bg1 = null;
var bg2 = null;
function onScrollEvent() {
    var scrollTop = document.getElementsByTagName("html")[0].scrollTop || document.getElementsByTagName("body")[0].scrollTop;
    console.log(scrollTop);
    bg1.style.top = Math.floor(scrollTop*-0.27-48)+"px";
    bg2.style.top = Math.floor(scrollTop*-0.15-48)+"px";
}

window.addEventListener("load", function() {
    onScrollEvent();
});

function initEffects() {
    bg1 = document.getElementById("bg1");
    bg2 = document.getElementById("bg2");
    document.onscroll = onScrollEvent;
    onScrollEvent();
}

document.addEventListener("DOMContentLoaded", initEffects);