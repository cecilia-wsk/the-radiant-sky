// Pour activer le parallax 
var parallax = new Parallax(document.getElementById("scene"));

/* Pour le déplacement de la fusée submit */
$(".rocket").mousedown(function() {
	$(".rocket").removeClass("rocket-hover");
	$(".button-submit").css("transform", "translateY(15px)");
});

$("body").mouseup(function() {
	$(".button-submit").css("transform", "translateY(0)");
	$(".rocket").addClass("rocket-hover");
});

/* Pour le son */
var Sound = function(name) {
	try {
		var result;
		var t = this;
		var context = new( window.AudioContext);

	    var request = new XMLHttpRequest();
	    request.open("GET", "audio/"+name+".mp3", true);
	    request.responseType = "arraybuffer";

	    request.onload = function() {
	        context.decodeAudioData(request.response, function(buffer) {
	                result = buffer;
	            });
	    };
	    request.send();

	    this.pop = function() {
	    	if (result) {
	    		var node = context.createBufferSource();
	    		node.buffer = result;
                node.connect(context.destination);
                node.start(0);
	    	}
 		};
    } catch (i) {
        this.pop = function() {};
    }
};

var sound = new Sound('liftoff');

/* Pour faire disparaître la page en fade-out au clic sur le lien */

$('a').click(function(e) {
     e.preventDefault();
     newLocation = this.href;
     $('body').fadeOut('slow', newpage);
});
 
function newpage() {
    window.location = newLocation;
}

/* Pour le formulaire de contact */

var nom = $("#nom");
var mail = $("#mail");
var objet = $("#objet");
var message = $("#message");

nom.blur( function() {
    verifier(nom);
});
mail.blur( function() {
    verifier(mail);
});
objet.blur( function() {
    verifier(objet);
});
message.blur( function() {
    verifier(message);
});

/* Verification formulaire contact */ 

function verifier(input) {

    var name = input.attr('name');

    if (badString(input.val())) {
    	if (langue == 'en') {
	    	switch(name) { 
	    		case "nom" : name = 'name';
	    		break;
	    		case "mail" : name = 'email';
	    		break;
	    		case "objet" : name = 'object';
	    		break;
	    		case "message" : name = 'message';
	    		break;
	    	}
	    }

	    if (langue == 'fr') {
	        if (input.attr('name') == "objet")
	            input.attr('placeholder', "L'" + name + " est incorrect.");
	        else
	            input.attr('placeholder', "Le " + name + " est incorrect.");
	    } else {
	    	input.attr('placeholder', "The " + name + " is not valid.");
	    }
        return false;
    } else {
        return true;
    }
}

function badString(chaine) {
    return $.trim(chaine).length == 0;
}

function messageRecu() { 

	if (langue == 'fr')
		var message = "Merci, message reçu.";
	else 
		var message = "Please and thank you.";

	$('.inputs-form').css('opacity', '0');
	$('.bg_form').css('opacity', '1');
	$('.bg_form').css('z-index', '5');
	$(".rocket.rocket-hover").css('animation', 'none');
	$(".rocket").css("animation", "lift-off 5s ease 1 forwards");
	$(".rocket").css("opacity", "0");
	$(".rocket").css("transition", "transform .5s ease, opacity 1s ease 5s");
	$(".fire").css("fill", "url(#grad_fire)");
	$(".fire").css("transition", "fill 1s ease");
	$(".message-recu").text(message);
	$(".message-recu").css('opacity', '1');
	$(".etoiles").css("opacity", "1");
	$(".etoiles").css('fill', 'rgba(235,211,2,0)');
	$(".etoiles").css('transition', 'fill 1s ease');
	stars_Blink();
}


function stars_Blink() {

		setTimeout(function () {
			$(".container-etoiles .layer:nth-child(even) .etoiles").css('fill', 'rgba(235,211,2,1)'); }, 6000);
		setTimeout(function () { 
			$(".container-etoiles .layer:nth-child(even) .etoiles").css('fill', 'rgba(235,211,2,0)'); }, 7000);
	
}

var isClicked_terre = false;
var isClicked_stars = 0;

$(".etoiles").click(function () {
		if( $(this).attr('data-hook') == 'false' ) {
				$(this).css('fill', '#EBD302');
				$(this).css('stroke', 'none');
				$(this).css('transition', 'stroke 1s ease');
				$(this).attr('data-hook', 'true');
				isClicked_stars++;
				reveal_rocket();
		} else {
			$(this).css('fill', 'transparent');
			$(this).css('stroke', '#fff');
				$(this).attr('data-hook', 'false');
			isClicked_stars--;
		}
});

$(".terre").click(function () {
		if( !isClicked_terre ) {
			$(".terre circle").css('fill', '#196CF8');
			$(".terre circle").css('stroke', 'none');
			$(".terre circle").css('transition', 'all 1s ease');
			$(".land").css('fill', 'url(#gradient)');
			$(".land").css('stroke', 'none');
			$(".land").css('transition', 'all 1s ease');
			isClicked_terre = true;
			reveal_rocket();
		} else {
			$(".terre circle").css('fill', 'transparent');
			$(".terre circle").css('stroke', '#fff');
			$(".land").css('fill', 'transparent');
			$(".land").css('stroke', '#fff');
			isClicked_terre = false;
		}
});

function reveal_rocket() {
	if (isClicked_stars == $(".etoiles").length && isClicked_terre) {
		$(".rocket").css("opacity", "1");
		$(".rocket").css("transform", "translateY(-480px)");
		$(".rocket").css("transition", "transform 1s ease 1s, opacity 2s ease");
	}
}

/* Formulaire : traitement Ajax */

$(".form").submit(function( event ) {

  	event.preventDefault();

	if ( verifier(nom) && verifier(mail) && verifier(objet) && verifier(message) ) {

	  	$.ajax({
				type: 'post',
				url: 'formulaire.php',
				data: $('.form').serialize(),
				success: function(data) {
				    messageRecu();
    				if (Son)
				    	sound.pop();
				}
			});

	} else 
		alert( "erreur" );
  
} );
