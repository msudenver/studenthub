$(document).ready(function() {
        
    $('#tabs li a:not(:first)').addClass('inactive');
    $('.tab-container:not(:first)').hide();
    
    $('#tabs li a').click(function(){
        var t = $(this).attr('href');
        var p = $(this).data('image');
        
        if ($(this).hasClass('inactive')) {
            $('#tabs li a').addClass('inactive');
            $(this).removeClass('inactive');
            $('.tab-container').hide();
            $(t).fadeIn('slow');

            $('.ad-image').fadeOut( 'fast', function() {
                $('.ad-image').attr('src', 'images/' + p );
                $('.ad-image').fadeIn('fast');
            });
        }
        
        return false;
    });
});
