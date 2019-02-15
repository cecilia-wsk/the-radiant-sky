<?php 
	include "header.php"; 
?>
	
	<link rel='stylesheet' href='style/modif.css'>

		<title>Back Office</title>
	</head>

	<body class="animate-in">
<?php

	// Le verif LOGIN / MDP
	include "login.php"; 
	$constellation = $_GET['constellation'];
	$culture = $_GET['culture'];
	// Toujours la même table de départ 
	$table = 'carousel';
	$cle_primaire = $connexion->recuperer_cle_primaire( 'carousel' );

?>

	<!-- Bouton retour -->
	<div class="retour">
		<a href="signe.php?constellation=<?php echo $constellation; ?>&amp;culture=<?php echo $culture; ?>"aria-label="Precedent">
		<?php
			$svg = simplexml_load_file("svg/retour.svg");
			echo $svg->asXML();
		?>
		</a>
	</div>
	<div class="title-modif">
		<?php
			$svg = simplexml_load_file("svg/modif.svg");
			echo $svg->asXML();
		?>
		<svg width="280px" height="49.5px" viewBox="0 0 280 49.5" xml:space="preserve">
			<text transform="matrix(1 0 0 1 5.1123 40.75)" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" font-family='Baron_Neue' font-size="48">MODIFIER</text>
		</svg>
	</div>

	<form action='confirm_modif.php?constellation=<?php echo $constellation; ?>&amp;culture=<?php echo $culture; ?>' method="POST">

<?php

	// Récupération des données
	$sql = "SELECT * FROM `$table`
	INNER JOIN `carousel_trad` ON `id_carousel` = `trad_carousel` 
	INNER JOIN `culture_$culture` ON `id_carousel` = `".$culture."_carousel` 
	INNER JOIN `culture_".$culture."_trad` ON `id_culture_$culture` = `trad_culture_$culture`
	WHERE `carousel_trad`.`langue` = '$langue_bg' AND `culture_".$culture."_trad`.`langue` = '$langue_bg' 
	AND `nom_svg` = '$constellation' "; 
	
	$reponse = $connexion->requete($sql);
	$tableau = $connexion->retourne_tableau();

	echo "<div class='modifier-content'>";

	// Pour chaque ligne du tableau
	foreach ($tableau as $champ => $value) {
		echo "<h2 class='title-main'>Nom de la constellation : </h2>
				<textarea name='titre_exp_constellation'>".$connexion->secure_donnee($value['titre_exp_constellation'])."</textarea>";
		echo "<h2 class='content-main'>Explication générale : </h2>
				<textarea name='contenu_explication'>".$connexion->secure_donnee($value['contenu_explication'])."</textarea>";
		echo "<h2 class='title-legend'>Titre légende : </h2>
				<textarea name='titre_legende_$culture'>".$connexion->secure_donnee($value['titre_legende_'.$culture.''])."</textarea>";
		echo "<h2 class='content-legend'>Explication légende : </h2>
				<textarea name='contenu_legende_$culture'>".$connexion->secure_donnee($value['contenu_legende_'.$culture.''])."</textarea>";
	}

	echo "</div>";

?>

	<div class="submit">
		<input type="submit" value="" aria-label="Envoyer"/>
		<?php
			$svg = simplexml_load_file("svg/retour.svg");
			echo $svg->asXML();
		?>
	</div>

	</form>

	<script src="js/modif.js"></script>

<?php include "footer.php" ?>