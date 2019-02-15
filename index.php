<?php
// Initialisations des sessions
include "assets/session.php";

// Chargement des fonctions utiles
include "assets/BDD.php";
// Chargement de la librairie des fonctions utiles
include "assets/afficheur.php";

// Recherche du contenu central de la page à afficher
include "assets/ousuisje.php";

// Fichier css de la page correspondante 
$stylesheet= $contenu;

// Création de la class BDD.php
$connexion = New BDD();

?>

<!doctype html>
<html class="no-js">

<?php

// Les header HTML 
include "header.php"; 

?>

<body class="animate-in">

	<div class="container">

<?php
				
	if ($contenu !== "home")
	// Chargement du menu 
	include "menu.php";

?>
	
		<section id="scene" class="scene">

<?php

	if ($contenu === "carousel")
		include "carousel_template.php";
	// Chargement de la page désirée (voir ousuisje.php)
	else 
		include $contenu.".php";

?>

		</section>

<?php
	
	if($contenu === "carousel")
		include "navunder.php";
	else if ($contenu === "games") 
		include "navgames.php";

?>

	</div>

<?php

	// Chargement des scripts 
	include "footer.php";
	
?>

</body>
</html>




