<?php 
	include "assets/session.php";
	include "assets/BDD.php";
	$connexion = New BDD();

	// La constellation donné dans l'URL
	$constellation = $_GET['constellation'];
	// Pour aller chercher la variable max
    $sql = "SELECT * FROM `jeu_dot` WHERE `nom_constellation` = '$constellation' ";

    $reponse = $connexion->requete($sql);
    $ligne = $connexion->retourne_ligne();
    $max = $ligne['max'];

	$constellations = [
		['name'=>$constellation, 'max'=>$max],
]; ?>

var data = [ 
<?php
/* Pour aller chercher dans le fichier svg les points cx et cy 
et les insérer dans le tableau data que récupèrera dots.js  */
foreach($constellations as $c) {
	$xml_svg = simplexml_load_file('svg/'.$c['name'].'.svg');
	$max = $c['max'];
	$point = 1;
	echo '[';
	foreach ($xml_svg->g[1]	->children() as $circle) {
		if ($point <= $max) {
			echo round($circle['cx']).', '.round($circle['cy']).",";
		}	
		$point++;
	}
	echo "],\n";
}
?>
];	

var max = <?php echo $c['max']; ?>;

var name = <?php echo "'".$c['name']."'"; ?>;