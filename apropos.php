			<div class="container-main">
				<div class="container-title">
					<?php
						Afficheur::AfficheSvg("radiantsky");									
					?>
				</div>
					<?php
						$sql = " SELECT * FROM `apropos_trad` WHERE `langue` = '$langue' "; 
					    $resultat_requete = $connexion->requete($sql);
					    $tableau_requete = $connexion->retourne_tableau();
						Afficheur::AfficheBloc($tableau_requete);
					?>
				<div class=container-sources >
					<h1>Sources</h1>
					<div>
						<?php 
							$sql = " SELECT * FROM `sources` 
							INNER JOIN `sources_trad` ON `id_sources` = `trad_sources`
							WHERE `langue` = '$langue' ";
							$resultat_requete = $connexion->requete($sql);
						    $tableau_requete = $connexion->retourne_tableau();
						    Afficheur::AfficheLiens($tableau_requete);
						?>
					</div>
				</div>
				<div class=container-credits >
					<h1>Crédits</h1>
					<div>
						<?php 
							$sql = " SELECT * FROM `credits` 
							INNER JOIN `credits_trad` ON `id_credits` = `trad_credits`
							WHERE `langue` = '$langue' ";
							$resultat_requete = $connexion->requete($sql);
						    $tableau_requete = $connexion->retourne_tableau();
						    Afficheur::AfficheLiens($tableau_requete);
						?>
					</div>
				</div>
					
				<?php	
					$sql = " SELECT * FROM `apropos` ORDER BY `id_apropos` "; 
				    $resultat_requete = $connexion->requete($sql);
				    $tableau_requete = $connexion->retourne_tableau();
					Afficheur::AfficheImage($tableau_requete);
				?>
