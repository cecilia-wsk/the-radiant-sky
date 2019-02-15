// Fonction pour animer le menu burger

(function() {

    function Menu( el, options ) {
        this.el = el;
        this.init();
    }

    Menu.prototype.init = function() {
        this.trigger = document.querySelector( '.burger' );
        this.shapeEl = this.el.querySelector( '.morph-shape' );
        this.scene = document.querySelector( '.scene' );

        var s = Snap( this.shapeEl.querySelector( '.menu-line' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            /* dans le html je donne un attribut data avec l'attribut d spécifique 
            au SVG pour changer la forme et permettre l'effet rebond elastique à 
            l'ouverture et fermeture */
            open : this.shapeEl.getAttribute( 'data-morph-open' ),
            close : this.shapeEl.getAttribute( 'data-morph-close' )
        };

        this.isOpen = false;

        this.initEvents();
    };

    Menu.prototype.initEvents = function() {
    	var self = this;

        // Ouvrir le menu
        this.trigger.addEventListener( 'click', function() {
        	self.openMenu();
        });

        

    };

    Menu.prototype.openMenu = function() {
        var self = this;
   	
    	$(".action-close").css("visibility","hidden");
        $(".action-games").css("visibility", "hidden");
        $(".container-games").css("z-index","-5");
        $(".container-burger").css("z-index","-5");
        $(".burger").css('visibility','hidden');
        $(".menu").css('z-index','5');
        classie.add( this.el, 'menu-anim' );
        setTimeout( function() { classie.add( self.el, 'menu-open' ); }, 250 );

        this.pathEl.stop().animate( { 'path' : this.paths.open }, 350, mina.easeout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
        });

         this.isOpen = !this.isOpen;

         // Fermer le menu 
        this.scene.addEventListener( 'mouseenter', function() {
            self.closeMenu();
        });

    };

    Menu.prototype.closeMenu = function() { 
    	var self = this;

        classie.remove( self.el, 'menu-anim' );
        
        setTimeout( function() { classie.remove( self.el, 'menu-open' ); }, 250 ); 
        
        $(".burger").css('visibility','visible');
        $(".container-burger").css("z-index","10");
        $(".action-games").css("visibility","visible"); 
        $(".container-games").css("z-index","10");

        /* Je vérifie l'url pour ne lancer le code que lorsque l'on est sur la page carousel */ 
        if ( window.location.href.indexOf("carousel") > -1 ) {
            this.slide = document.querySelector( '.slide-current');
            if (  !this.slide.classList.contains('slide-open') ) 
                $(".action-close").css("visibility","hidden");
            else 
                $(".action-close").css("visibility"," visible");
        }

        this.pathEl.stop().animate( { 'path' : this.paths.close }, 350, mina.easeout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic, function() {
                $(".menu").css('z-index','0');
            }); 
        });


        this.isOpen = false;

    };

    new Menu( document.getElementsByClassName( 'menu' )[0] );

})();


// On sauvegarde dans la session la variable son pour gérer l'audio
if (sessionStorage.getItem('sound'))
    var Son = sessionStorage.getItem('sound');
else
    Son = true;


$( document ).ready(function() {
    if (!Son) {
        $(".menu-link-sound").addClass("is-mute");
        sessionStorage.setItem('sound', false);
    } else {
        $(".menu-link-sound").removeClass("is-mute");
        sessionStorage.setItem('sound', true);
    }
});

$(".menu-link-sound").click(function() {

    if ( $(this).hasClass("is-mute") ) {
        $(this).removeClass("is-mute");
        sessionStorage.setItem('sound', true);
    } else {
        $(this).addClass("is-mute");
        sessionStorage.setItem('sound', false);
    }

});
