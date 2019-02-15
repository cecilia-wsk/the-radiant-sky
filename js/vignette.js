var isCorrect = false;

$(".vignette_lit").mousedown( function() {
	if (!isCorrect) {
	    $(".vignette_lit").css('cursor', '-webkit-grabbing');
	    $(".vignette_lit").css('cursor', 'grabbing');
	}
})

$(".vignette_lit").mouseup( function() {
	if (!isCorrect) {
	    $(".vignette_lit").css('cursor', 'grab');
	    $(".vignette_lit").css('cursor', '-webkit-grab');
	}
})

document.ready = function init() {

  $('.vignette').draggable({ 
  	revert: true, 
  	zIndex: 5,
  	snap: true,
  	snapMode: 'inner',
  	stack: '.container-vignettes' 
    });

  $('.atrouver').droppable({
      accept: '.vignette',
      hoverClass: 'hovered',
      tolerance: "fit",
  	  over: vignetteBig,
  	  out: vignetteLittle,
      drop: dropVignette, 
    });

}

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

var sound_invalid = new Sound('invalid');
var sound_valid = new Sound('valid');

function dropVignette( event, ui ) {

	var atrouver = $(this);
	var vignette = ui.draggable;
	var vignette_big = ui.draggable.children( '.vignette_big' );
	var vignette_little = ui.draggable.children( '.vignette_lit' );

    if ( vignette.data('hook') ) {
	    vignette.addClass( 'correct' );
	    vignette.css( 'animation', 'blink 1s ease 1' );
	    vignette.position( { of: $(this), my: 'center center', at: 'center-100 top+110' } );
	    vignette.draggable( 'disable' );
	    vignette.draggable( 'option', 'revert', false );
	    $(".vignette").draggable('disable');
	    $(".vignette_lit").css('cursor', 'default');
	    Message();
    	if (Son)
	   		sound_valid.pop();
	    isCorrect = true;
    } else {
		vignette_little.css( 'opacity', '1' );
		vignette_big.css( 'opacity', '0' );
    	if (Son)
	    	sound_invalid.pop();
	}
}

function vignetteBig( event, ui ) {
	var vignette_big = ui.draggable.children( '.vignette_big' );
	var vignette_little = ui.draggable.children( '.vignette_lit' );
	vignette_little.css( 'opacity', '0' );
	vignette_big.css( 'opacity', '1' );
} 	

function vignetteLittle( event, ui ) {
	var vignette_big = ui.draggable.children( '.vignette_big' );
	var vignette_little = ui.draggable.children( '.vignette_lit' );
	vignette_little.css( 'opacity', '1' );
	vignette_big.css( 'opacity', '0' );
} 	

function Message() {
	var name = $(".vignette.correct .vignette_lit").attr('alt');

	if (langue == "fr")
		var message = "Bravo ! Il s'agit de la constellation ";
	else 
		var message = "Bravo ! This is the constellation ";
	
	if (name === "Gémeaux" && langue == "fr") 
		message += "des ";
	else if (name === "Gémeaux" && langue == "en")
		message += "of the ";
	else if (langue == "fr")
		message += "du ";
	else 
		message += "of ";

	if (langue == 'en') {
		switch(name) {
			case "Gémeaux": name = 'Gemini';
			break;
			case "Taureau": name = 'Taurus';
			break;
			case "Verseau": name = 'Aquarius';
			break;
			default: name = 'Unknown';
			break;
		}
	};

	message += name+".";

	$(".bg").remove();
	$(".vignette").not('.vignette.correct').css('opacity','0');
	$(".container-vignettes+.explication h3").text(message);
	$(".atrouver").css('transform','translateY(-15px)');

	if ( name == 'Taureau' || name == 'Taurus') 
		$(".vignette.correct").css('transform','translate(30px, -40px)');
	else if ( name == 'Gémeaux' || name == 'Gemini') {
		$(".vignette.correct").css('transform','translate(5px, -10px)');
	} else
		$(".vignette.correct").css('transform','translateY(-15px)');

}


