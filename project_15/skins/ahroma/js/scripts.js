$(document).ready(function(){
	$('.other ul').jcarousel({
        auto: 4,
        wrap: 'circular',
        scroll: 1
    });
    
    $('select.custom-dropdown').select_skin();
});

// custom select dropdown
(function ($) {

    $.fn.select_skin = function (w) {
        return $(this).each(function(i) {
            s = $(this);

            if (!s.attr('multiple')) {
                // create the container
                s.wrap('<div class="custom-select"></div>');
                c = s.parent();
                c.children().before('<div class="custom-select-text">&nbsp;</div>').each(function() {
                    if (this.selectedIndex >= 0) $(this).prev().text(this.options[this.selectedIndex].innerHTML)
                });

                // skin the container
                c.css('position', 'relative');

                // hide the original select
                s.css( { 'opacity': 0,  'position': 'absolute', 'z-index': 100 } );

                // get and skin the text label
                var t = c.children().prev();

                // add events
                c.children().click(function() {
                    t.text( (this.selectedIndex >= 0 ? this.options[this.selectedIndex].innerHTML : '') );
                });
                c.children().change(function() {
                    t.text( (this.options.length > 0 && this.selectedIndex >= 0 ? this.options[this.selectedIndex].innerHTML : '') );
                });
             }
        });
    }
}(jQuery));