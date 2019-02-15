// Pour activer le parallax 
var parallax = new Parallax(document.getElementById("scene"));

/* Pour faire disparaître la page en fade-out au clic sur le lien */
$('a').click(function(e) {
     e.preventDefault();
     newLocation = this.href;
     $('body').fadeOut('slow', newpage);
});
 
function newpage() {
    window.location = newLocation;
}