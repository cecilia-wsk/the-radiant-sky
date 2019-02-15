scene_Elt = document.getElementById("scene");

// Pour activer le parallax
var parallax = new Parallax(scene_Elt);

/* Pour faire disparaître la page en fade-out au clic sur le lien */
$('a').click(function(e) {
     e.preventDefault();
     newLocation = this.href;
     $('body').fadeOut('slow', newpage(newLocation));
});
 
function newpage(location) {
    window.location = location;
}

var isClicked_stars = 0;

/* Pour le déplacement de la fusée submit */
$(".rocket").mousedown(function() {
	$(".rocket").removeClass("rocket-hover");
	$(".button-submit").css("transform", "translateY(15px)");
});

$("body").mouseup(function() {
	$(".button-submit").css("transform", "translateY(0)");
	$(".rocket").addClass("rocket-hover");
});

/* Pour cacher la div info d'erreur de connexion après 2sec */

setTimeout(function () {
        $(".info").css("opacity", "0");
    }, 2000);

if (sessionStorage.getItem('noFirstVisit')) {
	$(".connexion-container").css('opacity','1');
}

/** Pour afficher et cacher l'explication de navigation **/
/** Pour n'afficher l'explication que lors de la première visite de l'utilisateur **/
if (!sessionStorage.getItem('noFirstVisit')) {
    explication();
    light_stars();
    sessionStorage.setItem('noFirstVisit', true);
    // sessionStorage.clear();
}

function explication() {

    setTimeout(function () {
        $(".explication").css("opacity", "1");
    }, 2000);

    setTimeout(function () {
        $(".explication").css("opacity", "0");
    }, 4500);

}

function light_stars() {

    $(".bg_form").css('opacity', '1');
    $(".bg_form").css('z-index', '10');
    $(".connexion-container").css('opacity','0');

	$(".etoiles").click(function () {
			if( $(this).attr('data-hook') == 'false' ) {
					$(this).css('transition', 'stroke 1s ease, fill 1s ease;');
					$(this).css('fill', 'rgba(235,211,2,1)');
					$(this).css('stroke', 'none');
					$(this).attr('data-hook', 'true');
					isClicked_stars++;
					reveal_form();
			} else {
				$(this).css('fill', 'rgba(235,211,2,0)');
				$(this).css('stroke', '#fff');
				$(this).attr('data-hook', 'false');
				isClicked_stars--;
			}
	});
}

function reveal_form() {
	
	if (isClicked_stars == $(".etoiles").length) {
		$(".bg_form").css("animation", "lustre 2s ease 1 forwards");
	    $(".bg_form").css('opacity', '0');
	    $(".bg_form").css('transition', 'opacity .1s ease 3s');
	    $(".bg_form").css('z-index', '-5');
		$(".connexion-container").css("opacity", "1");
	}
}

/* Connexion : traitement Ajax */

// var login = $("#login");
// var mdp = $("#mdp");

// function badString(chaine) {
//     return $.trim(chaine).length == 0;
// }

// function verifier(input) {

//     var name = input.attr('name');

//     if ( badString(input.val()) ) {
//         input.attr('placeholder', "Le " + name + " est incorrect.");
//         return false;
//     } else 
//         return true;

// }


$(".connexion").submit(function( event ) {

  	// event.preventDefault();

 //  	var donnees = $(this).serialize();

	// if ( verifier(login) && verifier(mdp) ) {

	//   	$.ajax({
	// 			type: 'post',
	// 			url: 'login.php',
	// 			data: donnees,
	// 			success: function(data) {
	// 			    messageRecu();
	// 			}
	// 		});

	// } else 
	// 	alert( "erreur" );
  
} );


function messageRecu() { 

	$(".rocket.rocket-hover").css('animation', 'none');
	$(".rocket").css("opacity", 0);
	$(".rocket").css("transition", "transform .5s ease, opacity 1s ease 5s");
	$(".rocket").css("animation", "lift-off 5s ease 1 forwards");
	$(".fire").css("fill", "url(#grad_fire)");
	$(".fire").css("transition", "fill 1s ease");
	$(".connexion-container").css("opacity", "0");
	$(".connexion-container").css("transition", "opacity 1s ease 4s");
	// setTimeout(function() { newpage("index.php") }, 5000);
    setTimeout(function() { $(".connexion").submit() }, 5000);

};
﻿


