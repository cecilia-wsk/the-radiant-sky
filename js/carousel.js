var scene_Elt = document.getElementById("scene");

// J'appelle la fonction parallax de la librairie parallax.js pour créer l'effet sur ma page carousel 
var parallax = new Parallax(scene_Elt);

// Pour l'animation de l'icone pour changer les cultures
$(".change-legend").mouseenter(function() {
    $("#change-icon path").attr("d", "M20,0C8.972,0,0,8.972,0,20c0,11.027,8.972,20,20,20c11.027,0,20-8.972,20-20S31.027,0,20,0z M20,38.711c-8.097,0-15.007-5.172-17.606-12.385l27.804,0.043l-3.908,3.908l0.982,0.981l5.58-5.581l-5.679-5.677l-0.981,0.981l3.998,3.999L1.956,24.938C1.525,23.364,1.29,21.71,1.29,20.001C1.29,9.685,9.683,1.292,20,1.292c8.097,0,15.008,5.171,17.606,12.384L8.912,13.634l3.908-3.908l-0.982-0.982l-5.581,5.581l5.678,5.677l0.982-0.981l-3.999-3.999l29.124,0.044c0.432,1.574,0.666,3.229,0.666,4.938C38.71,30.316,30.316,38.711,20,38.711z");
});

$(".change-legend").mouseleave(function() {
    $("#change-icon path").attr("d", "M20,0C8.972,0,0,8.972,0,20c0,11.027,8.972,20,20,20c11.027,0,20-8.972,20-20S31.027,0,20,0z M20,38.711c-8.097,0-15.007-5.172-17.606-12.385l21.804,0.043l-3.908,3.908l0.982,0.981l5.58-5.581l-5.679-5.677l-0.981,0.981l3.998,3.999L1.956,24.938C1.525,23.364,1.29,21.71,1.29,20.001C1.29,9.685,9.683,1.292,20,1.292c8.097,0,15.008,5.171,17.606,12.384l-21.694-0.042l3.908-3.908l-0.982-0.982l-5.581,5.581l5.678,5.677l0.982-0.981l-3.999-3.999l22.124,0.044c0.432,1.574,0.666,3.229,0.666,4.938C38.71,30.316,30.316,38.711,20,38.711z");
});

/* Pour faire disparaître la page en fade-out au clic sur le lien */
$('a').click(function(e) {
    // on empêche le rechargement de page et on stocke le lien dans this.ref 
    e.preventDefault();
    newLocation = this.href;
    // on effectue le fade out puis on appelle la fonction newpage qui redirige vers la page voulue 
    $('body').fadeOut('slow', newpage);
});
 
function newpage() {
    window.location = newLocation;
}

/** Pour afficher et cacher les explications de navigation **/
/** Pour n'afficher les explications que lors de la première visite de l'utilisateur **/
if (! sessionStorage.getItem('noFirstVisit')) {
    
    explication1();
    explication2();

    sessionStorage.setItem('noFirstVisit', true)
    // sessionStorage.clear();

};



function explication1() {

    setTimeout(function () {
        if( langue == 'en') {
            $(".explication-1").attr("src", "images/explication1-en.png");
            $(".explication-1").css("opacity", "1");
        } else 
            $(".explication-1").css("opacity", "1");
    }, 2000);


    setTimeout(function () {
        $(".explication-1").css("opacity", "0");
    }, 7000); 

};

function explication2() { 

    setTimeout(function () {
        if( langue == 'en') {
            $(".explication-2").attr("src", "images/explication2-en.png");
            $(".explication-2").css("opacity", "1");
        } else 
            $(".explication-2").css("opacity", "1");
    }, 8000);

    setTimeout(function () {
        $(".explication-2").css("opacity", "0");
    }, 13000);

};

