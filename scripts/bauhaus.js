var bg = null;
function onScrollEvent() {
    var scrollTop = document.getElementsByTagName("html")[0].scrollTop || document.getElementsByTagName("body")[0].scrollTop;
    bg.style.top = Math.floor(scrollTop*-0.27)+"px";
}

window.addEventListener("load", function() {
    onScrollEvent();
});

function initEffects() {
    bg = document.getElementById("bauhaus-background");
    document.onscroll = onScrollEvent;
    onScrollEvent();
}

document.addEventListener("DOMContentLoaded", initEffects);