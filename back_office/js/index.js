scene_Elt = document.getElementById("scene");

// Pour activer le parallax
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

/* Pour le formulaire des langues */

$(".langue").mouseover(function() {
    $(".langue input").css("transform", "translateY(5px)");
});

$(".langue").mouseleave(function() {
    $(".langue input").css("transform", "translateY(-35px)");
});

// Début de la fonction pour animer le slide des constellations en ligne

(function(window) {

    'use strict';

    // Pour que la hauteur et largeur du document soient identiques selon les navigateurs utilisés 
    var bodyEl = document.body,
        docElem = window.document.documentElement,
        // http://stackoverflow.com/a/1147768 
        docWidth = Math.max(bodyEl.scrollWidth, bodyEl.offsetWidth, docElem.clientWidth, docElem.scrollWidth, docElem.offsetWidth),
        docHeight = Math.max(bodyEl.scrollHeight, bodyEl.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

    // Parcoure la propriété key dans l'objet b et l'étend à l'objet a
    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    // FONCTION du Carousel
    function Carousel(el, options) {
        this.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);

        // Objets
        this.items = [].slice.call(this.el.querySelectorAll('.slide'));
        // Longueur du tableau des éléments de mon slide
        this.itemsTotal = this.items.length;
        if (this.itemsTotal < 2) return;

        // Titres
        this.titlesConstellations = [].slice.call(document.querySelectorAll('.title'));

        // Index du slide courant
        this.current = 0;

        // Pour cacher la flèche precedent au début
        if (this.current == 0 ) 
            $(".nav-prev").css('opacity','0');

        // Tous les objets sont fermés au début
        this.isClosed = true;

        this._init();
    }

    Carousel.prototype.options = {};

    Carousel.prototype._init = function() {
        // Navigation
        this.navLeftCtrl = $(".nav-prev");
        this.navRightCtrl = $(".nav-next");
        this.title = $(".title");

        // Position image courante -> j'utilise la librairie classie pour faciliter l'ajout et suppression de class à l'objet courant
        classie.add(this.items[this.current], 'slide-current');
        // Pour le titre
        classie.add(this.titlesConstellations[this.current], 'title-current');
        
        this._initEvents();
    }

    // Initialisations des évènements 
    Carousel.prototype._initEvents = function() {
        var self = this;

        // Navigation
        this.navRightCtrl.click( function() {
            self._navigate('right');
        });
        this.navLeftCtrl.click( function() {
            self._navigate('left');
        });

        // Pour la navigation via les touches directionnelles du clavier 
        document.addEventListener('keydown', function(ev) {
            var keyCode = ev.keyCode || ev.which;
            switch (keyCode) {
                case 39: // right
        			self._navigate('right');
        		    break;	
                case 37: // left
            	 	self._navigate('left');
                    break;
            }
        });

    	// Pour la navigation avec smartphones et tablets : swipe 
        // http://stackoverflow.com/a/23230280
        this.el.addEventListener('touchstart', handleTouchStart, false);
        this.el.addEventListener('touchmove', handleTouchMove, false);
        var xDown = null;
        var yDown = null;

        function handleTouchStart(evt) {
            xDown = evt.touches[0].clientX;
            yDown = evt.touches[0].clientY;
        };

        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }

            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) { 
                if (xDiff > 0) {
                    /* swipe gauche */
                    if (!self.isExpanded) {
                        self._navigate('right');
                    }
                } else {
                    /* swipe droit */
                    if (!self.isExpanded) {
                        self._navigate('left');
                    }
                }
            }
            /* reset des valeurs */
            xDown = null;
            yDown = null;
        };

    };

    // Activer le carousel 
    Carousel.prototype._navigate = function(dir) {
        if (this.isExpanded) {
            return false;
        }

        var self = this,
            itemCurrent = this.items[this.current],
            currentTitleEl = this.titlesConstellations[this.current];

        // Actualiser l'objet courant et arrêter la fonction si l'on arrive au début ou à la fin du carousel
        if (dir === 'right') {
            if (this.current < this.itemsTotal - 1)
                this.current++;
            else
                return;
        } else {
            if (this.current > 0)
                this.current--;
            else
                return;
        }

        var itemNext = this.items[this.current],
            nextTitleEl = this.titlesConstellations[this.current];

        // Pour masquer la flèche previous quand on arrive au premier item
        this.current != 0 ? this.navLeftCtrl.css('opacity','1') : this.navLeftCtrl.css('opacity', '0');

        // Pour masquer la flèche next quand on arrive au dernier item
        this.current == this.itemsTotal-1 ? this.navRightCtrl.css('opacity','0') : this.navRightCtrl.css('opacity','1');

        // Faire bouger l'objet courant hors de la page 
        dynamics.animate(itemCurrent, {
            translateX: dir === 'right' ? -1.5 * itemCurrent.offsetWidth : itemCurrent.offsetWidth,
        }, {
            type: dynamics.spring,
            duration: 4000,
            friction: 200,
            complete: function() {
                dynamics.css(itemCurrent, {
                    visibility: 'hidden'
                });
            }
        });            

        // Propriétés pour l'objet arrivant 
        dynamics.css(itemNext, {
            visibility: 'visible',
        });
        dynamics.css(itemNext, {
            translateX: dir === 'right' ? itemNext.offsetWidth : -1.5 * itemNext.offsetWidth,
        });
        
        // Pour les titres
		classie.remove(currentTitleEl, 'title-current');  
		classie.add(nextTitleEl, 'title-current');   

        // Animation pour l'objet arrivant
        dynamics.animate(itemNext, {
            translateX: 0,
        }, {
            type: dynamics.spring,
            duration: 4000,
            friction: 600,
            frequency: 300,
            complete: function() {
                self.items.forEach(function(item) {
                    classie.remove(item, 'slide-current');
                });
                classie.add(itemNext, 'slide-current');
            }
        });
    };

    window.Carousel = Carousel;

})(window);


// Fonction pour activer le slide
(function() {
        document.documentElement.className = 'js';
        var slide = new Carousel(scene_Elt);
    })();