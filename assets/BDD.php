<?php
	// Définition classe
	class BDD {
		// Définition des attributs de la classe
		private $connexion;
		private $base;
		private $serveur;
		private $user;
		// Attribut privé qui garde en mémoire la requête en cours
		private $requete_en_cours;
		private $requete;
		private $nom_champ;
		private $table;

	    // Crée la connexion et renvoie un lien vers celle-ci	
	    function __construct($base = "PT2015-2016_wielonsky", $serveur = "localhost", $user = "root", $mdp = "root") {
			// Sauvegarde des informations
			$this->base = $base;
			$this->serveur = $serveur;
			$this->user = $user;
			$this->mdp = $mdp;

			// Tentative de connexion au serveur
			$this->connexion = mysqli_connect($serveur, $user, $mdp);
			if($this->connexion === false) // Gestion de l'erreur de connexion
			{
				echo "<div class='info'><h3>Problème de connexion $this</h3></div>";
				return;
			}
			
			// Tentative de sélection de la base qui nous intéresse
			$base_en_cours = mysqli_select_db($this->connexion, $base);
			if($base_en_cours === false) // Gestion du select de la base
			{
				echo "<div class='info'><h3>Impossible de sélectionner la base $this</h3></div>";
				return;
			}

			// SECOND changement objet
			$this->requete("SET NAMES 'UTF8';");
			// On indique ainsi qu'il n'y a pas de requête en cours
			$this->requete_en_cours = false;

			// GESTION D'ERREUR
			try { 
			//cibler l'erreur : lors de la création de la connexion à la BDD
			$this->BDD = 
			new PDO('mysql:host-'.$this->serveur.'dbname-'.$this->base,$this->user,$this->mdp, 
				array(
					PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8',
					PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING
				));
					// le Errmode permet l'apparition des warnings
			} catch (PDOException $e) {
				die ("<div class='info'><h3>Impossible de se connecter à la base $base</h3></div>");
			}


		} 

		// Adaptation de la fonction requête à l'objet
		// Exécute la requête contenue dans $sql
		function requete($sql) {
			// Mémorisation de la requête
			$this->requete = $sql;
			// Exécution de la requête
			$this->requete_en_cours = mysqli_query($this->connexion, $sql);
			
			// Traîtement d'erreur
			if($this->requete_en_cours === false) { // Erreur lors de la requête
					echo "<div class='info'><h3>La requête $sql a échouée</h3></div>";
					return false;
			}
			return $this->requete_en_cours;
		}
		
		// Renvoie un tuple	de la requête en cours
		function retourne_ligne() {
			if($this->requete_en_cours === false) { // Pas de requête en cours
				echo "<div class='info'><h3>Il n'y a pas de requête en cours !</h3></div>";
				$ligne_en_cours = false;
			} else { // ligne_en_cours contient le tableau retourné par mysqli_fetch_assoc
				$ligne_en_cours = mysqli_fetch_assoc($this->requete_en_cours);
			}
			return $ligne_en_cours;
		}

		// Renvoie l'ensemble des tuples de la requête
		function retourne_tableau() {
			$tableau_ligne = array();
			while($nouvelle_ligne=$this->retourne_ligne()) {
				$tableau_ligne[] = $nouvelle_ligne;
			}
			return $tableau_ligne;
		}
		
		// Pour savoir si un champ est une clé primaire
		function est_cle_primaire($nom_champ) {
			// On sauvegarde le champ
			$this->nom_champ = $nom_champ;
			$pos = strpos($this->nom_champ, "id_");
			return ($pos==0) && ($pos !==false);
		}	

		// Pour récupérer la clé primaire d'une table
		function recuperer_cle_primaire($table) {
			// On sauvegarde la table
			$this->table = $table;
			$sql = "SHOW COLUMNS FROM `$table`";
			$reponse = $this->requete($sql);
			$tableau = $this->retourne_tableau();
			//Pour chaque ligne du tableau
			foreach ($tableau as $colonne) {
				if ($this->est_cle_primaire($colonne['Field']))
					return $colonne['Field'];
				}
			return false;
		}

		// Pour la sécurité des données transmises dans le formulaire de contact 
		// -> vu et emprunté sur le rapport portfolio de Julie Molla
		function secure_donnee($donnee) {
			$donnee=mysqli_real_escape_string($this->connexion,$donnee); // contre injection sql
			$donnee=htmlentities($donnee,ENT_QUOTES,"UTF-8", false); // contre failles XSS
			return $donnee;
		}

		// Fermeture automatique de connexion lors de la destruction de l'instance de BDD
		public function __destruct() {
			mysqli_close($this->connexion);
		}

		// On crée un afficheur
		public function __toString() {
		$ret = "<div class='info'><h3>";
		$ret .= "Vous êtes connecté sur $this->serveur en tant que $this->user<br/>\n";
		$ret .= "Vous travaillez avec la base $this->base<br/>\n";
		$ret .= "La requête en cours est : $this->requete<br/>\n";
		$ret .= "</h3></div>\n";
		
		return $ret;
		}
	
}

?>
