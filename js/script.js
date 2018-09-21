console.log('app is alive')
function switchChannel(ChannelName) {
    console.log('Turning into Channel ' + ChannelName);
    $('#rightside .app-bar span').html(ChannelName);
    $('#rightside .app-bar strong').html('<a href="https://map.what3words.com/upgrading.never.helps">upgrading.never.helps</a>');
}
function dislikeChannel() {
    $('#rightside .app-bar img').attr("src","https://ip.lfe.mw.tum.de/sections/star-o.png");
}
function likeChannel() {
    $('#rightside .app-bar img').attr("src","https://ip.lfe.mw.tum.de/sections/star.png");
} 
function selectTab() {
    $('#tab-bar button').removeClass('selected-tab');
    $('#tab-bar button').addClass('selected-tab');
}
