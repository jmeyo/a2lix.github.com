$(function() {
    var $window = $(window);

    // side bar
    setTimeout(function() {
        $('.a2lix-sidenav').affix({
            offset: {
                top: function() {
                    return $window.width() <= 980 ? 300 : 220
                }
                , bottom: 260
            }
        });
    }, 100);
});