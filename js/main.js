// Basic Javascript
$(function(){
    $('#maximage').maximage({
        cycleOptions: {
            fx:'scrollHorz',
            speed: 800,
            timeout: 8000,
            prev: '#arrow_left',
            next: '#arrow_right',
            pause: 1	
        },
        onFirstImageLoaded: function(){
            jQuery('#cycle-loader').hide();
            jQuery('#maximage').fadeIn('fast');
        }
    });
});