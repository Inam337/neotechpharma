var nscroll = (function() {
    // Fancy Scroll Dashboard
    function fancyscrollDashboard() {
        $('.scrollbar').scrollbar();
    }
    return{
      fancyscrollDashboard:fancyscrollDashboard,

    };
})();
$(document).ready(function() {
     // Viewport dimension fix for mobile browsers
    //$('html.mobile .main-app > .scrollbar-inner').height($(window).height() - 100);
    nscroll.fancyscrollDashboard();
});