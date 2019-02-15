<?php include "header.php"; ?>

		<link rel='stylesheet' href='style/modif.css'>

		<title>Back Office</title>
	</head>

	<body class="animate-in">
<?php

	// Le verif LOGIN / MDP
	include "login.php"; 
	$constellation = $_GET['constellation'];
	$culture = $_GET['culture'];

?>

	<!-- Bouton retour -->
	<div class="retour">
		<a href="signe.php?constellation=<?php echo $constellation; ?>&amp;culture=<?php echo $culture; ?>">
		<?php
			$svg = simplexml_load_file("svg/retour.svg");
			echo $svg->asXML();
		?>
		</a>
	</div>

<?php

	$erreur = false;

	$champs_requis = array("titre_exp_constellation", "contenu_explication", "titre_legende_$culture", 
		"contenu_legende_$culture");

	// Pour sécuriser les données qui rentrent dans la BDD 
	foreach ($champs_requis as $champs) {
		$post = $connexion->secure_donnee($_POST[$champs]);
	};
    
    // Pour aller chercher la clé primaire de la première table à éditer
    $sql = " SELECT * FROM `carousel` 
    INNER JOIN `carousel_trad` ON `id_carousel` = `trad_carousel`
    WHERE `nom_svg` = '$constellation' AND `langue` = '$langue_bg' ";

    $reponse = $connexion->requete($sql);
    $ligne = $connexion->retourne_ligne();
    $cle_primaire = $connexion->recuperer_cle_primaire('carousel_trad');
    $id = $ligne[$cle_primaire];

    // On actualise la base de donnée avec le nouveau nom de fichier 
    $sql = " UPDATE `carousel_trad` SET `titre_exp_constellation` = '".$_POST['titre_exp_constellation']."'
    , `contenu_explication` = '".$_POST['contenu_explication']."' WHERE `$cle_primaire` = $id; ";

    $requete = $connexion->requete($sql);
	if ($requete == false)
		$erreur = true;

    // Pour aller chercher la clé primaire de la seconde table à éditer
    $sql = " SELECT * FROM `carousel` 
    INNER JOIN `culture_$culture` ON `id_carousel` = `".$culture."_carousel`
	INNER JOIN `culture_".$culture."_trad` ON `id_culture_$culture` = `trad_culture_$culture`
	WHERE `langue` = '$langue_bg' AND `nom_svg` = '$constellation' "; 

    $reponse = $connexion->requete($sql);
    $ligne = $connexion->retourne_ligne();
    $cle_primaire = $connexion->recuperer_cle_primaire('culture_'.$culture.'_trad');
    $id = $ligne[$cle_primaire];

    // On actualise la base de donnée avec le nouveau nom de fichier 
    $sql = " UPDATE `culture_".$culture."_trad` SET `titre_legende_$culture` = '".$_POST['titre_legende_'.$culture]."'
    , `contenu_legende_$culture` = '".$_POST['contenu_legende_'.$culture]."' WHERE `$cle_primaire` = $id; ";

    $requete = $connexion->requete($sql);
	if ($requete == false)
		$erreur = true;

    if (!$erreur) 
    	echo "<div class='info'><h3>Modification effectuée !</h3></div>";

?>

<?php include "footer.php" ?>