/* pour le son */
var Sound = function(name) {
    try {
        var result;
        var t = this;
        var context = new( window.AudioContext);
     
        var request = new XMLHttpRequest;
        request.open("GET", "audio/"+name+".mp3", true);
      
        request.responseType = "arraybuffer";
     
        request.onload = function() {
            context.decodeAudioData(request.response, function(subKey) {
                result = subKey;
            });
        };
        request.send();
     
        this.pop = function() {
            if (result) {
                var node = context.createBufferSource();
               
                node.playbackRate.value = Math.pow(Math.random(), 2) * 0.5 + 0.5;
                node.buffer = result;
                node.connect(context.destination);
                node.start(0);
            }
        };
    } catch (i) {
        this.pop = function() {};
    }
};

var DOT = DOT || {};

DOT.core = function() {

    // Pour que la hauteur et largeur du document soient identiques selon les navigateurs utilisés 
    var bodyEl = document.body,
    docElem = window.document.documentElement,
    // http://stackoverflow.com/a/1147768 
    docWidth = Math.max(bodyEl.scrollWidth, bodyEl.offsetWidth, docElem.clientWidth, docElem.scrollWidth, docElem.offsetWidth),
    docHeight = Math.max(bodyEl.scrollHeight, bodyEl.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

    var body = $("body");
    var html = $("html");
    // la variable name est donnée dans coords.php pour être dynamique 
    var value = document.getElementById(name);
    var item = Raphael(value, docWidth, docHeight + 300);
    var spring = 0.4;
    var friction = 0.9;
    var interval = null;
    var current = 0;
    var target = 0;
    var sound = new Sound("pop");
    var sound_valid = new Sound("valid");

    var init = function(selector) {
        switch(selector) {
            // Le jeu est en cours 
            case 0 :
                // J'enlève les points et tracés à remplir par l'utilisateur
                // Les variables max et name sont données dans le coords.php pour être dynamique 
                for (var i=1; i < max; i++) {
                    $("#"+name+" circle:nth-of-type("+i+")").css("display", "none");  
                    $("#"+name+" line:nth-of-type("+i+")").css("display", "none"); 
                }
                start(selector);
                break;   
            // Le jeu est gagné  
            case 1 :
                if (langue == 'fr') {
                    switch(name) { 
                        case "gemini" : name = 'Gémeaux';
                        break;
                        case "taurus" : name = 'Taureau';
                        break;
                        case "aquarius" : name = 'Verseau';
                        break;
                    }
                }

                if( langue == 'fr')
                    $(".slide:nth-of-type(1) .explication h3").text( "Bien joué ! Il s'agit de la constellation du "+name+"." );
                else 
                    $(".slide:nth-of-type(1) .explication h3").text( "Well done ! this is the constellation of "+name.charAt(0).toUpperCase()+name.slice(1)+"." );
                
                $(".container-dessin").css('opacity', '1');
                $(".constellation").css('opacity', '.6');
                if (Son)
                    sound_valid.pop();
                break;
            default : 
                $( ".slide:nth-of-type(1) .explication" ).append( "<div class='info'><h3>Désolé le jeu selectionné n'est pas disponible.</h3></div>" );
                break;

        }

    };

    var start = function(event) {
        // coords des circles
        var obj = [];
        // coords des numéros correspondants 
        var num = [];
        // tableaux objets des points reliés 
        var list = [];
        // coords des points initiaux 
        // var data = [ le tableau data est donné dans coords.php pour être dynamique ];

        // Pour créer les points : circles svg // à relier 
        var create_points = function() {

            for (var x = 0; x < data[event].length; x += 2) {
                // On crée les circles dans le DOM
                var elems = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                elems.setAttribute("class", "dot");
                elems.setAttribute("style", "position: absolute");
                elems.setAttribute("cx", data[event][x]);
                elems.setAttribute("cy", data[event][x + 1]);
                if (obj.length == 1 || obj.length == 4 || obj.length == 7)
                    elems.setAttribute("r", 6.5);
                else
                    elems.setAttribute("r", 8);
                elems.setAttribute("fill", "#f5f5f5");
                value.appendChild(elems);
                obj.push(elems);

                // On crée les text (les numéros correspondants aux points à relier) dans le DOM
                var clone = document.createElementNS("http://www.w3.org/2000/svg", "text");
                clone.setAttribute("class", "parseInt");
                clone.setAttribute("style", "position: absolute");
                if ( obj.length == 6 || obj.length == 2 ) 
                    clone.setAttribute("x", (data[event][x])+20);
                else if ( obj.length == 5 ) 
                    clone.setAttribute("x", (data[event][x])+10);
                else
                    clone.setAttribute("x", (data[event][x])-30);
                clone.setAttribute("y", (data[event][x + 1])-5);
                clone.setAttribute("fill", "#f5f5f5");
                clone.textContent = obj.length;
                value.appendChild(clone);
                num.push(clone);

                };
                
            bind();

        };

        /* Pour créer le path ligne -> l'effet elastique se fait en posant 
        en modifiant la vitesse des trois points de contrôle du path */
        var bind = function() {

            var draw = function(x, y, x1, y1, x_end, y_end, color) {
                var config = {
                    path: [
                        ["M", x, y],
                        ["Q", x1, y1, x_end, y_end]
                    ],
                    curve: item.path(this.path).attr({
                        stroke: color,
                        "stroke-width": 7,
                        "stroke-linecap": "round"
                    }),
                    controls: item.set(item.circle(x, y, 5).attr({
                        fill: "none",
                        stroke: "none"
                    }), item.circle(x1, y1, 5).attr({
                        fill: "none",
                        stroke: "none"
                    }), item.circle(x_end, y_end, 5).attr({
                        fill: "none",
                        stroke: "none"
                    })),
                    elastic: {
                        currentX: x,
                        currentY: y,
                        targetX: x,
                        targetY: y,
                        friction: 0,
                        spring: 0
                    },
                    startDot: null,
                    endDot: null,
                    correct: false,
                    loop: null
                };
                return config;
            };

            /* replay = permet de savoir si l'utilisateur a déjà commencé à créer une ligne ou non
               from = point de départ 
               to = point d'arrivé   */
            var start = function(replay, from, to) {

                var i = list.length - 1;
                $(obj).off("mouseover");
                body.off();
                $(document).off();

                if (replay === true) {
                    var player = list[i];
                    var x = parseInt($(obj[to]).attr("cx"));
                    var y = parseInt($(obj[to]).attr("cy"));
                    player.controls[2].attr({
                        cx: x,
                        cy: y
                    });
                    player.path[1][3] = x;
                    player.path[1][4] = y;
                    player.elastic.targetX = player.controls[0].attr("cx") + (x - player.controls[0].attr("cx")) * 1 / 2;
                    player.elastic.targetY = player.controls[0].attr("cy") + (y - player.controls[0].attr("cy")) * 1 / 2;
                    var loop = list[i].loop;

                    window.setTimeout(function() {
                        window.clearInterval(loop);
                    }, 4000 );
                   
                    player.correct = to - from === 1 || to - from === 1 - obj.length ? true : false;
                        
                    if (list.length === obj.length-1) {
                        var victoire = true;
                        
                        for (var j = 0; j < list.length; j++) {
                            if (!list[j].correct) {
                                victoire = false;
                            }
                        }
                        if (victoire) {
                            reset();
                            return false;
                        }
                    }
                $(obj[to]).trigger("mousedown");
                    
                } else {
                    // reset des éléments si l'utilisateur n'a pas encore commencé à jouer
                    $(obj[from]).attr("class", "dot");
                    $(obj[from]).attr("fill", "#f5f5f5");
                    $(obj[from]).attr("stroke", "none");
                    window.clearInterval(list[i].loop);
                    list[list.length - 1].curve.remove();
                    list[list.length - 1].controls.remove();
                    list.splice(list.length - 1, 1);
                }
            };
                
            /* retour utilisateur sur les points reliés : coloration du point en jaune et son pop */
            $(obj).each( function(dataAndEvents, el) { 
                $(el).on("mousedown", function(event) {
                    $(el).attr("class", "dot full");
                    $(el).attr("fill", "#EBD302");
                    $(el).attr("stroke", "#f5f5f5");
                    if (Son)
                        sound.pop();
                    
                    var i = -1;
                    
                    for (var p = 0; p < list.length; p++) {
                        if (list[p].startDot === obj.indexOf(this)) {
                            i = p;
                        }
                    }
                    if (i >= 0) {
                        if (list[i].loop) {
                            window.clearInterval(list[i].loop);
                        }
                        list[i].curve.remove();
                        list[i].controls.remove();
                        list.splice(i, 1);
                    }

                    list.push(draw( parseInt($(el).attr("cx")), parseInt($(el).attr("cy")), event.pageX, event.pageY, event.pageX, event.pageY, "rgba(255, 255, 255, 0.8)"));

                    var options = list[list.length - 1];
                    options.startDot = obj.indexOf(this);

                    // Pour le que la ligne svg "en création" s'adapte bien à la viewbox des 
                    // constellations svg --> on crée un point SVG comme repère 
                    var pt = value.createSVGPoint();

                    // on récupère ses coords dans l'espace SVG 
                    function cursorPoint(evt){
                      pt.x = evt.clientX; 
                      pt.y = evt.clientY;
                      return pt.matrixTransform(value.getScreenCTM().inverse());
                    }

                    body.on('mousemove',function(evt){
                        var loc = cursorPoint(evt);
                        var x = loc.x; 
                        var y = loc.y;
                        options.controls[2].attr({
                            cx: x,
                            cy: y 
                        });

                        options.path[1][3] = x; 
                        options.path[1][4] = y; 
                        options.elastic.targetX =  options.controls[0].attr("cx") + (x - options.controls[0].attr("cx")) * 1/2 ;
                        options.elastic.targetY =  options.controls[0].attr("cy") + (y - options.controls[0].attr("cy")) * 1/2 ;

                        if (!options.loop) {
                            options.loop = window.setInterval(function() {
                                var session = options.elastic;
                                session.friction += (session.targetX - session.currentX) * spring;
                                session.currentX += session.friction *= friction;
                                session.spring += (session.targetY - session.currentY) * spring;
                                session.currentY += session.spring *= friction;
                                options.controls[1].attr({
                                    cx: session.currentX,
                                    cy: session.currentY
                                });
                                options.path[1][1] = session.currentX;
                                options.path[1][2] = session.currentY;
                                options.curve.attr({
                                    path: options.path
                                });
                            }, 1E3 / 30);
                        }
                    });
                    $(obj).on("mouseover", function() {
                        if (obj.indexOf(el) !== obj.indexOf(this)) {
                            start(true, obj.indexOf(el), obj.indexOf(this));
                        }
                    });
                    body.on("mouseup", function() {
                        start(false, obj.indexOf(el));
                    });
                    $(document).on("mouseout", function(e) {
                        e = e ? e : window.event;
                        var relatedTarget = e.relatedTarget || e.toElement;
                        if (!relatedTarget || relatedTarget.nodeName == "HTML") {
                            start(false, obj.indexOf(el));
                        }
                    });
                });
            });

        };
        
        var reset = function() {
            if (Son)
                sound.pop();
            if (interval || event === 0) {
                if (event === 0) {
                    init(event + 1);
                } else {
                    window.clearInterval(interval);
                    interval = null;
                }
            }
        };
        create_points();
    };
    
    return {
        
        init: function() {
            init(0);
            $(document).on("touchmove", function(types) {
                types.preventDefault();
            });
        }
    };
    
}();

// Pour activer la fonction du jeu dot to dot 
$(document).ready( function() { 
    DOT.core.init();
}); 
