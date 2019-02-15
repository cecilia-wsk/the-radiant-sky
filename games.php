<?php
	// Pour récupérer la constellation donnée en random par javascript 
	$constellation = $_GET['constellation'];
?>
			<div class="slide">
				<div class="container-dessin-jeu">
					<div class="container-circle">
						<div class="layer" data-depth="0.05">
							<svg class="cercle_svg" width="700px" height="709.8px" viewBox="0 0 1006 1020" xml:space="preserve">
								<circle opacity="1" fill="#26368A" cx="493" cy="479.167" r="336.236"/>
							</svg>
						</div>
					</div>
					<div class="container-bgdots">
						<div class="layer" data-depth="0.02">
							<img src="images/bg_dots.png" alt="outter_shade">
						</div>
					</div>
					<div class="container-dessin <?php echo $constellation ?>">
						<div class="layer" data-depth="0.10">
							<img src="images/dessin_grec/<?php echo $constellation ?>.png" alt="dessin_<?php echo $constellation ?>">
						</div>
					</div>
					<div class="constellation">
						<?php
							Afficheur::AfficheSvg($constellation);					
						?>
					</div>
				</div>
					<div class="explication">
					<?php
						$sql = " SELECT * FROM `texte`
						INNER JOIN `texte_trad` ON `id_texte` = `trad_texte`
						WHERE `trad_texte` = 1 AND `langue` = '$langue' ";

					    $reponse = $connexion->requete($sql);
					    $ligne = $connexion->retourne_ligne();
					    
					    echo "<h3>".$ligne['designation']."</h3>";
					?>
					</div>
			</div>
			<div class="slide">
				<div class="container-circle-vignettes">
					<div class="layer" data-depth="0.05">
						<svg class="cercle_svg" width="600px" height="608.3px" viewBox="0 0 1006 1020" xml:space="preserve">
							<circle opacity="1" fill="#26368A" cx="493" cy="479.167" r="336.236"/>
						</svg>
					</div>
				</div>
				<?php 
					// Pour avoir une constellation random (sinon c'est trop facile)
					$sql = " SELECT * FROM `carousel` ";
					$resultat_requete = $connexion->requete($sql);
					$tableau = $connexion->retourne_tableau();
					$i = rand(0, count($tableau)-1);
					$constellation_vignette = $tableau[$i]['nom_svg'];
				?>
				<img class="atrouver" src="images/vignettes/<?php echo $constellation_vignette."/".$constellation_vignette; ?>.png" alt="dessin_<?php echo $constellation_vignette; ?>">
				<div class="container-bgdots">
					<div class="layer" data-depth="0.02">
						<img src="images/bg_dots.png" alt="outter_shade">
					</div>
				</div>
				<div class="container-vignettes">
					<?php
						$sql = " SELECT * FROM `carousel`
						INNER JOIN `jeu_vignette` ON `id_carousel` = `vignette_carousel`
						WHERE `nom_svg` = '$constellation_vignette' ORDER BY `index` "; 
					    $resultat_requete = $connexion->requete($sql);
					    $tableau_requete = $connexion->retourne_tableau();
						Afficheur::AfficheVignette($tableau_requete);
					?>
				</div>
				<div class="explication">
					<?php
						$sql = " SELECT * FROM `texte`
						INNER JOIN `texte_trad` ON `id_texte` = `trad_texte`
						WHERE `trad_texte` = 2 AND `langue` = '$langue' ";

					    $reponse = $connexion->requete($sql);
					    $ligne = $connexion->retourne_ligne();
					    
					    echo "<h3>".$ligne['designation']."</h3>";
					?>
				</div>
			</div>
			<!-- POUR LA VERSION SUIVANTE -->
			<div class="slide">
				<div class="container-main">
					<div class="container-left">
						<div class="container-circle-left">
							<div class="layer" data-depth="0.05">
								<svg class="cercle_svg-left" width="700px" height="709.8px" viewBox="0 0 1006 1020" xml:space="preserve">
									<circle opacity="1" fill="#26368A" cx="493" cy="479.167" r="336.236"/>
								</svg>
							</div>
						</div>
						<div class="container-bgdots-left">
							<div class="layer" data-depth="0.02">
								<img src="images/bg_dots.png" alt="outter_shade">
							</div>
						</div>
						<div class="constellation-left">
						<?php 
							// Pour avoir une constellation random (sinon c'est trop facile)
							$sql = " SELECT * FROM `carousel` ";
							$resultat_requete = $connexion->requete($sql);
							$tableau = $connexion->retourne_tableau();
							$i = rand(0, count($tableau)-1);
							$constellation_creation = $tableau[$i]['nom_svg'];
							Afficheur::AfficheSvg($constellation_creation);			
						?>	
						</div>
					</div>
					<div class="container-right">
						<h3 class="explication-right">Chacun ses mythes : à ton tour de donner une forme et une histoire aux étoiles que tu vois !</h3>
						<form class="form-right" method="post" action="#">
		                    <input type="text" id="titre" name="titre" data-saisie="false" required placeholder="Titre de ta constellation" />
		                    <textarea id="legende" name="legende" data-saisie="false" required placeholder="Sa légende"></textarea>
		                    <div class="button">
		                    <div class="explication-valide">Valide ta création et tu découvriras quelle constellation connue se cache sous ces étoiles.</div>
		                    <button type="reset" name="reset">Reset</button>
		                    <button type="submit" name="submit">Envoyer</button>
		                    </div>
	            		</form>
					</div>
				</div>
			</div>