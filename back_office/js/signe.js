/* Pour le formulaire des langues */

$(".langue").mouseover(function() {
    $(".langue input").css("transform", "translateY(5px)");
});

$(".langue").mouseleave(function() {
    $(".langue input").css("transform", "translateY(-35px)");
});

// Pour le bouton upload
;( function ( document, window, index )
{
    var inputs = document.querySelectorAll( '.input-file' );
    var submit  = document.querySelector( '.submit' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label    = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files )
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName ) {
                label.querySelector( 'span' ).innerHTML = fileName;
                submit.style.opacity = '1';
            } else
                label.innerHTML = labelVal;
        });

    });
}( document, window, 0 ));

