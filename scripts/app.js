var app = (function() {
    // Back to Top Button
    function backToTop() {
        $('body').prepend('<a href="#" class="back-to-top"><i class="fas fa-chevron-up" aria-hidden="true"></i></a>');
        var amountScrolled = 300;
        $(window).scroll(function() {
            if ( $(window).scrollTop() > amountScrolled ) {
                $('a.back-to-top').fadeIn('slow');
            } else {
                $('a.back-to-top').fadeOut('slow');
            }
        });
        $('a.back-to-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    }
    // Main Navigation Hover Function
    function mainNavigationHover() {
        $('#main_navbar').bootnavbar();
    }
    // BootWatchTooltip Function
    function bootWatchTooltip() {
        $('[data-toggle="tooltip"]').tooltip();
    }
    // BootWatchPopover Function
    function bootWatchPopover() {
        $('[data-toggle="popover"]').popover();
    }
    // ShowHideMore Text Function
    function showHideMoreText(){
        function SetMoreLess(para, thrLength, tolerance, moreText, lessText) {
            var alltext = $(para).html().trim();

            $(para).addClass("summary");        // this class is added to identify the p tag, when more/less links is clicked

            if (alltext.length + tolerance < thrLength) {
                return;
            }
            else {
                var firstHalf = alltext.substring(0, thrLength);
                var secondHalf = alltext.substring(thrLength, alltext.length);

                var firstHalfSpan = '<span class="firstHalf">' + firstHalf + '</span>';
                var secondHalfSpan = '<span class="secondHalf">' + secondHalf + '</span>';
                var moreTextA = '<a class="moreText">' + moreText + '</a>';
                var lessTextA = '<a class="lessText">' + lessText + '</a>';

                var newHtml = firstHalfSpan + moreTextA + secondHalfSpan + lessTextA;

                $(para).html(newHtml);
            }
        }
        $(".showmore").each(function () {
            SetMoreLess(this, 550, 10, " ... more", " ... less");
        });

        $("a.moreText").click(function () {
            $(this).hide();
            var pTag = $(this).parents("p.summary");

            $(pTag).find("a.lessText").show();
            $(pTag).find("span.secondHalf").show();
        });

        $("a.lessText").click(function () {
            $(this).hide();
            var pTag = $(this).parents("p.summary");

            $(pTag).find("a.moreText").show();
            $(pTag).find("span.secondHalf").hide();
        });


    }
    // Text Ellipsis Function
    function textEllipsis(){
        $.fn.ellipsis = function() {
            return this.each(function() {
                var el = $(this);

                if (el.css("overflow") == "hidden") {
                    var text = el.html();
                    var multiline = el.hasClass('multiline');
                    var t = $(this.cloneNode(true))
                    .hide()
                    .css('position', 'absolute')
                    .css('overflow', 'visible')
                    .width(multiline ? el.width() : 'auto')
                    .height(multiline ? 'auto' : el.height());

                    el.after(t);

                    function height() {
                        return t.height() > el.height();
                    };

                    function width() {
                        return t.width() > el.width();
                    };

                    var func = multiline ? height : width;

                    while (text.length > 0 && func()) {
                        text = text.substr(0, text.length - 1);
                        t.html(text + "...");
                    }

                    el.html(t.html());
                    t.remove();
                }
            });
        };
        $(".text-ellipsis").ellipsis();
    }
    // List Items FAQs Function
    function listItemsFaq(){
        $('.list-group-item').on('click',function(e){
            var previous = $(this).closest(".list-group").children(".active");
            previous.removeClass('active'); // previous list-item
            $(e.target).addClass('active'); // activated list-item
        });
    }
    // dashboardMenu Function
    function dashboardMenu() {
        $('.droplink-main a').on("click", function(e) {
            if ($(this).next().css('display') == 'block') {
                $(this).next().slideUp("fast");
                $(this).next().removeClass('open');
            }
            else if ($(this).next().css('display') == 'none') {
                $(this).next().slideDown("fast");
                $(this).next().addClass('open');

            }
        });
    }

    function windowScrollAnimate(){
        var amountScrolled = 100;
        $(window).scroll(function() {
            if ( $(window).width() > 992 ) {
                if ( $(window).scrollTop() > amountScrolled ) {
                    $('body').addClass('wanimate');
                } else {
                    $('body').removeClass('wanimate');
                }
            }
        });

    }
    return{
        backToTop:backToTop,
        mainNavigationHover:mainNavigationHover,
        bootWatchTooltip:bootWatchTooltip,
        bootWatchPopover:bootWatchPopover,
        showHideMoreText:showHideMoreText,
        textEllipsis:textEllipsis,
        listItemsFaq:listItemsFaq,
        dashboardMenu:dashboardMenu,
        windowScrollAnimate:windowScrollAnimate,
    };
})();
$(document).ready(function($) {
    app.backToTop();
    app.mainNavigationHover();
    app.bootWatchTooltip();
    app.bootWatchPopover();
    app.showHideMoreText();
    app.textEllipsis();
    app.listItemsFaq();
    app.dashboardMenu();
    app.windowScrollAnimate();
});
