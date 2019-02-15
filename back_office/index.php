<?php 

	include "header.php"; 
	// Le verif LOGIN / MDP 
	include "login.php"; 

?>
	<link rel='stylesheet' href='style/index.css'>
		
		<title>Back Office</title>
	</head>

	<body class="animate-in">
	
		<div class="title-container">
			<svg width="370px" height="49.5px" viewBox="0 0 370 49.5" xml:space="preserve">
				<text transform="matrix(1 0 0 1 5.1123 40.75)" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" font-family='Baron_Neue' font-size="48">BACK-OFFICE</text>
			</svg>
		</div>

		<form class="deconnexion" method="post" action="index.php">
			<input type='submit' name='deco' value='' aria-label="Déconnexion" />
			<?php
				$svg = simplexml_load_file("svg/deco.svg");
				echo $svg->asXML();
			?>
		</form>

		<form class="culture" method='post' action='index.php'>
			<div class="grec<?php if ($culture == 'grec') echo ' grec-current'; ?>">
	            <input type='submit' name='grec' value='' aria-label="Culture Grec"/>
	            <?php
					$svg = simplexml_load_file("svg/grec.svg");
					echo $svg->asXML();
				?>
			</div>
			<div class="egypte<?php if ($culture == 'egypte') echo ' egypte-current'; ?>">
	            <input type='submit' name='egypte' value='' aria-label="Culture Egypte">
	            <?php
					$svg = simplexml_load_file("svg/egypte.svg");
					echo $svg->asXML();
				?>
			</div>
        </form>

        <form class="langue" method="post" action='index.php'>
        	<div class="current"><h3><?php if ($langue_bg == 'fr') echo "fr"; else echo "en"; ?></h3></div>
        	<input class="fr" type='submit' name='langue_bg' value='fr' aria-label='Français'>
        	<input class="en" type='submit' name='langue_bg' value='en' aria-label='Anglais'>
        </form>

		<h3 class="indication">Voici les constellations en ligne, clique dessus pour les modifier : </h3>

		<div class="container">
			<section id="scene" class="scene">

<?php 
	
	include "constellations_template.php";

?>
			</section>
		</div>

		
	<script src="../libs/parallax.js"></script>
	<script src="../libs/classie.js"></script>
	<script src="../libs/dynamics.min.js"></script>
	<script src="js/index.js"></script>

<?php include "footer.php" ?>

