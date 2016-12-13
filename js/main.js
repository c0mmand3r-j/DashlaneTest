$(function() {
    $("#arrowdown").hide();
    
    $("#arrowup").on('click', function() {
     $('.footerimage').slideUp(1000);
        $(this).hide();
        $("#arrowdown").show();
    });
    
    
    $("#arrowdown").on('click', function() {
     $('.footerimage').slideDown(1000);
        $(this).hide();
        $("#arrowup").show();
    });
    
});

