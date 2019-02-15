var scene_Elt = document.getElementById("scene");

// J'appelle la fonction parallax de la librairie parallax.js pour créer l'effet sur ma page home 

var parallax = new Parallax(scene_Elt);

/* Pour faire disparaître la page en fade-out au clic sur le lien */

$('a').click(function(e) {
	 e.preventDefault();
	 newLocation = this.href;
	 $('body').fadeOut('slow', newpage);
});
 
function newpage() {
	window.location = newLocation;
}
