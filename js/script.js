console.log('app is alive')
function switchChannel(ChannelName) {
    console.log('Turning into Channel ' + ChannelName);
    $('#rightside .app-bar span').html(ChannelName);
    $('#rightside .app-bar strong').html('<a href="https://map.what3words.com/upgrading.never.helps">upgrading.never.helps</a>');
    $('#channels ul li').removeClass('selected-channel');
    $('li:contains('+ChannelName+')').addClass('selected-channel');
}
function dislikeChannel() {
    $('#rightside .app-bar img').attr("src","https://ip.lfe.mw.tum.de/sections/star-o.png");
}
function likeChannel() {
    $('#rightside .app-bar img').attr("src","https://ip.lfe.mw.tum.de/sections/star.png");
} 
function selectTab1() {
    $('#tab-bar button').removeClass('selected-tab');
    $('#new-button').addClass('selected-tab');
    console.log('Changing to tab New');
}
function selectTab2() {
    $('#tab-bar button').removeClass('selected-tab');
    $('#trending-button').addClass('selected-tab');
    console.log('Changing to tab Trending');
}
function selectTab3() {
    $('#tab-bar button').removeClass('selected-tab');
    $('#favorites-button').addClass('selected-tab');
    console.log('Changing to tab Favorites');
}
function showEmojis()  {
    $('#emojis').toggle();
}