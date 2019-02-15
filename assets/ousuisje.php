<?php

$contenu = "home"; // Page par défaut

if((isset($_GET['menu'])) && (file_exists($_GET['menu'].".php") || file_exists($_GET['menu']."_template.php") )) { 
// On regarde si un page est demandée et on contrôle que la page demandée existe
	$contenu = $_GET['menu'];
 } else if(isset($_GET['menu'])) { 
// On indique poliment à l'utilisateur, dans un div dédié, que la page qu'il souhaite n'existe pas
	echo "<div class='info'><h3>Page indisponible !</h3></div>";
}
	
?>





