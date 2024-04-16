//Portfolios Plugin
$(document).ready(function($) {
    var filterList = {
        init: function () {
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'	
                },
                load: {
                    filter: '.web'  
                }     
            });								
        }
    };
    // Run the show!
    filterList.init();
});