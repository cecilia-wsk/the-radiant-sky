<?php 

	include "header.php"; 
	// Le verif LOGIN / MDP
	include "login.php"; 

?>
	<link rel='stylesheet' href='style/signe.css'>

		<title>Back Office</title>
	</head>

	<body class="animate-in">

<?php
	// Le verif LOGIN / MDP
	include "login.php"; 

	$constellation = $_GET['constellation'];
	// Toujours la même table de départ 
	$table = 'carousel';
	$cle_primaire = $connexion->recuperer_cle_primaire( 'carousel' );
?>

	<!-- Bouton retour -->
	<div class="retour">
		<a href="index.php" aria-label="Precedent">
		<?php
			$svg = simplexml_load_file("svg/retour.svg");
			echo $svg->asXML();
		?>
		</a>
	</div>
	<!-- Formulaire choix culture -->
	<form class="culture" method='post' action='signe.php?constellation=<?php echo $constellation; ?>'>
		<div class="grec<?php if ($culture == 'grec') echo ' grec-current'; ?>">
            <input type='submit' name='grec' value='' aria-label="Culture Grec"/>
            <?php
				$svg = simplexml_load_file("svg/grec.svg");
				echo $svg->asXML();
			?>
		</div>
		<div class="egypte<?php if ($culture == 'egypte') echo ' egypte-current'; ?>">
            <input type='submit' name='egypte' value=''/ aria-label="Culture Egypte">
            <?php
				$svg = simplexml_load_file("svg/egypte.svg");
				echo $svg->asXML();
			?>
		</div>
    </form>

    <form class="langue" method="post" action='signe.php?constellation=<?php echo $constellation; ?>'>
    	<div class="current"><h3><?php if ($langue_bg == 'fr') echo "fr"; else echo "en"; ?></h3></div>
    	<input class="fr" type='submit' name='langue_bg' value='fr' aria-label='Français'>
    	<input class="en" type='submit' name='langue_bg' value='en' aria-label='Anglais'>
    </form>
	
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

?>
	<div class="container">

		<div class="constellation">
			<div class='container-circle'>
				<svg class='cercle_svg' width='1000px' height='1080px' viewBox='0 0 1006 1020' xml:space='preserve'>
					<circle opacity='1' fill='#26368A' cx='493' cy='479.167' r='1080'/>
				</svg>
			</div>				
			<div class="container-dessin">
			<?php
				foreach ($tableau as $signe) {
					echo "<img class='dessin' src='../".$signe['lien_image_'.$culture.'']."' alt='".$signe['alt_'.$culture.'']."' />";
				}
			?>
			</div>
			<div class="container-constellation">
			<?php
				$svg = simplexml_load_file("../svg/".$constellation.".svg");
				echo $svg->asXML();
			?>
			</div>
			<div class="box-image">
				<form enctype="multipart/form-data" action="upload.php?constellation=<?php echo $constellation; ?>&amp;culture=<?php echo $culture; ?>" method="post">
	    			<input type="hidden" name="MAX_FILE_SIZE" value="3000000" />
					<input class="input-file" id="file" type="file" name="userfile" aria-label="Upload image" />
					<label for="file">
					<?php
						$svg = simplexml_load_file("svg/upload.svg");
						echo $svg->asXML();
					?>
					<span>Changer le dessin...</span></label>
					<div class="submit">
	    				<input type="submit" name="envoi" value="" aria-label="Valider" />
	    				<?php
							$svg = simplexml_load_file("svg/retour.svg");
							echo $svg->asXML();
						?>
					</div>
				</form>
			</div>
		</div>
		<div class="content">
			<div class="details">
				<?php
					foreach ($tableau as $signe) {
						echo "<h1 class='title-main'>".$signe['titre_exp_constellation']."</h1>
						<div class='explication'>".$signe['contenu_explication']."</div> ";
						echo "<h2 class='title-legende'>".$signe['titre_legende_'.$culture.'']."</h2>
						<div class='content-legende'>".$signe['contenu_legende_'.$culture.'']."</div> ";
					}
				?>
			</div>
			<div class="box-content">
				<a href='modif.php?constellation=<?php echo $constellation; ?>&amp;culture=<?php echo $culture; ?>' aria-label="Modifier le contenu" >
					<?php
						$svg = simplexml_load_file("svg/modif.svg");
						echo $svg->asXML();
					?>
					<span>Changer le contenu...</span>
				</a>
			</div>
		</div> 

	</div>
	
	<script src="js/signe.js"></script>

<?php include "footer.php" ?>