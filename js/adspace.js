$(document).ready(function() {
        
    $('#tabs li a:not(:first)').addClass('inactive');
    $('.tab-container:not(:first)').hide();
    
    $('#tabs li a').click(function(){
        var t = $(this).attr('href');
        $('#tabs li a').addClass('inactive');
        $(this).removeClass('inactive');
        $('.tab-container').hide();
        $(t).fadeIn('slow');
        return false;
    });
});
