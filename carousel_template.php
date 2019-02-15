<?php

// La librairie de gestion de template PHP Lib
require_once 'assets/PHPLIB.php';

// Pour les cercles 
$sql = " SELECT * FROM `circles` ORDER BY `index` ";
$resultat_requete = $connexion->requete($sql);
$tableau_circles = $connexion->retourne_tableau();

// La connexion à la BDD se fait dans index.php
$sql = " SELECT * FROM `carousel` 
INNER JOIN `carousel_trad` ON `id_carousel` = `trad_carousel`
INNER JOIN `culture_grec` ON `grec_carousel` = `id_carousel`
INNER JOIN `culture_grec_trad` ON `id_culture_grec` = `trad_culture_grec`
INNER JOIN `culture_egypte` ON `egypte_carousel` = `id_carousel`
INNER JOIN `culture_egypte_trad` ON `id_culture_egypte` = `trad_culture_egypte`
WHERE `carousel_trad`.`langue` = '$langue' AND `culture_grec_trad`.`langue` = '$langue' AND `culture_egypte_trad`.`langue`='$langue'";
$resultat_requete = $connexion->requete($sql);
$tableau_carousel = $connexion->retourne_tableau();

//On crée une instance de template

$carousel_template = new HTML_Template_PHPLIB(dirname(__FILE__),'keep');

//On associe à l'instance le fichier de définition du template

$carousel_template->setFile('signe', 'carousel.html');

//On explique à l'instance comment repérer un bloc particulier dans la définition du template

$carousel_template->setBlock('signe', 'slide','slide_ref');

//On remplit les lignes du bloc

foreach($tableau_carousel as $signe) {
	//En initialisant ligne par ligne avec les valeurs voulues
	$carousel_template->setVar('CIRCLES', Afficheur::AfficheCircles($tableau_circles, true) );
	$carousel_template->setVar('SVG', Afficheur::AfficheSvg($signe['nom_svg'], true));
	$carousel_template->setVar('TITRE_EXPLICATION', $signe['titre_exp_constellation']);
	$carousel_template->setVar('EXPLICATION', $signe['contenu_explication']);
	
	$carousel_template->setVar('IMAGE_GREC', $signe['lien_image_grec']);
	$carousel_template->setVar('ALT_GREC', $signe['alt_grec']);
	$carousel_template->setVar('TITRE_GRECQUE', $signe['titre_legende_grec']);
	$carousel_template->setVar('LEGENDE_GRECQUE', $signe['contenu_legende_grec']);
	
	$carousel_template->setVar('IMAGE_EGYPTE', $signe['lien_image_egypte']);
	$carousel_template->setVar('ALT_EGYPTE', $signe['alt_egypte']);
	$carousel_template->setVar('TITRE_EGYPTE', $signe['titre_legende_egypte']);
	$carousel_template->setVar('LEGENDE_EGYPTE', $signe['contenu_legende_egypte']);

//Et en expliquant que l'on se replace en début du bloc défini précédemment
	$carousel_template->parse('slide_ref', 'slide', true);

}

echo $carousel_template->finish($carousel_template->parse('OUT', 'signe'));


?>

