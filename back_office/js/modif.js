var textarea_Elts = document.getElementsByTagName("textarea");

// Pour adapter la taille des input textarea de modif.php en fonction de leur value 
window.onload = function resize_textarea() {
    for (var i = 0; i < textarea_Elts.length; i++) {
        textarea_Elts[i].style.height = textarea_Elts[i].value.length / 4 + "px";
    }
}
