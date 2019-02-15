<?php

// La librairie de gestion de template PHP Lib
require_once '../assets/PHPLIB.php';

// La connexion à la BDD se fait dans header.php
$sql_images = "SELECT * FROM `carousel` 
	INNER JOIN `culture_".$culture."` ON `id_carousel` = `".$culture."_carousel` ";
	$reponse = $connexion->requete($sql_images);
	$tableau_constellations = $connexion->retourne_tableau();

$sql_title = "SELECT * FROM `carousel_trad`
			WHERE `langue` = '$langue_bg' ";
	$reponse = $connexion->requete($sql_title);
	$tableau_title = $connexion->retourne_tableau();

//On crée une instance de template

$constellations_template = new HTML_Template_PHPLIB(dirname(__FILE__),'keep');

//On associe à l'instance le fichier de définition du template

$constellations_template->setFile('signe', 'constellations.html');

//On explique à l'instance comment repérer un bloc particulier dans la définition du template

$constellations_template->setBlock('signe', 'slide','slide_ref');
$constellations_template->setBlock('signe', 'title', 'title_ref');

//On remplit les lignes du bloc
foreach($tableau_constellations as $signe) {

	$svg = simplexml_load_file("../svg/".$signe['nom_svg'].".svg");
	//En initialisant ligne par ligne avec les valeurs voulues
	$constellations_template->setVar('NAME', $signe['nom_svg'] );
	$constellations_template->setVar('CULTURE', $culture );
	$constellations_template->setVar('IMAGE_CULTURE', "../".$signe['lien_image_'.$culture.'']);
	$constellations_template->setVar('ALT_CULTURE', $signe['alt_'.$culture.'']);
	$constellations_template->setVar('SVG', $svg->asXML() );

//Et en expliquant que l'on se replace en début du bloc défini précédemment
	$constellations_template->parse('slide_ref', 'slide', true);

}

// Pour les titres des constellations
foreach ($tableau_title as $title) {
	$constellations_template->setVar('TITLE', $title['titre_constellation']);

//Et en expliquant que l'on se replace en début du bloc défini précédemment
	$constellations_template->parse('title_ref', 'title', true);
}

echo $constellations_template->finish($constellations_template->parse('OUT', 'signe'));


?>

