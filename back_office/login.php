<?php

	// On restaure la variable login de session
	if(isset($_POST['deco'])) 
		unset($_SESSION['login']);

if(isset($_SESSION['login']))
	$checklogin = $_SESSION['login'];
else 
	$checklogin = false;

	$sql = " SELECT * FROM `admin` ";
	$reponse = $connexion->requete($sql);
	$tableau = $connexion->retourne_tableau();

	$login_true = $tableau[0]['login'];
	$mdp_true = $tableau[0]['mdp'];

	if(isset($_POST['valide'])) {

		if(isset($_POST['login']))      
			// On récupère dans la variable $login le post
			$login = $connexion->secure_donnee($_POST['login']); 
		if(isset($_POST['mdp']))		
			// Même chose pour le mot de passe
			// On crypte le mdp de la même manière que précédemment 
			$mdp = $connexion->secure_donnee($_POST['mdp']);	
			$mdp = sha1($mdp);

		if($login === $login_true && $mdp === $mdp_true) {    			
			// On teste les login/mdp insérés
			$checklogin = true;
			$_SESSION['login'] = true;
		} else if(isset($_POST['valide'])) {
			echo "<div class='info'><h3>Le login et/ou le mot de passe ne sont pas valides</h3></div>\n";
		}

	} 

	if(!$checklogin) {
?>	
	<link rel='stylesheet' href='style/login.css'>
	
		<title>Back Office</title>
	</head>

	<body class="animate-in">

		<div class="container">

			<section id="scene" class="scene">

				<div class="container-border">
				        <div class="screen-border screen-border-top"></div>
				        <div class="screen-border screen-border-left"></div>
				        <div class="screen-border screen-border-right"></div>
				        <div class="screen-border screen-border-bottom"></div>
				</div>

				<div class="bg_form">
					<div class="layer" data-depth="0.05">
						<img class="lustre" src="lustre.png" alt="lustre">
					</div>
					<?php
						$svg = simplexml_load_file("svg/bg_form.svg");
						echo $svg->asXML();
					?>
				</div>
				
				<div class="connexion-container">
					<form class="connexion" method='post' action='<?php echo $_SERVER['PHP_SELF']; ?>'>
						<label for='login'>identifiant :</label>
						<input type="text" name='login' id='login' placeholder="login" required autofocus 
						aria-label="Login" /><br/>
						<label for='mdp'>mot de passe :</label>
						<input type="password" name='mdp' id='mdp' placeholder="password" required 
						aria-label="Password"/><br/>
	                    <div class="button">
	                        <button class="button-submit" type="submit" name="valide" aria-label="Valider">
	                        	<?php
									$svg = simplexml_load_file("../svg/rocket.svg");
									echo $svg->asXML();							
								?>
	                        </button>
	                    </div>
					</form>
				</div>

				<div class="explication">Clique sur les étoiles <br/> pour les allumer et <br/> te connecter &nbsp;&nbsp;&#8594;</div>

			</section>

		</div>

	<script src="../libs/parallax.js"></script>
	<script src="js/login.js"></script>

	</body>
</html>

<?php
	exit(0);
	}
?>
