<?php
// Initialisations des sessions
include "../assets/session.php";

// Chargement des fonctions utiles
include "../assets/BDD.php";
		
// Création de la connexion
$connexion = New BDD();
// Par défault
$langue_bg= 'fr';

// On restaure la langue de session
if (isset($_SESSION['langue_bg']))
    $langue_bg = $_SESSION['langue_bg'];

if(isset($_POST['langue_bg']))
    $langue_bg = $_POST['langue_bg'];

$_SESSION['langue_bg'] = $langue_bg;


// On restaure la culture de session
if (isset($_SESSION['culture']))
    $culture = $_SESSION['culture'];
else
	$culture = 'grec';

if(isset($_POST['grec']))
    $culture = 'grec';
else if (isset($_POST['egypte']))
    $culture = 'egypte';

$_SESSION['culture'] = $culture;

?>
<!doctype html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

		<script src="../libs/jquery.min.js"></script>

		<link rel='stylesheet' href='../style/reset.css'>
		<link rel='stylesheet' href='../style/general.css'>
		<!-- le reste varie en fonction de la page --> 

		