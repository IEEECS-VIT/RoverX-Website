$('.btn-flat').click(function () {
    $(this).addClass('clicked');
    $(this).cousins('.btn-flat').removeClass('clicked');
});

(function($) {
    $.fn.cousins = function(selector) {
        var cousins;
        this.each(function() {
            var auntsAndUncles = $(this).parent().siblings();
            auntsAndUncles.each(function() {
                if(cousins == null) {
                    if(selector)
                        cousins = auntsAndUncles.children(selector);
                    else
                        cousins = auntsAndUncles.children();
                }
                else {
                    if(selector)
                        cousins.add( auntsAndUncles.children(selector) );
                    else
                        cousins.add( auntsAndUncles.children() );
                }
            });
        });
        return cousins;
    }
})(jQuery)