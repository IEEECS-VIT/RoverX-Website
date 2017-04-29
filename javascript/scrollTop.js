window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $('#Totop').removeClass('scale-out');
    } else {
        $('#Totop').addClass('scale-transition scale-out');
    }
}