function explication3() {

    if (langue == 'en') {
        $(".explication-3 p").html("Click here to <br/> change the culture &nbsp;&nbsp;&#8594;");
        $(".explication-3").css("opacity", "1");
    } else 
        $(".explication-3").css("opacity", "1");

    setTimeout(function () {
        $(".explication-3").css("opacity", "0");
    }, 2500);

};

// Début de la fonction pour animer le carousel

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
        this.itemsTitles = [];
        // Dessins
        this.dessins = [].slice.call(this.el.querySelectorAll('.dessin'));

        // Pour gérer la légende grecque par défault
        for(var i=0; i < this.titlesConstellations.length; i++) {
            this.itemsTitles.push(document.getElementsByClassName("title")[i].textContent);
        }

        // Index du slide courant
        this.current = 0;

        this.name = this.items[Math.floor((Math.random() * this.items.length) + 0)].querySelector('.svg').getAttribute("id");

        // Pour lancer un jeu random 
        document.getElementById('game_link').href = "index.php?menu=games&constellation="+this.name;

        // Index du switch legende
        this.indice = 0;

        // Au début la légende grecque est par défaut
        this.legendChanged = [];
        for (var i=0; i<this.itemsTitles.length; i++) {
            this.legendChanged[this.itemsTitles[i]] = false;
        }
        
        // Pour gérer le curseur 
        this.isFocused = null;

        // Pour cacher la flèche precedent au début
        if (this.current == 0 ) {
            $(".nav-prev").css('opacity','0');
        }

        // Tous les objets sont fermés au début
        this.isClosed = true;

        this._init();
    }

    Carousel.prototype.options = {};

    Carousel.prototype._init = function() {

        // Navigation
        this.navLeftCtrl = $(".nav-prev");
        this.navRightCtrl = $(".nav-next");
        this.openCtrl = $(".action-open, .svg");
        this.closeCtrl = $(".action-close");
        this.changeLgd = $(".change-legend");

        /* Position image courante -> j'utilise la librairie classie pour faciliter 
        l'ajout et suppression de class à l'objet courant */
        classie.add(this.items[this.current], 'slide-current');
        classie.add(this.titlesConstellations[this.current], 'title-current');

        // Si la légende est par défaut :
        if ( !this.legendChanged[this.itemsTitles[this.current]] ) {
        // J'ajoute la classe current au dessin initial
            for(var i=0; i< this.dessins.length; i += 2) {
                classie.add(this.dessins[i], 'dessin-current');
                }
            }

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

        // Pour ouvrir la fenêtre explicative
        this.openCtrl.click( function(ev) {
                if (self.isExpanded) return;
                self._openContent(self.items[self.current]);
        });

        // Pour fermer la fenêtre explicative
        this.closeCtrl.click( function() {
            self._closeContent();
        });

        // Pour changer de légendes 
        this.changeLgd.click( function(ev) {
                self._changeLegend(self.items[self.current]);
            });

        // Pour la navigation via les touches directionnelles du clavier 
        document.addEventListener('keydown', function(ev) {
            var keyCode = ev.keyCode || ev.which;
            switch (keyCode) {
                case 39: // right
                    if (self.isExpanded)
                        self._changeLegend(self.items[self.current]);
        			else
                        self._navigate('right');
        		    break;	
                case 37: // left
                    if (self.isExpanded)
                        self._changeLegend(self.items[self.current]);
                    else
            	        self._navigate('left');
                    break;
                case 13: // enter
                    if (self.isExpanded) return;
                    self._openContent(self.items[self.current]);
                    break;
                case 27: // esc
                    if (self.isClosed) return;
                    self._closeContent();
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
            currentEl = itemCurrent.querySelector('.slide-image'),
            dessinEl = itemCurrent.querySelector('.dessin'),
            currentTitleEl = this.titlesConstellations[this.current];

        /* Actualiser l'objet courant et arrêter la fonction si l'on arrive 
        au début ou à la fin du carousel */
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

        // Pour lancer un jeu random 
        this.name = this.items[Math.floor((Math.random() * this.items.length) + 0)].querySelector('.svg').getAttribute("id");
        // Pour donner l'info de la constellation au lien des jeux
        document.getElementById('game_link').href = "index.php?menu=games&constellation="+this.name;
        
        var itemNext = this.items[this.current],
            nextEl = itemNext.querySelector('.slide-image'),
            nextTitleEl = this.titlesConstellations[this.current];

        // Pour masquer la flèche previous quand on arrive au premier item
        this.current != 0 ? this.navLeftCtrl.css('opacity','1') : this.navLeftCtrl.css('opacity', '0');

        // Pour masquer la flèche next quand on arrive au dernier item
        this.current == this.itemsTotal-1 ? this.navRightCtrl.css('opacity','0') : this.navRightCtrl.css('opacity','1');
       
        // Pour gérer le déplacement des indicateurs du curseur : 3 possibilités ->
        if (this.isFocused == 1) {
            if (dir === 'right') {
                $("#indic-0").css("transform","translate(-230px,82px)");
                $("#indic-1").css("transform","translate(-260px,0px)");
                $("#indic-1").attr("r", 5); 
                $("#indic-2").css("transform","translate(-230px,-82px)");  
                $("#indic-2").attr("r", 7); 
                this.isFocused = 2;
            } else if (dir === 'left') {
                $("#indic-0").css("transform","translate(0px,0px)");
                $("#indic-0").attr("r", 7); 
                $("#indic-1").css("transform","translate(0px,0px)");
                $("#indic-1").attr("r", 5); 
                $("#indic-2").css("transform","translate(0px,0px)");
                this.isFocused = null;
            }
        }

        if (this.isFocused == 2 && dir === 'left') {
            $("#indic-0").css("transform","translate(-130px,26px)");
            $("#indic-1").css("transform","translate(-130px,-26px)");
            $("#indic-1").attr("r", 7); 
            $("#indic-2").css("transform","translate(-100px,-56px)");  
            $("#indic-2").attr("r", 5); 
            this.isFocused = 1;
        } 

        if (this.isFocused == null && dir === 'right') {
            $("#indic-0").css("transform","translate(-130px,26px)");
            $("#indic-0").attr("r", 5); 
            $("#indic-1").css("transform","translate(-130px,-26px)");
            $("#indic-1").attr("r", 7); 
            $("#indic-2").css("transform","translate(-100px,-56px)");  
            this.isFocused = 1;
        }

        // Faire bouger l'objet courant hors de la page 
        dynamics.animate(currentEl, {
            translateX: dir === 'right' ? -1.5 * currentEl.offsetWidth : currentEl.offsetWidth,
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

        // Pour actualiser le slide
        self.items.forEach(function(item) {
            classie.remove(item, 'slide-current');
        });
        classie.add(itemNext, 'slide-current');
        // Pour les titres de constellations
        classie.remove(currentTitleEl, 'title-current');   
        classie.add(nextTitleEl, 'title-current');         

        // Propriétés pour l'objet arrivant 
        dynamics.css(itemNext, {
            visibility: 'visible',
        });
        dynamics.css(nextEl, {
            translateX: dir === 'right' ? nextEl.offsetWidth : -1.5 * nextEl.offsetWidth,
        });

        // Animation pour l'objet arrivant
        dynamics.animate(nextEl, {
            translateX: 0,
        }, {
            type: dynamics.spring,
            duration: 4000,
            friction: 600,
            frequency: 300,
        });
    };

    // Pour ouvrir les explications 
    Carousel.prototype._openContent = function(item) {
        this.isExpanded = true;
        this.isClosed = false;
        this.expandedItem = item;

        var self = this,
            bgEl = item.querySelector('.to_expend'),
            eyeEl = document.querySelector('.action-open'),
            closeEl = document.querySelector('.action-close'),
            navEl = document.querySelector('.nav-under'),
            cursorEl = document.querySelector('.cursor'),
            dessinEl = item.querySelectorAll('.dessin'),
            SVGEl = item.querySelector('.svg'),
            contentEl = item.querySelector('.slide-content'),
            title_mainEl = contentEl.querySelector('.title-main'),
            explicationEl = contentEl.querySelector('.explication'),
            title_legendeEl = contentEl.querySelectorAll('.title-legende'),
            legendeEl = contentEl.querySelectorAll('.content-legende');

        // Ajout de la classe "slide-open" à l'objet courant
        classie.add(item, 'slide-open');

        // Si la légende est par défaut :
        if ( !this.legendChanged[this.itemsTitles[this.current]] ) {
        // J'ajoute la classe current à la culture initiale
        classie.add(contentEl.querySelector('.title-legende'), 'culture-current');
        // J'ajoute la classe current à la légende initiale
        classie.add(contentEl.querySelector('.content-legende'), 'legende-current');
        }

        // Pour que le slide-content prenne bien toute la hauteur du document 
        dynamics.css(contentEl, {
            height: docHeight
        });

        // Position des éléments contenus :

        // - title_main
        dynamics.css(title_mainEl, {
            translateY: 600,
            opacity: 0
        });
        // - explication
        dynamics.css(explicationEl, {
            translateY: 400,
            opacity: 0
        });
        // - title_legende
        dynamics.css(title_legendeEl, {
            translateY: 400,
            opacity: 0
        });
        // - legende
        dynamics.css(legendeEl, {
            translateY: 400,
            opacity: 0
        });

        // Animer l'oeil pour le faire sortir de l'écran
        dynamics.animate(eyeEl, {
            translateY: docHeight / 2 ,
            opacity: 0
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 1000,
            delay: 100
        });

        // Animer la navigation pour la faire sortir de l'écran
        dynamics.animate(navEl, {
            translateY: docHeight / 2 ,
            opacity: 0
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 1000,
            delay: 300
        });

        // Animer le curseur pour le faire sortir de l'écran
        dynamics.animate(cursorEl, {
            translateY: docHeight / 2 ,
            opacity: 0
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 1000,
            delay: 300
        });

      
        // Animer le cercle qui s'agrandit et devient le background de droite
        // Je modifie ici ces attributs plutôt que de passer par le CSS car sinon
        // mozilla ne prends pas en compte les modifs
        $('.to_expend').attr("cx", -200);
        $('.to_expend').attr("cy", docHeight/3.5);

        $('.to_expend').css({
        // cx : - docWidth/12,
        // cy : docHeight/3.5,
        transition : 'all 1s ease'
        });

        $('.cercle_svg').css({
            width : 3*docWidth, 
            height : 3*docHeight, 
            transition : 'all 1s ease',
        });

        dynamics.animate(bgEl, {
            opacity: 1
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 500,
            delay: 200
        });

        // Faire apparaître l'icone pour fermer les explications
        $(".action-close").css("visibility","visible");
        // Déplacer l'icone des jeux 
        $(".container-games").css("top", "103px");
        $(".container-games").css("right", "70px");
        // Changer la couleur de l'icone des jeux
        $(".action-games").css("border-color", "white");
        $("#games-icon").css("fill", "white");
        // Changer la couleur de l'icone menu burger 
        $(".burger").css("border-color","white");
        $(".burger").addClass('is-white');
        // Changer la couleur interne du menu  
        $("#menu-blop").css("fill","white");
        $("#menu-blop").css("opacity","1");
        // Changer la couleur du texte 
        $("ul[class='menu-links'] a, ul[class='menu-links'] li").css("color","#26368A");
        $("ul[class='menu-links'] li").css("font-weight","bolder");
        $(".menu-link-nav").addClass('is-blue');
        $(".menu-link-lang").addClass('is-blue');
        // Faire apparaître l'icone pour changer de culture
        $(".container-change").css('visibility', 'visible');


        // Animer le dessin de la constellation
        dynamics.animate(dessinEl, {
            translateX: 1/4 * docWidth,
            translateY: 100,
            scale: 1.2
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 1000,
            delay: 100
        });
        
        // Animer le SVG de la constellation
        dynamics.animate(SVGEl, {
            translateX: 1/4 * docWidth,
            translateY: 100
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 1000,
            delay: 200
        });

        // Animer le title_main
        dynamics.animate(title_mainEl, {
            translateY: 0,
            opacity: 1
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 2000,
            delay: 600
        });

        // Animer l'explication 
        dynamics.animate(explicationEl, {
            translateY: 0,
            opacity: 1
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 2000,
            delay: 700
        });

        // Animer le title_legende
        dynamics.animate(title_legendeEl, {
            translateY: 0,
            opacity: 1
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 2000,
            delay: 800
        });

        // Animer le contenu de la légende
        dynamics.animate(legendeEl, {
            translateY: 0,
            opacity: 1
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 2000,
            delay: 1000,
            complete: function() {
                // Pour l'explication changement de culture
                explication3();
                // Pour forcer le réaffichage correct des éléments 
                contentEl.style.display = 'none';
                contentEl.offsetHeight;
                contentEl.style.display = 'block';
            }
        });

    };

    // Pour fermer les explications 
    Carousel.prototype._closeContent = function() {
        this.isClosed = true;

        var self = this,
            item = this.expandedItem,
            bgEl = item.querySelector('.to_expend'),
            eyeEl = document.querySelector('.action-open'),
            navEl = document.querySelector('.nav-under'),
            cursorEl = document.querySelector('.cursor'),
            dessinEl = item.querySelectorAll('.dessin'),
            SVGEl = item.querySelector('.svg'),
            contentEl = item.querySelector('.slide-content'),
            title_mainEl = contentEl.querySelector('.title-main'),
            explicationEl = contentEl.querySelector('.explication'),
            title_legendeEl = contentEl.querySelectorAll('.title-legende'),
            legendeEl = contentEl.querySelectorAll('.content-legende');

        // Ajout de la classe 'slide-close' à l'objet courant
        classie.add(item, 'slide-close');

        // Animer le contenu de la légende hors de l'écran
        dynamics.stop(legendeEl);
        dynamics.animate(legendeEl, {
            translateY: 400,
            opacity: 0
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 2000,
            delay: 100
        });

        // Animer le titre de la légende hors de l'écran
        dynamics.stop(title_legendeEl);
        dynamics.animate(title_legendeEl, {
            translateY: 400,
            opacity: 0
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 2000,
            delay: 200
        });

        // Animer l'explication hors de l'écran
        dynamics.stop(explicationEl);
        dynamics.animate(explicationEl, {
            translateY: 400,
            opacity: 0
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 2000,
            delay: 300
        });

        // Animer le titre principal hors de l'écran
        dynamics.stop(title_mainEl);
        dynamics.animate(title_mainEl, {
            translateY: 600,
            opacity: 0
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 2000,
            delay: 400
        });

        // Animer le SVG pour le remettre à sa place
        dynamics.animate(SVGEl, {
            translateX: 0,
            translateY: 0
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 1000,
            delay: 400
        });

        // Animer le dessin de la constellation pour le remettre à sa place
        dynamics.animate(dessinEl, {
            translateX: 0,
            translateY: 0
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 1000,
            delay: 500
        });

        // Animer le cercle pour le faire rétrécir et retourner à sa place

        $('.to_expend').attr("cx", 493);
        $('.to_expend').attr("cy", 479.167);

        $('.to_expend').css({
        transition : 'all 1s ease',
        });

        $('.cercle_svg').css({
            width :'600px',
            height : '608.3px',
            transition : 'all 1s ease',
        });

        dynamics.animate(bgEl, {
            opacity: 0.8
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 500,
            delay: 800
        });

        // Animer la navigation pour la remettre à sa place
        dynamics.animate(navEl, {
            translateY: 0,
            opacity: 1
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 1000,
            delay: 900
        });

        // Animer le curseur pour le remettre à sa place
        dynamics.animate(cursorEl, {
            translateY: 0,
            opacity: 1
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 1000,
            delay: 900
        });

        // Cacher l'icone close
        $(".action-close").css("visibility","hidden"); 
        // Replacer l'icone des jeux 
        $(".container-games").css("top", "70px");
        $(".container-games").css("right", "102px");
        // Changer la couleur de l'icone des jeux
        $(".action-games").css("border-color", "#333333");
        $("#games-icon").css("fill", "black");
        // Changer de nouveau la couleur de l'icone menu burger
        $(".burger").css("border-color","#333333");
        $(".burger").removeClass('is-white');
        // Changer de nouveau la couleur interne du menu  
        $("#menu-blop").css("fill","#181FA3");
        $("#menu-blop").css("opacity",".7");
        // Changer de nouveau la couleur du texte 
        $("ul[class='menu-links'] a, ul[class='menu-links'] li").css("color","white");
        $("ul[class='menu-links'] li").css("font-weight","bold");
        $(".menu-link-nav").removeClass('is-blue');
        $(".menu-link-lang").removeClass('is-blue');
        // Faire disparaître l'icone pour changer de culture
        $(".container-change").css('visibility', 'hidden');

        // Animer l'oeil pour le remettre à sa place
        dynamics.animate(eyeEl, {
            translateY: 0,
            opacity: 1
        }, {
            type: dynamics.bezier,
            points: [{
                "x": 0,
                "y": 0,
                "cp": [{
                    "x": 0.2,
                    "y": 1
                }]
            }, {
                "x": 1,
                "y": 1,
                "cp": [{
                    "x": 0.3,
                    "y": 1
                }]
            }],
            duration: 1000,
            delay: 1000,
            complete: function() {
                // Enlever la classe 'slide-open' à l'objet courant
                classie.remove(item, 'slide-open');
                // Enlever la classe 'slide-close' à l'objet courant 
                classie.remove(item, 'slide-close');
                self.isExpanded = false;
            }
        });

    };

    // Pour changer la légende
    Carousel.prototype._changeLegend = function(item) {

        this.cultures = [].slice.call(item.querySelectorAll('.title-legende'));
        this.legendes = [].slice.call(item.querySelectorAll('.content-legende'));
        this.dessins = [].slice.call(item.querySelectorAll('.dessin'));
        this.dessinsTotal = this.dessins.length;

        this.legendChanged[this.itemsTitles[this.current]] = true;

        var self = this,
            dessinCurrent = this.dessins[this.indice],
            cultureCurrent = this.cultures[this.indice],
            legendeCurrent = this.legendes[this.indice];
            // J'enlève la classe current à la légende affiché 
            classie.remove(dessinCurrent, 'dessin-current');
            classie.remove(cultureCurrent, 'culture-current');
            classie.remove(legendeCurrent, 'legende-current');

        //  Actualiser l'indice des éléments courant et retourner au premier dessin quand on arrive à la fin
        if ( this.indice < this.dessinsTotal - 1 )
            this.indice++;
        else
            this.indice = 0;
      
        var dessinNext = this.dessins[this.indice],
            cultureNext = this.cultures[this.indice],
            legendeNext = this.legendes[this.indice];

            // J'ajoute la classe current à la prochaine légende 
            classie.add(dessinNext, 'dessin-current');
            classie.add(cultureNext, 'culture-current');
            classie.add(legendeNext, 'legende-current');

    };

    window.Carousel = Carousel;

})(window);


// Fonction pour activer le carousel
(function() {
        document.documentElement.className = 'js';
        var slide = new Carousel(scene_Elt);
    })();
